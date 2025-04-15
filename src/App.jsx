import Weather from "./pages/Weather.jsx"
import NavBar from "./components/NavBar.jsx"
import { WeatherProvider } from "./contexts/WeatherContexts.jsx"


function App() {
                              

  return <>
  <WeatherProvider>
      <NavBar/>
      <Weather/>
  </WeatherProvider>
  
  
  </>
  
}

export default App
