import {BrowserRouter, Switch, Route} from 'react-router-dom'
import React,{useEffect, lazy, Suspense} from 'react'
import './App.css';
// import Home from './Pages/Home/home';
// import Authentication from './Pages/Authetication/auth.jsx';
// import Category from './Pages/Category/category';
// import Categoryproduct from './Pages/CategoryProducts/categoryproduct';
// import Checkout from './Pages/Checkout/checkout';
import { connect } from 'react-redux';
import { firebaseAuthListener } from './Redux/Authentication/authActions';
// import Test from './Pages/Test/test';
import Navbar from './Components/Navbar/navbar';
// import Productdetail from './Pages/ProductDetail/productdetail';

//DYNAMIC IMPORT FOR OPTIMIZATION PURPOSE USING LAZY 
var Home = lazy(()=>import('./Pages/Home/home'))
var Authentication = lazy(()=>import('./Pages/Authetication/auth.jsx'))
var Category = lazy(()=>import('./Pages/Category/category'))
var Categoryproduct = lazy(()=>import('./Pages/CategoryProducts/categoryproduct'))
var Checkout = lazy(()=>import('./Pages/Checkout/checkout'))
var Test = lazy(()=>import('./Pages/Test/test'))
var Productdetail  = lazy(()=>import( './Pages/ProductDetail/productdetail'))

function App({firebaseAuthListener}) {
 useEffect(() =>
  {
    firebaseAuthListener()
  },[])
  return (
    <div>
      <Navbar/>
      <Switch>

      <div className="pagesContainer">
      {/* fallback takes loading spiner or sth like that */}
      {/* whereas suspense wait till we get sth from lazy component from server  */}
      <Suspense fallback={<div>Loading ....</div>}> 
      <Route path="/" component={Home} exact={true}/>
      <Route path="/authentication" component={Authentication} exact={true}/>
      <Route path="/category" component={Category} exact={true}/>
      <Route path="/category-products/:categoryCheck" component={Categoryproduct} exact={true}/>
      <Route path="/checkout/:orderId" component={Checkout} exact={true}/>
      <Route path="/product/:productId" component={Productdetail} exact={true}/>
      <Route path="/test" component={Test} exact={true}/>
      </Suspense>
      </div>
     
      </Switch>
      
    </div>
  );
}
var actions = {
  firebaseAuthListener
}
export default connect(null, actions)(App);
