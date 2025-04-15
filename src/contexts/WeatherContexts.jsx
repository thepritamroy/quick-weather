import { createContext,useEffect,useState } from "react"
import {handleApi, handlePLaceApi, handleDailyForecast} from '../services/api.js'


export const WeatherContext = createContext();

export function WeatherProvider({children}){

  const [weatherData , setWeatherData] = useState({});
  const [cityName , setCityName] = useState('');
  const [error , setError]  = useState(null);
  const [loading, setLoading] = useState(false);
  const [placeData, setPlaceData] = useState([]);
  const [dailyForecastData , setDailyForecastData] = useState([])
  


  async function loadWeatherData(cityName){
    try{
      setLoading(true);
      setError(null);

      if(loading) return
      if(!cityName) return

      const loadData = await handleApi(cityName)
      if(loadData.error) throw new Error()
      setWeatherData(()=>loadData);
    }catch(error){
      console.log(error)
      setError('Failed to fetch....')
      setWeatherData({})
    }finally{
      setLoading(false);
    }
  }

  async function loadPlaceData(city){
    try{
      const placeData = await handlePLaceApi(city)
      setPlaceData(placeData);
    }catch(error){
      console.log(error)
    }
  }

  function handleSearchWeather(e){
    const newCityName = e.target.innerText
    setCityName(newCityName)
    setPlaceData([])
    loadWeatherData(newCityName)
    loadDailyForecast(newCityName)
  }

  async function loadDailyForecast(city){
    try{
      const loadDailyForecastData = await handleDailyForecast(city)
      setDailyForecastData(loadDailyForecastData);
    }catch(error){
      console.log(error)
    }
  }




  function handleModeChanger(){
    const body  = document.querySelector('.theme-change')
    !body ? 
    document.body.classList.add('theme-change') : 
    document.body.classList.remove('theme-change');

    imageUrl === '../src/assets/celcius.png' ?
                  setImageUrl('../src/assets/celcius-black.png') : 
                  setImageUrl('../src/assets/celcius.png')
    
  }


  useEffect(() => {
    window.document.addEventListener('click', ()=>{
      setPlaceData([])
    });
  
   return () => {
      window.document.removeEventListener('click', ()=>{
        setPlaceData([])
      });
    };
    
  }, []);
  

  const value = {
    weatherData , setWeatherData,
    cityName , setCityName,
    error , setError , 
    loading , setLoading,
    loadWeatherData,
    handleModeChanger,
    placeData, setPlaceData, loadPlaceData,
    handleSearchWeather,
    dailyForecastData , setDailyForecastData, loadDailyForecast

    

  }

  return <WeatherContext.Provider value = {value}>
      {children}
    </WeatherContext.Provider>

}

