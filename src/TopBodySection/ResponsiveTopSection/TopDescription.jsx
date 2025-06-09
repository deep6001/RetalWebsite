import TopLeftCard from "../TopLeftCard"

function TopDescription() {
  return (
    <div className="mt-[56px]">

        
        <section className="w-full ">
            <div className="max-h-[79px] w-full container font-[Urbanist] text-[28px] ">
                <h3>Discover your Dream </h3>
                <h3>Property with Estatein</h3>
            </div>

            <div className="mt-[16px] font-[Urbanist] text-[14px]">
            Your journey to finding the perfect property begins here. 
            Explore our listings to find the home that matches your dreams.
            </div>

            <div className="max-h-[114px] mt-[40px]  w-full ">

               
                        <button className="flex justify-center items-center min-h-[49px] 
                         whitespace-nowrap rounded-xl font-[urbanist] w-full">
                                Learn More
                        </button>


                        <button className="flex justify-center items-center min-h-[49px] w-full 
                         whitespace-nowrap rounded-xl font-[urbanist] bg-purple-500 mt-[16px]">
                               Browse Properties
                        </button>  
            </div>

            <div className="mt-[40px]">
                     <div className="grid grid-cols-2 gap-[12px] ">
                                <TopLeftCard/>
                                <TopLeftCard/>
                            
                    </div>
                    <div className="mt-[12px]">
                                <TopLeftCard/>
                     </div>
            </div>

                



        </section>
    </div>
  )
}

export default TopDescription