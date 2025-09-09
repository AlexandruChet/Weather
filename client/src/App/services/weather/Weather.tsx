import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";

type WeatherResponse = {
  list: {
    main: {
      temp: number;
    };
    dt_txt: string;
    weather: {
      icon: string;
      description: string;
    }[];
  }[];
};

const Weather = () => {
  const [weatherCity, setWeatherCity] = useState<string>("");
  const [forecast, setForecast] = useState<WeatherResponse | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const API_KEY = "aa99c2209fe9601572ce408e2236898f";

  const getData = async () => {
    if (!weatherCity) return;
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${weatherCity}&appid=${API_KEY}&units=metric`;

    try {
      setErrorMessage(null);
      setLoading(true);

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`City not found or API error: ${response.status}`);
      }

      const result: WeatherResponse = await response.json();
      setForecast(result);
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Unexpected error");
      }
      setForecast(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <nav className="navbar navbar-dark bg-primary mb-4 shadow">
        <div className="container">
          <span className="navbar-brand fw-bold">🌍 Weather App</span>
        </div>
      </nav>

      <main className="container">
        <div className="card shadow-lg border-0 mb-4 animate-fade">
          <div className="card-body">
            <h1 className="card-title mb-4 text-center text-primary animate-pulse">
              🌤 Weather Forecast
            </h1>

            <div className="mb-3">
              <label htmlFor="city" className="form-label fw-bold">
                Enter your city
              </label>
              <input
                type="text"
                id="city"
                className="form-control form-control-lg"
                value={weatherCity}
                onChange={(e) => setWeatherCity(e.target.value)}
                placeholder="e.g. Berlin,de"
              />
            </div>

            <div className="d-grid gap-2">
              <button
                className="btn btn-primary btn-lg"
                onClick={getData}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                    ></span>
                    Loading...
                  </>
                ) : (
                  "Get Weather"
                )}
              </button>
            </div>
          </div>
        </div>

        {errorMessage && (
          <div className="alert alert-danger shadow-sm animate-fade">
            ❌ {errorMessage}
          </div>
        )}

        <div>
          {forecast ? (
            <div className="row g-4">
              {forecast.list.slice(0, 7).map((element, index) => (
                <div key={index} className="col-md-4 col-sm-6">
                  <div className="card h-100 shadow border-0 rounded-3 animate-card">
                    <div className="card-body text-center">
                      <h5 className="card-title text-primary">
                        📅 Day {index + 1}
                      </h5>
                      <p className="card-text display-6 fw-bold text-danger">
                        🌡 {element.main.temp} °C
                      </p>
                      <span className="badge bg-secondary mb-2 d-block">
                        {element.dt_txt}
                      </span>

                      {element.weather && element.weather[0] && (
                        <div>
                          <img
                            src={`https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`}
                            alt={element.weather[0].description}
                            className="animate-icon"
                          />
                          <p className="text-muted fst-italic">
                            {element.weather[0].description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            !errorMessage && (
              <p className="text-muted text-center mt-3 fst-italic">
                No data yet. Please enter a city.
              </p>
            )
          )}
        </div>
      </main>
    </>
  );
};

export default Weather;
