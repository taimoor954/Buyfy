import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home/home';
import Authentication from './Pages/Authetication/auth.js';
import Category from './Pages/Category/category';
import Categoryproduct from './Pages/CategoryProducts/categoryproduct';
import Checkout from './Pages/Checkout/checkout';


function App() {
  return (
    <div className="App">
      <h1>Buyfy</h1>
      <Switch>
      <Route path="/" component={Home} exact={true}/>
      <Route path="/authentication" component={Authentication} exact={true}/>
      <Route path="/category" component={Category} exact={true}/>
      <Route path="/category-products" component={Categoryproduct} exact={true}/>
      <Route path="/checkout" component={Checkout} exact={true}/>
      </Switch>
      
    </div>
  );
}

export default App;
