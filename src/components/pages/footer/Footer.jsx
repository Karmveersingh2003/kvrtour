import React from 'react'
import './footer.css'
import { FaLocationArrow, FaInstagram, FaCcPaypal, FaCcMastercard } from "react-icons/fa";
import { ImMobile } from "react-icons/im";
import { FiMail } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { BiMessageDots, BiLogoVisa } from "react-icons/bi";
import { IoMdContacts } from "react-icons/io";

const Footer = () => {
    return (
        <>
        <div id='patternfooter'>
            <img src="https://images.squarespace-cdn.com/content/v1/56d87d627c65e424ed78ef8c/1480319419105-YX8F5NTQM9CXVBDLK5EQ/Laila+Background-01.jpg?format=1000w" alt="" srcset="" />
        </div>
            <nav>
                <div id='footerIcon'>
                    <a href='https://www.tajhotels.com/en-in/taj/umaid-bhawan-palace-jodhpur/'>
                        <img src={"https://i.pinimg.com/280x280_RS/8b/e1/5d/8be15d83e69870095910c004475429d9.jpg"} />
                    </a>

                    <a href='https://www.oberoihotels.com/special-offers/limited-period-offer/?utm_source=google&utm_content=15_Offer_31-10-2023&utm_medium=cpc&utm_campaign=oberoi_corporate_search_conversion_ia&gad=1&gclid=CjwKCAjwkY2qBhBDEiwAoQXK5QEN7NtHcolaAGYt3L_PqpUN9udxEkoh6plT7Zv8oOYcH2y-1wmwwBoC-ZgQAvD_BwE'>
                        <img src="data:image/jpeg;base64,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" />
                    </a>
                    <a href='https://www.tajhotels.com/en-in/offers/celebrating-our-bond/?gclid=CjwKCAjwkY2qBhBDEiwAoQXK5SiwpC0cNbERcB9IFMVVU52mYFY8PQMppB88Q2VrTL96pfyNhSlPJBoCyQMQAvD_BwE&gclsrc=aw.ds'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpxByhosCLNT0Aa7-z6Z9CVwm75lhjJ3JYZw&usqp=CAU" /></a>

<a href='https://www.oberoihotels.com/hotels-in-shimla-wfh/special-offers/himalayan-vacations/?utm_source=google&utm_content=Himalayan-Vacations-30-06-2023&utm_medium=cpc&utm_campaign=oberoi_shimla-cecil_search_conversion_ia&gad=1&gclid=CjwKCAjwkY2qBhBDEiwAoQXK5fUMokzNB-yoQl8PLMVRmfg-7MSWXke9pJwhAmTdT4704aFwmXOlaBoCDSoQAvD_BwE'>
                    <img src="data:image/png;base64,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" />
                    </a>
                    <a href='https://www.aman.com/resorts/amanbagh'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlok2TG6KscqyTVBqJ0WGSYgHdrox4z04t8bqQHZepavLUywBSauPttOW3XFdf-hVFRSM&usqp=CAU" />
                   </a>
                   <a href='https://www.itchotels.com/in/en/itchotels?utm_source=google&utm_medium=cpc&utm_campaign=HQ-DTL|CHN|AllIndia|NA|Search|Conversions|PANIndia|always-on|Owned|LC|GGL|NA|NA|NA|NA|Brand&gclid=CjwKCAjwkY2qBhBDEiwAoQXK5Vg17vFnx9jL-qIPErhHuEwpz-Epwq91ZN3J3C6W1PwdRulmpMw2UhoC5EIQAvD_BwE'>
                    <img src="data:image/png;base64,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" />
</a>
                </div>
            </nav>
            <div id='footerLinks'>


                <div className='footernav'>
                    <img src="https://img.freepik.com/premium-vector/monogram-kv-logo-design-creative-letter-logo-business-company_719418-653.jpg" />
                    <div className='footerdetails'> <FaLocationArrow />
                        <h5 > Sardarpura,Jodhpur-INDIA.</h5>
                    </div>
                    <div className='footerdetails'>
                        <ImMobile />

                        <h5 >Phone: +91 7014018057
                        </h5>
                    </div>
                    <div className='footerdetails'>
                        <FiMail />
                        <h5 >
                            karmveersingh2003@gmail.com</h5>
                    </div>

                </div>
                <div className='footernav'>
                    <h3 id='shopnow'>Destinations Packages</h3>
                    <div className='footerdetails'>
                        <h5 > <a href="http://localhost:3000/bhutan_tour">Bhutan</a>


                        </h5>
                    </div>
                    <div className='footerdetails'>
                        <h5 >
                            <a href="http://localhost:3000/india_tour">India </a>
                        </h5>
                    </div>
                    <div className='footerdetails'>
                        <h5 >
                            <a href="http://localhost:3000/indonesia_tour">Indonesia</a>
                        </h5>
                    </div>
                    <div className='footerdetails'>

                        <h5 > <a href="http://localhost:3000/nepal_tour">Nepal</a>
                        </h5>
                    </div>

                    <div className='footerdetails'>

                        <h5 > <a href="http://localhost:3000/srilanka_tour">Sri Lanka</a>
                        </h5>
                    </div>

                    <div className='footerdetails'>

                        <h5 > <a href="http://localhost:3000/thailand_tour">thailand</a>
                        </h5>
                    </div>
                </div>
                <div className='footernav'>
                    <h3>USEFUL LINKS</h3>
                   

                    <div className='footerdetails'>
                        <IoMdContacts />

                        <h5 >CONTACT US
                        </h5>
                    </div>

                    <div className='footerdetails'>
                        <BsLinkedin />

                       <a href='https://in.linkedin.com/in/karamveer-singh-222ba5250'> <h5 >LINKED IN
                        </h5></a> 
                    </div>

                    <div className='footerdetails'>
                        <FaInstagram />

                        <a href='https://www.instagram.com/_karmveersing/'> <h5 >INSTAGRAM
                        </h5></a>
                    </div>


                    <div className='footerdetails'>
                        <BiMessageDots />

                        <a href='http://localhost:3000/experinces_tours'><h5 >ABOUT US
                        </h5></a>
                    </div>


                </div>
                <div className='footernav'>
                    <h3>Payment Options</h3>
                    {/* <div id='imgfooterpayment'>
                   <img src='https://www.turbanadventures.com/assets/images/pay.png'></img>
                   </div> */}
                    <div id='visaicon'>
                        {/* <BiLogoVisa/>
                  <FaCcPaypal/>
                  <FaCcMastercard/>
                 < SiAmericanexpress/> */}
                        <img src="data:image/png;base64,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" />
                    </div>
                    <div id='payout'>
                        <img src="https://www.turbanadventures.com/assets/images/payNow.webp" />
                    </div>
                </div>





            </div>
        </>
    )
}

export default Footer
