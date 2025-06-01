
import React from 'react';
import AuthForm from '@/components/AuthForm';

const CustomerAuth = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to Priya</h1>
          <p className="text-gray-600">Sign in to explore our premium idli cookers</p>
        </div>
        <AuthForm userType="customer" />
      </div>
    </div>
  );
};

export default CustomerAuth;
