import {BrowserRouter, Switch, Route} from 'react-router-dom'
import React,{useEffect} from 'react'
import './App.css';
import Home from './Pages/Home/home';
import Authentication from './Pages/Authetication/auth.js';
import Category from './Pages/Category/category';
import Categoryproduct from './Pages/CategoryProducts/categoryproduct';
import Checkout from './Pages/Checkout/checkout';
import { connect } from 'react-redux';
import { firebaseAuthListener } from './Redux/Authentication/authActions';
import Test from './Pages/Test/test';
import Navbar from './Components/Navbar/navbar';
import Productdetail from './Pages/ProductDetail/productdetail';


function App({firebaseAuthListener}) {
 useEffect(() =>
  {
    firebaseAuthListener()
    console.log('CMD')
  },[])
  return (
    <div>
      <Navbar/>
      <h1>Buyfy</h1>
      <Switch>
      <div className="pagesContainer">
      <Route path="/" component={Home} exact={true}/>
      <Route path="/authentication" component={Authentication} exact={true}/>
      <Route path="/category" component={Category} exact={true}/>
      <Route path="/category-products/:categoryCheck" component={Categoryproduct} exact={true}/>
      <Route path="/checkout/:orderId" component={Checkout} exact={true}/>
      <Route path="/product/:productId" component={Productdetail} exact={true}/>
      <Route path="/test" component={Test} exact={true}/>
      </div>
     
      </Switch>
      
    </div>
  );
}
var actions = {
  firebaseAuthListener
}
export default connect(null, actions)(App);
