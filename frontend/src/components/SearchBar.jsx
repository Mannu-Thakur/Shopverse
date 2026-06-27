import { useContext } from 'react'
import { ShopContext } from '../context/shop-context'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {

    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext)
    const location =  useLocation();
    const visible = location.pathname.includes('collection') && showSearch;

  return visible ? (
    <div className='-mx-4 border-b border-[#e3e0da] bg-[#fbfbfa]/95 px-4 py-5 text-center shadow-[0_16px_40px_rgba(17,17,17,0.06)] sm:-mx-[5vw] sm:px-[5vw] md:-mx-[7vw] md:px-[7vw] lg:-mx-[9vw] lg:px-[9vw]'>
        <div className='mx-auto inline-flex w-full max-w-2xl items-center justify-center rounded-full border border-[#e3e0da] bg-white px-5 py-3'>
            <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 bg-transparent text-sm outline-none' type="text" placeholder='Search collections'/>
            <img className='w-4 opacity-60' src={assets.search_icon} alt=""/>
        </div>

        <button onClick={()=> setShowSearch(false)} className='ml-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e3e0da] bg-white align-middle' type='button' aria-label='Close search'>
          <img className='w-3' src={assets.cross_icon} alt=""/>
        </button>
    </div>
  ) : null;
}

export default SearchBar
