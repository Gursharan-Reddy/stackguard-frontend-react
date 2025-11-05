import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, Form, Input, Button, Row, Col, Typography } from 'antd';

const { TabPane } = Tabs;
const { Title, Text } = Typography;

const SignInForm = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Sign In Success:', values);
    localStorage.setItem('isAuthenticated', 'true');
    navigate('/configure');
  };

  return (
    <>
      <Title level={2} style={{ color: '#1f2937' }}>Welcome back to Stackguard</Title>
      <Text type="secondary">Secure your codebase with advanced secret scanning.</Text>
      <Form name="signin" layout="vertical" onFinish={onFinish} style={{ marginTop: '24px' }}>
        <Form.Item
          label="Email ID"
          name="email"
          rules={[{ required: true, type: 'email', message: 'Please input a valid email!' }]}
        >
          <Input placeholder="Enter email ID" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Enter password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block style={{ background: '#581c87' }}>
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

const SignUpForm = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Sign Up Success:', values);
    localStorage.setItem('isAuthenticated', 'true');
    navigate('/configure');
  };

  return (
    <>
      <Title level={2} style={{ color: '#1f2937' }}>Welcome to Stackguard</Title>
      <Text type="secondary">Create an account to secure your codebase.</Text>
      <Form form={form} name="signup" layout="vertical" onFinish={onFinish} style={{ marginTop: '24px' }}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="First name"
              name="firstName"
              rules={[{ required: true, message: 'Please input your first name!' }]}
            >
              <Input placeholder="Enter first name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Last name"
              name="lastName"
              rules={[{ required: true, message: 'Please input your last name!' }]}
            >
              <Input placeholder="Enter last name" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          label="Email ID"
          name="email"
          rules={[{ required: true, type: 'email', message: 'Please input a valid email!' }]}
        >
          <Input placeholder="Enter email ID" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Enter password" />
        </Form.Item>

        <Form.Item
          label="Confirm password"
          name="confirmPassword"
          dependencies={['password']}
          rules={[
            { required: true, message: 'Please confirm your password!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords do not match!'));
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirm password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block style={{ background: '#581c87' }}>
            Create account
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default function AuthPage() {
  return (
    <div className="page-container">
      <div className="auth-layout">
        <div className="auth-image-placeholder">
          <div style={{ background: '#e5e7eb', width: '100%', height: '100%', borderRadius: '0.25rem' }}>
          </div>
        </div>
        
        <div className="auth-form-side">
          <Title level={3} style={{ color: '#1f2937', marginBottom: '24px' }}>
            Stackguard
          </Title>
          <Tabs defaultActiveKey="1" centered>
            <TabPane tab="Sign In" key="1">
              <SignInForm />
            </TabPane>
            <TabPane tab="Sign Up" key="2">
              <SignUpForm />
            </TabPane>
          </Tabs>
          <Text type="secondary" style={{ fontSize: '12px', textAlign: 'center', display: 'block', marginTop: '16px' }}>
            By continuing, you agree to our Terms of Service and Privacy Policy
          </Text>
        </div>
      </div>
    </div>
  );
}