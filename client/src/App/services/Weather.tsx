import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

type WeatherResponse = {
  list: {
    main: {
      temp: number;
    };
    dt_txt: string;
  }[];
};

const Weather = () => {
  const [weatherCity, setWeatherCity] = useState<string>("");
  const [forecast, setForecast] = useState<WeatherResponse | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const API_KEY = "aa99c2209fe9601572ce408e2236898f";

  const getData = async () => {
    if (!weatherCity) return;

    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${weatherCity}&appid=${API_KEY}&units=metric`;

    try {
      setErrorMessage(null);

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`City not found or API error: ${response.status}`);
      }

      const result: WeatherResponse = await response.json();
      console.log(result);

      setForecast(result);
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Unexpected error");
      }

      setForecast(null);
    }
  };

  return (
    <main className="container py-5">

      <div className="mb-4">
        <h1 className="mb-3">Write your City</h1>

        <textarea
          className="form-control mb-3"
          value={weatherCity}
          onChange={(e) => setWeatherCity(e.target.value)}
          placeholder="Enter city name (e.g. Berlin,de)"
        />

        <button className="btn btn-primary" onClick={getData}>
          Get Weather
        </button>
      </div>


      {errorMessage && (
        <div className="alert alert-danger">{errorMessage}</div>
      )}


      <div>
        {forecast ? (
          <div className="list-group">
            {forecast.list.slice(0, 7).map((day, index) => (
              <div key={index} className="list-group-item">
                <h5 className="mb-1">Day {index + 1}</h5>
                <p className="mb-1">🌡 {day.main.temp} °C</p>
                <small>{day.dt_txt}</small>
              </div>
            ))}
          </div>
        ) : (
          !errorMessage && <p className="text-muted">No data yet</p>
        )}
      </div>
    </main>
  );
};

export default Weather;
