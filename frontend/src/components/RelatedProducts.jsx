import { useContext, useMemo } from 'react'
import { ShopContext } from '../context/shop-context'
import Title from './Title'
import ProductItem from './ProductItem'

const getSubCategories = (value) => (
    Array.isArray(value) ? value : [value].filter(Boolean)
);

const CatalogSkeleton = ({ count = 4 }) => (
    <div className='mt-9 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5'>
        {Array.from({ length: count }).map((_, index) => (
            <div
                key={index}
                className='overflow-hidden rounded-md border border-[#e6e2dc] bg-white/80 shadow-[0_10px_30px_rgba(17,17,17,0.045)]'
                aria-hidden='true'
            >
                <div className='aspect-[3/4] animate-pulse bg-[linear-gradient(135deg,#f8f7f4_0%,#ede9e1_100%)]' />
                <div className='space-y-3 p-4'>
                    <div className='h-2 w-1/2 rounded-full bg-[#e6e2dc]' />
                    <div className='h-3 w-4/5 rounded-full bg-[#ded9d0]' />
                    <div className='h-3 w-1/3 rounded-full bg-[#e6e2dc]' />
                </div>
            </div>
        ))}
    </div>
);

const RelatedProducts = ({ category, subCategory }) => {

    const { products } = useContext(ShopContext);
    const related = useMemo(() => {
        if (!Array.isArray(products) || products.length === 0) return [];

        const selectedSubCategories = getSubCategories(subCategory);

        return products
            .filter((item) => item?.category === category)
            .filter((item) =>
                getSubCategories(item?.subCategory).some(
                    (productSubCategory) => selectedSubCategories.includes(productSubCategory)
                )
            )
            .slice(0, 5);
    }, [products, category, subCategory]
    );

    const renderEmptyState = () => (
        <div className='col-span-full border-y border-[#e3e0da] px-2 py-12 text-center sm:px-6 sm:py-14'>
            <p className='prata-regular text-2xl text-gray-950 sm:text-3xl'>No related pieces yet.</p>
            <p className='mx-auto mt-3 max-w-lg text-sm leading-6 text-gray-500'>
                Related recommendations will appear when matching pieces are available.
            </p>
            <CatalogSkeleton />
        </div>
    );

    return (
        <section className='my-20 sm:my-28'>
            <div className='mx-auto max-w-2xl text-center'>
                <Title text1={'RELATED'} text2={'PRODUCTS'} />
                <p className='mx-auto text-sm leading-7 text-gray-600'>
                    Considered alternatives with the same quiet refinement.
                </p>
            </div>

            <div className='mt-11 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-7 xl:grid-cols-5'>
                {related.length === 0 ? renderEmptyState() : related.map((item, index) => {
                    const product = item || {};

                    return (
                        <ProductItem
                            key={product._id || index}
                            id={product._id}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                            category={product.category}
                            subCategory={product.subCategory}
                            bestseller={product.bestseller}
                            bestSeller={product.bestSeller}
                            isNewArrival={product.isNewArrival}
                            newArrival={product.newArrival}
                            isNew={product.isNew}
                            isNewProduct={product.isNewProduct}
                            oldPrice={product.oldPrice}
                            originalPrice={product.originalPrice}
                            compareAtPrice={product.compareAtPrice}
                            onSale={product.onSale}
                            sale={product.sale}
                        />
                    );
                })}
            </div>
        </section>
    )
}

export default RelatedProducts
