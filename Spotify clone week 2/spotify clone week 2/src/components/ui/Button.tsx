import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  variant?: 'primary' | 'secondary';
}

export function Button({ 
  children, 
  isLoading, 
  variant = 'primary', 
  className,
  ...props 
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        'w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-[1.02]',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
        variant === 'primary' && 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white',
        variant === 'secondary' && 'bg-gray-100 text-gray-800 hover:bg-gray-200',
        className
      )}
      disabled={isLoading || props.disabled}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        children
      )}
    </button>
  );
}