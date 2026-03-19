import React from "react";

function Login() {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Login</h2>

      <input className="w-full border p-2 mb-3" placeholder="Email" />
      <input
        className="w-full border p-2 mb-3"
        type="password"
        placeholder="Password"
      />

      <button className="bg-blue-600 text-white w-full py-2 rounded">
        Login
      </button>
    </div>
  );
}

export default Login;
