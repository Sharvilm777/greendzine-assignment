import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // TODO :  forgot password logic here
    console.log("Forgot password for email:", email);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <div className="border border-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-white text-center text-xl font-semibold mb-6">
          Forgot Password
        </h2>
        <form onSubmit={handleForgotPassword}>
          <div className="mb-4 text-white">
            <label
              htmlFor="email"
              className="block text-white text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none"
          >
            Reset Password
          </button>
        </form>
        <div className="text-white text-center">
          <p className="mb-2">
            Got the Password{" "}
            <Link className="text-green-400 mb-2" to={"/"}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
