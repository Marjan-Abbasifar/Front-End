import Sun from '../Images/sun.PNG'
import clouds from '../Images/clouds.png'
import storm from '../Images/storm.png'
import snow from '../Images/snow.png'
import rain from '../Images/rain.png'
import haze from '../Images/haze.png'

import React from 'react'

const WeatherCard = () => {
  return (
    <div className='container'>
        <div className='weather-card'>
            <h1>Weather App</h1>
            <div className='search'>
                <div className='search-top'>    {/*showing the location icon and current place*/}
                    <i className='fa-solid fa-location-dot'></i>
                    <div className='location'>somewhere</div>
                </div>
                <div className='search-bar'>
                    <input type="text" placeholder='Enter the location' />
                    <i className='fa-solid fa-magnifying-glass'></i>
                </div>
            </div>

            <div className='weather'>
                <img src={Sun} alt="sunny weather" />
                <div className='weather-type'>Sunny</div>
                <div className='temp'>30{'\u00B0'}</div>

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
                    <div className='data'>7 kpr</div>
                </div>



                <div className='min-max-temp'>    {/*Min-Max temp*/}
                    <div className='Min-temp'>
                        <div>min temperature</div>
                        <p>28 {'\u00B0'}</p>
                    </div>

                    <div className='Max-temp'>
                        <div>max temperature</div>
                        <p>32{'\u00B0'}</p>
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default WeatherCard