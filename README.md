# 🛍️ Product Management System

A modern e-commerce product management system built using **React (Vite)** and **JSON Server**. It includes both **Admin Panel (CRUD)** and **Client-side features** such as cart, search, filters, and sorting. Designed for performance and a smooth user experience.

---

## 🚀 Live Preview
> Coming soon — or deploy it using [Vercel](https://vercel.com/), [Netlify](https://netlify.com/), or [Render](https://render.com/).

---

## 🧰 Tech Stack

| Technology         | Role                      |
|--------------------|---------------------------|
| React (Vite)       | Frontend                  |
| useState/useEffect | State Management          |
| Axios              | HTTP Client               |
| JSON Server        | Mock API Backend          |
| Tailwind / Bootstrap | UI Styling             |
| React Icons        | UI Icons                  |
| React Toastify     | Notifications             |

---

## 📁 Project Structure

```
product-management-system/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── Aside.jsx
│   │   ├── CartComponent.jsx
│   │   ├── FilterComponent.jsx
│   │   ├── Header.jsx
│   │   ├── ProductCard.jsx
│   │   ├── SearchComponent.jsx
│   │   └── SortComponent.jsx
│   ├── pages/
│   │   ├── Client.jsx
│   │   ├── Form.jsx
│   │   ├── Home.jsx
│   │   └── Table.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── db.json
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```
---

## 📦 Installation & Setup

```bash
# 1️⃣ Clone Repo
git clone https://github.com/Shubhamparekh04/product-management-system-test.git
cd product-management-system-test

# 2️⃣ Install Dependencies
npm install

# 3️⃣ Start JSON Server
npx json-server --watch db.json --port 5000

# 4️⃣ Start React App
npm run dev
```

---

## 🧠 Features

### 🔧 Admin Panel
- ✅ Create / Read / Update / Delete Products
- ✅ Syncs with JSON Server via Axios

### 🛍️ Client Side
- ✅ Product List with details (image, SKU, etc.)
- ✅ Add to Cart (with quantity)
- ✅ Cart Total Calculation
- ✅ Search, Sort, and Filter by:
  - Price
  - Rating
  - Brand
  - Category
  - Stock

### 📊 Bonus Features
- Product count by category
- Average price by category
- Out-of-stock statistics

---

## 🔗 API Endpoints (`src/api.js`)

```js
const API_URL = "http://localhost:5000/products";
export const getProducts = () => axios.get(API_URL);
export const getProductById = (id) => axios.get(`${API_URL}/${id}`);
export const addProduct = (data) => axios.post(API_URL, data);
export const updateProduct = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteProduct = (id) => axios.delete(`${API_URL}/${id}`);
```

---

## ✨ UI/UX
- Clean responsive layout (Bootstrap)
- Product image hover effect
- Toast messages for actions
- Optional modal forms
- Mobile-friendly

---

## 🧪 Sample Categories (20+ Products)

- 👕 Menswear
- 💻 Laptops
- 📱 Mobiles
- 📺 Electronics
- 🪑 Furniture

---

## ✅ Final Checklist

| Feature                       | Status |
|------------------------------|--------|
| CRUD with Axios              | ✅     |
| JSON Server Integration      | ✅     |
| 20+ Product Entries          | ✅     |
| Cart Management              | ✅     |
| Search, Filter, Sort         | ✅     |
| Rating-Based Sorting         | ✅     |
| Responsive UI/UX             | ✅     |

---



## 🙌 Acknowledgements

- React
- JSON Server
- Tailwind CSS / Bootstrap
- React Icons
- React Toastify
