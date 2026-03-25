

# # 🏥 Healthcare SaaS Dashboard

A modern, production-ready **B2B Healthcare SaaS frontend application** built with scalability, performance, and real-world UX in mind.

---

## 🚀 Live Demo

👉 https://healthcare-dashboard-saas.vercel.app

## 📂 GitHub Repository

👉 https://github.com/garvit7-23/Healthcare-Dashboard-SAAS

---

## 🎯 Overview

This project simulates a real-world healthcare platform used by doctors, hospitals, and healthcare teams to:

* Manage patient records
* Track health data
* Analyze trends through dashboards
* Ensure secure and seamless authentication

Built as part of a frontend engineering assignment, the focus was not just on completing features — but on **building a scalable, production-grade system**.

---

## ✨ Key Features

### 🔐 Authentication (Firebase)

* Secure login & registration
* Persistent sessions
* Protected routes (Auth Guard)
* Logout & user menu

---

### 📊 Dashboard & Analytics

* Interactive dashboard with key metrics
* Animated statistics (Count-up effect)
* Data visualization using charts
* Clean and intuitive UI

---

### 🧑‍⚕️ Patient Management Module

* Grid view (card-based UI)
* List view (table-based UI)
* Toggle between views
* Status indicators (Active, Recovered, Critical)

---

### 🔔 Notifications

* Browser notifications on login
* Service Worker integration

---

### 🎨 Landing Page (Product Experience)

* Hero section with CTA
* Feature highlights
* How-it-works flow
* Target audience section
* FAQ accordion
* Conversion-focused footer

---

## 🧠 Architecture & Approach

This project was built with **scalability and maintainability** as core principles.

### 📁 Folder Structure

```
src/
 ├── app/
 ├── components/
 │   ├── ui/
 │   ├── layout/
 │   ├── landing/
 │   ├── patients/
 ├── features/
 │   ├── auth/
 ├── data/
 ├── types/
```

---

### ⚙️ Tech Stack

* **Next.js 14 (App Router)**
* **React + TypeScript**
* **Zustand (State Management)**
* **Firebase Authentication**
* **Tailwind CSS (Design System)**
* **Recharts (Data Visualization)**

---

### 🧩 Design System

* Centralized color tokens (CSS variables)
* Reusable UI components (Button, Input, Card)
* Consistent spacing, typography, and shadows
* Scalable component architecture

---

## 🧠 Key Engineering Decisions

* **Zustand over Redux** → minimal boilerplate, better DX
* **Feature-based folder structure** → scalable architecture
* **AuthGuard pattern** → clean route protection
* **Reusable UI system** → consistency across the app
* **Separation of concerns** → UI, logic, and data clearly divided

---

## 📱 Responsiveness

* Fully responsive layout
* Works across desktop and tablet devices
* Mobile-friendly design considerations

---

## 🔐 Environment Setup

Create a `.env.local` file:

```
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
```

---

## 🛠️ Installation

```bash
npm install
npm run dev
```

---

## 📌 Assignment Coverage

| Requirement                    | Status |
| ------------------------------ | ------ |
| Authentication                 | ✅      |
| Dashboard Page                 | ✅      |
| Analytics Page                 | ✅      |
| Patient Module (Grid/List)     | ✅      |
| Notifications (Service Worker) | ✅      |
| State Management               | ✅      |
| UI/UX & Responsiveness         | ✅      |

---

## 🚀 What Makes This Project Stand Out

* Built like a **real SaaS product**, not just an assignment
* Strong focus on **UX, animations, and polish**
* Clean, scalable **architecture**
* Thoughtful **component design system**
* Covers both **product + engineering thinking**

---

## 📈 Future Improvements

* Role-based access control
* Real backend integration
* Advanced filtering & search
* Dark mode
* Micro-frontend architecture

---

## 👨‍💻 Author

**Garvit Gupta**

* Passionate about building scalable frontend systems
* Focused on clean architecture & product thinking

---

## 💬 Final Note

This project reflects not just my ability to build features, but my approach to:

* Designing systems
* Writing maintainable code
* Delivering real-world user experiences

---

👉 Looking forward to contributing and building impactful products 🚀


