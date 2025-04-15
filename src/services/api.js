

const API_KEY = '69a524bcbf224cc0a6084227242209';

export async function handleApi(city){
  try{
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`)

    const data = await response.json()

    return data;
  }catch(error){
    console.log(error);
    throw error
  }
  
}

handleApi('london united kingdom')

const API_KEY2 = 'r83gu3idmmexbc2l033bn4uacp2bxitynnumxav0'

export async function handlePLaceApi(city){
  try{
    const response = await fetch(`https://www.meteosource.com/api/v1/free/find_places?text=${city}&key=${API_KEY2}`)
    const data = await response.json();
    return data
  }catch(error){
    console.log(error);
    throw error;
  }
  
}

export async function handleDailyForecast(city){

  // const encodedCity = encodeURIComponent(city)
  try{
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=no
`)
    const data = await response.json();

    return data.forecast.forecastday
  }catch(error){
    console.log(error);
    throw error;
  }
}


