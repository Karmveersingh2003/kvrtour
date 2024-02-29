import React from 'react'
import Pattern from '../indonesia/pattern.png'
import { AiFillClockCircle } from 'react-icons/ai';
import { FaMapLocationDot } from 'react-icons/fa6';

export default function Egypt() {
  return (
   <>
   
   
   <div id='patternimg'>
        <img src={Pattern} ></img>
      </div>
      <div id='welcome_to_indonesia'>
        <h3>   WELCOME TO Egypt</h3>
        <img src="https://www.turbanadventures.com/assets/images/header-bottom-svg.png" />
      </div>
      <div id='thailand'>
        <img src='https://static.vecteezy.com/system/resources/thumbnails/021/019/385/small/egypt-country-name-with-national-flag-waving-graphic-layover-video.jpg'></img>
      </div>

      <div id='description_of_thailand'>
        <h2>List of Popular Egypt Tour Packages at the Best Prices</h2>
        <p>The Great Pyramids of Giza and their guardian Sphinx, is once in a lifetime experience that is on every sightseeing list of Cairo and make a wonderful Egypt Tour. But there is still much to discover in this mysterious country. This ancient and historic country is extraordinarily rich in heritage, antiquities, history and treasures and with Turban Adventure’s Egypt Tour Packages, you can surely experience at its best.    </p>

        <div id='best-selling'>
          <h3>Best-Selling Egypt Tour Packages</h3>
        </div>
        <div id='spacethailand_pack'>
          <div id='packageflex'>
            <div id='imageThailand_Tour_Packages'>
              <img src='https://e0.pxfuel.com/wallpapers/881/1018/desktop-wallpaper-temples-of-karnak-luxor-egypt-stock-video.jpg'></img>
            </div>
            <div id='TextimageThailand_Tour_Packages'>
              <p>Best of Egypt</p><br />
              <p><AiFillClockCircle /> 9 Nights 10 Days
              </p><br />
              <p><FaMapLocationDot />Cairo - Nile Cruise - Luxor - Aswan
              </p><br />
              <div id='view_enquire_button'>
                <button id='viewdetails'>VIEW DETAILS</button>
                <br />
                <button id='enquirenow'>Enquire Now</button></div>
            </div>
          </div>
        </div>




      </div>
   </>
  )
}
