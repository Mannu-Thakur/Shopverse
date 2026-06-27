# 🛍️ Shopverse (CHASEMART)

A modern full-stack MERN E-Commerce platform featuring secure authentication, shopping cart management, online payments, image uploads, and a dedicated admin dashboard for managing products, orders, and users.

Built using React, Node.js, Express.js, MongoDB, Cloudinary, Stripe, and Razorpay.

---

## 🚀 Features

### 👤 Customer

- Secure User Authentication (JWT)
- Browse Products
- Product Search & Filtering
- Shopping Cart
- Place Orders
- Stripe Payment Integration
- Razorpay Payment Integration
- Order History
- Responsive UI

---

### 🛠 Admin Dashboard

- Admin Authentication
- Add Products
- Upload Product Images
- Delete Products
- View Customer Orders
- Update Order Status
- Inventory Management

---

## 🏗️ Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- Axios
- React Router DOM

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer
- Cloudinary

### Payments

- Stripe
- Razorpay

### Deployment

- Frontend → Vercel
- Admin → Vercel
- Backend → Render
- Database → MongoDB Atlas
- Image Storage → Cloudinary

---

# 📂 Project Structure

```
Shopverse
│
├── frontend/         # Customer Website
├── admin/            # Admin Dashboard
├── backend/          # REST API Server
│
└── README.md
```

---

# ✨ Screens

### Customer Website

- Home
- Collections
- Product Details
- Cart
- Checkout
- Orders
- Login

### Admin Panel

- Dashboard
- Add Product
- Product List
- Orders

---

# 🔒 Authentication

- JWT Based Authentication
- Protected Routes
- Admin Authorization Middleware
- Secure Password Storage

---

# 💳 Payment Gateway

Supports:

- Stripe
- Razorpay

Customers can securely place orders using either payment gateway.

---

# ☁️ Image Storage

Product images are uploaded to **Cloudinary** in production.

During development, local uploads are also supported.

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/Mannu-Thakur/Shopverse.git
cd Shopverse
```

---

## Backend

```bash
cd backend
npm install
npm start
```

---

## Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Admin

```bash
cd admin
npm install
npm run dev
```

---

# 🔑 Environment Variables

## Backend

Create `.env`

```
PORT=
MONGODB_URI=
JWT_SECRET=

CLOUDINARY_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_SECRET_KEY=

STRIPE_SECRET_KEY=

RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=

ADMIN_EMAIL=
ADMIN_PASSWORD=
```

---

## Frontend

```
VITE_BACKEND_URL=
```

---

## Admin

```
VITE_BACKEND_URL=
```

---

# 📡 REST API

### User

- Register
- Login
- Get Profile

### Product

- Get Products
- Get Single Product
- Add Product
- Remove Product

### Cart

- Add to Cart
- Update Cart
- Get Cart

### Orders

- Place Order
- Verify Payment
- User Orders
- Admin Orders
- Update Order Status

---

# 🚀 Deployment

| Service | Platform |
|----------|----------|
| Frontend | Vercel |
| Admin | Vercel |
| Backend | Render |
| Database | MongoDB Atlas |
| Images | Cloudinary |

---

# 📈 Future Improvements

- Wishlist
- Product Reviews
- Coupons & Discounts
- Email Notifications
- Inventory Analytics
- Product Recommendations
- Sales Dashboard
- Multi-Vendor Support

---

# 👨‍💻 Author

**Mannu Kumar Thakur**

Computer Engineering Undergraduate

GitHub:
https://github.com/Mannu-Thakur

---

## ⭐ If you like this project, consider giving it a star!
