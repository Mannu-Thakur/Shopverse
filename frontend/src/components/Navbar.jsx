import { useContext, useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/shop-context'

const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const logout = () => {
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
  }

  const navLinkClass = ({ isActive }) =>
    `group flex flex-col items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 font-premium-sans ${
      isActive ? 'text-black' : 'text-gray-400 hover:text-black'
    }`;

  const mobileNavLinkClass = 'mobile-nav-link px-8 py-5 border-b border-gray-100 text-sm font-semibold uppercase tracking-wider text-gray-700 hover:text-black hover:bg-gray-50 transition-all duration-300';

  return (
    <header className={`sticky top-0 z-50 -mx-4 sm:-mx-[5vw] md:-mx-[7vw] lg:-mx-[9vw] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
      isScrolled
        ? 'bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] border-b border-gray-100/60'
        : 'bg-white border-b border-gray-100/50'
    }`}>
      <div className='flex items-center justify-between w-full max-w-[1440px] mx-auto px-4 h-[88px] md:h-[90px] sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        
        <Link 
          to='/' 
          aria-label='CHASEMART home' 
          className='flex flex-col items-center sm:items-start hover:opacity-90 transition-opacity duration-300'
        >
          <span className='prata-regular text-2xl tracking-[0.14em] leading-none text-gray-950 sm:text-[25px]'>
            <span className="text-[#D11919]">CHASE</span>MART
          </span>
          <svg className="w-[100px] h-[10px] sm:w-[110px] sm:h-[11px] mt-1.5" viewBox="0 0 120 12" fill="none">
            <path d="M 5,4.5 L 35,4.5 C 37,4.5 38,2 41,2 L 112,2 C 114,2 115,3.5 115,6 C 115,8.5 114,10 112,10 L 41,10 C 38,10 37,7.5 35,7.5 L 5,7.5 C 4,7.5 3.5,7 3.5,6 C 3.5,5 4,4.5 5,4.5 Z" fill="#D4AF37" />
            <line x1="8" y1="4.5" x2="8" y2="7.5" stroke="#9E782F" strokeWidth="0.8" />
            <line x1="12" y1="4.5" x2="12" y2="7.5" stroke="#9E782F" strokeWidth="0.8" />
            <line x1="16" y1="4.5" x2="16" y2="7.5" stroke="#9E782F" strokeWidth="0.8" />
            <line x1="20" y1="4.5" x2="20" y2="7.5" stroke="#9E782F" strokeWidth="0.8" />
            <line x1="24" y1="4.5" x2="24" y2="7.5" stroke="#9E782F" strokeWidth="0.8" />
            <line x1="28" y1="4.5" x2="28" y2="7.5" stroke="#9E782F" strokeWidth="0.8" />
            <line x1="32" y1="4.5" x2="32" y2="7.5" stroke="#9E782F" strokeWidth="0.8" />
          </svg>
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden sm:block'>
          <ul className='flex items-center gap-10 md:gap-12'>
            <NavLink to='/' className={navLinkClass}>
              {({ isActive }) => (
                <>
                  <p>HOME</p>
                  <span className={`h-[1.5px] bg-[#D4AF37] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] rounded-full ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </>
              )}
            </NavLink>

            <NavLink to='/collection' className={navLinkClass}>
              {({ isActive }) => (
                <>
                  <p>COLLECTION</p>
                  <span className={`h-[1.5px] bg-[#D4AF37] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] rounded-full ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </>
              )}
            </NavLink>

            <NavLink to='/about' className={navLinkClass}>
              {({ isActive }) => (
                <>
                  <p>ABOUT</p>
                  <span className={`h-[1.5px] bg-[#D4AF37] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] rounded-full ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </>
              )}
            </NavLink>

            <NavLink to='/contact' className={navLinkClass}>
              {({ isActive }) => (
                <>
                  <p>CONTACT</p>
                  <span className={`h-[1.5px] bg-[#D4AF37] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] rounded-full ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </>
              )}
            </NavLink>
          </ul>
        </nav>

        {/* Action Controls */}
        <div className='flex items-center gap-2 sm:gap-3.5'>
          
          <button
            onClick={() => setShowSearch(true)}
            className='flex h-10 w-10 items-center justify-center rounded-full text-gray-600 hover:text-black hover:bg-gray-100/50 transition-all duration-300'
            aria-label='Open search'
            type='button'
          >
            <img src={assets.search_icon} className='w-4' alt='' />
          </button>

          <div className='group relative hidden sm:block'>
            <button
              onClick={() => token ? null : navigate('/login')}
              className='flex h-10 w-10 items-center justify-center rounded-full text-gray-600 hover:text-black hover:bg-gray-100/50 transition-all duration-300'
              aria-label='Account'
              type='button'
            >
              <img src={assets.profile_icon} className='w-4' alt='' />
            </button>

            {token && (
              <div className='absolute right-0 top-full pt-2 hidden group-hover:block z-50'>
                <div className='w-48 bg-white border border-gray-100 rounded-xl p-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.08)] flex flex-col font-premium-sans text-[11px] font-semibold uppercase tracking-wider text-gray-600'>
                  <p 
                    onClick={() => navigate('/profile')}
                    className='cursor-pointer rounded-lg px-3.5 py-2.5 hover:bg-gray-50 hover:text-black transition-colors duration-150'
                  >
                    My profile
                  </p>
                  <p
                    onClick={() => navigate('/orders')}
                    className='cursor-pointer rounded-lg px-3.5 py-2.5 hover:bg-gray-50 hover:text-black transition-colors duration-150'
                  >
                    Orders
                  </p>
                  <p
                    onClick={logout}
                    className='cursor-pointer rounded-lg px-3.5 py-2.5 hover:bg-gray-50 hover:text-black transition-colors duration-150 border-t border-gray-100 mt-1 pt-2'
                  >
                    Logout
                  </p>
                </div>
              </div>
            )}
          </div>

          <Link 
            to='/cart' 
            className='relative flex h-10 w-10 items-center justify-center rounded-full text-gray-600 hover:text-black hover:bg-gray-100/50 transition-all duration-300' 
            aria-label='Cart'
          >
            <img src={assets.cart_icon} className='w-4 min-w-4' alt='' />
            <span className='absolute right-1 top-1 w-4 h-4 flex items-center justify-center bg-black text-white rounded-full text-[8px] font-bold shadow-sm'>
              {getCartCount()}
            </span>
          </Link>

          <button
            onClick={() => setVisible(true)}
            className='flex h-10 w-10 items-center justify-center rounded-full text-gray-600 hover:text-black sm:hidden'
            aria-label='Open menu'
            type='button'
          >
            <img src={assets.menu_icon} className='w-4' alt='' />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:hidden ${
        visible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
      }`}>
        <div className='flex min-h-screen flex-col text-gray-600 bg-white'>
          
          <div
            onClick={() => setVisible(false)}
            className='flex items-center justify-between border-b border-gray-100 px-6 h-[88px] cursor-pointer'
          >
            <p className='prata-regular text-2xl text-gray-950'>
              <span className="text-[#D11919]">CHASE</span>MART
            </p>
            <div className='flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400'>
              <img src={assets.dropdown_icon} className='h-3 rotate-180 opacity-60' alt='' />
              <p>Close</p>
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

          <div className='mt-auto p-8 border-t border-gray-100 bg-gray-50/50'>
            {token ? (
              <div className='flex flex-col gap-3'>
                <button 
                  onClick={() => { navigate('/orders'); setVisible(false) }} 
                  className='w-full py-3.5 border border-black/10 rounded-lg text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-black hover:text-white transition-all duration-300' 
                  type='button'
                >
                  Orders
                </button>
                <button 
                  onClick={() => { logout(); setVisible(false) }} 
                  className='w-full py-3.5 border border-black rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-black hover:bg-neutral-900 transition-all duration-300' 
                  type='button'
                >
                  Logout
                </button>
              </div>
            ) : (
              <button 
                onClick={() => { navigate('/login'); setVisible(false) }} 
                className='w-full py-3.5 border border-black rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-black hover:bg-neutral-900 transition-all duration-300' 
                type='button'
              >
                Account Login
              </button>
            )}
          </div>
        </div>
      </div>
      
      {/* Background Overlay for mobile drawer */}
      {visible && (
        <div 
          onClick={() => setVisible(false)} 
          className='fixed inset-0 z-40 bg-black/30 backdrop-blur-sm sm:hidden transition-all duration-500'
        />
      )}
    </header>
  )
}

export default Navbar
