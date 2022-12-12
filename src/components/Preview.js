import mainPreview from '../images/locationMap.gif';
import './Preview.css';
import {useState, useEffect} from 'react';

const Preview = () => {

    let slideInterval;
    let intervalTime = 4000;
    const [currentSlide, setCurrentSlide] = useState(false);
    const urlLocation = "https://www.google.co.th/maps/dir//%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%A9%E0%B8%B1%E0%B8%97+%E0%B8%81%E0%B8%B4%E0%B9%88%E0%B8%87%E0%B9%84%E0%B8%9C%E0%B9%882020+%E0%B8%88%E0%B8%B3%E0%B8%81%E0%B8%B1%E0%B8%94+1106+%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B9%88%E0%B8%97%E0%B8%B5%E0%B9%88+10+%E0%B8%95%E0%B8%B3%E0%B8%9A%E0%B8%A5+%E0%B8%8A%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%AA%E0%B8%B2%E0%B8%A1%E0%B8%AB%E0%B8%A1%E0%B8%AD+%E0%B8%AD%E0%B8%B3%E0%B9%80%E0%B8%A0%E0%B8%AD+%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%87%E0%B8%84%E0%B8%A3%E0%B9%89%E0%B8%AD+%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%A0%E0%B8%B9%E0%B8%A1%E0%B8%B4+36150/@16.1071237,102.2243232,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x3118a77f63a1aa7d:0x2729e30b70ee05ad!2m2!1d102.2593994!2d16.1070574!3e0?hl=th";
    
    const nextSlide = () => {

        console.log("OK");
        setCurrentSlide(!currentSlide)
    };
    
    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }
    useEffect(() => {

        auto();
        return () => clearInterval(slideInterval);
    }, [currentSlide])
    return (

        <div className="main-body" id="location-map">
            <p className={currentSlide === false ? "location-detail" : "location-detail-disable"}>
                <span className = {currentSlide === false ? "span" : "span-disable"}>คลิกเพื่อนำทางท่าน</span>
            </p>
            <a href={urlLocation}><img className="main-img" src={mainPreview} alt=""></img></a>
        </div>
    )
}

export default Preview;