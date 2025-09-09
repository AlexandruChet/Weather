---

````markdown
# 🌍 Weather App

---

## 📌 Opportunities

- Search for the weather forecast in the city
- Display of **temperature**, **date/time**, **weather icon** and its **description**
- Loading with an indicator (`spinner')
- Errors with understandable messages (for example, if the city is not found)
- Responsive design using **Bootstrap 5**
- Easy animation via CSS

---

## 🛠️ Technology stack

- ⚛️ **React + TypeScript**
- 🎨 **Bootstrap 5**
- 🌤 **OpenWeatherMap API**
- 💅 **CSS animations**

---

## 📦 Installation and launch

````

### 1. Installation of dependencies

```bash
npm install
```

### 2. Setting up the API key

* Go to [OpenWeatherMap](https://openweathermap.org/api) and register.
* Get a free **API KEY**.
* In the file `Weather.tsx` replace:

```ts
const API_KEY = "aa99c2209fe9601572ce408e2236898f";
```

on your own key.

### 3. Project launch

```bash
npm run dev
```

By default, the application will be available on
👉 [http://localhost:5173](http://localhost:5173)

---

## 📁 Project structure

```
weather-app/
│── src/
│ ├──App/
│ │└── services
│ │ └── weather
│ │ └── Weather.tsx # Main component
│ │ └──Weather.css # Styles
│ └──App.tsx
│ └── main.tsx # Entry point
│── package.json
│── tsconfig.json
│── README.md
```

---

## 📜 Usage example

1. Enter the name of the city (for example: `Berlin,de`)
2. Press **"Get Weather"**
3. Get a weather forecast for the next 7 intervals

---

## 🚀 Deploy

You can deploy the application to:

* [Vercel](https://vercel.com/)
* [Netlify](https://www.netlify.com/)
* GitHub Pages

Example for Vercel:

```bash
npm run build
vercel
```
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