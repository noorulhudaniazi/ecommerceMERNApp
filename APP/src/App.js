import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Addlisting from './adminpage/addlisting';
import Productpage from './pages/productpage';
import Protectedpanel from './adminpage/Protectedpanel';
import Aboutus from './pages/aboutus';
import Blog from './pages/blog';
import Cantact from './pages/Cantact';
import OpenProd from './pages/OpenProd';
import Cart from './pages/cart';
import Signsup from './pages/signup/signsup';
import SignIn from './pages/signup/signIn';
import AdminLogin from './adminpage/adminlogin';
import AdmProduct from './adminpage/Admproduct';
import DashAdmin from './adminpage/DashAdmin';
import ADMOrders from './adminpage/ADMOrders';


function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<Aboutus />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contactUs' element={<Cantact />} />
          <Route path='/product' element={<Productpage />} />
          <Route path='/oproduct/:id' element={<OpenProd />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/signup' element={<Signsup />} />
          <Route path='/signin' element={<SignIn />} />


          <Route path='/adminlogin' element={<AdminLogin />} />
          <Route element={<Protectedpanel />}>
            <Route path='/adlisting' element={<Addlisting />} />
            <Route path='/admproduct' element={<AdmProduct />} />
            <Route path='/admindashboard' element={<DashAdmin />} />
            <Route path='/ordermanage' element={<ADMOrders />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
