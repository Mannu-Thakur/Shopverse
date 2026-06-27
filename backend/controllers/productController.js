import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";
import path from "path";
import fs from "fs";

const normalizeProduct = (product) => {
    if (!product) {
        return product;
    }

    const productObject = product.toObject ? product.toObject() : product;
    const bestseller = productObject.bestseller ?? productObject.bestSeller ?? false;

    return {
        ...productObject,
        bestseller,
        bestSeller: bestseller
    };
};

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

        const images = [image1, image2, image3, image4]
            .filter((item) => item !== undefined);

  let imagesUrl = [];

if (
    process.env.NODE_ENV === "production" ||
    process.env.USE_CLOUDINARY === "true"
) {

    imagesUrl = await Promise.all(
        images.map(async (item) => {
            try {

                console.log("Uploading:", item.path);
                console.log("Cloud Name:", process.env.CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_NAME);
                console.log("Node Env:", process.env.NODE_ENV);

                const absolutePath = path.resolve(item.path);

                console.log("Path:", item.path);
                console.log("Absolute Path:", absolutePath);
                console.log("Exists:", fs.existsSync(absolutePath));

                const stats = fs.statSync(absolutePath);

                console.log("Size:", stats.size);
                console.log("Extension:", path.extname(absolutePath));

                const result = await cloudinary.uploader.upload(
                    absolutePath,
                    {
                        resource_type: "image",
                    }
                );

                console.log("SUCCESS:", result.secure_url);

                return result.secure_url;

            } catch (err) {

                console.log("========== CLOUDINARY ERROR ==========");
                console.dir(err, { depth: null });
                console.log("MESSAGE:", err.message);
                console.log("HTTP:", err.http_code);

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

const isBestseller = bestseller === "true" || bestseller === true;

const productData = {
    name,
    description,
    category,
    price: Number(price),
    subCategory,
    bestseller: isBestseller,
    bestSeller: isBestseller,
    sizes: JSON.parse(sizes),
    image: imagesUrl,
    date: Date.now()
};

console.log(productData);

const product = new productModel(productData);
await product.save();

res.json({
    success: true,
    message: "Product Added"
});


// function for list product
const listProducts = async (req, res) => {
    try {

        const products = (await productModel.find({})).map(normalizeProduct);

        res.json({
            success: true,
            products
        });

    } catch (error) {

        console.log("========== ERROR ==========");
        console.log(error);
        console.log("MESSAGE:", error.message);

        if (error.response) {
            console.log("RESPONSE:", error.response);
        }

        if (error.http_code) {
            console.log("HTTP:", error.http_code);
        }

        console.log("==========================");

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// function for removing product
const removeProduct = async (req, res) => {
    try {

        await productModel.findByIdAndDelete(req.body.id);

        res.json({
            success: true,
            message: "Product Removed"
        });

    } catch (error) {

        console.log("========== ERROR ==========");
        console.log(error);
        console.log("MESSAGE:", error.message);

        if (error.response) {
            console.log("RESPONSE:", error.response);
        }

        if (error.http_code) {
            console.log("HTTP:", error.http_code);
        }

        console.log("==========================");

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// function for single product info
const singleProduct = async (req, res) => {
    try {

        const { productId } = req.body;

        const product = normalizeProduct(
            await productModel.findById(productId)
        );

        res.json({
            success: true,
            product
        });

    } catch (error) {

        console.log("========== ERROR ==========");
        console.log(error);
        console.log("MESSAGE:", error.message);

        if (error.response) {
            console.log("RESPONSE:", error.response);
        }

        if (error.http_code) {
            console.log("HTTP:", error.http_code);
        }

        console.log("==========================");

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export {
    addProduct,
    listProducts,
    removeProduct,
    singleProduct
};