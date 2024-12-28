import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthLayout } from '../components/AuthLayout';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { register } from '../lib/api';
import toast from 'react-hot-toast';

export function SignUp() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    setIsLoading(true);

    try {
      const { token } = await register({ name, email, password });
      localStorage.setItem('token', token);
      toast.success('Account created successfully!');
      navigate('/dashboard');
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create an account"
      subtitle="Sign up to get started"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Full Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Input
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <Button type="submit" isLoading={isLoading}>
          Sign Up
        </Button>
      </form>

      <p className="text-center mt-6 text-gray-600">
        Already have an account?{' '}
        <Link to="/signin" className="text-purple-600 hover:text-purple-500 font-medium">
          Sign in
        </Link>
      </p>
    </AuthLayout>
  );
}