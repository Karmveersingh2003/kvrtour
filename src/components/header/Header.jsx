import React from 'react'
import "./header.css"
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>

      <nav>


        <div id='nav_headings'>
          <ol>
            <li>
              <a href='/'>
              <img src="https://img.freepik.com/premium-vector/monogram-kv-logo-design-creative-letter-logo-business-company_719418-653.jpg" />  </a> </li>
            <div className='navheadings_space'>
              <li>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    See & Do
                  </Dropdown.Toggle>

                  <Dropdown.Menu id='see_do_padding'>
                    <Dropdown.Item className='holiday_dropdown_text' href="/">Explore All</Dropdown.Item>
                    
                    <Dropdown.Item className='holiday_dropdown_text' href="/adventures_activity">Activities & Attractions</Dropdown.Item>
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
                  <Dropdown.Item className='holiday_dropdown_text' href="/indonesia_tour">Indonesia</Dropdown.Item>
                  <Dropdown.Item className='holiday_dropdown_text' href="/Thailand_tour">Thailand</Dropdown.Item> 
                  <Dropdown.Item className='holiday_dropdown_text' href="/Greece_tour">Greece</Dropdown.Item>
                  <Dropdown.Item className='holiday_dropdown_text' href="/india_tour">India</Dropdown.Item>
                  <Dropdown.Item className='holiday_dropdown_text' href="/Italy_tour">Italy</Dropdown.Item>
                  <Dropdown.Item className='holiday_dropdown_text' href="/srilanka_tour">Sri Lanka</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li></div>
            <div className='navheadings_space'> <li >
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Travel Essentials
                </Dropdown.Toggle>

                <Dropdown.Menu id='travel_essentials_padding'>
                  <Dropdown.Item className='holiday_dropdown_text' href="/">Explore All</Dropdown.Item>
                  <Dropdown.Item className='holiday_dropdown_text' href="/transportation">Transportation</Dropdown.Item>
                  <Dropdown.Item className='holiday_dropdown_text' href="/travel_saftey">Safety Travel Tips</Dropdown.Item>
                  <Dropdown.Item className='holiday_dropdown_text' href="/usefulcontact">Useful Contacts</Dropdown.Item>
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