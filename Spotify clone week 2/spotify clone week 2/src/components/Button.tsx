import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export function Button({ children, isLoading, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={isLoading || props.disabled}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        children
      )}
    </button>
  );
}