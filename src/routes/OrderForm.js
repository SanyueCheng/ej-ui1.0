import React from 'react';
import {Form,Modal,Input,} from 'antd'

class OrderForm extends React.Component {

  render(){
    const formLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    }
    // 父组件传递给子组件值
    const { visible, onCancel, onCreate, form } = this.props;
    const { getFieldDecorator } = form;
    // 将表单中没有出现的值做一个双向数据绑定
    getFieldDecorator("id");
    getFieldDecorator("order_time");
    getFieldDecorator("total");
    getFieldDecorator("customer_id");
    getFieldDecorator("waiter_id");
    getFieldDecorator("address_id");
    
    return (
      <Modal
      visible={visible}
      title="添加订单信息"
      okText="提交"
      onCancel={onCancel}
      onOk={onCreate}
        >
          <Form layout="vertical" {...formLayout}>
            <Form.Item label="id" >
              {getFieldDecorator('id', {
                rules: [{ required: true, message: '请输入id!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="数量" >
              {getFieldDecorator('number', {
                rules: [{ required: true, message: '请输入数量!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="物品名称">
              {getFieldDecorator('product_id', {
                rules: [{ required: true, message: '请输入物品名称!' }],
              })(<Input/>)}
            </Form.Item>
            <Form.Item label="订单名称">
              {getFieldDecorator('order_id', {
                rules: [{ required: true, message: '请输入订单名称!' }],
              })(<Input />)}
            </Form.Item>
            
            

          </Form>
        </Modal>
    );
  }
}
// 将通过props从父组件中获取的值拿出来设置到表单元素上
const mapPropsToFields = (props)=>{
  let obj = {};
  for(let key in props.initData){
    let val = props.initData[key];
    obj[key] = Form.createFormField({value:val})
  }
  return obj;
}

export default Form.create({
  mapPropsToFields
})(OrderForm);