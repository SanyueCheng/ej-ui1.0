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
   
    
    return (
      <Modal
      visible={visible}
      title="添加订单信息"
      okText="提交"
      onCancel={onCancel}
      onOk={onCreate}
        >
          <Form layout="vertical" {...formLayout}>
            <Form.Item label="下单时间" >
              {getFieldDecorator('orderTime', {
                rules: [{ required: true, message: '请输入时间!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="金额总计">
              {getFieldDecorator('total', {
                rules: [{ required: true, message: '请输入金额总计!' }],
              })(<Input/>)}
            </Form.Item>
            <Form.Item label="顾客ID">
              {getFieldDecorator('customerId', {
                rules: [{ required: true, message: '请输入顾客ID!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="员工ID">
              {getFieldDecorator('waiterId', {
                rules: [{ required: true, message: '请输入员工ID!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="地址ID">
              {getFieldDecorator('"addressId', {
                rules: [{ required: true, message: '请输入地址ID!' }],
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