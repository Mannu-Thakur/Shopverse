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
<img width="959" height="539" alt="image" src="https://github.com/user-attachments/assets/942e6bed-7904-4c2c-afbe-1efb73695cf9" />
<img width="959" height="533" alt="image" src="https://github.com/user-attachments/assets/e945a155-f0f8-401b-9c61-43a107f03a28" />
<img width="959" height="540" alt="image" src="https://github.com/user-attachments/assets/075db382-fe2d-4f55-8a07-bb7bfd59c82c" />

<img width="959" height="538" alt="image" src="https://github.com/user-attachments/assets/081b98f7-ed98-48c3-9aaf-2941f186e724" />
<img width="958" height="536" alt="image" src="https://github.com/user-attachments/assets/570c0ffd-36c7-423d-b31d-1a1cb1cbfa61" />


## 🔗 Live Links

- **Frontend (Customer Store)**: [https://chasemart-store.vercel.app](https://chasemart-store.vercel.app)
- **Admin Dashboard**: [https://chasemart-admin.vercel.app](https://chasemart-admin.vercel.app)
- **Backend API**: [https://chasemart-backend.onrender.com](https://chasemart-backend.onrender.com)
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
 

## ⭐ If you like this project, consider giving it a star!
