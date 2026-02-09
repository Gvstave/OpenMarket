# OpenMarket

A modern e-commerce marketplace platform built with React, designed to connect buyers and sellers in an intuitive and seamless shopping experience.

## 🚀 Overview

OpenMarket is a full-featured e-commerce web application that provides a comprehensive marketplace for buyers and sellers. The platform features a clean, responsive design with modern UI components, product browsing, user authentication, and detailed product views.

## ✨ Features

### For Buyers
- 🛍️ Browse products by categories
- 🔥 Flash deals and trending products
- ⭐ Product ratings and reviews
- 🔍 Detailed product information
- 👤 User profile management
- 🛒 Intuitive shopping interface

### For Sellers
- 📦 Product listing management
- 👥 Top makers showcase
- 📊 Seller profiles
- 💼 Business management tools

### General Features
- 🎨 Modern, responsive design with Tailwind CSS
- 🔐 User authentication (Login/Sign Up)
- 📱 Mobile-friendly interface
- 🎯 Category-based navigation
- 💬 Help center and FAQs
- 📞 Contact and support
- ℹ️ About us page with mission and team information

## 🛠️ Technologies Used

- **Frontend Framework:** React 19.2.0
- **Routing:** React Router 7.12.0
- **Styling:** Tailwind CSS 4.1.18
- **Build Tool:** Vite 7.2.4
- **UI Components:** Custom components with Material Symbols
- **Notifications:** React Hot Toast
- **State Management:** React hooks
- **Fonts:** Inter (Google Fonts)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm, pnpm, or yarn package manager

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Gvstave/OpenMarket.git
cd OpenMarket
```

2. Install dependencies using your preferred package manager:

Using npm:
```bash
npm install
```

Using pnpm:
```bash
pnpm install
```

Using yarn:
```bash
yarn install
```

### Development

Start the development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

The application will be available at `http://localhost:5173` (default Vite port).

### Building for Production

Create a production build:

```bash
npm run build
# or
pnpm build
# or
yarn build
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
# or
pnpm preview
# or
yarn preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
# or
pnpm lint
# or
yarn lint
```

## 📁 Project Structure

```
OpenMarket/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, icons, and other assets
│   ├── components/      # Reusable React components
│   │   ├── ui/          # UI components (Header, Footer, Button, etc.)
│   │   ├── categories/  # Category-related components
│   │   ├── deals/       # Flash deals components
│   │   ├── product/     # Product-related components
│   │   ├── sellers/     # Seller/maker components
│   │   └── trending/    # Trending products components
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── AboutUs.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Login.jsx
│   │   ├── SignUp.jsx
│   │   ├── ContactUs.jsx
│   │   └── HelpCenter.jsx
│   ├── utils/           # Utility functions and data
│   │   ├── products_list.js
│   │   ├── category_list.js
│   │   ├── team_members.js
│   │   ├── mission_items.js
│   │   └── ...
│   ├── App.jsx          # Main App component with routing
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── eslint.config.js     # ESLint configuration
└── package.json         # Project dependencies and scripts
```

## 🗺️ Routing

The application includes the following routes:

- `/` - Homepage with product listings
- `/product/:productId` - Product details page
- `/login` - User login page
- `/signup` - User registration page
- `/setBuyerProfile` - Buyer profile setup
- `/setSellerProfile` - Seller profile setup
- `/aboutUs` - About us page
- `/contactUs` - Contact page
- `/helpCenter` - Help center with FAQs

## 🎨 Styling

OpenMarket uses Tailwind CSS for styling with a custom configuration. The design system includes:

- Custom color palette
- Responsive breakpoints
- Material Symbols icons
- Inter font family
- Custom utility classes

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature-name`)
6. Open a Pull Request

Please ensure your code follows the project's coding standards and passes all linting checks.

## 📝 License

This project is private and proprietary.

## 🌟 Mission

OpenMarket is built on the principles of:
- **Radical Inclusion:** Removing financial and technical friction for every aspiring merchant
- **Unwavering Trust:** Building the world's most transparent commerce protocol with zero-trust security

## 👥 Team

OpenMarket is developed and maintained by a dedicated team of developers passionate about creating accessible e-commerce solutions.

## 📧 Contact

For questions, support, or feedback, please visit our Help Center or Contact Us page within the application.

---

Built with ❤️ by the OpenMarket Team
