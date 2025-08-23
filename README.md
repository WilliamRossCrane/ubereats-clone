# 🍔 Full Stack UberEats Clone

![Project Status](https://img.shields.io/badge/status-initial%20development%20complete-brightgreen)

⚡ **Project Status:** Initial development complete (pending minor bugs). Ready for future development.

This project is a fully functional **UberEats Clone** mobile app developed using **React Native** and **Appwrite**, built during the [JavaScript Mastery](https://jsmastery.pro/) course. It showcases a production-ready architecture designed for seamless food delivery experiences on both iOS and Android.

Created and taught by Adrian Hajdin at JavaScript Mastery, this project covers the entire lifecycle of a scalable mobile app, from authentication and search filtering to cart functionality and database architecture.

![React Native](https://img.shields.io/badge/-React_Native-61DAFB?style=flat-square&logo=react&logoColor=black)
![Expo](https://img.shields.io/badge/-Expo-000020?style=flat-square&logo=expo&logoColor=white)
![Appwrite](https://img.shields.io/badge/-Appwrite-F02E65?style=flat-square&logo=appwrite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Zustand](https://img.shields.io/badge/-Zustand-000000?style=flat-square)
![Sentry](https://img.shields.io/badge/-Sentry-362D59?style=flat-square&logo=sentry&logoColor=white)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)

---

## 🚧 Future Development

The initial release of this UberEats Clone is complete, and the project is now ready for future enhancements. Planned improvements include:

- **Real Stripe Payments & Payment Processing**  
  Integrate a secure payment system for orders. A helpful guide from JavaScript Mastery on adding payments in React Native can be found here:  
  🔗 [Full Stack React Native Payments Tutorial](https://www.youtube.com/watch?v=G1d_rS5qF24)

- **Menu Item Detail Page**  
  Create a dedicated page for each food item to show detailed descriptions, images, and customization options.

- **Profile Screen**  
  Allow users to view and edit their account information, change passwords, and log out of the app.

---

## ⚙️ Tech Stack

- **React Native (Expo)** – Mobile app framework
- **TypeScript** – Strong typing for reliability
- **Appwrite** – Backend-as-a-service (Auth, DB, Storage)
- **Zustand** – Lightweight global state management
- **Sentry** – Error and performance monitoring
- **Tailwind CSS (NativeWind)** – Utility-first styling for mobile

---

## 🔋 Features

👉 **Authentication System**
- Email/password sign-up
- Google OAuth login
- Persistent sessions

👉 **User Experience**
- Home screen with categories and featured restaurants
- Dynamic search and filtering
- Food item details and image display

👉 **Cart System**
- Add/remove items to cart
- Real-time price calculation
- Proceed to checkout functionality

👉 **Database Architecture**
- Scalable restaurant/food data with relationships
- Secure user data and session management

👉 **Error Tracking**
- Sentry integration for monitoring and debugging

👉 **Modern UI/UX**
- Responsive across Android and iOS
- Modular components using clean architecture

---

## 🤸 Quick Start

### ✅ Prerequisites

Make sure you have the following installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

### 📁 Clone the Repository

```bash
git clone https://github.com/yourusername/ubereats-clone.git
cd ubereats-clone

### 📦 Install Dependencies

- npm install
- npx expo install

### 🔐 Set Up Environment Variables

Create a .env file in the root and add:
APPWRITE_ENDPOINT=
APPWRITE_PROJECT_ID=
APPWRITE_DATABASE_ID=
APPWRITE_COLLECTION_ID=
APPWRITE_BUCKET_ID=
SENTRY_DSN=
EXPO_PUBLIC_SERVER_URL=https://ubereats-clone.dev/

### 🚀 Start the App

npx expo start

```
---

## 📺 Course Link

This project is based on the Full Stack Food Delivery App course by JavaScript Mastery.
Watch the full tutorial on YouTube:
🔗 [Build a Full Stack Uber Clone App (YouTube)](https://www.youtube.com/watch?app=desktop&v=LKrX390fJMw)

---

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub and joining the JSMastery community:

- [JS Mastery Discord](https://discord.gg/jsmastery)
- [JS Mastery Pro](https://jsm.dev/uber-jsmpro)
- [More Projects](https://jsm.dev/uber-kit)

