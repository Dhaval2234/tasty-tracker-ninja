
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { RegisterForm } from '@/components';

const Register = () => {
  return (
    <MainLayout>
      <div className="container px-4 py-12 mx-auto md:px-6">
        <div className="max-w-md mx-auto">
          <h1 className="mb-6 text-3xl font-bold text-center">Create an Account</h1>
          <RegisterForm />
        </div>
      </div>
    </MainLayout>
  );
};

export default Register;
