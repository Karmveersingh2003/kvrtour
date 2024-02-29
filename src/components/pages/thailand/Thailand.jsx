import React from 'react'
import "./thailand.css"
import { AiFillClockCircle } from 'react-icons/ai';
import { FaMapLocationDot } from 'react-icons/fa6';
import Pattern from '../indonesia/pattern.png'
import Header from '../../header/Header';
function Thailand() {
  return (
    <>

      <div id='patternimg'>
        <img src={Pattern} ></img>
      </div>
      <div id='welcome_to_indonesia'>
        <h3>WELCOME TO THAILAND</h3>
        <img src="https://www.turbanadventures.com/assets/images/header-bottom-svg.png" />
      </div>
      <div id='thailand'>
        <img src='https://www.nainholidays.in/images/pkg-slider/thailand2.jpg'></img>
      </div>

      <div id='description_of_thailand'>
        <h2>List of Popular Thailand Tour Packages at the Best Prices</h2>
        <p>Embark on our Exotic Thailand Tour Package 5 Days that allows you to explore Thailand’s two most and well-known destinations worldwide. Bangkok Pattaya tour itinerary takes you to major destinations of these places and let you enjoy thrilling activities. Book this Bangkok Pattaya Tour Package and enjoy the nightlife, exotic seashores, bustling markets, and lip-smacking food.<br /><br></br>

          Book this amazing Bangkok Pattaya tour package from Ahmedabad, Mumbai, Pune, Hyderabad, Bangalore, Delhi, and other cities of India as well as from rest of the world. 4 Nights 5 Days Thailand Tour Package itinerary is combined with city center hotels, meals, transfers, and other activities to give you fantastic experience of this incredible country.

        </p>

        <div id='best-selling'>
          <h3>Best-Selling Thailand Tour Packages</h3>
        </div>
        <div id='spacethailand_pack'>
          <div id='packageflex'>
            <div id='imageThailand_Tour_Packages'>
              <img src='https://www.turbanadventures.com/assets/images/6-days-phuket-krabi-tour.webp'></img>
            </div>
            <div id='TextimageThailand_Tour_Packages'>
              <p>Phuket and Krabi 6 Days Tour</p><br />
              <p><AiFillClockCircle /> 5 Nights 6 Days
              </p><br />
              <p><FaMapLocationDot /> Krabi - Four Islands - Phuket - Phi Phi Islands
              </p><br />
              <div id='view_enquire_button'>
                <button id='viewdetails'>VIEW DETAILS</button>
                <br />
                <button id='enquirenow'>Enquire Now</button></div>
            </div>
          </div>
        </div>


        <div id='spacethailand_pack'>
          <div id='packageflex'>
            <div id='imageThailand_Tour_Packages'>
              <img src='https://www.turbanadventures.com/assets/images/5-days-exotic-thailand-tour.jpg'></img>
            </div>
            <div id='TextimageThailand_Tour_Packages'>
              <p>Exotic Thailand Tour</p><br />
              <p><AiFillClockCircle /> 4 Nights 5 Days
              </p><br />
              <p><FaMapLocationDot /> Pattaya - Bangkok
              </p><br />
              <div id='view_enquire_button'>
                <button id='viewdetails'>VIEW DETAILS</button>
                <br />
                <button id='enquirenow'>Enquire Now</button>
              </div>
            </div>
          </div>
        </div>



        <div id='spacethailand_pack'>
          <div id='packageflex'>
            <div id='imageThailand_Tour_Packages'>
              <img src='https://www.turbanadventures.com/assets/images/7-days-bangkok-pattaya-phuket-tour.jpg'></img>
            </div>
            <div id='TextimageThailand_Tour_Packages'>
              <p>Bangkok Pattaya Phuket Tour</p><br />
              <p><AiFillClockCircle /> 6 Nights 7 Days
              </p><br />
              <p><FaMapLocationDot /> Pattaya Phuket Bangkok
              </p><br />
              <div id='view_enquire_button'>
                <button id='viewdetails'>VIEW DETAILS</button>
                <br />
                <button id='enquirenow'>Enquire Now</button>
              </div>
            </div>
          </div>
        </div>



        <div id='spacethailand_pack'>
          <div id='packageflex'>
            <div id='imageThailand_Tour_Packages'>
              <img src='https://www.turbanadventures.com/assets/images/4-days-thailand-tour.jpg'></img>
            </div>
            <div id='TextimageThailand_Tour_Packages'>
              <p>4 Days Thailand Tour</p><br />
              <p><AiFillClockCircle /> 3 Nights 4 Days
              </p><br />
              <p><FaMapLocationDot />
                Pattaya Bangkok
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

export default Thailand