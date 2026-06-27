import { useContext, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/shop-context'
import { assets } from '../assets/assets'
import RelatedProducts from '../components/RelatedProducts'

const Product = () => {

  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const productData = useMemo(
    () => products.find((product) => product._id === productId) || null,
    [productId, products]
  );
  const [selectedImage, setSelectedImage] = useState('');
  const [size, setSize] = useState('');
  const image = productData?.image?.includes(selectedImage)
    ? selectedImage
    : productData?.image?.[0];

  return productData ? (
    <div className='border-t border-[#e3e0da] pt-10 transition-opacity ease-in duration-500 opacity-100'>

      {/* ---------- Product Data ---------- */}
      <div className='flex gap-10 sm:gap-12 flex-col lg:flex-row'>

        {/* ---------- Product Images ---------- */}
        <div className='flex-1 flex flex-col-reverse gap-4 lg:flex-row'>

          <div className='flex lg:flex-col overflow-x-auto lg:overflow-y-auto justify-between lg:justify-normal lg:w-[20%] w-full gap-2 lg:max-h-[500px]'>
            {
              productData.image.map((item, index) => (
                <img
                  onClick={() => setSelectedImage(item)}
                  src={item}
                  key={index}
                  className={`w-[22%] lg:w-full flex-shrink-0 cursor-pointer border rounded transition-all duration-200 ${item === image ? 'border-black' : 'border-[#e3e0da] hover:border-gray-900'}`}
                  alt=""
                />
              ))
            }
          </div>

          <div className='w-full lg:w-[80%] overflow-hidden rounded-md border border-[#e3e0da] bg-[#f4f4f1] shadow-[0_8px_24px_rgba(17,17,17,0.04)]'>
            <img
              className='w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.03]' src={image} alt=""/>
          </div>

        </div>

        {/* ---------- Product Info ---------- */}
        <div className='flex-1 flex flex-col justify-center lg:pl-4'>

          <h1 className='prata-regular text-3xl text-gray-950 mt-2 leading-tight'>
            {productData.name}
          </h1>

          <div className='flex items-center gap-1.5 mt-3'>
            <div className='flex gap-0.5'>
              <img src={assets.star_icon} alt="" className='w-3.5' />
              <img src={assets.star_icon} alt="" className='w-3.5' />
              <img src={assets.star_icon} alt="" className='w-3.5' />
              <img src={assets.star_icon} alt="" className='w-3.5' />
              <img src={assets.star_dull_icon} alt="" className='w-3.5' />
            </div>
            <p className='text-xs text-gray-500 font-medium ml-2'>(122 reviews)</p>
          </div>

          <p className='mt-6 text-3xl font-light text-gray-900'>{currency}{productData.price}</p>
          <p className='mt-5 text-sm leading-7 text-gray-600 md:w-11/12'>{productData.description}</p>

          <div className='flex flex-col gap-3 my-8'>
              <p className='text-xs font-semibold uppercase tracking-[0.14em] text-gray-900'>Select Size</p>
              <div className='flex gap-2.5'>
              {productData.sizes.map((item, index)=>(
                <button
                  type="button"
                  onClick={()=>setSize(item)}
                  className={`transition-all duration-200 border rounded-sm font-semibold px-5 py-2.5 text-xs tracking-wider ${item === size ? 'bg-black text-white border-black shadow-sm' : 'bg-white border-[#e3e0da] text-gray-700 hover:border-gray-950 hover:bg-gray-50'}`}
                  key={index}
                >
                  {item}
                </button>
              ))}
              </div>
          </div>

          <div className='flex flex-col sm:flex-row gap-4 items-stretch'>
            <button
              onClick={()=>(addToCart(productData._id, size))}
              className='az-primary-button min-h-[50px] px-12 py-3 text-xs tracking-[0.16em]'
            >
              ADD TO CART
            </button>
          </div>

          <hr className='mt-8 border-[#e3e0da] w-full'/> 

          <div className='text-xs text-gray-500 mt-6 flex flex-col gap-2.5 font-medium'>
            <div className='flex items-center gap-2'>
              <div className='w-1.5 h-1.5 rounded-full bg-[#b9975b]' />
              <p>100% Original product.</p>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-1.5 h-1.5 rounded-full bg-[#b9975b]' />
              <p>Cash on delivery is available on this product.</p>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-1.5 h-1.5 rounded-full bg-[#b9975b]' />
              <p>Easy return and exchange policy within 7 days.</p>
            </div>
          </div>

        </div>

      </div>

      {/*-----------Description & Review section------------ */}

      <div className='mt-20'>
        <div className='flex border-b border-[#e3e0da]'>
          <button className='border-b-2 border-black px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-gray-950 bg-transparent' type='button'>
            Description
          </button>
          <button className='px-6 py-3.5 text-xs font-medium uppercase tracking-[0.14em] text-gray-500 hover:text-black bg-transparent' type='button'>
            Reviews (122)
          </button>
        </div>

        <div className='flex flex-col gap-5 py-8 text-sm leading-7 text-gray-600'>
          <p>
            Crafted from premium-quality fabric, this piece offers exceptional comfort
            and durability for everyday wear. Its modern fit and breathable material make
            it suitable for both casual outings and formal occasions.
          </p>

          <p>
            Designed with attention to detail, it features a soft texture, long-lasting
            stitching, and a stylish look that complements any wardrobe. Available in
            multiple sizes to ensure the perfect fit.
          </p>
        </div>

      </div>

      {/*Display related products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : (
    <div className='opacity-0'></div>
  );

}

export default Product
