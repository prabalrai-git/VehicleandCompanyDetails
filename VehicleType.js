import axios from 'axios';
import {
    Button,
    Form,
    Input,
    message,
    Switch
  } from 'antd';



const VehicleType = () => {

    const url = 'http://lunivacare.ddns.net/LunivaRouteAPI/LunivarouteManagementApi/InsertUpdateVehicleType';

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
    const baseData = 
    {
        "VId": 1,
        "VechicleType": e.VehicleType,
        "IsActive": true
      }
    let newData = generateUrlEncodedData(baseData);
    
    try {
        const response1 = await axios.post(url, newData)
        let response2 = await response1.json();
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
        
        <Form.Item label="Vehicle Type" name='VehicleType' rules={[
          {
            required: true,
            message: 'Please input the Vehicle Type!',
          },
        ]}>
          <Input/>
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

export default VehicleType;