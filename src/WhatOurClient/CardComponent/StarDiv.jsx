import Star from '../../assets/Star.png'

function StarDiv() {
  return (
   

        <div className='md:min-w-[36px] md:min-h-[36px] max-w-[30px] max-h-[30px] flex justify-center items-center'>
        <img src={Star} className='max-w-[19px] max-h-[19px]' alt="star" />
        </div>

    
  )
}

export default StarDiv