// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'; // ✅ Global CSS

// Public Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import HomeDecor from './pages/HomeDecor';
import Gents from './pages/Gents';
import PartyWear from './pages/PartyWear';
import SummerCollection from './pages/SummerCollection';
import WinterCollection from './pages/WinterCollection';
import ProductPage from './UI/ProductPage';
import CartEmpty from './UI/CartEmpty';
import Login from './UI/Login';
import Signup from './UI/Signup';
import Error from './UI/Error';

// Admin Panel
import AdminProductPanel from './admin-pannel/AdminProductPanel';
import Customer from './admin-pannel/Customer';
import Order from './admin-pannel/Order';
import Product from './admin-pannel/Product';
import Dashboard from './admin-pannel/Dashboard';
import UserProfile from './admin-pannel/UserProfile';
import AddProduct from './admin-pannel/AddProduct';
import User from './admin-pannel/User';
import AddUser from './admin-pannel/AddUser';
import AddOrders from './admin-pannel/AddOrders';
import ViewProduct from './admin-pannel/ViewProduct';
import ViewUser from './admin-pannel/ViewUser';
import ViewOrder from './admin-pannel/ViewOrder';

const router = createBrowserRouter([
  // Public Routes
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Signup /> },
  { path: '/shop', element: <Shop /> },
  { path: '/summer', element: <SummerCollection /> },
  { path: '/winter', element: <WinterCollection /> },
  { path: '/gents', element: <Gents /> },
  { path: '/party', element: <PartyWear /> },
  { path: '/homedecor', element: <HomeDecor /> },
  { path: '/cart', element: <CartEmpty /> },
  { path: '/product/:id', element: <ProductPage /> },
  { path: '/userProfile', element: <UserProfile /> },

  // Admin Routes
  { path: '/admin', element: <AdminProductPanel /> },
  { path: '/customer', element: <Customer /> },
  { path: '/order', element: <Order /> },
  { path: '/products', element: <Product /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/addproduct', element: <AddProduct /> },
  { path: '/addproduct/:id', element: <AddProduct /> },
  { path: '/user', element: <User /> },
  { path: '/addUser', element: <AddUser /> },
  { path: '/addUser/:id', element: <AddUser /> },
  { path: '/viewUser/:id', element: <ViewUser /> },
  { path: '/addOrders/:id', element: <AddOrders /> }, // ✅ Added to support Edit Order
  { path: '/viewProduct/:id', element: <ViewProduct /> },
{ path: '/addOrder', element: <AddOrders /> },
{ path: '/addOrder/:id', element: <AddOrders /> }, // Edit
{ path: '/viewOrder/:id', element: <ViewOrder /> },

  // 404 Catch-all
  { path: '*', element: <Error /> }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
