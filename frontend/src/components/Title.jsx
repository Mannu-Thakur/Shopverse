const Title = ({ text1, text2 }) => {
  return (
    <div className='mb-5 inline-flex items-center gap-3'>
      <p className='prata-regular text-2xl leading-tight text-gray-950 sm:text-3xl'>
        <span className='text-gray-500'>{text1}</span>{' '}
        <span>{text2}</span>
      </p>
      <p className='h-px w-10 bg-[#b9975b] sm:w-14'></p>
    </div>
  )
}

export default Title
