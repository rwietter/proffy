import React, { InputHTMLAttributes } from 'react';
import './style.css';

interface InputProps extends  InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ name, label, ...inputAttributes }) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" name={name} id={name} {...inputAttributes} />
    </div>
  );
}

export default Input;
