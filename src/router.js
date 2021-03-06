import React from 'react';
import { Router, Route, Switch, Link } from 'dva/router';
import IndexPage from './routes/IndexPage';
import CustomerPage from './routes/CustomerPage'
import OrderPage from './routes/OrderPage'
// import OrderLinePage from './routes/OrderLinePage'
import ProductPage from './routes/ProductPage'
import CategoryPage from './routes/CategoryPage'
import AddressPage from './routes/AddressPage'
import WaiterPage from './routes/WaiterPage'
import CommentPage from './routes/CommentPage'


import CustomerDetails from './routes/CustomerDetails'
import {Layout, Menu, Breadcrumb, Icon,Button,TimePicker} from 'antd'
import moment from 'moment'

import styles from './router.css'

function RouterConfig({ history }) {
  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;


  return (
    <Router history={history}>
      <Layout>
        <Header style={{background:"#FFB6C1"}}>
          <div className="logo" style={{ color: "#fff", fontWeight: "bold", fontSize: "24px" }} >
            e洁家政后台管理系统
          </div>
     
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#87CEFA' ,}}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{background: '#B0C4DE' , height: '100%', borderRight: 0 }}
            >

                  <Menu.Item key="1">
                    <Link to='./customer'>
                      <span>
                        <Icon type="user" />
                        <span>顾客管理</span>
                      </span>
                    </Link>
                  </Menu.Item>
                  
                  

                  <Menu.Item key="2">
                  <Link to='./product'>
                      <span>
                        <Icon type="desktop" />
                        <span>产品管理</span>
                      </span>
                    </Link>
                  </Menu.Item>
                  
                
                  <Menu.Item key="3">
                  <Link to='./order'>
                      <span>
                        <Icon type="align-left" />
                        <span>订单管理</span>
                      </span>
                    </Link>
                  </Menu.Item>
                
                  
                  
                  <Menu.Item key="4">
                  <Link to='./waiter'>
                  <span>
                    <Icon type="usergroup-add" />
                    <span>员工管理</span>
                    </span>
                    </Link>
                  </Menu.Item>
                  
                  
                  <Menu.Item key="5">
                  <Link to='./category'>
                  <span>
                    <Icon type="more" />
                    <span>分类管理</span>
                    </span>
                    </Link>
                  </Menu.Item>
                  
                  
                  <Menu.Item key="6">
                  <Link to='./address'>
                  <span>
                    <Icon type="global" />
                    <span>
                      地址管理
                    </span>
                    </span>
                    </Link>
                  </Menu.Item>
                  
                  
                  <Menu.Item key="7">
                  <Link to='./comment'>
                  <span>
                    <Icon type="solution" />
                    <span>
                      评论管理
                    </span>    
                    </span>
                    </Link>         
                  </Menu.Item>
              
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>

            <Content
              style={{
                background: '#F0FFFF',
                //padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Switch>
                <Route path="/" exact component={IndexPage} />
                {/* <Route path="/orderLine" exact component={OrderLinePage} /> */}
                <Route path="/customer" exact component={CustomerPage} />
                <Route path="/customerDetails" exact component={CustomerDetails} />
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