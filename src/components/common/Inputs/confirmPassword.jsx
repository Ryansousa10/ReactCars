import React from "react";

export default function ConfirmPassword() {
  return (
    <div>
      <label
        for="confirmPassword"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Confirm Password:
      </label>
      <input
        type="confirmPassword"
        name="confirmPassword"
        id="confirmPassword"
        className="bg-gray-50 border-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Confirm Password"
        required=""
      ></input>
    </div>
  );
}