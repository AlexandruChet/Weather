# 🌤 Weather Forecast App

A simple **React + TypeScript** application to get a **5-day weather forecast** (3-hour intervals) using the [OpenWeatherMap API](https://openweathermap.org/forecast5).  
The interface is styled with **Bootstrap 5** for a clean and responsive design.

---

## 🚀 Features
- 🏙 Enter the city name and get a forecast.
- ⚠️ Error handling (invalid city / API issues).
- ⏳ Loading indicator with spinner.
- 📅 Displays **7 nearest intervals** (~1–2 days).
- 🎨 Modern **Bootstrap UI** (cards, grid, alerts).

---

## 📦 Installation & Start

```

### 1. Install dependencies
```bash
npm install
```

### 2. Start the project
For Vite:
```bash
npm run dev
```

For Create React App:
```bash
npm start
```

---

## ⚙️ API Configuration

You need an API key from [OpenWeatherMap](https://home.openweathermap.org/api_keys).  
In the code, it is stored in:

```ts
const API_KEY = "myAPI";
```

👉 Replace `myAPI` with your key.  

🔒 For better security, store it in an `.env` file:

```env
VITE_WEATHER_API_KEY=your_api_key_here
```

And use it in code:

```ts
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
```

---

## 🖼️ Interface Preview

- ✅ City input field  
- ✅ Button with loading indicator  
- ✅ Forecast cards with **temperature & time**  

Example:

```
📅 Day 1
🌡 18 °C
2025-09-08 12:00:00
```

![Weather App Preview](https://via.placeholder.com/800x400.png?text=Weather+App+Preview)

---

## 🛠️ Technologies
- ⚛️ **React 18** + **TypeScript**
- 🎨 **Bootstrap 5** (cards, grid, alerts, spinner)
- 🌐 **Fetch API** (for requests to OpenWeatherMap)

---

## 🔮 Possible Improvements
- 🌈 Add weather condition icons (☀️ 🌧️ 🌩️).
- 💾 Save last searched city in `localStorage`.
- 📊 Show more forecast days.
- 🌡 Switch between °C and °F.

---
