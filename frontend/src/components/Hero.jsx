import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Hero = () => {
  const features = [
    {
      icon: (
        <svg className="w-[18px] h-[18px] text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 4l3 12h14l3-12-5 4-5-6-5 6-5-4z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 20h18" />
        </svg>
      ),
      title: 'Tailored Excellence',
      desc: 'Expertly crafted cuts for a sharp, commanding silhouette.'
    },
    {
      icon: (
        <svg className="w-[18px] h-[18px] text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 3h12l4 6-10 12L2 9z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 3v18" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 9h20" />
        </svg>
      ),
      title: 'Premium Materials',
      desc: 'Selected luxury fabrics chosen for comfort and durability.'
    },
    {
      icon: (
        <svg className="w-[18px] h-[18px] text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      title: 'Limited Edition',
      desc: 'Exclusive designs produced in limited numbers.'
    }
  ]

  return (
    <section className="az-fade-in -mx-4 overflow-hidden border-b border-white/5 bg-[#0F0F10] text-[#F5F5F5] sm:-mx-[5vw] md:-mx-[7vw] lg:-mx-[9vw] font-premium-sans">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-10 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] lg:py-16 lg:min-h-[740px] flex flex-col justify-center">
        
        {/* Core two-column layout */}
        <div className="grid gap-12 lg:grid-cols-[45%_55%] lg:gap-16 lg:items-center">
          
          {/* Left Column: Text Content & CTAs */}
          <div className="flex flex-col justify-center px-6 sm:px-8 lg:px-0 lg:pl-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#D4AF37] font-premium-sans">
              NEW COLLECTION
            </p>

            <h1 className="font-luxury-serif font-light text-4xl sm:text-5xl md:text-[58px] lg:text-[72px] xl:text-[80px] leading-[1.12] text-white tracking-tight mt-6">
              LOOK SHARP.
              <span className="block mt-1">LIVE BOLD.</span>
            </h1>

            {/* Horizontal Gold Outline Cricket Bat Divider */}
            <div className="mt-6 mb-8 text-[#D4AF37] opacity-80 flex justify-start">
              <svg className="w-[180px] h-[18px] sm:w-[220px] sm:h-[22px]" viewBox="0 0 120 12" fill="none">
                <path d="M 5,4.5 L 35,4.5 C 37,4.5 38,2 41,2 L 112,2 C 114,2 115,3.5 115,6 C 115,8.5 114,10 112,10 L 41,10 C 38,10 37,7.5 35,7.5 L 5,7.5 C 4,7.5 3.5,7 3.5,6 C 3.5,5 4,4.5 5,4.5 Z" stroke="#D4AF37" strokeWidth="0.8" fill="none" />
                <line x1="8" y1="4.5" x2="8" y2="7.5" stroke="#D4AF37" strokeWidth="0.8" />
                <line x1="12" y1="4.5" x2="12" y2="7.5" stroke="#D4AF37" strokeWidth="0.8" />
                <line x1="16" y1="4.5" x2="16" y2="7.5" stroke="#D4AF37" strokeWidth="0.8" />
                <line x1="20" y1="4.5" x2="20" y2="7.5" stroke="#D4AF37" strokeWidth="0.8" />
                <line x1="24" y1="4.5" x2="24" y2="7.5" stroke="#D4AF37" strokeWidth="0.8" />
                <line x1="28" y1="4.5" x2="28" y2="7.5" stroke="#D4AF37" strokeWidth="0.8" />
                <line x1="32" y1="4.5" x2="32" y2="7.5" stroke="#D4AF37" strokeWidth="0.8" />
              </svg>
            </div>

            <p className="max-w-[420px] text-lg leading-[1.8] text-[#BEBEBE] font-premium-sans font-light">
              Elevate your style with premium clothing crafted for those who lead.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link 
                to="/collection" 
                className="group/btn inline-flex h-14 items-center justify-center rounded-[12px] bg-white px-9 text-xs font-semibold uppercase tracking-wider text-black transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(255,255,255,0.06)]"
              >
                SHOP NOW
                <svg 
                  className="ml-2 h-3.5 w-3.5 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-1" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link 
                to="/collection" 
                className="inline-flex h-14 items-center justify-center rounded-[12px] border border-white/30 px-9 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px] hover:border-white hover:bg-white hover:text-black"
              >
                EXPLORE COLLECTION
              </Link>
            </div>
          </div>

          {/* Right Column: Editorial Portrait Image */}
          <div className="w-full px-6 sm:px-8 lg:px-0">
            <figure className="group relative aspect-[4/5] lg:aspect-[1.1/1.3] overflow-hidden rounded-[18px] bg-[#161618] shadow-[0_24px_60px_rgba(0,0,0,0.55)] border border-white/5">
              <img
                className="h-full w-full object-cover object-[center_28%] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
                src={assets.hero_img}
                alt="CHASEMART menswear editorial portrait"
              />
              {/* Subtle lighting refinements */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,transparent_30%,rgba(0,0,0,0.35)_100%)] pointer-events-none" />
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,15,16,0)_50%,rgba(15,15,16,0.5)_100%)] pointer-events-none" />
              
              {/* Minimal floating editorial caption */}
              <div className="absolute bottom-8 left-8 z-10 bg-black/25 backdrop-blur-md border border-white/5 rounded-2xl px-5 py-4 text-left">
                <p className="text-[7.5px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">CHASEMART EDITORIAL</p>
                <p className="mt-0.5 text-[9.5px] font-semibold text-white tracking-wider">MENSWEAR DROP 01</p>
                <p className="text-[8px] text-[#BEBEBE] mt-0.5 font-light">Autumn / Winter 2026</p>
                <div className="w-4 h-[1.5px] bg-[#D4AF37] mt-2.5 rounded-full" />
              </div>
            </figure>
          </div>
        </div>

        {/* Feature Columns Section */}
        <div className="mt-10 lg:mt-12 pt-8 border-t border-white/10 grid gap-10 sm:grid-cols-3 px-6 sm:px-8 lg:px-0 lg:pl-10">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className={`group flex flex-col items-start transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 ${
                idx > 0 ? 'sm:border-l sm:border-white/10 sm:pl-8' : ''
              }`}
            >
              <div className="flex items-center justify-center text-[#D4AF37] transition-transform duration-300 group-hover:scale-105">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-sm font-medium tracking-wider text-white uppercase font-premium-sans">
                {feature.title}
              </h3>
              <p className="mt-2 text-xs leading-[1.7] text-[#BEBEBE] font-premium-sans font-light">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Hero
