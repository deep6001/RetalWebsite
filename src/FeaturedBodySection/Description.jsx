import FeaturedStar from '../assets/FeaturedStar.png'
import ViewAllProperties from './ViewAllProperties'

function Description() {
  return (
    <div className="w-full">

        <div className="  text-[28px] md:text-[38px] relative font-[Urbanist]">
            <h2> Featured Properties</h2>
        </div>

        <div className='absolute -translate-y-[81px] -translate-x-[10px]'>
            <img src={FeaturedStar} className='max-w-[54.72px] max-h-[24px]'/>
        </div>


        <div className='flex justify-between'>
            <div className='max-w-[975px] w-full text-[14px] md:text-[16px] font-[Urbanist]'>
                <h2>Explore our handpicked selection of featured properties. Each listing offers a glimpse 
                    into exceptional homes and investments available through Estatein. Click Veiw Details 
                    for more information.</h2>
            </div>
            <div className='md:flex hidden'>  <ViewAllProperties/></div>
         
        </div>



    </div>
  )
}

export default Description