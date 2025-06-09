
import image from '../../assets/FeaturedDestination.png'
import Bathtub from '../../assets/Bathtub.png'
import Bedroom from '../../assets/Bedroom.png'
import Villa from '../../assets/Villa.png'


function Card() {
  return (
    <div className="md:p-[30px] p-[24px] md:max-w-[390.33px] max-w-[358px] border-[1px] 
    border-opacity-15 border-white rounded-2xl sm:mr-[20px] ">

        <img src={image} className='max-h-[255px] rounded-lg' />


        <div className='md:mt-[20px] mt-[16px] '>


            <section>

                <div className='md:text-[20px] text-[18px] font-[Urbanist]'>
                    <h2>Seaside Serenity Villa</h2>
                </div>

                <div className='md:text-[16px] text-[14px] space-x-1 '>
                <span className='text-gray-500'> A stunning 4-bedroom, 3-bathroom villa in a peaceful 
                    suburban neighborhood...</span>
                <a><button> Read More </button> </a>
                </div>

            </section>


            <section className='mt-[24px]'>
                <div className=' gap-[6px] flex flex-wrap lg:grid lg:grid-cols-3'>

                    <div className='flex  md:justify-center items-center 
                    border-[1px] border-opacity-15 border-white rounded-2xl px-[14px] py-[6px]'>
                        <img src={Bedroom} className='max-h-[20px] max-w-[20px]'/>
                        <h3 className='text-[14px] ml-[4px] whitespace-nowrap'>4-Bedroom </h3>
                    </div>

                    <div className='flex  justify-center items-center 
                    border-[1px] border-opacity-15 border-white rounded-2xl px-[14px] py-[6px]'>
                        <img src={Bathtub} className='max-h-[20px] max-w-[20px]'/>
                        <h3 className='text-[14px] ml-[4px] whitespace-nowrap'>3-Bedroom </h3>
                    </div>

                    <div className='flex justify-center items-center 
                    border-[1px] border-opacity-15 border-white rounded-2xl px-[14px] py-[6px]'>
                        <img src={Villa} className='max-h-[20px] max-w-[20px]'/>
                        <h3 className='text-[14px] ml-[4px] whitespace-nowrap'>Villa </h3>
                    </div>

                </div>
            </section >


           <section className='mt-[24px]'>

                <div className='flex justify-between gap-[6px]'>
                        <div>
                            <h3 className='text-gray-400 text-[14px]'>Price</h3>
                            <h3 className='md:text-[20px] text-[18px]'>$550,000</h3>
                        </div>
                        <div>
                            {/* <button className=' py-[14px] md:px-[40.67px] px-[35px]
                             bg-purple-600 rounded-lg whitespace-nowrap text-[14px]'>
                                View Property Details
                            </button> */}
                            <button className=' max-h-[49px] h-full w-full justify-between items-center
                            bg-purple-600 rounded-lg whitespace-nowrap text-[14px]  md:px-[35.67px] 
                            sm:px-[33px] px-[15px] '>
                                        View Property Details
                            </button>
                        
                        </div>
                </div>

           </section>

        </div>
    </div>
  )
}

export default Card