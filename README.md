# 📖 README.md

# ⚛️ React Router Complete Guide
# main commands: mine
npm install
npm install -g json-server
json-server --watch db.json --port 5000

## 📌 Project Overview
This project is a **comprehensive guide and practical demo** of **React Router** built with **Vite**.  
It covers essential to advanced routing concepts like:

- **Layout Routes** (Persistent header/footer)  
- **Basic Routing** (`Home`, `Products`, `About`, `Contact`, `Jobs`)  
- **Nested Routes** using `Outlet` (`/contact/info`, `/contact/form`)  
- **Dynamic Routes & Loaders** (`/jobs/:id`)  
- **Data Fetching** with **JSON Server** (Mock API)  
- **Error Handling** (404 & loader errors)  

---

## 🚀 Getting Started

### 🔑 Prerequisites
- Node.js  
- npm (comes with Node.js)  

---

### 📂 Clone the Repository
```bash
git clone <YOUR_REPOSITORY_URL>
cd React-Router-Complete-Guide

# ⚛️ React Router + Mock API Project Setup

## 📦 Install Project Dependencies
```bash
npm install

# ⚛️ React Router Complete Guide with Mock API

## 📌 Project Overview
This project is a **complete guide + practical demo** of **React Router** (with Vite) and **Mock API using JSON Server**.  
It covers essential to advanced routing concepts including layout routes, nested routes, dynamic routes, error pages, and data fetching with loaders.

---

## 🛠️ Setup Mock API (JSON Server)

### 1️⃣ Install JSON Server
```bash
npm install -g json-server

2️⃣ Start Mock API Server
json-server --watch db.json --port 5000

📌 Base URL: http://localhost:5000

Endpoints:

/jobs → Get all jobs  
/jobs/:id → Get job by ID  

▶️ Run React Development Server  
npm run dev  

📌 App URL: http://localhost:5173  

🌐 Routes Overview  

Route Path        | Description                |  
------------------|----------------------------|  
/                 | Home Page                  |  
/products         | Products Page              |  
/about            | About Page                 |  
/contact          | Contact Page (Parent Route)|  
/contact/info     | Nested Route → Contact Info|  
/contact/form     | Nested Route → Contact Form|  
/jobs/:id         | Dynamic Job Route (Loader) |  
*                 | Error Page (404 / Loader)  |  

🖼️ Screenshots  

All screenshots should be saved inside a folder named `/screenshots` at the project root.  

Route Path        | Description                | Screenshot Example                  |  
------------------|----------------------------|-------------------------------------|  
/                 | Home Page                  | /assets/home.png               |  
/products         | Products Page              | /screenshots/products.png           |  
/about            | About Page                 | /screenshots/about.png              |  
/contact          | Contact Page               | /screenshots/contact.png            |  
/contact/info     | Nested Route (Info)        | /screenshots/contact info.png       |  
/contact/form     | Nested Route (Form)        | /screenshots/contact form.png       |  
/jobs/1           | Job Details Example        | /screenshots/jobs.png        |  
*                 | Error Page (404)           | /screenshots/json20.png                |  

📝 Initial Setup (Fresh Project)  

# 1. Create React + Vite project  
npx create-vite@latest <project-name>  

# 2. Navigate into project  
cd <project-name>  

# 3. Install dependencies  
npm install  

# 4. Install JSON Server globally  
npm install -g json-server  

🤝 Contribution  

Contributions, issues, and feature requests are welcome!  
Feel free to fork this repo and submit pull requests.  

📄 License  

This project is licensed under the ISC License.  

⚠️ ChatGPT can make mistakes. Check important info.  


