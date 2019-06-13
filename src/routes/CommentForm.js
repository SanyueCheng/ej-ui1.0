import React from 'react';
import {Form,Modal,Input,Upload,Button,Icon} from 'antd'

class CommentForm extends React.Component {

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
    getFieldDecorator("content");
    getFieldDecorator("order_id");
    
    
    
    return (
      <Modal
          visible={visible}
          title="审核"
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
            <Form.Item label="内容" >
              {getFieldDecorator('content', {
                rules: [{ required: true, message: '请输入类别内容!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="顾客名称">
              {getFieldDecorator('customer_id', {
                rules: [{ required: true, message: '请输入顾客名称!' }],
              })(<Input/>)}
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
})(CommentForm);