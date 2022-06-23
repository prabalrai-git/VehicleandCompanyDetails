import axios from 'axios';
import moment from 'moment';
import {
    Button,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Switch,
    message
  } from 'antd';



const CompanyDetails = () => {

    const url = 'http://lunivacare.ddns.net/LunivaRouteAPI/LunivarouteManagementApi/InsertUpdateCompanyDetails';
    const generateUrlEncodedData = (initialObject) => {
        const formData = Object.keys(initialObject)
          .map((key) => {
              return `${key}=${encodeURIComponent(initialObject[key])}`
          })
          .join('&');
        return formData;
      }
      const info = () => {
        message.info('The form has been submitted');
            }; 
const handleInputs = async (e) => {
    const baseData = {
       'CId': 0,
       'CompanyName': e.CompanyName,
       'CompanyAddress':e.CompanyAddress,
       'CompanyPhoneNumber':e.CompanyPhoneNumber,
       'CompanyEmailId': e.CompanyEmailId,
       'CompanyPanId':e.CompanyPanId,
       'CompanyWebsite':e.CompanyWebsite,
       'UserId':e.UserId,
       'EntryDate': moment(e.EntryDate).format(),
       'IsActive': true,
    }
    let newData = generateUrlEncodedData(baseData);
    

    try {
        const response1 = await axios.post(url, newData)
        let response2 = await response1.json();
        console.log(response1);
        
    } catch (error) {
       console.log(error.response);
    }
    info();

}
    return(
        <>
         <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 4,
        }}
        style={{marginTop:100}}
        onFinish={handleInputs}
         >
        
        <Form.Item label="Company Name" name='CompanyName' rules={[
          {
            required: true,
            message: 'Please input the Company name!',
          },
        ]}>
          <Input/>
        </Form.Item >
        <Form.Item label="Company Address" 
                   name='CompanyAddress' 
                   rules={[
          {
            required: true,
            message: 'Please input The Company Address!',
          },
        ]}>
          <Input />
        </Form.Item>
        <Form.Item label="Company PhoneNumber" 
                   name='CompanyPhoneNumber' 
                   rules={[
          {
            required: true,
            message: 'Please input The Company Phonenumber!',
          },
        ]}>
          <InputNumber style={{ width: 150,}}/>
        </Form.Item>

        <Form.Item label="Company EmailId" 
                   name='CompanyEmailId' 
                   rules={[
          {
            required: true,
            message: 'Please input Company EmailId!',
          },
        ]}>
          <Input />
        </Form.Item>
     <Form.Item label="Company PanId" 
                   name='CompanyPanId' 
                   rules={[
          {
            required: true,
            message: 'Please input Company PanID!',
          },
        ]}>
          <Input />
        </Form.Item>
     <Form.Item label="Company Website" 
                   name='CompanyWebsite' 
                   rules={[
          {
            required: true,
            message: 'Please input Company Website!',
          },
        ]}>
          <Input />
        </Form.Item>
        <Form.Item label="User Id" 
                   name="UserId"
                   rules={[
          {
            required: true,
            message: 'Please input the UserId!',
          },
        ]}>
          <InputNumber/>
        </Form.Item>
        <Form.Item label="Entry Date"
                   name="EntryDate"
                   rules={[
          {
            required: true,
            message: 'Please input the Entry Date!',
          },
        ]}>
          <DatePicker />
        </Form.Item>
        <Form.Item label="Is Active" name='IsActive' valuePropName="checked"
         >
          <Switch />
        </Form.Item>
        <Form.Item
        wrapperCol={{
          offset: 4,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      </Form>
        </>
    )
}

export default CompanyDetails;