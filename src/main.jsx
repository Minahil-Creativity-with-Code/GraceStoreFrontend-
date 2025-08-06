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
import Lawn from './pages/Lawn';

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
import Bedding from './UI/Bedding';
import Clothing from './UI/Clothing';
import ClutchBag from './UI/ClutchBag';
import MattressCovers from './UI/MattressCovers';
import SofaCovers from './UI/SofaCovers';
import WashingMachineCovers from './UI/WashingMachineCovers';
import EmbroideredDuppata from './pages/EmbroideredDuppata';
import Silk from './pages/Silk';
import Linen from './pages/Linen';
import Organza from './pages/Organza';

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
  { path: '/home-decor', element: <HomeDecor /> },
  { path: '/cart', element: <CartEmpty /> },
  { path: '/product/:id', element: <ProductPage /> },
  { path: '/userProfile', element: <UserProfile /> },
  { path: '/bedding', element: <Bedding /> },
  { path: '/clothing', element: <Clothing /> },
  { path: '/clutch-bag', element: <ClutchBag /> },
  { path: '/mattress-covers', element: <MattressCovers /> },
  { path: '/sofa-covers', element: <SofaCovers /> },
  { path: '/washing-machine-covers', element: <WashingMachineCovers /> },
  { path: '/lawn', element: <Lawn /> },
  { path: '/embroideredDuppata', element: <EmbroideredDuppata /> },
  { path: '/linen', element: <Linen /> },
  { path: '/silk', element: <Silk /> },
  { path: '/organza', element: <Organza /> },
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
  { path: '/addOrders/:id', element: <AddOrders /> },
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
