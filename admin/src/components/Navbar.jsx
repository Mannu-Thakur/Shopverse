const Navbar = ({ setToken }) => {
  return (
    <header className='bg-white border-b border-[#e5e7eb] sticky top-0 z-50'>
      <div className='flex items-center py-4 px-[4%] justify-between max-w-[1440px] mx-auto'>
        <p className='prata-regular font-medium tracking-[0.12em] text-lg text-gray-950 uppercase'>
          CHASEMART <span className='text-[10px] tracking-widest text-[#b9975b] font-sans font-bold ml-1'>ADMIN</span>
        </p>

        <button
          onClick={() => setToken('')}
          className='bg-black text-white px-6 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow active:scale-95'
          type='button'
        >
          Logout
        </button>
      </div>
    </header>
  )
}

export default Navbar
