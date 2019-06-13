import React from 'react';
import {Form,Modal,Input,Upload,Button,Icon} from 'antd'

class ProductForm extends React.Component {

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
    getFieldDecorator("status");
    getFieldDecorator("photo");
    return (
      <Modal
          visible={visible}
          title="添加产品信息"
          okText="提交"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical" {...formLayout}>
            <Form.Item label="名称" >
              {getFieldDecorator('name', {
                rules: [{ required: true, message: '请输入产品名称!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="描述" >
              {getFieldDecorator('description', {
                rules: [{ required: true, message: '请输入产品描述!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="价格" >
              {getFieldDecorator('price', {
                rules: [{ required: true, message: '请输入价格!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="类别" >
              {getFieldDecorator('category_id', {
                rules: [{ required: true, message: '请输入类别!' }],
              })(<Input />)}
            </Form.Item>
            
            <Form.Item label="图像上传">
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
})(ProductForm);