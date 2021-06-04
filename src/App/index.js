import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './page/Home'
import Products from "./page/Products";
import ProductDetail from "./page/ProductDetail";
import About from "./page/About";
import Cart from "./page/Cart";
import Blog from "./page/Blog";
import BlogDetail from "./page/BlogDetail";
import Login from "./page/Login"
import Register from "./page/Register"
import NotPage from "./page/NotPage";
import Contact from "./page/Contact";
import Account from "./page/Account";


function HomePage() {
  return (
    <Router>
      <div>
        <Switch>
            <Route path="/" exact component={Home}  />
            <Route path="/product" component={Products} />
            <Route path="/product-detail" component={ProductDetail} />
            <Route path="/about" component={About} />
            <Route path="/cart" component={Cart} />
            <Route path="/blog" component={Blog} />
            <Route path="/blog-details" component={BlogDetail} />
            <Route path="/404-fonud-page" component={NotPage} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/account" component={Account} />
        </Switch>
      </div>
    </Router>
  );
}

export default HomePage;
