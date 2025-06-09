import Profile from '../../assets/Profile.png'
import StarComponent from "./StarComponent"

function Card() {
  return (
    <div className="md:p-[40px] p-[30px] border-[1px] md:max-w-[390.33px] max-w-[358px]
border-opacity-15 border-white rounded-2xl sm:mr-[20px]">

        <StarComponent/>

        <div className="md:mt-[30px] mt-[24px]">
                <div className="md:text-[20px]">
                    <h2>Trusted Advisors</h2>
                </div>
                <div className="md:mt-[10px] md:text-[16px]">
                    <p>The Estatein team guided us through the entire buying process. 
                        Their knowledge and commitment to our needs were impressive. Thank you for your support!
                    </p>
                </div>
        </div>

        <div className="md:mt-[30px] mt-[24px] flex gap-[10px]">
                <div>
                    <img src={Profile} className='max-w-[50px] max-h-[50px]'/>
                </div>
                <div className='w-full flex flex-col' >
                        <h4 className='text-[18px]'> John Mans</h4>
                        <p className='text-[16px] text-gray-500'>USA , Nevada</p>
                </div>
        </div>


    </div>
  )
}

export default Card