````markdown
# 🌤 Weather Forecast App

A simple React application to get a 5-day weather forecast with a step of 3 hours using the [OpenWeatherMap API](https://openweathermap.org/forecast5).
Styling is done using **Bootstrap 5**.

---

## 🚀 Functional
- Entering the city and getting the weather forecast.
- Error handling (incorrect city or problems with API).
- Display loading (spinner).
- Output of the forecast for the next 7 intervals (usually ~1–2 days).
- Beautiful interface on Bootstrap (cards, grid, alerts).

---


###Start the project

```bash
npm run dev
```

(or if you use `create-react-app`):

```bash
npm start
```

---

## ⚙️ API configuration

The application requires an API key from the [OpenWeatherMap](https://home.openweathermap.org/api_keys) website.
In the code, it is in a variable:

```ts
const API_KEY = "myAPI";
```

👉 Replace `myAPI` with your key.
It is recommended to store the key in an `.env` file, for example:

```env
VITE_WEATHER_API_KEY=your_api_key_here
```
but not necessarily in small projects

And in the code use:

```ts
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
```

---

## 🖼️ Interface

* City input field
* Button with loading indicator
* Forecast cards (temperature and time)

Example result:

```
📅 Day 1
🌡 18 °C
2025-09-08 12:00:00
```

---

## 🛠️ Technologies

* **React 18** + **TypeScript**
* **Bootstrap 5** (cards, buttons, grid, alerts, spinner)
* **Fetch API** for working with OpenWeatherMap