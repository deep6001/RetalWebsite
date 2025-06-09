import image from '../assets/Image.png';
import logo from '../assets/Sub Container.png'

function TopRight() {
  return (
    <div>
    <div className="w-full   relative">
      <img 
        src={image} 
        className="w-full  md:max-w-[690px]  md:min-h-[622px] h-full object-cover " 
        alt="Image" 
      />
    </div>
    <div className='absolute -translate-y-[527px] -translate-x-[64px] lg:max-w-[129px] lg:max-h-[129px] md:max-w-[99px]
     md:max-h-[99px] '>
        <img src={logo} className='object-contain'/>
    </div>
    </div>
  );
}

export default TopRight;
