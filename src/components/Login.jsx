import { Link, useNavigate } from "react-router-dom";
import credential from "../assets/credential";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "test@gmail.com",
    password: "test@123",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (
      credential.email === formData.email &&
      credential.password === formData.password
    ) {
      navigate("/dashboard");
    } else {
      alert(
        "Incorrect Credentials...\nFor this assignment App Login using below credentials\nEmail: test@gmail.com\nPassword: test@123"
      );
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <div className="border border-white p-8 rounded-lg shadow-md sm:w-96 w-full h-screen">
        <img
          src="/Group 3@2x.png"
          alt="Company Logo"
          className="mb-6 h-32 m-auto"
        />
        <h2 className="text-white text-center text-xl font-semibold mb-6">
          We are Electric
        </h2>
        <h3 className="text-white text-left text-xl font-semibold mb-6">
          Login
        </h3>
        <form method="post">
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
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:border-green-500"
              placeholder="Enter your email"
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
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:border-green-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            onClick={handleLogin}
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none mb-4"
          >
            Login
          </button>
        </form>
        <div className="text-white text-center">
          <p className="mb-2">
            Don&apos;t have an account?{" "}
            <Link className="text-green-400 mb-2" to={"/signup"}>
              Sign up
            </Link>
          </p>
          <p>
            <Link className="text-green-400 mb-2" to={"/forgot-password"}>
              Forgot password?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
