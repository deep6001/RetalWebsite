import { useState } from "react";
import image from '../assets/landing-3burger.png'

function Hamburger() {
 
const [isToggle,setIsToggle] = useState(false)
  return (
    <div>
      <button  className='relative' onClick={() => setIsToggle(!isToggle)}>
        <img src={image} alt="Description of the image" className="max-w-[36px] max-h-[36px]" />
      </button>
      {/* Conditionally render the navigation links */}
      {isToggle && (
       <div className="absolute z-10 right-0 mt-2 max-w-[87px] sm:max-h-[150px] max-h-52 border rounded-lg bg-white mr-[10px] ">
        
       <ul className="flex flex-col items-center gap-1 min-h-[250px]">
       
         <li className="border-b rounded-md border-gray-400 my-1 mx-2 ">
           <a className='text-xs text-black' href="/about">Home</a>
         </li>
         <li className="border-b rounded-md border-gray-400 my-1 mx-2">
           <a className='text-xs  text-black items-center' href="/portfolio">About</a>
         </li>
         <li className="border-b rounded-md border-gray-400 my-1 mx-2">
           <a className='text-xs  text-black' href="/contact">Properties</a>
         </li>
         <li className="border-b rounded-md border-gray-400 my-1 mx-2">
           <a className='text-xs  text-black' href="/contact">Services</a>
         </li>
         
       </ul>
     </div>
     
      )}
    </div>
  );
}

export default Hamburger;
