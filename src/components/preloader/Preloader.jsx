import React, { useEffect } from 'react'
import './preloader.css'
import { preLoaderAnim } from '../../animation';
const Preloader = () => {

    useEffect(()=>{
preLoaderAnim()
    },[]);
  return (
    <>
      <div className="preloader">
      <div className="texts-container">
        <span>KVR TOURS</span>
        <span></span>
      </div>
    </div>
    </>
  )
}

export default Preloader
