import React from 'react';

interface AuthCardProps {
  children: React.ReactNode;
}

export function AuthCard({ children }: AuthCardProps) {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
      {children}
    </div>
  );
}