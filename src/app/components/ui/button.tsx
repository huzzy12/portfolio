import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};