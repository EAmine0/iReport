import React from 'react'
import Lottie from "react-lottie";
import IctaLogoAnimation from './IctaLogoAnimation'
import './IctaLogoLoading.css'

const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: IctaLogoAnimation, 
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

const IctaLoading = (props) => (
    <div className="icta-loading-container"> 
        <div className="icta-loading-animation">
            <Lottie options={animationOptions} height={100} width={100} isClickToPauseDisabled={true} />
            <div style={{backgroundColor: 'white', display: 'flex', alignItems:'center', justifyContent: 'center'}}> Loading... </div>
        </div>
    </div>
)

export default IctaLoading