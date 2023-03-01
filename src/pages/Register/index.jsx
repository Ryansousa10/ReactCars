import React from "react";
import { useEffect, useState } from "react";
import InputComponent from "../../components/common/Inputs/InputComponent";

export default function Register() {
  const [bgImage, setBgImage] = useState("");

  return (
    <section
      className="h-full w-full items-center justify-center bg-no-repeat bg-center flex"
      style={{ backgroundImage: "url('/src/assets/nfsbg.jpg')" }}
    >
      <div className="flex flex-col items-center justify-center px-6 md:py-8 mx-auto md:h-screen lg:py-0 md:w-3/4">
        <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-[#171717]/60 border-gray-100 backdrop-blur-md">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white flex justify-center">
              Register Here
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <InputComponent
                type="text"
                label="First Name"
                id={1}
                required={true}
                placeholder={"First Name"}
              />
              <InputComponent
                type="text"
                label="Last Name"
                id={2}
                required={true}
                placeholder={"Last Name"}
              />
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
              <InputComponent
                type="confirmPassword"
                label="Confirm Password"
                id={5}
                required={true}
                placeholder={"Confirm Password"}
              />

              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring=primary-800"
              >
                Sign Up
              </button>
              <p className="text-sm font-light dark:text-white">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500 font-bold"
                >
                  Login
                </a>
              </p>
              {/* <p className="text-sm font-light dark:text-white">
                By registering, you agree to the{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500 font-black"
                >
                  Terms
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500 font-black"
                >
                  Privacy Policy.
                </a>
              </p> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
