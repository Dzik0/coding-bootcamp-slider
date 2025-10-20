# 🎓 Coding Bootcamp Slider

A responsive testimonial slider built with **React**, **TypeScript**, **Tailwind CSS**, and **Motion** for animation.  
Showcases user feedback dynamically with smooth transitions for mobile and desktop views.

---

## 📸 Preview

![Coding Bootcamp Slider Screenshot](/screenshot.jpg)

LIVE: [https://dzik0.github.io/coding-bootcamp-slider](https://dzik0.github.io/coding-bootcamp-slider)

---

## 🚀 Features

- 📱 **Responsive Layout**  
  Separate components optimized for mobile and desktop views.

- 🎞️ **Animated Transitions**  
  Smooth fade in/out of testimonials using the `motion` library.

- 👥 **Dynamic Data**  
  Displays user photo, name, position, and testimonial quote.

- ⏱️ **Auto Slide**  
  Automatically advances every 10 seconds with manual control arrows.

- 🔄 **Infinite Loop**  
  Continuous cycling through testimonials with seamless navigation.

---

## 🛠️ Tech Stack

- **React 18** with hooks
- **TypeScript**
- **Tailwind CSS** for styling
- **Motion** (`motion/react`) for animations
- Vite for fast bundling and development

---

## 📁 File Structure

```
src/
│
├── components/
│   ├── MobileComponent.tsx      # Mobile slider UI & controls
│   ├── PcComponent.tsx          # Desktop slider UI & controls
├── assets/
│   ├── image-john.jpg
│   ├── image-tanya.jpg
│   ├── pattern-bg.svg
│   ├── pattern-curve.svg
│   ├── pattern-quotes.svg
│   ├── icon-prev.svg
│   └── icon-next.svg
├── App.tsx                     # Main logic & state management
├── index.css                   # Tailwind & global styles
public/
└── screenshot.jpg              # Project preview image
```

---

## 🧠 How It Works

- Maintains current shown testimonial ID in state.
- Uses buttons and automatic timer (`useEffect` + `setInterval`) to shift slides.
- Renders mobile or desktop slider based on viewport width (with Tailwind classes).
- Each slide fades in/out with motion animations.
- Navigation buttons wrap around testimonial list.

---

## 📦 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Dzik0/coding-bootcamp-slider.git
   cd coding-bootcamp-slider
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

---

## ✅ Future Improvements

- Add swipe gesture support for mobile slides
- Add pagination dots below testimonials
- Improve accessibility (keyboard navigation, ARIA roles)
- Add unit and integration tests

---

## 👨‍💻 Author

**Dzik0**  
GitHub: [https://github.com/Dzik0](https://github.com/Dzik0)

---

## 📝 License

Open source, licensed under the [MIT License](LICENSE).

---
