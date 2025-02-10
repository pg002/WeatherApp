import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import rainDay from './images/rainyDay.jpg'
import cloud from './images/cloud.jpg';
import cold from './images/cold.jpg';
import winter from './images/winter.jpg';
import sunnyDay from './images/sunnyDay.jpg';



export default function infoBox({info}){
   
    const getWeatherImage = () => {
        if (info.humidity >= 90) {
            return rainDay;
        } else if (info.humidity >= 70 && info.humidity < 90) {
            return cloud;
        } else if (info.temp < 10) {
            return cold;
        } else if (info.temp >= 10 && info.temp < 20) {
            return winter;
        } else {
            return sunnyDay;
        }
    };
    return(
        <div className="InfoBox">
            <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={getWeatherImage()}
          title="Weather-Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>Temperature={info.temp}&deg;C</p>
            <p>Humidity={info.humidity}</p>
            <p>Min-Temperature={info.tempMin}&deg;C</p>
            <p>Max-Temperature={info.tempMax}&deg;C</p>
            <p>Feels Like={info.feelslike}</p>
            <p>{info.weather} day</p>
          </Typography>
        </CardContent>
      </Card>
      </div>
     </div>
     
    )
}