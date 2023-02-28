import React from "react";
import { useEffect, useState } from "react";

export default function Login() {
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    async function fetchRandomImage() {
      const response = await fetch(
        "https://source.unsplash.com/random/1600x900/?cars"
      );
      setBgImage(`url(${response.url})`);
    }
    fetchRandomImage();
  }, []);

  return (
    <section
      className="bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: bgImage }}
    >
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gradient-to-tr from-[#C1D602]/20 via-[#1B7A24]/20 to-[#1B4D82]/20 mix border-gray-500">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white flex justify-center">
              Login Here
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
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
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                ></input>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="cursor-pointer w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-primary-300 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    ></input>
                  </div>
                  <div className="ml-3 text-sm">
                    <label for="remember" className="text-white cursor-pointer">
                      Remember me
                    </label>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring=primary-800"
              >
                Sign In
              </button>
              <p className="text-sm font-light dark:text-white">
                Don't have an account yet?{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
