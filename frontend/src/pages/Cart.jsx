import { useContext, useMemo } from 'react'
import { ShopContext } from '../context/shop-context'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import CartTotal from '../components/CartTotal'

const Cart = () => {

  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext)
  const cartData = useMemo(() => {
    if (products.length === 0) {
      return [];
    }

    const tempData = [];

    for (const items in cartItems) {

      for (const item in cartItems[items]) {

        if (cartItems[items][item] > 0) {

          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          })

        }

      }

    }

    return tempData;
  }, [cartItems, products])

  return (
    <div className='border-t pt-14'>

      <div className='text-2xl mb-6'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      <div className='flex flex-col border-t border-[#e3e0da]'>
        {
          cartData.map((item, index) => {

            const productData = products.find((product) => product._id === item._id)

            return (
              <div key={index} className='py-5 border-b border-[#e3e0da] text-gray-800 grid grid-cols-[4fr_1fr_0.5fr] sm:grid-cols-[4fr_1.5fr_0.5fr] items-center gap-4 hover:bg-[#fbfbfa]/50 transition-colors duration-150'>

                <div className='flex items-start gap-4 sm:gap-6'>
                  <img className='w-16 sm:w-20 rounded-md border border-[#e3e0da] bg-white' src={productData.image[0]} alt="" />

                  <div>
                    <p className='text-sm sm:text-base font-semibold text-gray-950'>{productData.name}</p>

                    <div className='flex items-center gap-4 mt-2.5 text-xs sm:text-sm'>
                      <p className='font-medium text-gray-900'>{currency}{productData.price}</p>
                      <p className='px-2.5 py-0.5 border border-[#e3e0da] rounded bg-white text-[10px] sm:text-xs font-semibold tracking-wider text-gray-600 uppercase'>{item.size}</p>
                    </div>
                  </div>
                </div>

                <div className='flex justify-center'>
                  <input
                    onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))}
                    className='border border-[#e3e0da] rounded-sm max-w-12 sm:max-w-16 px-2 py-1 text-center font-semibold text-xs sm:text-sm bg-white focus:outline-none focus:border-black focus:ring-1 focus:ring-black'
                    type="number"
                    min={1}
                    defaultValue={item.quantity}
                  />
                </div>

                <div className='flex justify-end pr-2 sm:pr-4'>
                  <button
                    onClick={() => updateQuantity(item._id, item.size, 0)}
                    className='az-icon-button h-8 w-8 text-gray-500 hover:text-[#b9975b]'
                    aria-label='Remove item'
                    type='button'
                  >
                    <img className='w-3.5 sm:w-4' src={assets.bin_icon} alt="" />
                  </button>
                </div>

              </div>
            )

          })
        }
      </div>
      <div className='flex justify-end my-16'>
        <div className='w-full sm:w-[450px] az-panel p-6 sm:p-8 bg-white'>
          <CartTotal />
          <div className='w-full text-end mt-8'>
            <button onClick={() => navigate('/place-order')} className='az-primary-button w-full py-4 tracking-wider text-xs font-semibold uppercase'> PROCEED TO CHECKOUT </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart
