import Building from '../../assets/Image.png'
import BuildingBelow from '../../assets/Sub Container.png'


function TopBuildingSection() {
  return (
    <div>
        <div className='w-full max-h-[302px] relative '>
                <img src={Building} className='max-h-[302px] w-full h-full'/>
        </div>

        <div className='max-w-[117px] max-h-[117px] absolute -translate-y-[77px] '>
                <img src={BuildingBelow} className='max-w-[117px] max-h-[117px]'/>
        </div>

    </div>
  )
}

export default TopBuildingSection