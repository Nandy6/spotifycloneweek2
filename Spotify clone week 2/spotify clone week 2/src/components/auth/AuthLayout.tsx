import React from 'react';
import { AuthCard } from './AuthCard';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4 animate-gradient">
      <AuthCard>{children}</AuthCard>
    </div>
  );
}