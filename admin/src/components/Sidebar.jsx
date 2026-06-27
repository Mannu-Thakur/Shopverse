import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <aside className='w-[18%] min-h-screen border-r border-[#e5e7eb] bg-white'>
      <div className='flex flex-col gap-3.5 pt-8 pl-[15%] text-[14px]'>

        <NavLink
          className='sidebar-link'
          to='/add'
        >
          <img className='w-4.5 h-4.5 opacity-80' src={assets.add_icon} alt="" />
          <span className='hidden md:inline font-medium tracking-wide'>Add Items</span>
        </NavLink>

        <NavLink
          className='sidebar-link'
          to='/list'
        >
          <img className='w-4.5 h-4.5 opacity-80' src={assets.order_icon} alt="" />
          <span className='hidden md:inline font-medium tracking-wide'>List Items</span>
        </NavLink>

        <NavLink
          className='sidebar-link'
          to='/orders'
        >
          <img className='w-4.5 h-4.5 opacity-80' src={assets.order_icon} alt="" />
          <span className='hidden md:inline font-medium tracking-wide'>Orders</span>
        </NavLink>

      </div>
    </aside>
  )
}

export default Sidebar
