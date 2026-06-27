// function for add product
const addProduct = async (req, res) => {
    try {

        const {
            name,
            description,
            price,
            category,
            subCategory,
            sizes,
            bestseller
        } = req.body;

        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        const images = [image1, image2, image3, image4].filter(Boolean);

        let imagesUrl = [];

        if (
            process.env.NODE_ENV === "production" ||
            process.env.USE_CLOUDINARY === "true"
        ) {

            imagesUrl = await Promise.all(
                images.map(async (item) => {
                    try {

                        console.log("================================");
                        console.log("Uploading:", item.path);
                        console.log("Cloud Name:", process.env.CLOUDINARY_NAME);
                        console.log("Node Env:", process.env.NODE_ENV);

                        const result = await cloudinary.uploader.upload(
                            item.path,
                            {
                                resource_type: "image",
                            }
                        );

                        console.log("SUCCESS:", result.secure_url);
                        console.log("================================");

                        return result.secure_url;

                    } catch (err) {

                        console.log("========== CLOUDINARY ERROR ==========");
                        console.log(err);
                        console.log("MESSAGE:", err.message);
                        console.log("HTTP CODE:", err.http_code);

                        if (err.response) {
                            console.log("RESPONSE:", err.response);
                        }

                        console.log("======================================");

                        throw err;
                    }
                })
            );

        } else {

            const backendUrl = "http://localhost:4000";

            imagesUrl = images.map(
                (item) => `${backendUrl}/uploads/${item.filename}`
            );

        }

        const isBestseller =
            bestseller === true || bestseller === "true";

        const productData = {
            name,
            description,
            category,
            subCategory,
            price: Number(price),
            bestseller: isBestseller,
            bestSeller: isBestseller,
            sizes: JSON.parse(sizes),
            image: imagesUrl,
            date: Date.now(),
        };

        console.log("PRODUCT DATA:");
        console.log(productData);

        const product = new productModel(productData);

        await product.save();

        res.json({
            success: true,
            message: "Product Added",
        });

    } catch (error) {

        console.log("========== ERROR ==========");
        console.log(error);
        console.log("MESSAGE:", error.message);

        if (error.response) {
            console.log("RESPONSE:", error.response);
        }

        if (error.http_code) {
            console.log("HTTP CODE:", error.http_code);
        }

        console.log("===========================");

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};