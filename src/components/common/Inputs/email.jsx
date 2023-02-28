import React from "react";

export default function Email() {
  return (
    <div>
      <label
        for="email"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Email:
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="bg-gray-50 border-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="email@email.com"
        required=""
      ></input>
    </div>
    
  );
}
