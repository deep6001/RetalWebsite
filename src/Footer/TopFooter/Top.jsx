import logo from '../../assets/Symbol.png';
import email from '../../assets/Email.png';
import Submit from '../../assets/Submit.png';

import { useRef } from 'react';

function Top() {
  const inputRef = useRef();

  const handleEmail = () => {
    // Reset the input field value
    inputRef.current.value = '';
  };

  return (
    <div className="md:px-[80px] md:py-[80px] px-[50px] py-[16px] md:flex justify-between gap-[30px]">
      <div > 
        <div>
          <div className="md:max-w-[135px] max-h-[48px] flex gap-[11px] w-full items-center justify-center">
            <div className="max-w-[48px] max-h-[48px] w-full">
              <img src={logo} className="max-w-[48px] max-h-[48px]" />
            </div>

            <div className="max-w-[73px] max-h-[21px] w-full h-full text-[20px] leading-none">
              Estatein
            </div>
          </div>
        </div>

        <div>
        <input
            placeholder="Enter your mail"
            className="rounded-lg pl-[29px]  mt-[24px] relative bg-transparent border-[1px] text-white border-white w-full md:w-auto"
            ref={inputRef} />

          
          
        </div>
        <div>
          <img src={email} className="absolute -translate-y-[21px] translate-x-[6px]" />
        </div>
        <div>
          <button onClick={handleEmail} className="absolute -translate-y-[22px]  right-14 md:left-[243px] ">
            <img src={Submit} className="max-w-[20px] max-h-[20px]" />
          </button>
        </div>
      </div>







      <div className='md:mt-0 mt-[50px]'>
        <div className='grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3  gap-[40px] whitespace-nowrap'>

            <div>
                <h2 className='md:text-[18px] text-[16px]  text-gray-400'>Home</h2>
                    <div className='grid grid-rows-5 gap-[16px] mt-[24px]'>
                        <h3 className='md:text-[16px] text-[14px]'> Features </h3>
                        <h3 className='md:text-[16px] text-[14px]'> <a> Hero Section </a>  </h3>
                        <h3 className='md:text-[16px] text-[14px]'> Properties </h3>
                        <h3 className='md:text-[16px] text-[14px]'> Testimonals </h3>
                        <h3 className='md:text-[16px] text-[14px]'> FAQ's </h3>
                    </div>
            </div>


            <div>
                <h2 className='md:text-[18px] text-[16px]  text-gray-400'>About Us</h2>
                    <div className='grid grid-rows-5 gap-[16px] mt-[24px]'>
                        <h3 className='md:text-[16px] text-[14px]'> <a> Our Story </a>  </h3>
                        <h3 className='md:text-[16px] text-[14px]'> Our Works </h3>
                        <h3 className='md:text-[16px] text-[14px]'> How It Works </h3>
                        <h3 className='md:text-[16px] text-[14px]'> Our Team </h3>
                        <h3 className='md:text-[16px] text-[14px]'> Our Clients</h3>
                    </div>
            </div>

            <div>
            <h2 className='md:text-[18px] text-[16px]   text-gray-400'>Properties</h2>
                    <div className='grid grid-rows-2 gap-[16px] mt-[24px]'>
                        <h3 className='md:text-[16px] text-[14px]'> <a> Portfolio </a>  </h3>
                        <h3 className='md:text-[16px] text-[14px]'> Categories </h3>
                        
                    </div>
            </div>


            <div>
            <h2 className='md:text-[18px] text-[16px]   text-gray-400'>Services</h2>
                    <div className='grid grid-rows-5 gap-[16px] mt-[24px]'>
                        <h3 className='md:text-[16px] text-[14px]'> <a> Valuation Mastery </a>  </h3>
                        <h3 className='md:text-[16px] text-[14px]'> Strategic Marketing </h3>
                        <h3 className='md:text-[16px] text-[14px]'> Negotiation Wizardry</h3>
                        <h3 className='md:text-[16px] text-[14px]'> Closing Success</h3>
                        <h3 className='md:text-[16px] text-[14px]'> Property Management</h3>
                    </div>
            </div>


           


            <div className='col-span-3 sm:col-span-1'>
            <h2 className='md:text-[18px] text-[16px]  text-gray-400'>Contact Us</h2>
                    <div className='grid grid-rows-2 gap-[16px] mt-[24px]'>
                        <h3 className='md:text-[16px] text-[14px]'> <a> Contact Form </a>  </h3>
                        <h3 className='md:text-[16px] text-[14px]'> Our Offices </h3>
                       
                    </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Top;
