import { useContext } from 'react'
import '../css/SearchPlace.css'
import { WeatherContext } from '../contexts/WeatherContexts'


const SearchPlace = (props) => {
  const{handleSearchWeather} = useContext(WeatherContext)

  const placeData = props.placeData

  return (
    <div className='search-dropdown'>
      {placeData.map((data,index)=>
      <div key={index} 
      className="dropdown-place"
      onClick={handleSearchWeather}>
        {data.name} {data.country}
      </div>)}

      
    </div>
  )
}

export default SearchPlace