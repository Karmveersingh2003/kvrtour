
// import React, { useEffect, useState } from 'react'

// import axios from 'axios';
// import "./india.css"
// import "../greece/greece.css"
// import { AiFillClockCircle } from 'react-icons/ai';
// import { FaMapLocationDot } from 'react-icons/fa6';
// import Pattern from '../indonesia/pattern.png'
// import { useParams } from 'react-router-dom';


    

// const India = () => {
//     const [products, setproducts] = useState([])
//     const {productid} = useParams();
//     const getProductsHandler=async()=>{    
//   let response= await axios.get(`http://localhost:4000/product_description/6549fda0938a8d9d98db6bef`);
//   setproducts(response.data.pro_des);
//     }
  
//     useEffect(() => {
//       getProductsHandler();
//     }, []);
   
//     return (
  
//       <>
   
  
//   <div>
//           <img src={Pattern} ></img>
//         </div>
//         <div id='welcome_to_indonesia'>
//           <h3>{products.heading}</h3>
//           {/* <img src={item.image} ></img> */}
//         </div>
//         <div id='thailand'>
//           <img src={products.image2}></img>
//         </div>
  
//         <div id='description_of_thailand'>
//           <h2>{products.text}</h2>
//           <p>{products.textparagraph}
//           </p>
  
//           <div id='best-selling'>
//             <h3>{products.heading2}</h3>
//           </div>
//           <div id='spacethailand_pack'>
//             <div id='packageflex'>
//               <div id='imageThailand_Tour_Packages'>
//                 <img src={products.image2}></img>
//               </div>
//               <div id='TextimageThailand_Tour_Packages'>
//                 <p>{products.daystour}</p><br />
//                 <p><AiFillClockCircle /> {products.daynight}
//                 </p><br />
//                 <p><FaMapLocationDot /> {products.place}        
//                     </p><br />
//                 <div id='view_enquire_button'>
//                   <button id='viewdetails'>VIEW DETAILS</button>
//                   <br />
//                   <button id='enquirenow'>Enquire Now</button></div>
//               </div>
//             </div>
//           </div>
  
  
         
  
//         </div>
  
  
  
  
  
//         </>
    
    
    
//       )
//   }
//   export default  India
  