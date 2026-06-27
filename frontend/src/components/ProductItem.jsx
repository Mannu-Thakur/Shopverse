import { useContext, useMemo, useState } from 'react'
import { ShopContext } from '../context/shop-context.js'
import { Link } from 'react-router-dom'

const ProductItem = ({
    id,
    image,
    name,
    price,
    category,
    subCategory,
    bestseller,
    bestSeller,
    isNewArrival,
    newArrival,
    isNew,
    isNewProduct,
    sale,
    onSale,
    oldPrice,
    originalPrice,
    compareAtPrice
}) => {

    const { currency } = useContext(ShopContext)
    const [brokenImageSrc, setBrokenImageSrc] = useState('')

    const parseNumber = (value) => {
        if (value === undefined || value === null || value === '') return null

        const numberValue = Number(value)
        return Number.isFinite(numberValue) ? numberValue : null
    }

    const hasFlag = (...values) => values.some((value) => value === true || value === 'true' || value === 1 || value === '1')
    const images = useMemo(
        () => (Array.isArray(image) ? image.filter(Boolean) : [image].filter(Boolean)),
        [image]
    )
    const imageSrc = images[0]
    const canShowImage = Boolean(imageSrc) && brokenImageSrc !== imageSrc
    const productName = name || 'Untitled piece'
    const productCategory = Array.isArray(subCategory) ? subCategory.filter(Boolean).join(' / ') : subCategory
    const displayCategory = [category, productCategory].filter(Boolean).join(' / ')
    const numericPrice = parseNumber(price)
    const hasPrice = numericPrice !== null
    const previousPrice = [oldPrice, originalPrice, compareAtPrice]
        .map(parseNumber)
        .find((value) => value !== null && hasPrice && value > numericPrice)
    const isSale = hasFlag(sale, onSale) || Boolean(previousPrice)
    const badges = [
        hasFlag(bestseller, bestSeller) && 'Best Seller',
        hasFlag(isNewArrival, newArrival, isNew, isNewProduct) && 'New Arrival',
        isSale && 'Sale'
    ].filter(Boolean)
    const formattedPrice = hasPrice
        ? numericPrice.toLocaleString(undefined, { maximumFractionDigits: 2 })
        : null
    const formattedPreviousPrice = previousPrice
        ? previousPrice.toLocaleString(undefined, { maximumFractionDigits: 2 })
        : null

    return (
        <Link
            className='group block h-full cursor-pointer text-gray-755 outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-4'
            to={id ? `/product/${id}` : '/collection'}
            aria-label={`View ${productName}`}
        >
            <article className='flex h-full flex-col overflow-hidden rounded-md border border-[#e3e0da] bg-white transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:border-[#c9c5bd] group-hover:shadow-[0_16px_40px_rgba(17,17,17,0.06)]'>
                <div className='relative aspect-[3/4] overflow-hidden bg-[#f4f4f1]'>
                    {canShowImage ? (
                        <img
                            className='h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.035]'
                            src={imageSrc}
                            alt={productName}
                            loading='lazy'
                            decoding='async'
                            onError={() => setBrokenImageSrc(imageSrc)}
                        />
                    ) : (
                        <div className='flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#f8f7f4_0%,#efebe4_100%)] px-4 text-center'>
                            <div>
                                <p className='prata-regular text-2xl text-gray-950 sm:text-3xl'>
                                    <span className="text-[#D11919]">CHASE</span>MART
                                </p>
                                <p className='mt-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-gray-400'>Image pending</p>
                            </div>
                        </div>
                    )}

                    {badges.length > 0 && (
                        <div className='absolute left-3 top-3 flex max-w-[calc(100%-1.5rem)] flex-wrap gap-1.5'>
                            {badges.map((badge) => (
                                <span key={badge} className='rounded-sm bg-white px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.16em] text-gray-900 shadow-sm border border-[#e3e0da]'>
                                    {badge}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <div className='flex flex-1 flex-col px-4 py-4.5 sm:px-5 sm:py-5'>
                    <p className='min-h-4 truncate text-[9px] font-bold uppercase tracking-[0.2em] text-[#b9975b]'>
                        {displayCategory || 'CHASEMART'}
                    </p>

                    <p className='mt-1.5 min-h-10 text-[14px] font-medium leading-5 text-gray-900 line-clamp-2 group-hover:text-black transition-colors duration-150'>
                        {productName}
                    </p>

                    <div className='mt-3 flex flex-wrap items-baseline gap-2 pt-2 border-t border-[#f4f4f1]'>
                        <p className='text-[14px] font-semibold text-gray-950'>
                            {hasPrice ? `${currency}${formattedPrice}` : 'Price on request'}
                        </p>

                        {formattedPreviousPrice && (
                            <p className='text-[11px] font-medium text-gray-400 line-through'>
                                {currency}{formattedPreviousPrice}
                            </p>
                        )}
                    </div>
                </div>
            </article>
        </Link>
    )
}

export default ProductItem
