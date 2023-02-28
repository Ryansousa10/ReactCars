import React from "react";

export default function LastName() {
  return (
    <div>
      <label
        for="lastName"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Last name:
      </label>
      <input
        type="lastName"
        name="lastName"
        id="lastName"
        className="bg-gray-50 border-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Last Name"
        required=""
      ></input>
    </div>
  );
}
