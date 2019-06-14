import React from 'react';
import { Router, Route, Switch,Link } from 'dva/router';
import IndexPage from './routes/IndexPage';
import OrderLinePage from './routes/OrderLinePage'
import CustomerPage from './routes/CustomerPage'
import OrderPage from './routes/OrderPage'
import ProductPage from './routes/ProductPage'
import CategoryPage from './routes/CategoryPage'
import AddressPage from './routes/AddressPage'

import WaiterPage from './routes/WaiterPage'


import CommentPage from './routes/CommentPage'


import styles from './router.css'
function RouterConfig({ history }) {
  return (
      <Router history={history}>
         <div className="container">
         <div className="styles.leftNav">
           <ul>
             <li><Link to='./customer'>顾客管理</Link></li>
             <li><Link to='./product'>产品管理</Link></li>
             <li><Link to='./order'>订单管理</Link></li>
             <li><Link to='./waiter'>员工管理</Link></li>
             <li><Link to='./category'>分类管理</Link></li>
             <li><Link to='./address'>地址管理</Link></li>
             <li><Link to='./comment'>评论管理</Link></li>
             </ul>
         </div>
         <div className="right-content">
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
      
      </div>
      </div>
      </Router>
  );
}

export default RouterConfig;