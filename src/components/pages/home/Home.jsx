import React, { useRef, useState, useEffect } from 'react';

import "./home.css"

import axios from 'axios';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import campaign from "../home/campaign.mp4"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import './styles.css';
import { Link } from 'react-router-dom';
import Preloader from '../../preloader/Preloader';


function Home() {
  // const [products, setproducts] = useState([])
  // const getProductsHandler = async () => {
  //   let response = await axios.get("http://localhost:3000/");
  //   setproducts(response.data.products);
  // }

  // useEffect(() => {
  //   getProductsHandler();
  // }, []);
  return (
    <>
    

      <Preloader/>

      <div>

        <div id="homevedio">
          <video src={campaign} autoPlay loop muted />

        </div>
       
      </div>





      <div id='shadowDiscoverworld_heading'>
        
        <div id="Discoverworld_heading">
          <h2>Discover the World</h2>
          <h7>Here are some of the most beautiful sites in the world</h7>
        </div>
        <div id='img_discover_world'>

          <div id="img_discover_world1" ><a href='http://localhost:3000/indonesia_tour'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbYawUp4cszZOLnqnkBGrIf-KWXy3Sgki-_A&usqp=CAU" /><div class="middle">
            <div class="text">Indonesia Tour</div></div></a></div>
          <div id="img_discover_world1" ><a href='http://localhost:3000/thailand_tour'><img src="https://images.squarespace-cdn.com/content/v1/58876c6ad1758e491a2dedab/1557340456015-WK5JI5LNEFKNJICKII97/bangkok+8.jpg" /><div class="middle">
            <div class="text">Thailand Tour</div></div></a></div>
          <div id="img_discover_world1" ><a href='/product_description/6549fda0938a8d9d98db6bef'><img src="https://wallpaperaccess.com/full/309830.jpg" /><div class="middle">
            <div class="text">India Tour</div></div></a></div>
          <div id="img_discover_world1" ><img src="https://theluxurytravelexpert.com/wp-content/uploads/2019/10/bhutan-sightseeing-things-to-see-do-attractions.jpg" /><div class="middle">
            <div class="text">Bhutan Tour</div></div></div>
          <div id="img_discover_world1" ><img src="https://e1.pxfuel.com/desktop-wallpaper/124/181/desktop-wallpaper-sigiriya-rock-sri-lanka-pics-sigiriya.jpg" /><div class="middle">
            <div class="text">SriLanka Tour</div></div></div>
          <div id="img_discover_world1" ><img src="https://lh3.googleusercontent.com/mw6Aa6Cfl8zOJ4kH3XbILMgfpXtTg8WlkFJcl5OK_yqJwK0UxwAfIBiEHDVZSBnHMTq5zLit237WT12SCgilubt6eQXplyTUN41_V-jiKlAx=s1080" /><div class="middle">
            <div class="text">Nepal Tour</div></div></div>
          <div id="img_discover_world1" ><img src="data:image/jpeg;base64,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" /><div class="middle">
            <div class="text">Egypt Tour</div></div></div>
          <div id="img_discover_world1" ><img src="https://images.alphacoders.com/561/561101.jpg" /><div class="middle">
            <div class="text">Italy Tour</div></div></div>
          <div id="img_discover_world1" ><img src="https://c0.wallpaperflare.com/preview/165/238/431/ban-gioc-waterfall-waterfall-china-vietnam.jpg" /><div class="middle">
            <div class="text">Veitnam Tour</div></div></div>

          <div id="img_discover_world1" ><a href='/product_description/654a0cf637a1cc36e1811bda'>
            <img src="https://cdn.wallpapersafari.com/89/70/65AeUS.jpg" />
            <div class="middle">
              <div class="text">Greece Tour</div></div></a></div>
        </div>

      </div>

      <div id='Our_Most_Popular_Destinations'>
        <div id='imgPopular_Destination'>
          <img src="https://www.turbanadventures.com/assets/images/hover_map.png" />
        </div>
        <div id='textPopular_Destination'>
          <h1>Our Most Popular Destinations of 2023
          </h1>
          <img src="https://www.turbanadventures.com/assets/images/header-bottom-svg.png" />
          <p>More Destinations. More Ease. More Affordable.
            <div id='placespopular'>
              <div >
                <ol className='listnone'>
                  <li>Bali </li>
                  <li>Italy</li>
                  <li>Sri Lanka</li></ol>
              </div>
              <div><ol className='listnone'>
                <li>Thailand</li>
                <li>Bhutan</li>
                <li>Egypt</li></ol>

              </div>
              <div>
                <ol className='listnone'>
                  <li>India</li>
                  <li>Vietnam</li>
                  <li>Greece</li></ol>
              </div></div></p>
        </div>
      </div>
      <div id='where_to_go'>
        <h1>Where to go When The Best time to travel...</h1>
      </div>
      
      <div id="swiper_where_to_go">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://www.turbanadventures.com/assets/images/best-rajasthan-tours.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.turbanadventures.com/assets/images/kerala4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.turbanadventures.com/assets/images/tours/amazing-india-journeys.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.turbanadventures.com/assets/images/10-days-rajasthan-desert-tour-package.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.turbanadventures.com/assets/images/tours/alleppey-backwaters-kerala.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.turbanadventures.com/assets/images/fatehpur-sikri-turbanadventures-2.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.turbanadventures.com/assets/images/tours/srinagar-peoples.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.turbanadventures.com/assets/images/tours/hornbill-festival-north-india.jpg" />
          </SwiperSlide>

        </Swiper>
      </div>
      
     

    </>
  )
}

export default Home