import { useContext } from 'react'
import { ShopContext } from '../context/shop-context'
import Title from './Title'

const CartTotal = () => {

    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

    return (
        <div className='w-full'>
            <div className='text-lg mb-4'>
                <Title text1={'CART'} text2={'TOTALS'} />
            </div>

            <div className='flex flex-col gap-3 mt-4 text-sm'>
                <div className='flex justify-between text-gray-600'>
                    <p>Subtotal</p>
                    <p className='font-semibold text-gray-900'>{currency}{getCartAmount().toLocaleString()}.00</p>
                </div>

                <hr className='border-[#e3e0da]' />

                <div className='flex justify-between text-gray-600'>
                    <p>Shipping Fee</p>
                    <p className='font-semibold text-gray-900'>{currency}{delivery_fee}.00</p>
                </div>

                <hr className='border-[#e3e0da]' />

                <div className='flex justify-between text-base pt-1'>
                    <b className='text-gray-950 font-semibold'>Total</b>
                    <b className='text-gray-950 font-bold'>{currency}{(getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee).toLocaleString()}.00</b>
                </div>
            </div>
        </div>
    )
}

export default CartTotal
