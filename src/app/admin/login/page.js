"use client";
import React, { useState } from 'react';
import styles from '../login/Login.module.css';
import { Form, Input, Button, message } from 'antd';
import { useRouter } from 'next/navigation';
import api from '../../axiosInterceptor/axiosInterceptor';


const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      console.log(values);
      const response = await api.post('/login', values);
      const { Token } = response.data;

      if (Token) {
        localStorage.setItem('token', Token);
        message.success('Login successful');
        console.log(Token);
        router.push('/admin/dashboard/queries');
      } else {
        message.error('Invalid login details');
      }
    } catch (error) {
      console.error(error);
      message.error('Invalid login details');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.herosection}>
        <div className={styles.HeroSection_Heading}>
           ADMIN PANEL
        </div>
      </div>
      <div className={styles.login_container}>
        <Form name="login" onFinish={onFinish} className={styles.login_form}>
          <h3 className={styles.login_heading}> LOGIN PANEL</h3>
          <Form.Item name="email" rules={[{ required: true, message: 'Please enter your username!' }]}>
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item name="password" rules={[{ required: true, message: 'Please enter your password!' }]}>
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} className={styles.login_button}>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
