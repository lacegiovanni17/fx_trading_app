# FXTRADINNG APP

## 🌍 FX Trading App – Backend API
This backend API powers a foreign exchange (FX) trading platform where users can securely trade currencies including Naira (NGN) and international currencies like USD, EUR, and GBP 💱.

Built using NestJS, it supports robust features like multi-currency wallets, OTP-based email verification, and real-time FX rate conversion using third-party APIs. The architecture emphasizes security, atomic wallet transactions, and scalability for high-traffic financial operations 🚀.

## ✨ Key Features
* 🔐 User Management: Register with email, verify using OTP, and access platform after activation

* 👛 Wallet System: Multi-currency wallets with funding, balance checking, and secure operations

* 🔄 FX Integration: Real-time FX rate fetching from third-party APIs with Redis caching for performance

* 💱 Currency Conversion & Trading: Convert and trade NGN ↔ other currencies using live FX rates

* 📜 Transaction History: Track trades, funding, and conversions with timestamps, rates, and statuses

* 🛡️ Security: JWT-based authentication, role-based access (Admin/User), and idempotent transaction handling

* 📈 Analytics & Logging: Track FX trends, trade logs, and user activity for business intelligence

## ⚙️ Tech Stack
     *  Framework: NestJS

     *  ORM: TypeORM

     *  Database: MySQL/PostgreSQL

     *  Caching: Redis (for FX rates)

     *  Email Service: Nodemailer (SMTP)

## 📁 Deliverables
✅ Fully functional GitHub repository with clean modular codebase

📝 Comprehensive README with setup guide, API documentation (Swagger), and design decisions

📫 .env.example file for environment variables

📦 Postman collection or Swagger UI for testing

🧪 (Optional) Unit tests for wallet and trade logic

🧠 Bonus: Flow diagrams of wallet/trade logic & dynamic utilities like pagination

## 🧭 Design Decisions
Modular, scalable architecture for multi-currency support and API evolution

Cached FX rates to reduce API hits and improve performance

Atomic transactions for wallet safety

Pagination and utility functions built for reusability across the app
