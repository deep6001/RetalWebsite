
import './App.css'
import MainHeader from './HeaderSection/MainHeader'
import TopAllBody from './TopBodySection/TopAllBody'
import FeaturedWholeSection from './FeaturedBodySection/WholeHero'
import WhatOurClient from './WhatOurClient/WhatOurClient'
import WholeFAQ from './FAQ/WholeFAQ'
import RealEstate from './StartyourRealEstate/RealEstate'
import WholeFooter from './Footer/WholeFooter'

function App() {


  return (
    <div className='bg-black text-white '>
      <MainHeader/>
      <TopAllBody/>
      <FeaturedWholeSection/>
      <WhatOurClient/>
      <WholeFAQ/>
      <RealEstate/>
      <WholeFooter/>
      </div>
  )
}

export default App




{/* Sample Button Layout with Component */}
{/* ----------------------------------------------------------- */}

//       export const buttonStyles = {
//   primary: "bg-blue-500 text-white hover:bg-blue-600",
//   secondary: "bg-gray-500 text-white hover:bg-gray-600",
//   danger: "bg-red-500 text-white hover:bg-red-600",
//   success: "bg-green-500 text-white hover:bg-green-600",
//   warning: "bg-yellow-500 text-black hover:bg-yellow-600",
//   sizes: {
//     sm: "px-3 py-1 text-sm",
//     md: "px-5 py-2 text-base",
//     lg: "px-7 py-3 text-lg",
//   },
// };
   


// import React from "react";
// import { buttonStyles } from "./buttonStyles"; // Import styles

// const Button = ({ children, type = "primary", size = "md", onClick, className = "" }) => {
//   return (
//     <button
//       className={`${buttonStyles[type]} ${buttonStyles.sizes[size]} rounded-lg font-semibold ${className}`}
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;



// //Usageeeee
// <Button type="primary" size="md">Primary Button</Button>

// <Button type="danger" size="lg" onClick={() => alert("Danger Button Clicked!")}>
//   Delete
// </Button>

// <Button type="success" size="sm" className="shadow-lg">
//   Small Success
// </Button>

