import React from 'react'
import './transportation.css'
import Train from './train.png'
import Maharaja from './maharaja.jpg'
import Mlogo from './mlogo.png'
import Deccan from './deccan.png'
import Goldern from './golden cariot.png'
import Place from './place on wheel.png'
import Rajdhani from './rajdhani express.png'
import { Parallax } from "react-parallax";

export default function Transportation() {
  return (
   <>
<div id='heading_luxurytrain'>
        <h1>Luxury Trains In India</h1>
<img src={Train}/>
      </div>
      
      <div className="App">
      <Parallax strength={300} bgImage={Maharaja}>
        <div className="train_content">
          <div className="train_text-content"><img src={Mlogo} /></div>
        </div>
      </Parallax>

      <Parallax strength={300}  bgImage={"https://www.indianluxurytrains.com/wp-content/uploads/2018/12/deccan-odyssey-train.jpg"}>
        <div className="train_content">
          <div className="train_text-content"><img src={Deccan} /></div>
        </div>
      </Parallax>

      <Parallax strength={-100} bgImage={"https://travelogyindia.b-cdn.net/blog/wp-content/uploads/2019/12/golden-chariot-train-2-1024x682.jpg"}>
        <div className="train_content">
          <div className="train_text-content"><img src={Goldern} alt="" /></div>
        </div>
      </Parallax>

      <Parallax strength={-50}  bgImage={"https://www.palacesonwheels.com/wp-content/uploads/2023/03/palace-on-wheels.jpg"}>
        <div className="train_content">
          <div className="train_text-content"><img src={Place} /></div>
        </div>
      </Parallax>

      <Parallax strength={100}  bgImage={"https://www.worldwiderailjourneys.com/upload/pages/1629375940_trainpage.jpg"}>
        <div className="train_content">
          <div className="train_text-content"><img src={Rajdhani} /></div>
        </div>
      </Parallax>
    </div>
    <div id='heading_airlines'>
        <h1>Airlines</h1>
      </div>
      <div >
      <Parallax strength={300} bgImage={'https://www.livemint.com/lm-img/img/2023/11/03/1600x900/Air-India-1_1691682997924_1699012991980.jpg'}>
        <div className="train_content">
          <div className="train_text-content"></div>
        </div>
      </Parallax>
      <Parallax strength={100} bgImage={'https://wallpapercave.com/wp/wp6767982.jpg'}>
        <div className="train_content">
          <div className="train_text-content"></div>
        </div>
      </Parallax>
      <Parallax strength={200} bgImage={'https://gulfbusiness.com/wp-content/uploads/2023/01/emirates-boeing-777-300er-1-e1674456156346.jpg'}>
        <div className="train_content">
          <div className="train_text-content"></div>
        </div>
      </Parallax>
      <Parallax strength={100} bgImage={'https://www.airvistara.com/content/dam/airvistara/global/english/media-center/images/aircraft/high-res/5.jpg'}>
        <div className="train_content">
        </div>
      </Parallax>
      </div>
   </>
  )
}
