const Footer = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault()
  }

  return (
    <footer className='mt-28 border-t border-[#e3e0da] pt-14 text-sm text-gray-600 sm:mt-40'>
      <div className='grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1.25fr]'>
        <div className='max-w-sm'>
          <p className='prata-regular text-3xl text-gray-950'>
            <span className="text-[#D11919] prata-regular">CHASE</span>MART
          </p>
          <p className='mt-5 leading-7 text-gray-600'>
            CHASEMART curates refined fashion essentials for modern wardrobes,
            pairing considered design with a seamless shopping experience.
          </p>

          <div className='mt-6 flex gap-3'>
            <a className='az-icon-button h-9 w-9 text-xs' href='https://www.instagram.com' aria-label='Instagram'>
              IG
            </a>
            <a className='az-icon-button h-9 w-9 text-xs' href='https://www.pinterest.com' aria-label='Pinterest'>
              PI
            </a>
            <a className='az-icon-button h-9 w-9 text-xs' href='https://www.x.com' aria-label='X'>
              X
            </a>
          </div>
        </div>

        <div>
          <p className='mb-5 text-xs font-semibold uppercase text-gray-950'>Company</p>
          <ul className='flex flex-col gap-3'>
            <li>Home</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className='mb-5 text-xs font-semibold uppercase text-gray-950'>Support</p>
          <ul className='flex flex-col gap-3'>
            <li>Delivery</li>
            <li>Returns</li>
            <li>Size Guide</li>
            <li>care@chasemart.com</li>
          </ul>
        </div>

        <div className='az-panel p-5'>
          <p className='text-xs font-semibold uppercase text-gray-950'>Private List</p>
          <p className='mt-3 leading-6 text-gray-500'>
            Receive new collection notes, limited edits, and early access.
          </p>
          <form onSubmit={onSubmitHandler} className='mt-5 flex overflow-hidden rounded-md border border-[#e3e0da] bg-white'>
            <input className='min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none' type='email' placeholder='Email address' required />
            <button className='bg-black px-4 text-xs font-medium uppercase text-white' type='submit'>
              Join
            </button>
          </form>
        </div>
      </div>

      <div className='mt-12 border-t border-[#e3e0da]'>
        <p className='py-5 text-center text-xs text-gray-500'>&copy; 2026 CHASEMART. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
