import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../config'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const Orders = ({ token }) => {

  const [orders, setOrders] = useState([])

  const fetchAllOrders = useCallback(async () => {

    if (!token) {
      return null
    }

    try {

      const response = await axios.post(
        backendUrl + '/api/order/list',
        {},
        { headers: { token } }
      )
 
      if (response.data.success) {
        setOrders(response.data.orders.reverse())
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      toast.error(error.response?.data?.message || error.message)
    }
  }, [token])

  const statusHandler = async (event, orderId) => {
    try {

        const response = await axios.post(
            backendUrl + '/api/order/status',
            {
                orderId,
                status: event.target.value
            },
            {
                headers: { token }
            }
        );

        if (response.data.success) {
            await fetchAllOrders();
        }

    } catch (error) {

        console.log(error);

        toast.error(error.response?.data?.message || error.message);
    }
}

  useEffect(() => {
    fetchAllOrders()
  }, [fetchAllOrders])

  return (
    <div className='bg-white p-6 sm:p-8 rounded-lg border border-[#e5e7eb] shadow-sm w-full'>
      <h2 className='text-lg font-semibold tracking-wide text-gray-900 border-b border-[#e5e7eb] pb-3 mb-6'>Manage Orders</h2>

      <div className='flex flex-col gap-4'>
        {
          orders.map((order, index) => (

            <div
              key={index}
              className='grid grid-cols-1 md:grid-cols-[0.5fr_2fr_1fr_1fr_1.2fr] gap-6 items-start border border-[#e5e7eb] p-5 sm:p-6 rounded-md hover:shadow-sm transition-shadow duration-150 text-xs sm:text-sm text-gray-700 bg-white'
            >

              <div className='flex justify-center md:justify-start pt-1'>
                <img className='w-10 h-10 object-contain opacity-75' src={assets.parcel_icon} alt="Parcel" />
              </div>

              <div>
                <div className='bg-[#f9fafb] p-3 rounded border border-[#e5e7eb] mb-3'>
                  {
                    order.items.map((item, index) => (
                      <p className='py-1 font-medium text-gray-900' key={index}>
                        {item.name} <span className='text-xs text-gray-500 font-normal'>x {item.quantity}</span>
                        <span className='ml-2 text-[10px] font-bold tracking-wider uppercase bg-white border border-[#e5e7eb] px-1.5 py-0.5 rounded text-gray-600'>{item.size}</span>
                      </p>
                    ))
                  }
                </div>

                <p className='font-semibold text-gray-900 text-sm'>
                  {order.address.firstName + " " + order.address.lastName}
                </p>

                <div className='text-xs text-gray-500 mt-1.5 leading-relaxed'>
                  <p>{order.address.street}</p>
                  <p>
                    {order.address.city + ", " +
                      order.address.state + ", " +
                      order.address.country + " - " + order.address.zipcode}
                  </p>
                  <p className='mt-1 text-gray-700 font-medium'>{order.address.phone}</p>
                </div>

              </div>

              <div className='text-xs flex flex-col gap-1'>
                <p className='font-semibold text-gray-900'>
                  Items : {order.items.reduce((total, item) => total + item.quantity, 0)}
                </p>

                <p className='mt-2'>
                  Method : <span className='font-medium text-gray-900 uppercase'>{order.paymentMethod}</span>
                </p>

                <p>
                  Payment : <span className={`font-semibold ${order.payment ? 'text-green-600' : 'text-amber-600'}`}>{order.payment ? 'Done' : 'Pending'}</span>
                </p>

                <p>
                  Date : <span className='text-gray-500'>{new Date(order.date).toLocaleDateString()}</span>
                </p>
              </div>

              <div className='text-sm sm:text-base font-bold text-gray-950 md:text-right pt-1'>
                ${order.amount}
              </div>

              <div className='pt-1'>
                <select 
                  onChange={(event) => statusHandler(event, order._id)} value={order.status}
                  className='w-full text-xs font-semibold py-2 px-2.5 bg-white border border-[#e5e7eb]'
                >
                  <option value="Order Placed">Order Placed</option>
                  <option value="Packing">Packing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Out for delivery">Out for delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders
