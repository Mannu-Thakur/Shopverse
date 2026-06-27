import { useContext, useMemo, useState } from 'react'
import { ShopContext } from '../context/shop-context'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const getSubCategories = (value) => (
  Array.isArray(value) ? value : [value].filter(Boolean)
);

const Collection = () => {
  const { products , search, showSearch} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');

  const toggleCategory = (e) =>{
    if(category.includes(e.target.value)){
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }else{
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) =>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }else{
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const filterProducts = useMemo(() => {
    let productsCopy = products.slice();

    if(search && showSearch){
      productsCopy=productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if(category.length > 0){
      productsCopy = productsCopy.filter(
        item => category.includes(item.category)
      );
    }

    if(subCategory.length > 0){
      productsCopy = productsCopy.filter(
        item => getSubCategories(item.subCategory).some(
          productSubCategory => subCategory.includes(productSubCategory)
        )
      );
    }

    switch(sortType){
      case 'low-high':
        return productsCopy.sort((a,b)=>(a.price - b.price));

      case 'high-low':
        return productsCopy.sort((a,b)=>(b.price - a.price));

      default:
        return productsCopy;
    }
  }, [category, products, search, showSearch, sortType, subCategory]);

  const renderEmptyState = () => (
    <div className='az-panel col-span-full px-6 py-14 text-center'>
      <p className='prata-regular text-2xl text-gray-950'>No pieces found.</p>
      <p className='mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500'>
        Adjust your search, filters, or sort preference to explore more of the CHASEMART collection.
      </p>
      <div className='mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-3'>
        {[1, 2, 3].map((item) => (
          <div key={item} className='overflow-hidden rounded-md border border-[#e3e0da] bg-white'>
            <div className='aspect-[3/4] bg-[#f4f4f1]' />
            <div className='space-y-2 p-3'>
              <div className='h-3 w-2/3 rounded-full bg-[#e3e0da]' />
              <div className='h-3 w-1/3 rounded-full bg-[#e3e0da]' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-[#e3e0da]'>
      {/* Filter Options */}
      <div className='min-w-60'>
        <p
          onClick={() => setShowFilter(!showFilter)}
          className='my-4 text-xs font-semibold uppercase tracking-[0.2em] flex items-center cursor-pointer gap-2 text-gray-900 sm:cursor-default'
        >
          FILTERS
          <img
            className={`h-2.5 sm:hidden transition-transform duration-200 ${showFilter ? 'rotate-90' : ''}`}
            src={assets.dropdown_icon}
            alt=''
          />
        </p>

        {/* Category Filter */}
        <div
          className={`az-panel pl-6 pr-4 py-5 mt-4 ${
            showFilter ? '' : 'hidden'
          } sm:block transition-all`}
        >
          <p className='mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-gray-950'>CATEGORIES</p>

          <div className='flex flex-col gap-3 text-sm text-gray-700'>
            <label className='az-checkbox-wrapper'>
              <input className='az-checkbox' type='checkbox' value={'Men'} checked={category.includes('Men')} onChange = {toggleCategory} />
              <span>Men</span>
            </label>

            <label className='az-checkbox-wrapper'>
              <input className='az-checkbox' type='checkbox' value={'Women'} checked={category.includes('Women')} onChange= {toggleCategory} />
              <span>Women</span>
            </label>

            <label className='az-checkbox-wrapper'>
              <input className='az-checkbox' type='checkbox' value={'Kids'} checked={category.includes('Kids')} onChange= {toggleCategory}/>
              <span>Kids</span>
            </label>
          </div>
        </div>

        {/* Subcategory */}
        <div
          className={`az-panel pl-6 pr-4 py-5 my-5 ${
            showFilter ? '' : 'hidden'
          } sm:block transition-all`}
        >
          <p className='mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-gray-950'>TYPE</p>

          <div className='flex flex-col gap-3 text-sm text-gray-700'>
            <label className='az-checkbox-wrapper'>
              <input className='az-checkbox' type='checkbox' value={'Topwear'} checked={subCategory.includes('Topwear')} onChange= {toggleSubCategory}/>
              <span>Top wear</span>
            </label>

            <label className='az-checkbox-wrapper'>
              <input className='az-checkbox' type='checkbox' value={'Bottomwear' } checked={subCategory.includes('Bottomwear')} onChange= {toggleSubCategory}/>
              <span>Bottom wear</span>
            </label>

            <label className='az-checkbox-wrapper'>
              <input className='az-checkbox' type='checkbox' value={'Winterwear' } checked={subCategory.includes('Winterwear')} onChange= {toggleSubCategory}/>
              <span>Winter wear</span>
            </label>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex flex-col sm:flex-row sm:justify-between items-start sm:items-center text-base sm:text-2xl mb-6 gap-4 sm:gap-0'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />

          <div className='relative w-full sm:w-auto'>
            <select
              onChange={(e) => setSortType(e.target.value)}
              className='az-input az-select py-2 px-3 text-xs w-full sm:w-56 font-medium uppercase tracking-[0.08em] bg-white border border-[#e3e0da]'
            >
              <option value='relavent'>Sort by: Relevant</option>
              <option value='low-high'>Sort by: Low to High</option>
              <option value='high-low'>Sort by: High to Low</option>
            </select>
          </div>
        </div>

        {/* Products */}
        <div className='grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4'>
          {filterProducts.length === 0 ? renderEmptyState() : filterProducts.map((item, index) => (
            <ProductItem
              key={item._id || index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
              category={item.category}
              subCategory={item.subCategory}
              bestseller={item.bestseller}
              bestSeller={item.bestSeller}
              isNewArrival={item.isNewArrival}
              newArrival={item.newArrival}
              isNew={item.isNew}
              isNewProduct={item.isNewProduct}
              oldPrice={item.oldPrice}
              originalPrice={item.originalPrice}
              compareAtPrice={item.compareAtPrice}
              onSale={item.onSale}
              sale={item.sale}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Collection
