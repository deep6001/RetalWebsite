
import TopLeftCard from "./TopLeftCard"

function TopLeft() {
  return (
    <div className=" md:pl-[80px] pl-[10px]  md:pt-[98px] 
                      md:max-w-[690px] md:max-h-[622px]
                     md:pb-[98px] md:flex">
        <div className="flex flex-col">
            <div className="  md:max-w-[610px] md:max-h-[178px]">
        <div className="
         font-[Urbanist]  md:text-[46px] mb-[24px] w-full whitespace-nowrap">
                <div>Discover Your Dream</div>  
                <div>Property with Estatein</div> 
        </div>
        <div className="  font-[Urbanist] 
        md:text-[16px] w-full">
        Your journey to finding the perfect property begins here. Explore 
        our listings to find the home that matches your dreams.
        </div>
        </div>

        <div className="  md:max-w-[610px] md:max-h-[49px] flex items-center mt-[60px] 
        gap-[20px] mb-[60px] md:pl-[24px]" >
            <div className=" md:max-w-[111px] justify-center  items-center md:text-[14px] font-[urbanist]">
                    Learn More
            </div>
            <div className=" md:max-w-[151px] justify-center items-center md:text-[14px]
            bg-purple-500 whitespace-nowrap rounded-2xl font-[urbanist]">
                <button className="px-[24px] py-[18px]">
                    Browse Properties
                    </button>
            </div>
        </div>


        <div className=" md:max-h-[99px] gap-[16px] flex">

            
            <TopLeftCard/>
            <TopLeftCard/>
            <TopLeftCard/>
           

           

        </div>
        </div>
    
    </div>
  )
}

export default TopLeft