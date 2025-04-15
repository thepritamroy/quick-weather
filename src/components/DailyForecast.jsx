import '../css/DailyForecast.css'

function DailyForecast (props){

  const dailyForecastData = props.dailyForecastData;

  function timeFormatting(date){
    const dateObj = new Date(date);
    const day = dateObj.toLocaleDateString('en-US', { weekday: 'long' })
    return day
  }

  function handleDropDown(e){
    const button = e.target;
    const dropdown = button.nextElementSibling;
    dropdown.style.display === 'flex' ? 
      dropdown.style.display = 'none' :
      dropdown.style.display = 'flex'
    

  }


  return (
    <div className="daily-forecast-widget" onClick={handleDropDown}>
      <div className="daily-forecast">
          <div className="icon-date sub">
          <img style={{width:"30px"}} src={dailyForecastData.day.condition.icon} alt="icon" />
            <div className="date">{timeFormatting(dailyForecastData.date)}</div>
          </div>
          <div className="temp-condition sub">
            <div className="condition">{dailyForecastData.day.condition.text}</div>
            <div className="temp">{dailyForecastData.day.mintemp_c}℃ / {dailyForecastData.day.maxtemp_c}℃</div>
          </div>
      </div>
      <div className="forecast-dropdown ">
        <div className="other-info">
          <div className="sub text">
            <div>Avg Temp</div>
            <div>Humidity</div>
            <div>Precipitation</div>
          </div>
          <div className="sub">
            <div>{dailyForecastData.day.avgtemp_c}℃</div>
            <div>{dailyForecastData.day.avghumidity}%</div>
            <div>{dailyForecastData.day.totalprecip_mm}mm/h</div>
          </div>
        </div>
        <div className="other-info">
          <div className="sub text">
            <div>Max wind</div>
            <div>Snow</div>
            <div>UV index</div>
          </div>
          <div className="sub">
            <div>{dailyForecastData.day.maxwind_mph}mph</div>
            <div>{dailyForecastData.day.totalsnow_cm}</div>
            <div>{dailyForecastData.day.uv}%</div>
          </div>
        </div>
      </div>
    </div>
    
   
  )
}

export default DailyForecast