
import '../css/Weather.css'
import '../css/theme.css'
import { WeatherContext } from '../contexts/WeatherContexts'
import { useContext } from 'react'
import DailyForecast from '../components/DailyForecast';


function Weather(){

  const {weatherData,loading,error,dailyForecastData} = useContext(WeatherContext);
  
console.log(dailyForecastData)
  return (
    <div className="main-conatiner">

      {error ? <h2 className='error'>{error}😔</h2> : "" }
      {loading ? <h2 className='loading'>Loading...🙂</h2> : "" }
      {weatherData.error && !loading?<h2 className='loading'>{weatherData.error.message}</h2>:''}

      {JSON.stringify(weatherData) !== "{}" && !weatherData.error && !error && !loading? 
    <div>
      <div className="weather-container">
        <div className="temp-container">
          <img src={weatherData.current.condition.icon} alt="cloud image" />
          <p className='temp'>{weatherData.current.temp_c} °C</p>
          <p className='overcast'>Overcast</p>
        </div>

        <div className="other-info-container">
          <div className="sub">
            <div className="left-sub">
              <p><i className="fa-solid fa-droplet"></i> {weatherData.current.precip_mm} mm/h</p>
              <p>Precipitation</p>
            </div>
            <div className="left-sub">
              <p><i className="fa-brands fa-stack-overflow"></i> {weatherData.current.humidity}%</p>
              <p>Humidity</p>
            </div>
            <div className="left-sub">
              <p><i className="fa-solid fa-cloud"></i>{weatherData.current.condition.text}</p>
              <p>Condition</p>
            </div>
          </div>
          <div className="sub">
            <div className="left-sub">
              <p><i className="fa-solid fa-wind"></i> {weatherData.current.wind_mph} mph</p>
              <p>Wind</p>
            </div>
            <div className="left-sub">
              <p><i className="fa-brands fa-stack-overflow"></i> {weatherData.current.uv}%</p>
              <p>uv index</p>
            </div>
            <div className="left-sub">
              <p><i className="fa-regular fa-eye-slash"></i> {weatherData.current.vis_miles}mi</p>
              <p>visibility</p>
            </div>
          </div>
        </div>
      </div>

      {dailyForecastData.length!==0 ? 
    <div className="daily-forecast-container">
        
      <div className="daily-forecast-title">
        <h1>Daily</h1>
      </div>
     {dailyForecastData.map((forecastData,index)=>
     <DailyForecast key={index} dailyForecastData = {forecastData}/>)}
      
    </div> :
    '' }

    </div>   : ''}

 
      
    </div>
  )
}

export default Weather
