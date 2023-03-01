import React from "react";
import { useEffect, useState } from "react";
import InputComponent from "../../components/common/Inputs/InputComponent";

export default function Login() {
  const [bgImage, setBgImage] = useState("");

  return (
    <section
      className="h-full w-full items-center justify-center bg-no-repeat bg-center flex"
      style={{ backgroundImage: "url('/src/assets/nfsbg.jpg')" }}
    >
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen md:w-3/4 lg:py-0">
        <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-[#171717]/60 border-gray-100 backdrop-blur-md">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white flex justify-center">
              Login Here
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <InputComponent
                type="email"
                label="Email"
                id={3}
                required={true}
                placeholder={"Email Address"}
              />
              <InputComponent
                type="password"
                label="Password"
                id={4}
                required={true}
                placeholder={"Password"}
              />
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
                  href="/register"
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
