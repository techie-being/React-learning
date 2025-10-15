
import React, { useState, useContext } from 'react';
import Usercontext from '../Context/Usercontext';

function Login() {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const { setuser } = useContext(Usercontext);

  const handlesubmit = (e) => {
    e.preventDefault();
    setuser({ username, password });
  };

  return (
    
    <div className="max-w-md mx-auto mt-12 p-6 bg-[rgb(110,156,177)] rounded-lg shadow-lg space-y-4">
      <h2 className="text-2xl font-bold text-center text-blue-700">Login</h2>

      <input
        type="text"
        value={username}
        onChange={(e) => setusername(e.target.value)}
        placeholder="Username"
        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-blue-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        placeholder="Password"
        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-blue-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={handlesubmit}
        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-300"
      >
        Submit
      </button>
    </div>
  );
}

export default Login;

