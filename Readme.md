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

# 🎨 Header Component

A stylish **React + TypeScript** header component with a card.  
It uses **Bootstrap 5** for layout and styling, and supports dynamic content from `data.ts`.

---

## 🚀 Features
- 🌈 Gradient background (`linear-gradient(135deg, #007bff, #6610f2)`).
- 🎭 Animated toggle between **Show More / Hide Details**.
- 🖼 Card with image, title, subtitle, and text from props (`data.ts`).
- ⚡ Smooth transition effects with Bootstrap + custom CSS.

---

## 📦 Installation & Usage

1. Import the component into your React app:
```tsx
import Header from "./Header";
```

2. Use it in your page:
```tsx
function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
```

---

## 📂 Data Structure

The component expects data from `data.ts`:

```ts
// data.ts
export type component = {
  title: string;
  url: string;
  headline: string;
  text: string;
};

export const text: component[] = [
  {
    title: "Weather App Info",
    url: "https://via.placeholder.com/600x300.png?text=Weather+App",
    headline: "Check the weather anywhere",
    text: "This is a weather forecast app built with React and Bootstrap."
  }
];
```

---

## 🖼️ Interface

Initially, you see only a **title** and a **button**:  

```
This is Weather App
[ Show More ]
```

After clicking **Show More**, a card appears with extra details:  
- 📝 Title (`element.title`)  
- 🖼 Image (`element.url`)  
- 💬 Headline (`element.headline`)  
- 📖 Text (`element.text`)  
- 🔗 "Learn More" button  

---

## 🛠️ Technologies
- ⚛️ **React 18** + **TypeScript**
- 🎨 **Bootstrap 5**
- ✨ **animate.css** (for fade-in animation)
- 💡 Custom inline styles for shadows and transitions

---

## 🔮 Possible Improvements
- Add support for multiple elements (carousel or list).
- Add props for customization instead of hardcoding `text[0]`.
- Replace inline styles with SCSS/Bootstrap utility classes.
- Add routing to "Learn More" button.