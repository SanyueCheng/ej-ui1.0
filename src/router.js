import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import OrderLinePage from './routes/OrderLinePage'
import CustomerPage from './routes/CustomerPage'
import OrderPage from './routes/OrderPage'
import ProductPage from './routes/ProductPage'

function RouterConfig({ history }) {
  return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/orderLine" exact component={OrderLinePage} />
          <Route path="/customer" exact component={CustomerPage} />
          <Route path="/order" exact component={OrderPage} />
          <Route path="/product" exact component={ProductPage} />
        </Switch>
      </Router>
    
  );
}

export default RouterConfig;