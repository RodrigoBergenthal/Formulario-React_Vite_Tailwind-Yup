// src/components/FormInput.jsx
import React from 'react';

const FormInput = ({ label, type, name, register, errors }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-700">{label}</label>
      <input
        {...register(name)}
        id={name}
        type={type}
        className={`mt-1 block w-full rounded border ${errors[name] ? 'border-red-500' : 'border-gray-300'} px-4 py-2`}
      />
      {errors[name] && <p className="text-red-500">{errors[name].message}</p>}
    </div>
  );
};

export default FormInput;
