
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
import {Layout, Menu, Breadcrumb, Icon,Button} from 'antd'

//import styles from './router.css'

function RouterConfig({ history }) {
  const {SubMenu} = Menu;
  const {Header,Content,Sider} = Layout;
 
 
  return (
      <Router history={history}>
        <Layout>
                 <Header className="header">
                    <div className="logo" style={{color:"#fff",fontWeight:"bold",fontSize:"24px"}} >
                        e洁家政后台管理系统
       </div>
      
     
                  </Header>
              <Layout>
                 <Sider width={200} style={{ background: '#fff' }}>
                      <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                      >
         
                    <Menu.Item key="1">
                        <Icon type="user" />
                        <span>
                        
                       <Link to='./customer'>顾客管理</Link>
                       </span>

                      </Menu.Item>
                      <Menu.Item key="2">
                        <Icon type="desktop" />
                        <span>
                        <Link to='./product'>产品管理</Link>
                        </span>
                      </Menu.Item>
                      <Menu.Item key="3">
                        <Icon type="align-left"/>
                        <span>
                        <Link to='./order'>订单管理</Link>
                        </span>
                      </Menu.Item>
                      <Menu.Item key="4">
                        <Icon type="usergroup-add" />
                        <span>
                        <Link to='./waiter'>员工管理</Link>
                        </span>
                      </Menu.Item>
                      <Menu.Item key="5">
                        <Icon type="more" />
                        <span>
                        <Link to='./category'>分类管理</Link>
                        </span>
                      </Menu.Item>
                      <Menu.Item key="6">
                        <Icon type="global" /> 
                        <span>
                        <Link to='./address'>地址管理</Link>
                        </span>
                      </Menu.Item>
                      <Menu.Item key="7">
                      <Icon type="solution" />
                        <span>
                        <Link to='./comment'>评论管理</Link>
                        </span>
                      </Menu.Item>
                    </Menu>
                  </Sider>
                  <Layout style={{ padding: '0 24px 24px' }}>
                 
        <Content
          style={{
            background: '#fff',
            //padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
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
        </Content>
        </Layout>
        </Layout>
      </Layout>

      </Router>
  );

}

export default RouterConfig;
