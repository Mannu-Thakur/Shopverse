import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Hero = () => {
  const notes = [
    { value: '01', label: 'Tailored menswear essentials' },
    { value: '02', label: 'Premium everyday layers' },
    { value: '03', label: 'Limited sharp-cut drops' },
  ]

  return (
    <section className='az-fade-in -mx-4 overflow-hidden border-b border-[#2a2927] bg-[#111111] text-white sm:-mx-[5vw] md:-mx-[7vw] lg:-mx-[9vw]'>
      <div className='mx-auto grid max-w-[1440px] gap-10 px-4 py-10 sm:px-[5vw] sm:py-14 md:px-[7vw] lg:min-h-[740px] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-stretch lg:gap-14 lg:px-[9vw] lg:py-[70px]'>
        <div className='flex min-w-0 flex-col justify-center'>
          <p className='text-[11px] font-semibold uppercase tracking-[0.34em] text-[#bdb7ad]'>
            NEW COLLECTION
          </p>

          <h1 className='prata-regular mt-5 max-w-3xl text-[clamp(2.2rem,5.5vw,4.5rem)] leading-[1.08] text-white sm:text-[clamp(2.8rem,6vw,5.5rem)]'>
            LOOK SHARP.
            <span className='block'>LIVE BOLD.</span>
          </h1>

          <p className='mt-6 max-w-xl text-base leading-8 text-[#d6d0c8] sm:text-lg'>
            Elevate your style with premium clothing crafted for those who lead.
          </p>

          <div className='mt-9 flex flex-col gap-3 sm:flex-row sm:items-center'>
            <Link to='/collection' className='inline-flex min-h-12 items-center justify-center rounded-sm bg-white px-8 py-3 text-xs font-semibold uppercase text-[#111111] transition duration-200 hover:-translate-y-0.5 hover:bg-[#e7e1d8]'>
              SHOP NOW
            </Link>
            <Link to='/collection' className='inline-flex min-h-12 items-center justify-center rounded-sm border border-white/50 px-8 py-3 text-xs font-semibold uppercase text-white transition duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white/10'>
              EXPLORE COLLECTION
            </Link>
          </div>

          <div className='mt-12 grid border-y border-white/20 sm:grid-cols-3'>
            {notes.map((note, index) => (
              <div
                key={note.value}
                className={`py-5 sm:px-5 ${index > 0 ? 'border-t border-white/20 sm:border-l sm:border-t-0' : ''}`}
              >
                <p className='prata-regular text-2xl text-white'>{note.value}</p>
                <p className='mt-2 text-sm leading-6 text-[#aaa39a]'>{note.label}</p>
              </div>
            ))}
          </div>
        </div>

        <figure className='group relative isolate min-h-[430px] overflow-hidden rounded-md border border-white/10 bg-[#24211f] shadow-[0_30px_90px_rgba(0,0,0,0.34)] sm:min-h-[560px] lg:min-h-full'>
          <img
            className='cm-hero-image h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]'
            src={assets.hero_img}
            alt='CHASEMART menswear editorial portrait'
          />
          <div className='absolute inset-0 bg-[linear-gradient(90deg,rgba(17,17,17,0.46)_0%,rgba(17,17,17,0.08)_46%,rgba(17,17,17,0.34)_100%)]' />
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.16),transparent_36%)] mix-blend-screen' />

          <figcaption className='absolute inset-x-0 bottom-0 grid grid-cols-2 border-t border-white/20 bg-[#111111]/80 text-white backdrop-blur-sm'>
            <div className='px-4 py-4 sm:px-6'>
              <p className='text-xs font-semibold uppercase tracking-[0.2em]'>CHASEMART</p>
              <p className='mt-1 text-sm text-white/70'>Menswear editorial edit</p>
            </div>
            <div className='border-l border-white/20 px-4 py-4 text-right sm:px-6'>
              <p className='text-xs font-semibold uppercase tracking-[0.2em]'>Drop 01</p>
              <p className='mt-1 text-sm text-white/70'>New arrivals</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

export default Hero
