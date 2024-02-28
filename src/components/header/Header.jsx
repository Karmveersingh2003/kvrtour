import React from 'react'
import "./header.css"
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    // <div className='header'>
    //     <div className='headerLeft'>
    //         <Link to="/"><img className='header_icon' src='https://img.freepik.com/premium-vector/monogram-kv-logo-design-creative-letter-logo-business-company_719418-653.jpg'/></Link>
    //         <Link to="/product_cat/sweets" style={{textDecoration: "none"}}><h1 className='nav_iconlink'>Destination</h1></Link>
    //         <Link to="/product_cat/namkeen" style={{textDecoration: "none"}}><span className='nav_iconlink'>Holiday Types</span></Link>
    //         <Link to="/product_cat/manwaar" style={{textDecoration: "none"}}><span className='nav_iconlink'>Budget Friendly</span></Link>
    //         <Link to="/page_id/aboutus" style={{textDecoration: "none"}}><span className='nav_iconlink'>About Us</span></Link>

    //         <Link to="/page_id/contact" id='contact' style={{textDecoration: "none"}}><span className='nav_iconlink'>Contact</span></Link>

    //         <Link to="/login_page" style={{textDecoration: "none"}}><span className='nav_iconlink'>Login</span></Link>
    //     </div>
    // </div>









    <>

      <nav>


        <div id='nav_headings'>
          <ol>
            <li>
              <a href='http://localhost:3000'>
              <img src="https://img.freepik.com/premium-vector/monogram-kv-logo-design-creative-letter-logo-business-company_719418-653.jpg" />  </a> </li>
            <div className='navheadings_space'>
              <li>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    See & Do
                  </Dropdown.Toggle>

                  <Dropdown.Menu id='see_do_padding'>
                    <Dropdown.Item className='holiday_dropdown_text' href="#/action-1">Explore All</Dropdown.Item>
                    <Dropdown.Item className='holiday_dropdown_text' href="/destination">Destinations</Dropdown.Item>
                    <Dropdown.Item className='holiday_dropdown_text' href="/adventures_activity">Activities & Attractions</Dropdown.Item>
                    <Dropdown.Item className='holiday_dropdown_text' href="/food_drinks">Food & Drink</Dropdown.Item>
                    <Dropdown.Item className='holiday_dropdown_text' href="/experinces_tours">Experiences & Tours</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown></li>

            </div>
            <div className='navheadings_space'> <li >
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Plan your trip
                </Dropdown.Toggle>

                <Dropdown.Menu id='plan_your_padding'>
                  <Dropdown.Item className='holiday_dropdown_text' href="#/action-1">Explore All</Dropdown.Item>
                  <Dropdown.Item className='holiday_dropdown_text' href="#/action-2">Trip Planner</Dropdown.Item>
                  <Dropdown.Item className='holiday_dropdown_text' href="/transportation">Transportation</Dropdown.Item>
                  <Dropdown.Item className='holiday_dropdown_text' href="#/action-3">Road Trip Guide</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li></div>
            <div className='navheadings_space'> <li >
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Travel Essentials
                </Dropdown.Toggle>

                <Dropdown.Menu id='travel_essentials_padding'>
                  <Dropdown.Item className='holiday_dropdown_text' href="#/action-1">Explore All</Dropdown.Item>
                  <Dropdown.Item className='holiday_dropdown_text' href="/travel_saftey">Safety Travel Tips</Dropdown.Item>
                  <Dropdown.Item className='holiday_dropdown_text' href="#/action-3">Useful Contacts</Dropdown.Item>
                  <Dropdown.Item className='holiday_dropdown_text' href="#/action-2">Travel Regulations</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown></li></div>
            <div className='navheadings_space'> <li>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">

                  Holiday Types
                </Dropdown.Toggle>
                <Dropdown.Menu id='holiday_types_padding'>
                  <Dropdown.Item  className='holiday_dropdown_text' href="/wildlife_tours">Wildlife Tours</Dropdown.Item>
                  <Dropdown.Item className='holiday_dropdown_text' href="/festival_tour">Festival Tours</Dropdown.Item>
                  <Dropdown.Item className='holiday_dropdown_text' href="#/action-3">Family Tours</Dropdown.Item>
                  <Dropdown.Item className='holiday_dropdown_text' href="/heritage_tours">Heritage Tours</Dropdown.Item>
                  <Dropdown.Item className='holiday_dropdown_text' href="/ayurveda_tour">Ayurveda and Wellness Tours</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li></div>

          </ol>


        </div>
      </nav>

    </>






  )
}
export default Header;