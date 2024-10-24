// src/components/SelectField.jsx
import React from 'react';

const SelectField = ({ label, name, register, errors, options }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-700">{label}</label>
      <select
        {...register(name)}
        id={name}
        className={`mt-1 block w-full rounded border ${errors[name] ? 'border-red-500' : 'border-gray-300'} px-4 py-2`}
      >
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      {errors[name] && <p className="text-red-500">{errors[name].message}</p>}
    </div>
  );
};

export default SelectField;
