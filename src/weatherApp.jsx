import SearchBox from "./searchBox"
import InfoBox from "./infoBox"
import {useState} from "react";
export default function weatherApp(){
    let [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelslike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:28.09,
        humidity:47,
        weather:"haze",
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    };
    return(
       <>
       <div>
       <h1>Weather App</h1>
       <SearchBox updateInfo={updateInfo}/>
       <InfoBox info={weatherInfo} />
       </div>
       </> 
    )
}