
"use client"
// components/Navbar.js
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status

  const handleLogin = () => {
    setIsLoggedIn(true);
   
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    router.push('/login');
  };

  return (
    <nav className="bg-black text-white shadow-lg p-10 w-full ">
      <div className="container mx-auto px-6 flex justify-end items-center">
        <div className="flex space-x-4">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/50 transition duration-300"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/50 transition duration-300"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}