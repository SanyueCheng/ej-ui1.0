import React from 'react';
import {Form,Modal,Input,Upload,Button,Icon} from 'antd'

class AddressForm extends React.Component {

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
    getFieldDecorator("province");
    getFieldDecorator("city");
    getFieldDecorator("area");
    getFieldDecorator("address");
    getFieldDecorator("teltephone");
    getFieldDecorator("customer_id");
    
    
    return (
      <Modal
          visible={visible}
          title="新增地址信息"
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
            <Form.Item label="省份" >
              {getFieldDecorator('province', {
                rules: [{ required: true, message: '请输入省份!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="城市">
              {getFieldDecorator('city', {
                rules: [{ required: true, message: '请输入城市!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="地区">
              {getFieldDecorator('area', {
                rules: [{ required: true, message: '请输入地区!' }],
              })(<Input />)}
            </Form.Item>          
            <Form.Item label="地址">
              {getFieldDecorator('addess', {
                rules: [{ required: true, message: '请输入地址!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="电话">
              {getFieldDecorator('telephone', {
                rules: [{ required: true, message: '请输入电话!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="顾客姓名">
              {getFieldDecorator('telephone', {
                rules: [{ required: true, message: '请输入顾客姓名!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="头像上传">
               {getFieldDecorator('upload', {
                  valuePropName: 'fileList',
                  getValueFromEvent: this.normFile,
                })(
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>,
          )}
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
})(AddressForm);