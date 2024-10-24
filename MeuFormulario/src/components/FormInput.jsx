import React from 'react';

const FormInput = ({ label, type, name, register, errors }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-gray-700 font-bold mb-2">
      {label}
    </label>
    <input
      {...register(name)}
      type={type}
      id={name}
      className={`shadow appearance-none border ${errors[name] ? 'border-red-500' : 'border-gray-300'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
    />
    {errors[name] && <p className="text-red-500 text-xs italic">{errors[name].message}</p>}
  </div>
);

export default FormInput;
