import React, { useState, useEffect } from "react";
import getCookie from "../../util/getCookie";
import axios from "axios";

export default function LoginPrompt() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const csrftoken = getCookie("csrftoken");

  useEffect(() => {
    axios
      .get(`/accounts/api`)
      .then((response) => {
        // console.log(`This is from the accounts api: ${JSON.stringify(response.data)}`);
        setIsSignUp(response.data.isSignUp);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (isLoading) return <div className="h-screen w-screen bg-white"></div>;

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2 select-none"
            src="https://cdn.discordapp.com/emojis/1028177603225452615.webp?size=240&quality=lossless"
            alt="logo"
          ></img>
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              {!isSignUp ? "Sign in to your account" : "Create a new account"}
            </h1>
            <form className="space-y-4 md:space-y-6" method="post">
              <input
                type="hidden"
                name="csrfmiddlewaretoken"
                value={csrftoken}
              />
              <div>
                <label
                  type="email"
                  autoComplete="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  autoComplete="username"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="goofy@ahh.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required=""
                ></input>
              </div>
              <div>
                <label
                  type="password"
                  autoComplete="current-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  autoComplete="current-password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required=""
                ></input>
              </div>
              {!isSignUp && (
                <>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          defaultChecked
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-gray-600 dark:ring-offset-gray-800"
                          required=""
                        ></input>
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="remember"
                          type="remember"
                          className="text-gray-500 dark:text-gray-300"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="text-sm font-medium text-gray-600 hover:underline dark:text-gray-200"
                    >
                      Forgot password?
                    </a>
                  </div>
                </>
              )}
              <button
                type="submit"
                className="w-full text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800"
              >
                {!isSignUp ? "Sign in" : "Sign up"}
              </button>
              {!isSignUp ? (
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don't have an account yet?{" "}
                  <a
                    href="/accounts/signup"
                    className="font-medium text-gray-600 hover:underline dark:text-gray-200"
                  >
                    Sign up
                  </a>
                </p>
              ) : (
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  I have an account.{" "}
                  <a
                    href="/accounts/login"
                    className="font-medium text-gray-600 hover:underline dark:text-gray-200"
                  >
                    Sign in
                  </a>
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
