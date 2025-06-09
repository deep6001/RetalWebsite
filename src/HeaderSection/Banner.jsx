import closeIcon from '../assets/Button.png'

function Banner() {
  return (
    <div className="w-full md:min-h-[63px] min-h-[49px] bg-black text-white flex sm:justify-center sm:ml-0
    pl-[5px] sm:pl-0 items-center relative"> {/* Added relative here */}
      
      <div className='flex sm:flex-row flex-col sm:gap-[6px] gap-[2px] items-center'>
        <div className='max-w-[363px] max-h-[27px] text-[18px] sm:whitespace-nowrap mr-[6px] font-[Urbanist] sm:space-x-[6px] 
              space-x-[25px]'>
          <span>✨Discover Your Dream Property with Estatein</span>
          <a className='text-[18px] underline underline-offset-3 whitespace-nowrap font-[Urbanist]'>Learn More</a>
        </div>

        {/* <div className='max-w-[91px] max-h-[27px] flex items-center'>
          <button className='items-center'>
            <h3 className='text-[18px] underline underline-offset-3 whitespace-nowrap font-[Urbanist]'>
              
            </h3>
          </button>
        </div> */}
      </div>

      {/* Fixed close button */}
      <div className='max-h-[26px] max-w-[26px] absolute right-[2px]'>
        <button className='bg-'>
          <img src={closeIcon} alt="Close Icon" />
        </button>
      </div>
    </div>
  );
}

export default Banner;
