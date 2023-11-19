import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    // TODO : sign-up logic here
    console.log("Signing up:", { email, password });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <div className="border border-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-white text-center text-xl font-semibold mb-6">
          Sign Up
        </h2>
        <form onSubmit={handleSignUp}>
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
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-white text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none"
          >
            Sign Up
          </button>
        </form>
        <div className="text-white text-center">
          <p className="mb-2">
            Already have an account?{" "}
            <Link className="text-green-400 mb-2" to={"/"}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
