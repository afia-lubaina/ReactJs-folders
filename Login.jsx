import React from 'react'
import { Card, CardContent, CardHeader, CardDescription, CardFooter, CardTitle } from '@/components/ui/card'
import { useEffect } from 'react'

const Login = () => {

  function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: "+response.credential);
  }


  useEffect(() => {
    /*global google */ 
    google.accounts.id.initialize
    ({
      client_id: "72502984606-vgdtn9s069c5vjsf0f8e6hnm70m6mae8.apps.googleusercontent.com",
      callback: handleCredentialResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("g_id_onload"),
      {
        theme: "outline",
        size: "large",
        text: "continue_with",
        shape: "rectangular",
        logo_alignment: "left",
      }
    );
    

  }, [])


  return (
    
    <div className=" w-4/5 mx-auto flex flex-row justify-center items-center  mt-[2rem] ">
      <div className="bg-white  shadow-md border border-gray-200 rounded-lg w-[40rem] p-4 sm:p-6 lg:p-8 ">
        <form className="space-y-6 " action="#">
          <h3 className="text-xl font-medium text-gray-500">Sign in to our platform</h3>
          <div>
            <label htmlFor="email" className="text-sm font-mediumtext-gray-500 block mb-2 ">Your email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray"
              placeholder="name@company.com"
              required
            />
          </div>
          <div id="g_id_onload"></div> 
          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-500  block mb-2 ">Your password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-500  sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5  dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray"
              required
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-green-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-green-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <div className="text-sm ml-3">
                <label htmlFor="remember" className="font-medium text-gray-900 ">Remember me</label>
              </div>
            </div>
            <a href="#" className="text-sm text-green-700 hover:underline ml-auto dark:text-green-500">Lost Password?</a>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Login to your account
          </button>
          <div className="text-sm font-medium text-gray-500">
            Not registered? <a href="#" className="text-green-700 hover:underline dark:text-green-500">Create account</a>
          </div>
        </form>
      </div>
      </div>
  )
}

export default Login
