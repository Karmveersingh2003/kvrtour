import React from 'react'
import "./indonesia.css"
import { AiFillClockCircle } from 'react-icons/ai';
import { FaMapLocationDot } from 'react-icons/fa6';
import Pattern from '../indonesia/pattern.png'
function Indonesia() {
  return (
    <>
<div id='patternimg'>
  <img src={Pattern} ></img>
</div>
<div id='welcome_to_indonesia'>
  <h3>WELCOME  TO INDONESIA</h3>
  <img src="https://www.turbanadventures.com/assets/images/header-bottom-svg.png" />
</div>
    <div id='thailand_img'>
        <img src='https://www.tourmyindia.com/blog//wp-content/uploads/2018/11/Indonesia-Tourism-and-Blog.jpg'></img>
    </div>
    
    <div id='description_of_thailand'>
        <h2>List of Popular Indonesia Tour Packages at the Best Prices</h2>
        <p>Indonesia is one of the most colorful countries in Southeast Asia with its thousands of islands, exotic temples, richness of culture, multiple religions, and diversity that can be experienced on our Indonesia Tour Packages. Among the islands of 17000, half of them are inhabited; the main islands of Indonesia are Bali, Jawa, Sumatra, Sulawesi, and half of Borneo.

            <br /><br /><br />

            By choosing the Indonesia Tour, tourists can partake in many adventure activities like snorkeling, scuba diving, surfing in its turquoise blue waters. Travel to Indonesia entitles tourists to hike volcanoes, island hopping in Bali, famous temples, and rice paddies in Bali, searching for dragons in Komodo National Park, and more on your way.

        </p>

        <div id='best-selling'>
            <h3>Best-Selling Thailand Tour Packages</h3>
        </div>
        <div id='spacethailand_pack'>
            <div id='packageflex'>
                <div id='imageThailand_Tour_Packages'>
                    <img src='https://www.turbanadventures.com/assets/images/8-days-bali-tour.jpg'></img>
                </div>
                <div id='TextimageThailand_Tour_Packages'>
                    <p>Best of Bali</p><br />
                    <p><AiFillClockCircle /> 7 Nights 8 Days
                    </p><br />
                    <p><FaMapLocationDot /> Kuta - Ubud - Sanur - Seminyak
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
                    <img src='https://www.turbanadventures.com/assets/images/bali-tours.jpg'></img>
                </div>
                <div id='TextimageThailand_Tour_Packages'>
                    <p>Bali Experience</p><br />
                    <p><AiFillClockCircle /> 8 Nights 9 Days
                    </p><br />
                    <p><FaMapLocationDot />Denpasar - Canggu - Ubud - Gili Trawangan - Denpasar
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
                    <img src='https://www.turbanadventures.com/assets/images/5-days-bali-honeymoon-tour-package.jpg'></img>
                </div>
                <div id='TextimageThailand_Tour_Packages'>
                    <p>Bali Honeymoon Tour 5 Days</p><br />
                    <p><AiFillClockCircle /> 4 Nights 5 Days
                    </p><br />
                    <p><FaMapLocationDot /> Ubud - Jimbaran
                    </p><br />
                    <div id='view_enquire_button'>
                        <button id='viewdetails'>VIEW DETAILS</button>
                        <br />
                        <button id='enquirenow'>Enquire Now</button>
                    </div>
                </div>
            </div>
        </div>


    </div>
        </>
        
  )
}

export default Indonesia
