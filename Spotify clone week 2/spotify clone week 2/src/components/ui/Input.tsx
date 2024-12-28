import React from 'react';
import { cn } from '../../utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function Input({ label, error, className, ...props }: InputProps) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        {...props}
        className={cn(
          'w-full px-4 py-2 border rounded-lg transition-all duration-200',
          'focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none',
          'hover:border-purple-300',
          error && 'border-red-500 focus:ring-red-500',
          className
        )}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}