
import logo from '../assets/Symbol.png'
import Hamburger from '../Icon/Hamburger'

function Header() {
  return (
    <div>

      <div className=" md:px-[80px] px-[10px] flex justify-between items-center min-h-[99px]">

        <div className="max-w-[135px] max-h-[48px] flex gap-[11px] w-full items-center" >
                <div className='max-w-[48px] max-h-[48px] w-full'>
                  <img src={logo} className='max-w-[48px] max-h-[48px]'/>
                  </div>

                <div className='max-w-[73px] max-h-[21px] w-full h-full text-[20px] leading-none '> 
                   Estatein
                </div>
        
        </div>

        <div className='max-w-[407px] max-h-[55px] pl-[24px] md:flex justify-between w-full whitespace-nowrap  hidden'>

            <div className='max-w-[48px] max-h-[27px] font-[Urbanist] text-[18px]'>
                  Home
            </div>

            <div className='max-w-[73px] max-h-[27px] font-[Urbanist] text-[18px]'>
                  About us
            </div>

            <div className='max-w-[80px] max-h-[27px] font-[Urbanist] text-[18px]'>
                  Properties
            </div>

            <div className='max-w-[68px] max-h-[27px] font-[Urbanist] text-[18px]'>
                  Services
            </div>


        </div>

        <div className='max-w-[136px] ml-[24px] max-h-[59px] whitespace-nowrap justify-center items-center 
        md:flex hidden font-[Urbanist] text-[18px]'>
                Contact us
        </div>

        <div className='md:hidden flex'>
          <Hamburger/>
        </div>

      </div>


    </div>
  )
}

export default Header