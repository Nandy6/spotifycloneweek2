import React from 'react';
import { Waves } from 'lucide-react';

interface AuthHeaderProps {
  title: string;
  subtitle: string;
}

export function AuthHeader({ title, subtitle }: AuthHeaderProps) {
  return (
    <>
      <div className="flex justify-center mb-4">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-3 rounded-xl animate-pulse">
          <Waves className="w-8 h-8 text-white" />
        </div>
      </div>
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">{title}</h2>
      <p className="text-center text-gray-600 mb-8">{subtitle}</p>
    </>
  );
}