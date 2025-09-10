import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  type = 'button',
  disabled = false,
  className = ''
}) => {
  return (
    <button 
      type={type} 
      onClick={onClick} 
      disabled={disabled}
      className={`btn btn-${variant} ${className}`.trim()}
    >
      {children}
    </button>
  );
};

export default Button;