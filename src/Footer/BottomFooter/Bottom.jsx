
import Facebook from '../../assets/Facebook.png'
import Twitter from '../../assets/Twitter.png'
import Youtube from '../../assets/Youtube.png'
import LinkedIn from '../../assets/Linkedlin.png'

function Bottom() {
  return (
    <div className="md:px-[80px] md:py-[80px] px-[50px] py-[46px] flex md:justify-between md:flex-row 
    flex-col-reverse items-center">

        <div className="gap-[20px] py-[10px] flex items-center md:flex-row flex-col md:mt-0 mt-[20px] whitespace-nowrap">
            <span>@2023 Estatein. All Rights Reserved.</span>
            <span>Terms & Conditions</span>
        </div>

        <div className='flex gap-[8px]'>
                <div className="flex justify-center items-center min-w-[40px] min-h-[40px]">
                    <img src={Facebook} className='max-w-[20px] max-h-[20px]'/>
                </div>

                <div className="flex justify-center items-center  min-w-[40px] min-h-[40px]">
                    <img src={LinkedIn} className='max-w-[20px] max-h-[20px]'/>
                </div>

                <div className="flex justify-center items-center  min-w-[40px] min-h-[40px]">
                    <img src={Twitter} className='max-w-[20px] max-h-[20px]'/>
                </div>

                <div className="flex justify-center items-center  min-w-[40px] min-h-[40px]">
                    <img src={Youtube} className='max-w-[20px] max-h-[20px]'/>
                </div>
        </div>

    </div>
  )
}

export default Bottom