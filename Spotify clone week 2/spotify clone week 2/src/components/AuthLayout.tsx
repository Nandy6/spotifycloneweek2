import React from 'react';
import { Waves } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-3 rounded-xl">
              <Waves className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">{title}</h2>
          <p className="text-center text-gray-600 mb-8">{subtitle}</p>
          {children}
        </div>
      </div>
    </div>
  );
}