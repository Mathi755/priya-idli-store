
import React from 'react';
import AuthForm from '@/components/AuthForm';

const AdminAuth = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Priya Admin Portal</h1>
          <p className="text-gray-600">Manage your idli cooker products</p>
        </div>
        <AuthForm userType="admin" />
      </div>
    </div>
  );
};

export default AdminAuth;
