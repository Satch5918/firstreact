import React from 'react'

export default function Carrousel() {
    const plusSlides = () =>{
    }
  return (
    
    <div className="slideshow-container">


          <div className="mySlides fade">
            <div className="numbertext">1 / 3</div>
            <img src="https://occ-0-300-990.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUhJMx1ZGjVQ6PrRpwkawoR_l5TWtESU4TTngpctPd5SyCN91X2TNF6IAKmXJpv9oISMu_brPcvDToTLAYabaOykcOfpmLeyCDvF.jpg?r=60a"  alt=""/>
            <div className="text">Caption Text</div>
          </div>
    
          <div className="mySlides fade">
            <div className="numbertext">2 / 3</div>
            <img src="./assets/bkg.png" alt=""/>
            <div className="text">Caption Two</div>
          </div>
    
          <div className="mySlides fade">
            <div className="numbertext">3 / 3</div>
            <img src="./assets/bkg.png"  alt=""/>
            <div className="text">Caption Three</div>
          </div>
    
  
          <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
          <a className="next" onclick="plusSlides(1)">&#10095;</a>
        </div>
  )
}
