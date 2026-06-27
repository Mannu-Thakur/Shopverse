import { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/shop-context'


const Navbar = () => {

  const [visible, setVisible] = useState(false)
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext)

  const logout = () => {
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
  }

  const navLinkClass = ({ isActive }) =>
    `group flex flex-col items-center gap-1 text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-200 ${
      isActive ? 'text-black' : 'text-gray-500 hover:text-black'
    }`;

  const mobileNavLinkClass = 'mobile-nav-link px-6 py-4 border-b border-[#e3e0da] text-sm uppercase text-gray-700 transition-colors';

  return (
  <header className='sticky top-0 z-50 -mx-4 sm:-mx-[5vw] md:-mx-[7vw] lg:-mx-[9vw] border-b border-[#e3e0da]/80 bg-[#fbfbfa]/86 backdrop-blur-xl transition-all duration-200'>
    <div className='flex items-center gap-4 px-4 py-4 sm:justify-between sm:gap-0 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>

    <Link to='/' aria-label='CHASEMART home' className='prata-regular text-2xl tracking-[0.1em] leading-none text-gray-950 sm:text-[26px]'>
      CHASEMART
    </Link>

    <nav className='hidden sm:block'>
      <ul className='flex items-center gap-8'>
        <NavLink to='/' className={navLinkClass}>
          {({ isActive }) => (
            <>
              <p>HOME</p>
              <span className={`h-[1.5px] bg-black transition-all duration-300 rounded-full ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </>
          )}
        </NavLink>

        <NavLink to='/collection' className={navLinkClass}>
          {({ isActive }) => (
            <>
              <p>COLLECTION</p>
              <span className={`h-[1.5px] bg-black transition-all duration-300 rounded-full ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </>
          )}
        </NavLink>

        <NavLink to='/about' className={navLinkClass}>
          {({ isActive }) => (
            <>
              <p>ABOUT</p>
              <span className={`h-[1.5px] bg-black transition-all duration-300 rounded-full ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </>
          )}
        </NavLink>

        <NavLink to='/contact' className={navLinkClass}>
          {({ isActive }) => (
            <>
              <p>CONTACT</p>
              <span className={`h-[1.5px] bg-black transition-all duration-300 rounded-full ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </>
          )}
        </NavLink>
      </ul>
    </nav>

    <div className='flex items-center gap-2 sm:gap-3'>

      <button
        onClick={() => setShowSearch(true)}
        className='az-icon-button h-8 w-8 sm:h-10 sm:w-10'
        aria-label='Open search'
        type='button'
      >
        <img src={assets.search_icon} className='w-3.5 sm:w-4' alt='' />
      </button>

      <div className='group relative hidden sm:block'>

        <button
          onClick={() => token ? null : navigate('/login')}
          className='az-icon-button h-8 w-8 sm:h-10 sm:w-10'
          aria-label='Account'
          type='button'
        >
          <img src={assets.profile_icon} className='w-3.5 sm:w-4' alt='' />
        </button>

        {token &&
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-50'>

            <div className='az-panel flex w-44 flex-col gap-1 p-2 text-xs font-semibold uppercase tracking-wider text-gray-600 bg-white'>

              <p className='cursor-pointer rounded-md px-3 py-2.5 hover:bg-[#f4f4f1] hover:text-black transition-colors duration-150'>
                My profile
              </p>

              <p
                onClick={() => navigate('/orders')}
                className='cursor-pointer rounded-md px-3 py-2.5 hover:bg-[#f4f4f1] hover:text-black transition-colors duration-150'
              >
                Orders
              </p>

              <p
                onClick={logout}
                className='cursor-pointer rounded-md px-3 py-2.5 hover:bg-[#f4f4f1] hover:text-black transition-colors duration-150 border-t border-[#e3e0da] mt-1 pt-2'
              >
                Logout
              </p>

            </div>

          </div>
        }

      </div>

      <Link to='/cart' className='az-icon-button relative h-8 w-8 sm:h-10 sm:w-10' aria-label='Cart'>

        <img src={assets.cart_icon} className='w-3.5 min-w-3.5 sm:w-4 sm:min-w-4' alt='' />

        <span className='absolute -right-1.5 -top-1.5 w-5 h-5 flex items-center justify-center bg-black text-white rounded-full text-[9px] font-bold shadow-sm'>
          {getCartCount()}
        </span>

      </Link>

      <button
        onClick={() => setVisible(true)}
        className='az-icon-button h-8 w-8 sm:hidden'
        aria-label='Open menu'
        type='button'
      >
        <img src={assets.menu_icon} className='w-3.5' alt='' />
      </button>

    </div>
    </div>

    {/* created sidebar menu for small screens */}

    <div className={`fixed inset-0 z-50 overflow-hidden bg-[#fbfbfa] transition-all duration-300 sm:hidden ${visible ? 'w-full opacity-100' : 'w-0 opacity-0'}`}>

      <div className='flex min-h-screen flex-col text-gray-600'>

        <div
          onClick={() => setVisible(false)}
          className='flex items-center justify-between border-b border-[#e3e0da] p-5 cursor-pointer'
        >

          <p className='prata-regular text-2xl text-gray-950'>CHASEMART</p>
          <div className='flex items-center gap-3 text-sm uppercase text-gray-500'>
            <img src={assets.dropdown_icon} className='h-3 rotate-180' alt='' />
            <p>Back</p>
          </div>

        </div>

        <NavLink onClick={() => setVisible(false)} className={mobileNavLinkClass} to='/'>
          Home
        </NavLink>

        <NavLink onClick={() => setVisible(false)} className={mobileNavLinkClass} to='/collection'>
          Collection
        </NavLink>

        <NavLink onClick={() => setVisible(false)} className={mobileNavLinkClass} to='/about'>
          About
        </NavLink>

        <NavLink onClick={() => setVisible(false)} className={mobileNavLinkClass} to='/contact'>
          Contact
        </NavLink>

        {token ? (
          <>
            <button onClick={() => { navigate('/orders'); setVisible(false) }} className='px-6 py-4 text-left text-sm uppercase text-gray-700' type='button'>
              Orders
            </button>
            <button onClick={() => { logout(); setVisible(false) }} className='px-6 py-4 text-left text-sm uppercase text-gray-700' type='button'>
              Logout
            </button>
          </>
        ) : (
          <button onClick={() => { navigate('/login'); setVisible(false) }} className='px-6 py-4 text-left text-sm uppercase text-gray-700' type='button'>
            Account
          </button>
        )}

      </div>

    </div>

  </header>
)
}

export default Navbar
