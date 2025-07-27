import React from 'react';
import Home from './pages/Home'
import ProductPage from './UI/ProductPage';
import CartEmpty from './UI/CartEmpty';
import HomeDecor from './pages/HomeDecor';
import Gents from './pages/Gents';
import PartyWear from './pages/PartyWear';
import Login from './UI/Login';
import Shop from './pages/Shop';
import SummerCollection from './pages/SummerCollection';
import WinterCollection from './pages/WinterCollection';


function App() {

  return (
    <>
      <Home />
      <Login />
      <Shop />
      <SummerCollection />
      <WinterCollection />
      <Gents />
      <PartyWear />
      <HomeDecor />
      <CartEmpty />
      <ProductPage />

    </>
  )
}

export default App;
