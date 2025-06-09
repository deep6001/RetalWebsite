
import arrow from '../assets/Icon (1).png'
import Homeicon from '../assets/TopCardHome.png'

function CardofBottomSection() {
  return (
    <div className="max-w-[347.5px] py-[20px] md:py-[30px] relative flex flex-col justify-center items-center w-full h-full
    border-[1px] border-opacity-15 border-white rounded-xl">

        <div className='right-[20px] top-[20px] absolute'>
            <img src={arrow}/>
        </div>

        <div>
            <img src={Homeicon} className='max-w-[60px] max-h-[60px]'/>
        </div>
        <div className='max-h-[24px ] text-[16px] flex text-center'>
                <h2>Find your best home</h2> 
        </div>

    </div>
  )
}

export default CardofBottomSection