import TopLeft from "./TopLeft"
import TopRight from "./TopRight"
import BottomCard from "./BottomCard"

import TopBuildingSection from "./ResponsiveTopSection/TopBuildingSection"
import TopDescription from "./ResponsiveTopSection/TopDescription"
import HomeCardSection from "./ResponsiveTopSection/HomeCardSection"
function TopAllBody() {
  return (
    <div>
    <div className="md:grid  hidden">
        <div className="flex justify-between gap-[60px]">
        <TopLeft/>
        <TopRight/>
        </div>
        <BottomCard/>
    </div>

    <div className="md:hidden grid px-[16px]">
        <TopBuildingSection/>
        <TopDescription/>
        <HomeCardSection/>

    </div>

    </div>
  )
}

export default TopAllBody