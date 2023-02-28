import React from "react";

export default function FirstName() {
  return (
    <div>
      <label
        for="firstName"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        First name:
      </label>
      <input
        type="firstName"
        name="firstName"
        id="firstName"
        className="bg-gray-50 border-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="First Name"
        required=""
      ></input>
    </div>
  );
}
