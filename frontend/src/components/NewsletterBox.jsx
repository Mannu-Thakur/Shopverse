const NewletterBox = () => {

  const onSubmitHandler = (event) =>{
    event.preventDefault();
    
  }
  return (
    <section className='az-panel mx-auto max-w-4xl px-6 py-10 text-center sm:px-10 sm:py-12'>
      <p className='text-xs font-medium uppercase text-[#b9975b]'>CHASEMART Notes</p>
      <p className='prata-regular mt-3 text-3xl leading-tight text-white sm:text-4xl'>
        Subscribe now & get 20% off
      </p>
      <p className='mx-auto mt-4 max-w-xl leading-7 text-[#aaa39a]'>
        Sign up for collection updates, private edits, and exclusive offers.
      </p>

      <form onSubmit={onSubmitHandler} className='mx-auto mt-8 flex w-full max-w-xl flex-col gap-3 rounded-md border border-[#3e3a35] bg-[#1a1816]/80 p-2 sm:flex-row'>
        <input className='min-w-0 flex-1 px-4 py-3 text-sm bg-transparent text-white outline-none placeholder:text-[#7d756b]' type='email' placeholder='Enter your email address' required />
        <button type='submit' className='inline-flex items-center justify-center rounded-sm bg-white text-black font-bold text-xs tracking-[0.14em] uppercase hover:bg-[#e7e1d8] transition px-8 py-3'>
          SUBSCRIBE
        </button>
      </form>

    </section>
  )
}

export default NewletterBox
