
# 🌍 Weather App

> 🔮 A modern **React + TypeScript** application for real-time weather forecasts.  
Styled with **Bootstrap 5**, powered by **OpenWeatherMap API**, and enhanced with smooth animations.

---

## ✨ Features

- 🔎 Search weather forecast by **city name**
- 🌡 Display of **temperature**, **date/time**, **weather icon** and **description**
- ⏳ Loading state with a **spinner**
- ⚠️ Clear error messages (e.g., city not found)
- 📱 Responsive and modern UI with **Bootstrap 5**
- 🎬 Smooth CSS animations

---

## 🛠️ Tech Stack

- ⚛️ **React 18 + TypeScript**
- 🎨 **Bootstrap 5**
- 🌤 **OpenWeatherMap API**
- 💅 **Custom CSS animations**

---

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
````

### 2. Install dependencies

```bash
npm install
```

### 3. Setup API key

1. Go to [OpenWeatherMap](https://openweathermap.org/api) and **register**.
2. Copy your free **API KEY**.
3. In `Weather.tsx`, replace:

   ```ts
   const API_KEY = "your_api_key_here";
   ```

### 4. Run the project

```bash
npm run dev
```

👉 By default: [http://localhost:5173](http://localhost:5173)

---

## 📂 Project Structure

```
weather-app/
│── src/
│   ├── App/
│   │   ├── services/
│   │   │   └── weather/
│   │   ├── Weather.tsx     # Main weather component
│   │   └── Weather.css     # Styles & animations
│   ├── Header.tsx          # Stylish header component
│   ├── data.ts             # Header content
│   ├── App.tsx
│   └── main.tsx            # Entry point
│── package.json
│── tsconfig.json
│── README.md
```

---

## 📜 Usage Example

1. Enter the name of a city (e.g. `Berlin,de`)
2. Click **"Get Weather"**
3. View the forecast for the next **7 intervals**

---

# 🎨 Header Component

A stylish **React + TypeScript** header with dynamic content and animations.
It fetches data from `data.ts` and renders a **card with image, headline, and text**.

---

## ✨ Features

* 🌈 Gradient background (`linear-gradient(135deg, #007bff, #6610f2)`)
* 🎭 Toggle animation between **Show More / Hide Details**
* 🖼 Responsive card with image, title, headline, and text
* ⚡ Smooth fade-in transitions (Bootstrap + animate.css)

---

## 📦 Installation & Usage

1. Import the component:

   ```tsx
   import Header from "./Header";
   ```

2. Use it inside your app:

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

```ts
// data.ts
export type ComponentData = {
  title: string;
  url: string;
  headline: string;
  text: string;
};

export const text: ComponentData[] = [
  {
    title: "Weather App Info",
    url: "https://via.placeholder.com/600x300.png?text=Weather+App",
    headline: "Check the weather anywhere",
    text: "This is a weather forecast app built with React and Bootstrap."
  }
];
```

---

## 🖼 Interface

🔹 Initial state:

```
This is Weather App
[ Show More ]
```

🔹 After clicking **Show More**:

* 📝 Title (`element.title`)
* 🖼 Image (`element.url`)
* 💬 Headline (`element.headline`)
* 📖 Text (`element.text`)
* 🔗 "Learn More" button

---

## 🛠️ Technologies

* ⚛️ **React + TypeScript**
* 🎨 **Bootstrap 5**
* ✨ **animate.css**
* 💡 Custom shadows & gradients

---

## 🔮 Future Improvements

* 📌 Support multiple cards (carousel / grid view)
* 🎛 Add props for full customization
* 🎨 Replace inline styles with SCSS modules
* 🌍 Add routing for "Learn More" button


---

## 🚀 Deploy

Easily deploy to:

* [Vercel](https://vercel.com/)
* [Netlify](https://www.netlify.com/)
* GitHub Pages

### Example (Vercel)

```bash
npm run build
vercel
```
