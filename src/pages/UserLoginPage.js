import { Alert, Button, Form, Input, message, Select, Table } from 'antd';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router';
import { AccountService } from '../services/account-service';
import { BaseHttpClientService } from '../services/base-service';

function UserLoginPage() {

    const [alertSuccessShow, setalertSuccessShow] = useState(false);
    const [alertWarningShow, setalertWarningShow] = useState(false);
    const [alertText, setalertText] = useState([]);

    const navigate = useNavigate();
    const onFinish = async (values) => {

        let response = await AccountService.loginAccount(values)
        if (response) {
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('email', values.Email);
            console.log('response', response);

            console.log('başarılı ');
            setalertWarningShow(false);
            setalertSuccessShow(true);
            setTimeout(function () {
                navigate('/')
            }, 2000);


        }

        else {
            setalertSuccessShow(false);
            setalertWarningShow(true);
            setalertText(response.errormessage)
        }



    };





    return (
        <div>
            <h1>LOGIN SAYFASI</h1>
            <Form
                onFinish={onFinish}
                name="basic"

            >


                <Form.Item
                    label="Email"
                    name="Email"
                    //rules={[{  message: 'Please input your username!' }]}
                    rules={[{ required: true, type: 'email', message: 'Lütfen e-posta formatında giriniz!' }]}

                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="Password"

                    rules={[{ required: true, message: 'Please input your password!' }]}

                >
                    <Input.Password />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>


            </Form>
            {
                alertSuccessShow ? (<Alert
                    message="Success Tips"
                    description={alertText + ' Anasayfasaya 2 sn sonra yönlendirileceksiniz..'}
                    type="success"
                    showIcon
                />) : <></>

            }
            {
                alertWarningShow ? (<Alert
                    message="Warning"
                    description={alertText}
                    type="warning"
                    showIcon
                    closable
                />) : <></>
            }

        </div>
    )
}

export default UserLoginPage
