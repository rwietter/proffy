import React, { TextareaHTMLAttributes } from 'react';
import './style.css';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const TextArea: React.FC<TextAreaProps> = ({ name, label, ...TextAreaAttributes }) => {
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea name={name} id={name} {...TextAreaAttributes} />
    </div>
  );
}

export default TextArea;
