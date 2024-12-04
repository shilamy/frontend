'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page refresh
    setError(''); // Clear any previous errors

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error || 'Login failed');
        return;
      }

      const data = await response.json();
      console.log('Login successful:', data);

      // Redirect user or update UI upon successful login
      // For example, navigate to the dashboard:
      // router.push('/dashboard');

    } catch (err) {
      console.error('Login error:', err);
      setError('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <form className="space-y-8 w-[400px]" onSubmit={handleSubmit}>
      <div className="grid w-full max-w-sm">
        <label htmlFor="email">Email</label>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
        />
      </div>
      <div className="grid w-full max-w-sm">
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
