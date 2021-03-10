import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";

// pages for this product
import New from "./views/New/New.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import UploadProductPage from "./views/UploadProductPage/UploadProductPage.js"
import CartPage from "./views/CartPage/CartPage"
import HistoryPage from "./views/HistoryPage/HistoryPage"

import Main from './views/Main/Main';
import './App.css';
import Categories from './views/Categories/Categories';
import DIY from './views/DIY/DIY';
import Bouquet from './views/Bouquet/Bouquet';
import Basket from './views/Basket/Basket';
import Special from './views/Special/Special';
import Pollen from './views/Pollen/Pollen';
import DetailProductpage from '../components/views/DetailProductpage/DetailProductpage';



function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <Categories />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(Main, null)} />
          <Route exact path="/New" component={Auth(New, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/product/upload" component={Auth(UploadProductPage, true)} />
          <Route exact path="/user/cart" component={Auth(CartPage, true)} />
          <Route exact path="/product/:productId" component={Auth(DetailProductpage, null)} />
          <Route exact path="/history" component={Auth(HistoryPage, true)} />

          <Route path="/DIY" component={DIY} />
          <Route path="/Bouquet" component={Bouquet} />
          <Route path="/Basket" component={Basket} />
          <Route path="/Special" component={Special} />
          <Route path="/Pollen" component={Pollen} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
