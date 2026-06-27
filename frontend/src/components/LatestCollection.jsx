import { useContext, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/shop-context'
import Title from './Title'
import ProductItem from './ProductItem'

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
)

const LatestCollection = () => {

  const { products } = useContext(ShopContext);
  const latestProducts = useMemo(
    () => (Array.isArray(products) ? products.slice(0, 10) : []),
    [products]
  );

  const renderEmptyState = () => (
    <div className='col-span-full border-y border-[#e3e0da] px-2 py-12 text-center sm:px-6 sm:py-14'>
      <p className='prata-regular text-2xl text-gray-950 sm:text-3xl'>New pieces are being curated.</p>
      <p className='mx-auto mt-3 max-w-lg text-sm leading-6 text-gray-500'>
        Fresh CHASEMART arrivals will appear here as soon as the collection is available.
      </p>
      <CatalogSkeleton />
    </div>
  );

  return (
    <section className='border-t border-[#e3e0da] pt-10 sm:pt-12'>

      <div className='grid gap-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-end'>
        <div>
          <p className='mb-4 text-xs font-semibold uppercase text-[#b9975b]'>01 / Featured Collection</p>
          <Title text1={'LATEST'} text2={'COLLECTIONS'} />
        </div>

        <div className='md:justify-self-end md:text-right'>
          <p className='max-w-xl text-sm leading-7 text-gray-600 md:ml-auto'>
            Modern essentials, edited with a quiet luxury sensibility and arranged for discovery without noise.
          </p>
          <Link to='/collection' className='mt-5 inline-flex text-xs font-semibold uppercase text-gray-950 underline decoration-[#b9975b] underline-offset-8 transition-colors duration-200 hover:text-[#7d6335]'>
            View the full edit
          </Link>
        </div>
      </div>

      {/* Rendering Products */}
      <div className='mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-7 xl:grid-cols-5'>
        {latestProducts.length === 0 ? renderEmptyState() :
          latestProducts.map((item, index) => {
            const product = item || {};

            return (
              <ProductItem
                key={product._id || index}
                id={product._id}
                image={product.image}
                name={product.name}
                price={product.price}
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
          })
        }
      </div>

    </section>
  )
}

export default LatestCollection
