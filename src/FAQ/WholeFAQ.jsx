import Description from "./Description"
import WholeRenderedCard from "./CardComponent/WholeRenderedCard"

function WholeFAQ() {
  return (
    <div className="md:px-[80px] md:mt-[120px] px-[16px] mt-[80px] font-[Urbanist]">

        <Description/>
        <div className="md:mt-[60px] mt-[40px]">
            <WholeRenderedCard/>
        </div>
      
    </div>
  )
}

export default WholeFAQ