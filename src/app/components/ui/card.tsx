import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-zinc-900 border border-purple-900 rounded-lg p-4 shadow-md ${className}`}>
      {children}
    </div>
  );
};