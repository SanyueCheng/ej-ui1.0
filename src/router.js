import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import OrderLinePage from './routes/OrderLinePage'
import CustomerPage from './routes/CustomerPage'
import OrderPage from './routes/OrderPage'
import ProductPage from './routes/ProductPage'
<<<<<<< HEAD
import AddressPage from './routes/AddressPage'
=======
import WaiterPage from './routes/WaiterPage'
>>>>>>> 6b189a360ce95b1118653ecf24e5c31511f3ac75

function RouterConfig({ history }) {
  return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/orderLine" exact component={OrderLinePage} />
          <Route path="/customer" exact component={CustomerPage} />
          <Route path="/order" exact component={OrderPage} />
          <Route path="/product" exact component={ProductPage} />
<<<<<<< HEAD
          <Route path="/address" exact component={AddressPage} />
=======
          <Route path="/waiter" exact component={WaiterPage} />
>>>>>>> 6b189a360ce95b1118653ecf24e5c31511f3ac75
        </Switch>
      </Router>
    
  );
}

export default RouterConfig;