import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchBox.css";
import {useState } from "react";

export default function({updateInfo}){
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="0101096c739d48c731bfbfafb0c0e64e";
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);

    let getweatherInfo=async()=>{
        try{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        if (jsonResponse.cod !== 200) {
            throw new Error("City not found");
        }

        console.log(jsonResponse);

        let result={
            city:city,
            temp:jsonResponse.main.temp,
            feelslike:jsonResponse.main.feels_like,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            weather:jsonResponse.weather[0].description,
        }
        console.log(result);

        return result;}
        catch(err)
        {
            throw err;
        }
    }

    let handleSubmit=async(evt)=>{
        try{
        evt.preventDefault();
        console.log(city);
        
      let newInfo=await getweatherInfo();
        setCity("");
        updateInfo(newInfo);
        setError(false);
        }catch(err){
           setError(true);
        }
    };
    let handleChange=(evt)=>{
        setCity(evt.target.value);
    };
    return(
        <div>
           
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/> 
            <br></br>
            <Button variant="contained" type="submit">Search</Button>
            {error && <p>No such place exists in our API</p>}
            </form>
        </div>
    );
}