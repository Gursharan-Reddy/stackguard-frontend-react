import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from 'antd';

const { Title } = Typography;

export default function DashboardPage() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('isConfigured');
    navigate('/');
  };

  return (
    <div className="page-container" style={{ flexDirection: 'column' }}>
      <Title style={{ color: 'white' }}>Dashboard Page</Title>
      <p>You have successfully logged in and configured your account.</p>
      <Button type="primary" danger onClick={handleSignOut}>
        Sign Out
      </Button>
    </div>
  );
}