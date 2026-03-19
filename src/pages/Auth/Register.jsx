import React from "react";

function Register() {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Register</h2>

      <input className="w-full border p-2 mb-3" placeholder="Name" />
      <input className="w-full border p-2 mb-3" placeholder="Email" />
      <input
        className="w-full border p-2 mb-3"
        type="password"
        placeholder="Password"
      />

      <button className="bg-green-600 text-white w-full py-2 rounded">
        Register
      </button>
    </div>
  );
}

export default Register;
