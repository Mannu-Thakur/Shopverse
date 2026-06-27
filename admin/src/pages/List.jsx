import axios from 'axios'
import { useEffect, useState } from 'react'
import { backendUrl, currency } from '../config'
import { toast } from 'react-toastify'

const List = ({ token }) => {

  const [list, setList] = useState([])

  const fetchList = async () => {
    try {

      const response = await axios.get(backendUrl + '/api/product/list')

      if (response.data.success) {
        setList(response.data.products)
      }
      else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message || error.message)
    }
  }

  const removeProduct = async (id) => {

    try {

      const response = await axios.post(
        backendUrl + '/api/product/remove',
        { id },
        { headers: { token } }
      )

      if (response.data.success) {
        toast.success(response.data.message)
        await fetchList()
      }
      else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message || error.message)
    }

  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <div className='bg-white p-6 sm:p-8 rounded-lg border border-[#e5e7eb] shadow-sm w-full'>
      <h2 className='text-lg font-semibold tracking-wide text-gray-900 border-b border-[#e5e7eb] pb-3 mb-6'>All Products List</h2>

      <div className='flex flex-col'>

        {/* -------- List Table Title -------- */}

        <div className='hidden md:grid grid-cols-[1fr_3.5fr_1.5fr_1.2fr_1fr] items-center py-3.5 px-4 border-b border-[#e5e7eb] text-xs font-bold uppercase tracking-wider text-gray-700 bg-[#f9fafb] rounded-t-md'>
          <span>Image</span>
          <span>Name</span>
          <span>Category</span>
          <span>Price</span>
          <span className='text-center'>Action</span>
        </div>

        {/* ---------- Product List ---------- */}

        <div className='divide-y divide-[#e5e7eb] border-x border-b border-[#e5e7eb] rounded-b-md'>
          {
            list.map((item, index) => (

              <div
                className='grid grid-cols-[1.2fr_3fr_1.2fr] md:grid-cols-[1fr_3.5fr_1.5fr_1.2fr_1fr] items-center gap-4 py-3.5 px-4 text-sm text-gray-700 hover:bg-[#f9fafb] transition-colors duration-150'
                key={index}
              >

                <img
                  className='w-12 h-12 object-cover rounded border border-[#e5e7eb] bg-[#f9fafb]'
                  src={item.image[0]}
                  alt=""
                />

                <p className='font-medium text-gray-900'>{item.name}</p>

                <p className='text-gray-500'>{item.category}</p>

                <p className='font-semibold text-gray-950'>{currency}{item.price}</p>

                <div className='text-right md:text-center'>
                  <button
                    onClick={() => removeProduct(item._id)}
                    className='w-8 h-8 rounded-full border border-transparent hover:border-[#e5e7eb] hover:bg-gray-50 text-red-500 hover:text-red-700 transition-all duration-150 inline-flex items-center justify-center font-bold text-xs'
                    title='Remove product'
                    type='button'
                  >
                    X
                  </button>
                </div>

              </div>

            ))
          }
        </div>

      </div>
    </div>
  )
}

export default List
