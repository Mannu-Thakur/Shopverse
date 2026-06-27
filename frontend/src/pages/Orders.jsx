import { useCallback, useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/shop-context'
import Title from '../components/Title'
import axios from 'axios'

const Orders = () => {

const { backendUrl, token, currency } = useContext(ShopContext);

const [orderData, setOrderData] = useState([]);

const loadOrderData = useCallback(async () => {
    try {

        if (!token) {
            return null;
        }

        const response = await axios.post(
            backendUrl + '/api/order/userorders',
            {},
            { headers: { token } }
        );

        if (response.data.success) {

              let allOrdersItem = [];

              response.data.orders.map((order) => {
                  order.items.map((item) => {

                      allOrdersItem.push({
                        ...item,
                        status: order.status,
                        payment: order.payment,
                        paymentMethod: order.paymentMethod,
                        date: order.date
                      });
                  });
              });

              setOrderData(allOrdersItem.reverse());
           }
 
    } catch (error) {
        console.log(error);
    }
}, [backendUrl, token]);

useEffect(() => {
    loadOrderData();
}, [loadOrderData]);

  return (
    <div className='border-t pt-16'>

      <div className='text-2xl mb-4'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div className='flex flex-col gap-4 mt-6'>
        {
          orderData.map((item, index) => (
            <div
              key={index}
              className='az-panel p-5 bg-white text-gray-800 flex flex-col md:flex-row md:items-center md:justify-between gap-6 hover:shadow-sm transition-all duration-200'
            >

              <div className='flex items-start gap-4 sm:gap-6 text-sm flex-1'>
                <img className='w-16 sm:w-20 rounded-md border border-[#e3e0da] bg-[#f4f4f1]' src={item.image[0]} alt="" />

                <div className='flex-1 min-w-0'>
                  <p className='sm:text-base font-semibold text-gray-950 truncate'>{item.name}</p>

                  <div className='flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs sm:text-sm text-gray-600'>
                    <p className='font-semibold text-gray-900'>{currency}{item.price}</p>
                    <p>Qty: <span className='font-medium text-gray-900'>{item.quantity}</span></p>
                    <p>Size: <span className='font-medium text-gray-900 uppercase'>{item.size}</span></p>
                  </div>

                  <p className='mt-2.5 text-xs text-gray-500 font-medium'>
                    Ordered: <span className='text-gray-700'>{new Date(item.date).toDateString()}</span>
                  </p>

                  <p className='mt-1 text-xs text-gray-500 font-medium'>
                    Payment: <span className={`uppercase font-semibold tracking-wider text-[10px] ${item.payment ? 'text-green-600' : 'text-amber-600'}`}>{item.payment ? 'Paid' : 'Pending'}</span>
                  </p>
                </div>
              </div>

              <div className='md:w-1/2 flex flex-row items-center justify-between md:justify-end gap-6 border-t md:border-t-0 pt-4 md:pt-0'>
                <div className='flex items-center gap-2.5'>
                  <span className={`w-2.5 h-2.5 rounded-full ${item.status === 'Delivered' ? 'bg-green-500' : 'bg-amber-500'}`} />
                  <p className='text-xs sm:text-sm font-semibold tracking-wide text-gray-850 uppercase'>{item.status}</p>
                </div>

                <button onClick={loadOrderData} className='az-secondary-button py-2.5 px-5 text-xs tracking-wider font-semibold border-[#e3e0da] bg-white'>
                  Track Order
                </button>
              </div>

            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Orders
