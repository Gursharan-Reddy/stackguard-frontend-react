import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Typography } from 'antd';

const { Title, Text } = Typography;

export default function ConfigPage() {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Key verified:', values);
    localStorage.setItem('isConfigured', 'true');
    navigate('/dashboard');
  };

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
          
          <Title level={2} style={{ color: '#1f2937' }}>Verify your public key</Title>
          <Text type="secondary">To get started, provide your public key for verification.</Text>

          <Form name="config" layout="vertical" onFinish={onFinish} style={{ marginTop: '24px' }}>
            <Form.Item
              label="Enter your public key"
              name="publicKey"
              rules={[
                { required: true, message: 'Please input your public key!' },
                { min: 100, message: 'Key must be at least 100 characters.' },
                { max: 1000, message: 'Key must be no more than 1000 characters.' },
              ]}
            >
              <Input.Password placeholder="Enter your public key" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block style={{ background: '#581c87' }}>
                Verify
              </Button>
            </Form.Item>
          </Form>
          <Text type="secondary" style={{ fontSize: '12px', textAlign: 'center', display: 'block', marginTop: '16px' }}>
            Don't have a public key? Contact your administrator.
          </Text>
        </div>
      </div>
    </div>
  );
}