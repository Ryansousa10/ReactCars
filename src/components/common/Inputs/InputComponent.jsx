import React from "react";

export default function InputComponent({ type, label, id, required, placeholder}) {
  return (
    <div>
      <label
        for="firstName"
        className="block mb-2 text-sm font-medium text-white"
      >
        {label}
      </label>
      <input
        type={type}
        name="firstName"
        id={id}
        className="bg-gray-50 border-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
        placeholder={placeholder}
        required={required}
      ></input>
    </div>
  );
}
