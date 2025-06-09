import CardofBottomSection from "../CardofBottomSection"

function HomeCardSection() {
  return (
    <div className="mt-[40px]">
        <div className="grid grid-cols-2 grid-rows-2 gap-[10px]">
            <CardofBottomSection/>
            <CardofBottomSection/>
            <CardofBottomSection/>
            <CardofBottomSection/>
        </div>
    </div>
  )
}

export default HomeCardSection