import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import OrderLinePage from './routes/OrderLinePage'
import CustomerPage from './routes/CustomerPage'
import OrderPage from './routes/OrderPage'
import ProductPage from './routes/ProductPage'
import CategoryPage from './routes/CategoryPage'
import AddressPage from './routes/AddressPage'

import WaiterPage from './routes/WaiterPage'
import CommentPage from './routes/CommentPage'


function RouterConfig({ history }) {
  return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/orderLine" exact component={OrderLinePage} />
          <Route path="/customer" exact component={CustomerPage} />
          <Route path="/order" exact component={OrderPage} />
          <Route path="/product" exact component={ProductPage} />
          <Route path="/address" exact component={AddressPage} />
          <Route path="/waiter" exact component={WaiterPage} />
          <Route path="/comment" exact component={CommentPage} />
          <Route path="/category" exact component={CategoryPage} />
        </Switch>
      </Router>
    
  );
}

export default RouterConfig;