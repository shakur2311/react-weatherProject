import { useState,useEffect } from 'react'
import SearchComponent from './Components/SearchComponent'
import ResultComponent from './Components/ResultComponent'
import './App.css'

function App() {
  const [isLoading,setIsLoading] = useState(false);
  const [weather, setWeather] = useState(null);

  const callWeatherApi = async (cityName)=>{
    try {
      const request = await fetch(`https://api.weatherapi.com/v1/current.json?key=0482364b292f473e8f7213842231702&&q=${cityName}`)
      const response = await request.json();
      setIsLoading(false);
      setWeather(response);
    } catch (error) {
      console.error(error);
    }

  }

  useEffect(()=>{
    document.title = weather ? `Weather | ${weather.location.name}` : `Weather`
  },[weather]);


  return (
    <div className="App">
      <div className="container rounded-3" style={{backgroundColor:'#fefefe', padding:30}}>
        <SearchComponent callWeatherApi={callWeatherApi} setIsLoading={setIsLoading}/>
        <div className='d-flex flex-column align-items-center'>
          {
            isLoading ? 
              <div className="spinner-border text-primary loading" role="status" style={{marginTop:300}}>
                <span className="visually-hidden">Loading...</span>
              </div>
              : 
              <ResultComponent weather={weather}/>
          }
        </div>
      </div>
    </div>
  )
}

export default App
