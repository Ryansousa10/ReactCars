import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen md:w-3/4 lg:py-0">
      <h1>
        "HOME :)"{" "}
        <a
          href="/login"
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          LOGIN
        </a>
      </h1>
    </div>
  );
}
