# OpenMarket

A modern full-stack e-commerce marketplace platform that enables buyers and sellers to exchange goods ranging from second-hand items to new products. Built with React frontend and Java Spring Boot backend.

## 🚀 Overview

OpenMarket is a comprehensive e-commerce platform designed to facilitate seamless transactions between buyers and sellers. The platform features a dual-role system where users can register as buyers or sellers and freely act as both, providing flexibility for all marketplace participants. With an integrated real-time chat system, stakeholders can communicate directly within the platform.

## ✨ Key Features

### Marketplace Features
- 🔄 **Dual-Role System**: Register as a buyer or seller, act as both
- 🛍️ **Product Exchange**: Trade second-hand goods and new products
- 🔥 **Flash Deals**: Time-sensitive offers and promotions
- ⭐ **Product Ratings & Reviews**: Community-driven quality assurance
- 🎯 **Category-Based Navigation**: Easy product discovery
- 📦 **Product Management**: Comprehensive listing and inventory tools

### Communication
- 💬 **Inbuilt Chat System**: Real-time messaging between buyers and sellers
- 📞 **Contact Support**: Direct communication channels for assistance
- 💡 **Help Center**: Comprehensive FAQs and support documentation

### User Management
- 🔐 **Authentication**: Secure login and registration system
- 👤 **Profile Management**: Separate buyer and seller profiles
- 📊 **Dashboard**: Personalized user interface for managing activities
- 👥 **Top Makers Showcase**: Featured sellers and their products

### Platform Features
- 🎨 **Modern UI/UX**: Clean, responsive design with Tailwind CSS
- 📱 **Mobile-Friendly**: Optimized for all device sizes
- 🌐 **RESTful API**: Well-structured backend services
- 🔒 **Secure Transactions**: Built with security best practices

## 🛠️ Technology Stack

### Frontend
- **Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Routing**: React Router 7.12.0
- **Styling**: Tailwind CSS 4.1.18
- **State Management**: React Hooks
- **Notifications**: React Hot Toast
- **Icons**: Material Symbols
- **Fonts**: Inter (Google Fonts)

### Backend
- **Framework**: Java Spring Boot
- **Database**: PostgreSQL
- **API Architecture**: RESTful
- **Real-time Communication**: WebSocket (for chat system)

### Development Tools
- **Code Quality**: ESLint
- **Package Managers**: npm, pnpm, or yarn support

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

### Frontend Requirements
- Node.js (v16 or higher)
- npm, pnpm, or yarn package manager

### Backend Requirements
- Java JDK 11 or higher
- Maven or Gradle
- PostgreSQL 12 or higher

## 🚀 Getting Started

### Database Setup

1. Install PostgreSQL and create a database:
```sql
CREATE DATABASE openmarket;
CREATE USER openmarket_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE openmarket TO openmarket_user;
```

2. Configure the database connection in your Spring Boot application properties.

### Backend Setup

1. Navigate to the backend directory (if separate):
```bash
cd backend
```

2. Configure `application.properties` or `application.yml`:
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/openmarket
spring.datasource.username=openmarket_user
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
```

3. Build and run the Spring Boot application:
```bash
# Using Maven
mvn clean install
mvn spring-boot:run

# Using Gradle
gradle build
gradle bootRun
```

The backend API will typically run on `http://localhost:8080`.

### Frontend Setup

1. Navigate to the frontend directory (or root if integrated):
```bash
cd /path/to/OpenMarket
```

2. Install dependencies:
```bash
# Using npm
npm install

# Using pnpm
pnpm install

# Using yarn
yarn install
```

3. Configure API endpoint (create `.env` file if needed):
```env
VITE_API_BASE_URL=http://localhost:8080/api
```

4. Start the development server:
```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

The frontend will be available at `http://localhost:5173` (default Vite port).

## 📁 Project Structure

```
OpenMarket/
├── backend/                 # Spring Boot backend (if separate)
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/openmarket/
│   │   │   │       ├── controller/     # REST controllers
│   │   │   │       ├── service/        # Business logic
│   │   │   │       ├── repository/     # Data access layer
│   │   │   │       ├── model/          # Entity models
│   │   │   │       ├── dto/            # Data transfer objects
│   │   │   │       ├── config/         # Configuration classes
│   │   │   │       └── security/       # Security configurations
│   │   │   └── resources/
│   │   │       ├── application.properties
│   │   │       └── static/
│   │   └── test/               # Backend tests
│   ├── pom.xml                 # Maven dependencies
│   └── build.gradle            # Or Gradle build file
│
├── frontend/                # React frontend (or root level)
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── assets/          # Images, icons, and other assets
│   │   ├── components/      # Reusable React components
│   │   │   ├── ui/          # UI components (Header, Footer, Button, etc.)
│   │   │   ├── categories/  # Category-related components
│   │   │   ├── deals/       # Flash deals components
│   │   │   ├── product/     # Product-related components
│   │   │   ├── sellers/     # Seller/maker components
│   │   │   ├── trending/    # Trending products components
│   │   │   └── chat/        # Chat system components
│   │   ├── pages/           # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── AboutUs.jsx
│   │   │   ├── ProductDetails.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── SignUp.jsx
│   │   │   ├── ContactUs.jsx
│   │   │   └── HelpCenter.jsx
│   │   ├── services/        # API service calls
│   │   ├── utils/           # Utility functions and data
│   │   ├── App.jsx          # Main App component with routing
│   │   ├── main.jsx         # Application entry point
│   │   └── index.css        # Global styles
│   ├── index.html           # HTML template
│   ├── vite.config.js       # Vite configuration
│   ├── tailwind.config.js   # Tailwind CSS configuration
│   └── package.json         # Frontend dependencies
│
├── database/                # Database scripts (optional)
│   ├── schema.sql           # Database schema
│   └── seed.sql             # Sample data
│
└── README.md                # This file
```

## 🗺️ API Endpoints (Example Structure)

### Authentication
- `POST /api/auth/register` - Register new user (buyer/seller)
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/profile` - Get user profile

### Products
- `GET /api/products` - List all products
- `GET /api/products/{id}` - Get product details
- `POST /api/products` - Create new product (seller)
- `PUT /api/products/{id}` - Update product (seller)
- `DELETE /api/products/{id}` - Delete product (seller)
- `GET /api/products/category/{category}` - Filter by category

### Users
- `GET /api/users/{id}` - Get user profile
- `PUT /api/users/{id}` - Update user profile
- `POST /api/users/buyer-profile` - Setup buyer profile
- `POST /api/users/seller-profile` - Setup seller profile

### Chat
- `GET /api/chat/conversations` - Get user conversations
- `GET /api/chat/messages/{conversationId}` - Get conversation messages
- `POST /api/chat/messages` - Send message
- `WebSocket /ws/chat` - Real-time chat connection

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders` - Get user orders
- `GET /api/orders/{id}` - Get order details
- `PUT /api/orders/{id}/status` - Update order status

## 🔄 Frontend Routes

- `/` - Homepage with product listings
- `/product/:productId` - Product details page
- `/login` - User login page
- `/signup` - User registration page
- `/setBuyerProfile` - Buyer profile setup
- `/setSellerProfile` - Seller profile setup
- `/aboutUs` - About us page
- `/contactUs` - Contact page
- `/helpCenter` - Help center with FAQs
- `/chat` - Chat interface (planned)
- `/dashboard` - User dashboard (planned)

## 🏗️ Development

### Frontend Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

### Backend Development

```bash
# Run tests
mvn test
# or
gradle test

# Build
mvn clean package
# or
gradle build

# Run with live reload (Spring Boot DevTools)
mvn spring-boot:run
# or
gradle bootRun
```

## 🧪 Testing

### Frontend Testing
```bash
# Run frontend tests (if configured)
npm run test
```

### Backend Testing
```bash
# Run backend unit tests
mvn test

# Run integration tests
mvn verify
```

## 🚢 Deployment

### Production Build

1. **Backend**:
```bash
mvn clean package
# The JAR file will be in target/ directory
java -jar target/openmarket-backend.jar
```

2. **Frontend**:
```bash
npm run build
# The build will be in dist/ directory
# Deploy to your preferred hosting service
```

### Environment Variables

Create appropriate `.env` files for different environments:

**Frontend (.env.production)**:
```env
VITE_API_BASE_URL=https://api.yourdomain.com
VITE_WS_URL=wss://api.yourdomain.com/ws
```

**Backend (application-prod.properties)**:
```properties
spring.datasource.url=${DATABASE_URL}
spring.datasource.username=${DB_USERNAME}
spring.datasource.password=${DB_PASSWORD}
server.port=${PORT:8080}
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature-name`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature-name`)
5. Open a Pull Request

### Coding Standards
- Follow Java naming conventions for backend code
- Use ESLint rules for frontend code
- Write unit tests for new features
- Update documentation as needed

## 🔒 Security

- All passwords are hashed using bcrypt
- JWT tokens for authentication
- CORS configuration for API security
- SQL injection prevention through JPA/Hibernate
- XSS protection on frontend
- HTTPS recommended for production

## 🌟 Core Principles

OpenMarket is built on:
- **Radical Inclusion**: Removing financial and technical friction for every aspiring merchant
- **Unwavering Trust**: Building the world's most transparent commerce protocol with zero-trust security
- **Open Exchange**: Enabling free trade of goods from second-hand to new products
- **Direct Communication**: Empowering buyers and sellers through integrated chat

## 📧 Support

For questions, support, or feedback:
- Visit the Help Center within the application
- Contact us through the Contact page
- Submit issues on GitHub

## 📝 License

This project is private and proprietary.

## 👥 Contributors

OpenMarket is developed and maintained by a dedicated team passionate about creating accessible e-commerce solutions.

---

Built with ❤️ by the OpenMarket Team

## 🗺️ Roadmap

- [x] Core marketplace functionality
- [x] User authentication and profiles
- [x] Product listing and browsing
- [x] Dual-role buyer/seller system
- [x] Inbuilt chat system
- [ ] Payment gateway integration
- [ ] Advanced search and filters
- [ ] Mobile applications (iOS/Android)
- [ ] Seller analytics dashboard
- [ ] Order tracking system
- [ ] Review and rating system enhancements
