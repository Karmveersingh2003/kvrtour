import React from 'react'
import Pattern from '../indonesia/pattern.png'
import { AiFillClockCircle } from 'react-icons/ai';
import { FaMapLocationDot } from 'react-icons/fa6';
export default function Greece() {
  return (
   <>
   <div id='patternimg'>
        <img src={Pattern} ></img>
      </div>
      <div id='welcome_to_indonesia'>
        <h3>   WELCOME TO Greece</h3>
        <img src="https://www.turbanadventures.com/assets/images/header-bottom-svg.png" />
      </div>
      <div id='thailand'>
        <img src='https://i.ytimg.com/vi/dzRwqxnBm4k/maxresdefault.jpg'></img>
      </div>

      <div id='description_of_thailand'>
        <h2>List of Popular Greece Tour Packages at the Best Prices</h2>
        <p>From ancient cities to blue domed buildings in Santorini, Greece is the heart of ancient civilization and mythological creatures and gods and goddesses. Whether you are searching for a romantic escape, or a fun-filled family adventure, Greece has it all. Our Greece Tour Packages shows you this ancient land at its most live and accessible. Greece is a perfect combination of rich heritage, joyful music and dance, delicious cuisine and sunshine – perhaps the first country with 300 days in a year.
        </p>

        <div id='best-selling'>
          <h3>Best-Selling Greece Tour Packages</h3>
        </div>
        <div id='spacethailand_pack'>
          <div id='packageflex'>
            <div id='imageThailand_Tour_Packages'>
              <img src='https://w0.peakpx.com/wallpaper/378/155/HD-wallpaper-greece-santorini-during-nighttime-under-black-red-yellow-cloudy-sky-travel.jpg'></img>
            </div>
            <div id='TextimageThailand_Tour_Packages'>
              <p>The Best Greece Tour</p><br />
              <p><AiFillClockCircle /> 5 Nights 6 Days
              </p><br />
              <p><FaMapLocationDot /> Athens - Mykonos - Santorini
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
