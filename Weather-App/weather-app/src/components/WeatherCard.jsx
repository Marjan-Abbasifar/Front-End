import Sun from '../Images/sun.PNG'
import '../styles/weatherApp.css'
import clouds from '../Images/clouds.png'
import storm from '../Images/storm.png'
import snow from '../Images/snow.png'
import rain from '../Images/rain.png'
import haze from '../Images/haze.png'
import React, { useState } from 'react'

const WeatherCard = () => {
    const[data,setData] = useState({})
    const[location,setLocation]= useState('')
    const apiKey='7cc19fadc3e16bdeb584d86c5ece1b72'


    const handleInputChange = (e) =>{
        setLocation(e.target.value)
    }


    const  search = async () => {
        const url= `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`
        const res = await fetch(url)
        const searchData = await res.json()
        setData(searchData)
        setLocation('')  //With no Error handling yet
    }
  return (
    <div className='container'>
        <div className='weather-card'>
            <h1>Weather App</h1>
            <div className='search'>
                <div className='search-top'>    {/*showing the location icon and current place*/}
                    <i className='fa-solid fa-location-dot'></i>
                    <div className='location'>{data.name}</div> 
                    <div className='location'>  {data.sys  ? (data.sys.country)  : ''}</div>
                  
                </div>
                <div className='search-bar'>
                    <input type="text" placeholder='Enter the location' value={location} onChange={handleInputChange} />
                    <i className='fa-solid fa-magnifying-glass' onClick={search}></i>
                </div>
            </div>

            <div className='weather'>
                <img src={Sun} alt="sunny weather" />
                <div className='weather-type'>{data.weather ? (data.weather[0].main) : ''}</div>
                {/* <div className='weather-type'>Sunny</div> */}
                {/* <div className='temp'>30°</div> */}
                <div className='temp'>{data.main ? Math.round(data.main.temp)+"°" : ''}</div>

            </div>

            <div className='weather-date'>    
                <p>Saturday, May 3</p>
            </div>

            <div className='weather-data'>
                <div className='humidity'>
                    <div className='data-name'>Humidity</div>
                    <i className='fa-solid fa-droplet'></i>
                    <div className='data'>20%</div>
                </div>


                <div className='wind'>
                    <div className='data-name'>Wind</div>
                    <i className='fa-solid fa-wind'></i>
                    <div className='data'>7 km/h</div>
                </div>

               <div className='min-max-temp'>
                
               <div className='min-temp'>    {/*Min-Max temp*/}
                    <div className='data-name'>
                        <div>min temperature</div>
                        <p>28°</p>
                    </div>
                </div>

                   <div className='max-temp'>
                   <div className='data-name'>
                        <div>max temperature</div>
                        <p>32°</p>
                    </div>
                  </div>
               </div>



            </div>
        </div>
    </div>
  )
}

export default WeatherCard