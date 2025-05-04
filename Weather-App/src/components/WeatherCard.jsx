import Sun from '../Images/sun.PNG'
import '../styles/weatherApp.css'

import React, { useEffect, useState } from 'react'

const WeatherCard = () => {
    const[data,setData] = useState({})
    const[location,setLocation]= useState('')
    const[date, setDate] = useState(new Date)
    const apiKey='7cc19fadc3e16bdeb584d86c5ece1b72'
    
    console.log(data)



    useEffect(()=>{                            //setting the default location for the application               
        const defaultWeather = async () =>{
            const defaultCity = 'Helsinki'
            const defaultUrl= `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&units=metric&appid=${apiKey}`
            const res = await fetch(defaultUrl)
            const defaultData = await res.json()
            setData(defaultData)
            }
        defaultWeather()
    },[])


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
                <div className='weather-icon' >
                
                {data.weather && data.weather[0] && <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}/>}
                </div>
               
                {/* <img src={`https://openweathermap.org/img/wn/${icon}.png`}   */}
                <div className='weather-type'>{data.weather ? (data.weather[0].main) : ''}</div>
                {/* <div className='weather-type'>Sunny</div> */}
                {/* <div className='temp'>30°</div> */}
                <div className='temp'>{data.main ? Math.round(data.main.temp)+"°" : ''}</div>

            </div>

            <div className='weather-date'>    
                {/* <p>Saturday, May 3</p> */}
                <p>{date.toDateString()}</p>
                
            </div>

            <div className='weather-data'>
                <div className='humidity'>
                    <div className='data-name'>Humidity</div>
                    <i className='fa-solid fa-droplet'></i>
                    <div className='data'>{data.main ? (data.main.humidity)+'%' : ''}</div>
                </div>


                <div className='wind'>
                    <div className='data-name'>Wind speed</div>
                    <i className='fa-solid fa-wind'></i>
                    <div className='data'>{data.wind ? Math.round(data.wind.speed) + 'km/h': ''}</div>
                </div>

               <div className='min-max-temp'>
                
               <div className='min-temp'>    {/*Min-Max temp*/}
                    <div className='data-name'>
                        <div>min temp</div>
                        <p>{data.main ? Math.round(data.main.temp_min)+'°' : ''}</p>
                    </div>
                </div>

                   <div className='max-temp'>
                   <div className='data-name'>
                        <div>max temp</div>
                        <p>{data.main ? Math.round(data.main.temp_max)+'°' : ''}</p>
                    </div>
                  </div>
               </div>



            </div>
        </div>
    
    </div>
  )
}

export default WeatherCard