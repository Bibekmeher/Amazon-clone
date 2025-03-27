# Amazon Clone - E-Commerce Store

This project is built using **React, Vite, and React Bootstrap**. It delivers a responsive shopping experience with essential e-commerce functionalities, including product browsing, search, filtering, cart management, checkout, and theme switching.

## 🚀 Live Demo & Repository
- **Live Site:** [Amazon-clone](https://amazon-frontend-dev.netlify.app/)
- **GitHub Repository:** [Bibek/amazon-clone-incture](https://github.com/Bibekmeher/Amazon-clone)
- **Screenshots:** [Google Drive]()

---

## ✨ Features

### 🛍️ Product Display
- Products are dynamically loaded from a mock API.
- Items are presented in a **grid layout** using the `ProductCard` component.
- Each product card includes **title, price, rating, and an "Add to Cart" button**.

### 🔎 Search & Filtering
- Users can search for products via the navigation bar.
- **Filters:**
  - **Category-based filtering**
  - **Price range filtering**
- Search results are shown on a dedicated `ProductSearchResults` page.

### 🛒 Cart System
- Users can **add, update, and remove** items in their cart.
- Cart state is managed using **Context API** and stored in **local storage**.
- The `CartPage` displays cart items, total cost, and item quantities.

### 💳 Checkout Flow
- The `CheckoutPage` includes a basic checkout form.
- **Form validation** ensures accurate user details and payment info.
- After checkout, the cart is cleared, and the user is redirected to the homepage.

### 🌗 Light & Dark Mode
- A theme toggle allows users to switch between **light and dark themes**.
- Theme preference is **saved in local storage** and applied across sessions.

### 🚧 Error Handling
- An `ErrorBoundary` component is used to **capture and display errors**.

### 📱 Mobile Responsiveness
- The UI is optimized for **all screen sizes**.
- Utilizes **Bootstrap’s grid system** for responsive layouts.

---

## 🛠️ Technologies Used

- **React** - UI development
- **Vite** - Build tool for faster development
- **React Router DOM** - Navigation & routing
- **React Bootstrap** - UI components & styling
- **MUI (Material UI)** - Provides modern, accessible UI components.

## 📂 Project Structure

```
/src
├── assets/                # Static assets (images, logos, etc.)
├── components/            # Reusable React components
│   ├── Footer.css         # Styles for the Footer component
│   ├── Footer.jsx         # Footer component
│   ├── Header.css         # Styles for the Header component
│   ├── Header.jsx         # Header component
│   ├── LeftBar.jsx        # Left sidebar component
│   ├── LeftMenuBox.jsx    # Left menu box component
│   ├── MainSection.jsx    # Main section of the page
│   ├── NavBar.jsx         # Navigation bar component
│   ├── PrimeSlider.jsx    # Prime Slider component (for product showcase)
│   ├── ProductCard.jsx    # Product card component
│   ├── ProductSlider.css  # Styles for the ProductSlider component
│   ├── ProductSlider.jsx  # Product slider component (for product carousel)
│   ├── SearchBar.jsx      # Search bar component
│   └── SearchResults.jsx  # Displays search results based on query
├── contextApi/            # Context providers (e.g., CartContext, ThemeContext)
│   ├── CartContext.jsx    # Manages cart-related state
│   ├── cartReducer.jsx    # Reducer for managing cart actions
│   ├── Context.jsx        # A higher-level context provider if needed
│   └── ThemeContext.jsx   # Manages theme-related state (light/dark mode)
├── details/               # Additional detail components
│   ├── FooterDetail.jsx   # Footer component details
│   ├── LeftBarItem.jsx    # Left bar item component
│   ├── NavBarItem.jsx     # Navigation bar item component
│   ├── OfferDetail.jsx    # Offer details component
│   ├── ProductDetail.jsx  # Product details component
│   ├── ProductPageDetail.jsx # Product page details component
│   └── SliderDetail.jsx   # Slider component for offers or products
├── pages/                 # Pages of the application
│   ├── CartPage.css       # Styles for the CartPage component
│   ├── CartPage.jsx       # Cart page component
│   ├── Checkout.css       # Styles for the CheckoutPage component
│   ├── CheckoutPage.jsx   # Checkout page component
│   ├── Home.jsx           # Home page component
│   ├── ProductPage.css    # Styles for the ProductPage component
│   └── ProductPage.jsx    # Product page component
├── App.css                # Global styles
├── App.jsx                # Main application component
├── index.css              # Additional global styles
├── main.jsx               # Application entry point
├── apis/                  # API-related files (mock or actual API calls)
│   └── fetchProducts.js   # Mock API to fetch product data
└── vite.config.js         # Vite configuration

```

---

## 🔑 Key Components

### 📌 Navbar (`NavBar.jsx`)
- Displays site navigation links, a search bar, and a theme toggle button.

### 📌 Banner (`PrimeSlider.jsx`)
- Shows promotional **carousel banners** on the homepage.

### 📌 ProductCard (`ProductCard.jsx`)
- Displays product details and an "Add to Cart" button.

### 📌 Loader (`Loader.jsx`)
- Shows a **spinner** while data is being fetched.

### 📌 ErrorBoundary (`ErrorBoundary.jsx`)
- Captures unexpected **application errors**.

### 📌 Context API
- **`CartContext.jsx`** - Manages the shopping cart state.
- **`ThemeContext.jsx`** - Handles theme switching.

### 📌 Pages
- **Home (`Home.jsx`)** - Displays featured products & banners.
- **Cart (`CartPage.jsx`)** - Lists items added to the cart.
- **Checkout (`CheckoutPage.jsx`)** - Contains a checkout form.
- **Product Details (`ProductDetail.jsx`)** - Shows detailed product info.
- **Search Results (`SearchResults.jsx`)** - Displays filtered products.
- **Login (`Login.jsx`)** - Handles authentication UI.


## ⚡ Getting Started

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Bibekmeher/Amazon-clone
cd Amazon-clone
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run the Development Server
```sh
npm run dev
```

### 4️⃣ Build for Production
```sh
npm run build
```

### 5️⃣ Preview the Production Build
```sh
npm run preview
```

---

## 🎯 Contribution
Feel free to fork the repository and submit **pull requests** with improvements or bug fixes.

---

## 📝 License
This project is for educational purposes and is **not affiliated** with Amazon.
