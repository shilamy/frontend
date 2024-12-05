"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; 
import { useAuth } from "../../context/AuthContext";

export const LoginForm = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter(); 

  
  const handleLogin = (token: string, userData: object) => {
    // Store token and user info in localStorage
    localStorage.setItem("authToken", token);  // Store the auth token
    localStorage.setItem("user", JSON.stringify(userData));  // Store user data

   
    router.push("/");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      // Perform login logic (this should be replaced with actual API call)
      const token = "example-token"; // Simulated token (replace with actual token from your server)
      const userData = { name: "John Doe", email }; // Simulated user data (replace with actual data)

      await login(email, password); // Actual login logic with your `useAuth` hook
      console.log('Login successful');

      // Call handleLogin after successful authentication
      handleLogin(token, userData);

    } catch (err) {
      console.error('Login error:', err);
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 w-full sm:w-[400px]">
      <div className="grid w-full items-center gap-1.5">
        <label htmlFor="email">Email</label>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <label htmlFor="password">Password</label>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          type="password"
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <div className="w-full">
        <Button className="w-full text-lightgray font-semibold" size="lg">
          Login
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
