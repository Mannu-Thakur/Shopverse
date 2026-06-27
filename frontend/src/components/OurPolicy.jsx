import { assets } from '../assets/assets';

const OurPolicy = () => {
  const policies = [
    {
      icon: assets.cart_icon,
      title: 'Free Shipping',
      text: 'Complimentary delivery on curated premium orders.',
    },
    {
      icon: assets.quality_icon,
      title: 'Premium Quality',
      text: 'Refined fabrics and finishes selected for daily wear.',
    },
    {
      icon: assets.exchange_icon,
      title: 'Easy Returns',
      text: 'Simple returns for a confident fit and finish.',
    },
    {
      icon: assets.support_img,
      title: 'Secure Payments',
      text: 'Protected checkout with trusted payment options.',
    },
  ]

  return (
    <section className='-mx-4 overflow-hidden border-y border-[#2a2927] bg-[#141414] text-white sm:-mx-[5vw] md:-mx-[7vw] lg:-mx-[9vw]'>
      <div className='grid gap-0 text-sm px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] md:grid-cols-[0.76fr_1.24fr] md:items-stretch'>
        <div className='flex flex-col justify-center border-b border-white/10 px-5 py-8 md:border-b-0 md:border-r md:px-8 md:py-10'>
          <p className='text-[11px] font-semibold uppercase tracking-[0.28em] text-[#bdb7ad]'>Service Standard</p>
          <p className='prata-regular mt-3 text-3xl leading-tight text-white sm:text-4xl'>
            Premium care, built into every order.
          </p>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4'>
          {policies.map((policy, index) => (
            <div
              key={policy.title}
              className={`px-5 py-7 transition-transform duration-200 hover:-translate-y-1 md:px-6 ${index > 0 ? 'border-t border-white/10 sm:border-t-0 sm:border-l' : ''} ${index === 2 ? 'sm:border-l-0 lg:border-l' : ''}`}
            >
              <span className='mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10'>
                <img src={policy.icon} className='w-5 opacity-80 invert' alt='' />
              </span>
              <p className='font-semibold text-white'>{policy.title}</p>
              <p className='mt-3 leading-6 text-[#aaa39a]'>{policy.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPolicy;
