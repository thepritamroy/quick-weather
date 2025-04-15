import { useContext } from 'react'
import '../css/NavBar.css'
import { WeatherContext } from '../contexts/WeatherContexts'
import SearchPlace from './SearchPlace';

function NavBar(){

  const {cityName,setCityName,loadWeatherData,weatherData,handleModeChanger,
    placeData,loadPlaceData,loadDailyForecast} = useContext(WeatherContext);

  function searchOn(e){
    const newCityName = e.target.value;
    setCityName(newCityName);
    loadPlaceData(newCityName)
  }


  return (
  <header>
    <nav className = {JSON.stringify(weatherData) === "{}" ? 'active' :''} >
    {JSON.stringify(weatherData) !== "{}" && !weatherData.error ? 
      <div className="place-name">
        <i className="fa-solid fa-location-dot"></i>
        <h4>{weatherData.location.name},</h4>
        <p>{weatherData.location.country}</p>
      </div> : ''}

      <div className="search-bar">
        <input type="text" value={cityName} className='city-name'
        placeholder='Enter a city name.....'
        onChange={searchOn}
        onKeyDown={(e)=>{
          if(e.key === 'Enter'){
            loadWeatherData(cityName);
            loadDailyForecast(cityName)
          }
        }}/>
        <i onClick={()=>{
          loadWeatherData(cityName)
          loadDailyForecast(cityName)
        }} 
        className="fa-solid fa-magnifying-glass"></i>

        <SearchPlace placeData = {placeData}/>
      </div>

      <div className="mode-changer" onClick={handleModeChanger}>
      <i className="fa-regular fa-moon"></i>
      </div>
    </nav>
  </header>)
  
}


export default NavBar
