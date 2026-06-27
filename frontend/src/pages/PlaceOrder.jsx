import { useState, useContext } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/shop-context'
import axios from 'axios'
import { toast } from 'react-toastify'

const PlaceOrder = () => {

  const [method, setMethod] = useState('cod')
    const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);


  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
});

const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData(data => ({
        ...data,
        [name]: value
    }));
};


const initPay = (order) => {

     const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: 'Order Payment',
        description: 'Order Payment',
        order_id: order.id,
        receipt: order.receipt,

        handler: async (response) => {

            console.log(response)

            try {

                const { data } = await axios.post(
                    backendUrl + '/api/order/verifyRazorpay',
                    response,
                    { headers: { token } }
                )

                if (data.success) {
                    navigate('/orders')
                    setCartItems({})
                }

            } catch (error) {

                console.log(error)
                toast.error(error.response?.data?.message || error.message)

            }

        }

    }

    const rzp = new window.Razorpay(options)
    rzp.open()

}


 const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
        let orderItems = [];

        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                if (cartItems[items][item] > 0) {

                    const itemInfo = structuredClone(
                        products.find(product => product._id === items)
                    );

                    if (itemInfo) {
                        itemInfo.size = item;
                        itemInfo.quantity = cartItems[items][item];
                        orderItems.push(itemInfo);
                    }
                }
            }
        }

     let orderData = {
          address: formData,
          items: orderItems,
          amount: getCartAmount() + delivery_fee
      }

          switch (method) {

              // API Calls for COD
              case 'cod': {
                  const response = await axios.post(
                      backendUrl + '/api/order/place',
                      orderData,
                      { headers: { token } }
                  )

                  if (response.data.success) {
                      setCartItems({})
                      navigate('/orders')
                  } else {
                      toast.error(response.data.message)
                  }
                  break;
              }


              case 'stripe': {

                  const responseStripe = await axios.post(
                      backendUrl + '/api/order/stripe',
                      orderData,
                      { headers: { token } }
                  );
                  if (responseStripe.data.success) {
                      const { session_url } = responseStripe.data;
                      window.location.replace(session_url);
                  } else {
                      toast.error(responseStripe.data.message);
                  }
                  break;
              }

             case 'razorpay': {

                const responseRazorpay = await axios.post(
                    backendUrl + '/api/order/razorpay',
                    orderData,
                    { headers: { token } }
                )

                if (responseRazorpay.data.success) {
                    initPay(responseRazorpay.data.order)
                }

                break;
             }

              default:
                  break;
          }

    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message || error.message)
    }
}

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col lg:flex-row justify-between gap-12 pt-8 sm:pt-14 min-h-[80vh] border-t border-[#e3e0da]'>

      {/*----left side------------------- */}
      <div className='flex flex-col gap-4 w-full lg:max-w-[480px]'>

        <div className='text-xl sm:text-2xl mb-4'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>

        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name="firstName" value={formData.firstName} className='az-input' type="text" placeholder='First name' />
          <input required onChange={onChangeHandler} name="lastName" value={formData.lastName} className='az-input' type="text" placeholder='Last name' />
        </div>

        <input required onChange={onChangeHandler} name="email" value={formData.email} className='az-input' type="email" placeholder='Email address' />

        <input required onChange={onChangeHandler} name="street" value={formData.street} className='az-input' type="text" placeholder='Street' />

        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name="city" value={formData.city} className='az-input' type="text" placeholder='City' />
          <input required onChange={onChangeHandler} name="state" value={formData.state} className='az-input' type="text" placeholder='State' />
        </div>

        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name="zipcode" value={formData.zipcode} className='az-input' type="number" placeholder='Zipcode' />
          <input required onChange={onChangeHandler} name="country" value={formData.country} className='az-input' type="text" placeholder='Country' />
        </div>

        <input required onChange={onChangeHandler} name="phone" value={formData.phone} className='az-input' type="number" placeholder='Phone' />
      </div>

      {/*-----right side---------- */}
      <div className='flex-1 lg:max-w-[500px]'>

        <div className='az-panel p-6 sm:p-8 bg-white'>
          <CartTotal />
        </div>

        <div className='mt-12'>
          <div className='mb-6'>
            <Title text1={'PAYMENT'} text2={'METHOD'} />
          </div>

          {/*payment method selection--------------- */}
          <div className='flex gap-3 flex-col sm:flex-row lg:flex-col xl:flex-row'>

            <div onClick={() => setMethod('stripe')} className={`az-payment-method flex-1 ${method === 'stripe' ? 'active' : ''}`}>
              <div className='az-radio-dot' />
              <img className='h-4' src={assets.stripe_logo} alt="Stripe" />
            </div>

            <div onClick={() => setMethod('razorpay')} className={`az-payment-method flex-1 ${method === 'razorpay' ? 'active' : ''}`}>
              <div className='az-radio-dot' />
              <img className='h-4' src={assets.razorpay_logo} alt="Razorpay" />
            </div>

            <div onClick={() => setMethod('cod')} className={`az-payment-method flex-1 ${method === 'cod' ? 'active' : ''}`}>
              <div className='az-radio-dot' />
              <span className='text-gray-700 text-xs font-semibold tracking-wider uppercase'>Cash on Delivery</span>
            </div>

          </div>

          <div className='w-full text-end mt-10'>
            <button type='submit' className='az-primary-button w-full sm:w-auto px-16 py-4 tracking-wider text-xs font-semibold uppercase'>
              PLACE ORDER
            </button>
          </div>

        </div>

      </div>

    </form>
  )
}

export default PlaceOrder
