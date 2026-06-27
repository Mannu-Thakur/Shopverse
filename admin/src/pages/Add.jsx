import { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../config'
import { toast } from 'react-toastify'

const Add = ({ token }) => {

  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("Men")
  const [subCategory, setSubCategory] = useState("Topwear")
  const [bestseller, setBestseller] = useState(false)
  const [sizes, setSizes] = useState([])

  const onSubmitHandler = async (e) => {

    e.preventDefault()

    try {

      const formData = new FormData()

      formData.append("name", name)
      formData.append("description", description)
      formData.append("price", price)
      formData.append("category", category)
      formData.append("subCategory", subCategory)
      formData.append("bestseller", bestseller)
      formData.append("sizes", JSON.stringify(sizes))

      image1 && formData.append("image1", image1)
      image2 && formData.append("image2", image2)
      image3 && formData.append("image3", image3)
      image4 && formData.append("image4", image4)

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } }
      )

      if (response.data.success) {

        toast.success(response.data.message)

        setName('')
        setDescription('')
        setPrice('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setSizes([])
        setBestseller(false)

      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message || error.message)
    }
  }

  return (
    <form
      onSubmit={onSubmitHandler}
      className='flex flex-col w-full items-start gap-6 max-w-[620px] bg-white p-6 sm:p-8 rounded-lg border border-[#e5e7eb] shadow-sm'
    >
      <h2 className='text-lg font-semibold tracking-wide text-gray-900 border-b border-[#e5e7eb] pb-3 w-full'>Create New Product</h2>

      <div className='w-full'>
        <p className='text-xs font-semibold uppercase tracking-wider text-gray-700 mb-3'>Upload Product Gallery</p>

        <div className='flex gap-3 flex-wrap'>

          <label htmlFor="image1" className='cursor-pointer group'>
            <div className='w-20 h-20 border border-dashed border-[#e5e7eb] rounded-md bg-[#f9fafb] flex items-center justify-center overflow-hidden group-hover:border-black transition-colors duration-200'>
              <img
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-200'
                src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
                alt=""
              />
            </div>
            <input
              onChange={(e) => setImage1(e.target.files[0])}
              type="file"
              id="image1"
              hidden
            />
          </label>

          <label htmlFor="image2" className='cursor-pointer group'>
            <div className='w-20 h-20 border border-dashed border-[#e5e7eb] rounded-md bg-[#f9fafb] flex items-center justify-center overflow-hidden group-hover:border-black transition-colors duration-200'>
              <img
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-200'
                src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
                alt=""
              />
            </div>
            <input
              onChange={(e) => setImage2(e.target.files[0])}
              type="file"
              id="image2"
              hidden
            />
          </label>

          <label htmlFor="image3" className='cursor-pointer group'>
            <div className='w-20 h-20 border border-dashed border-[#e5e7eb] rounded-md bg-[#f9fafb] flex items-center justify-center overflow-hidden group-hover:border-black transition-colors duration-200'>
              <img
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-200'
                src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
                alt=""
              />
            </div>
            <input
              onChange={(e) => setImage3(e.target.files[0])}
              type="file"
              id="image3"
              hidden
            />
          </label>

          <label htmlFor="image4" className='cursor-pointer group'>
            <div className='w-20 h-20 border border-dashed border-[#e5e7eb] rounded-md bg-[#f9fafb] flex items-center justify-center overflow-hidden group-hover:border-black transition-colors duration-200'>
              <img
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-200'
                src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
                alt=""
              />
            </div>
            <input
              onChange={(e) => setImage4(e.target.files[0])}
              type="file"
              id="image4"
              hidden
            />
          </label>

        </div>
      </div>

      <div className='w-full flex flex-col gap-1.5'>
        <label className='text-xs font-semibold uppercase tracking-wider text-gray-700' htmlFor="name">Product Name</label>
        <input
          id="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className='w-full px-4 py-2.5 bg-white border border-[#e5e7eb]'
          type="text"
          placeholder='E.g. Tailored Wool Blazer'
          required
        />
      </div>

      <div className='w-full flex flex-col gap-1.5'>
        <label className='text-xs font-semibold uppercase tracking-wider text-gray-700' htmlFor="description">Product Description</label>
        <textarea
          id="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className='w-full px-4 py-2.5 bg-white border border-[#e5e7eb] min-h-[100px]'
          placeholder='Detailed product specifications and styling notes...'
          required
        />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 w-full'>

        <div className='flex flex-col gap-1.5'>
          <label className='text-xs font-semibold uppercase tracking-wider text-gray-700' htmlFor="category">Category</label>
          <select
            id="category"
            onChange={(e) => setCategory(e.target.value)}
            className='w-full bg-white border border-[#e5e7eb] py-2.5 px-3'
            value={category}
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div className='flex flex-col gap-1.5'>
          <label className='text-xs font-semibold uppercase tracking-wider text-gray-700' htmlFor="subcategory">Subcategory</label>
          <select
            id="subcategory"
            onChange={(e) => setSubCategory(e.target.value)}
            className='w-full bg-white border border-[#e5e7eb] py-2.5 px-3'
            value={subCategory}
          >
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        <div className='flex flex-col gap-1.5'>
          <label className='text-xs font-semibold uppercase tracking-wider text-gray-700' htmlFor="price">Price (USD)</label>
          <input
            id="price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className='w-full bg-white border border-[#e5e7eb] py-2.5 px-3'
            type="number"
            placeholder='99'
            required
          />
        </div>

      </div>

      <div className='w-full'>
        <p className='text-xs font-semibold uppercase tracking-wider text-gray-700 mb-3'>Product Sizes</p>

        <div className='flex gap-2 flex-wrap'>

          {["S", "M", "L", "XL", "XXL"].map((sz) => (
            <button
              key={sz}
              type="button"
              onClick={() =>
                setSizes(prev =>
                  prev.includes(sz)
                    ? prev.filter(item => item !== sz)
                    : [...prev, sz]
                )
              }
              className={`transition-all duration-180 border rounded-sm font-semibold px-4.5 py-2 text-xs tracking-wider ${sizes.includes(sz) ? 'bg-black text-white border-black shadow-sm' : 'bg-white border-[#e5e7eb] text-gray-700 hover:border-gray-900 hover:bg-gray-50'}`}
            >
              {sz}
            </button>
          ))}

        </div>
      </div>

      <div className='flex items-center gap-3 mt-2'>
        <input
          onChange={() => setBestseller(prev => !prev)}
          checked={bestseller}
          type="checkbox"
          id="bestseller"
          className='w-4.5 h-4.5 rounded border-[#e5e7eb] text-black focus:ring-black cursor-pointer'
        />
        <label className='text-sm font-semibold text-gray-700 cursor-pointer select-none' htmlFor="bestseller">
          Feature on home bestseller showcase
        </label>
      </div>

      <button
        type="submit"
        className='bg-black text-white w-full sm:w-auto px-10 py-3.5 mt-4 text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-gray-800 transition-all duration-200 shadow-sm active:scale-98'
      >
        ADD PRODUCT
      </button>

    </form>
  )
}

export default Add
