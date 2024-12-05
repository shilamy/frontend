"use client";

import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Sample study plans
const studyPlans = [
  { id: 1, name: "Math Plan", description: "Learn algebra, geometry, and calculus." },
  { id: 2, name: "Science Plan", description: "Explore physics, chemistry, and biology." },
  { id: 3, name: "History Plan", description: "Dive into ancient and modern history." },
];

function Studyplan() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for the token in localStorage on component mount
  useEffect(() => {
    const token = localStorage.getItem("authToken");  // Retrieve token from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user") || "null");  // Get user info if available

    if (token && storedUser) {
      // User is logged in
      setIsLoggedIn(true);
      setUser(storedUser);
    } else {
      // User is not logged in, redirect to login/register page
      setIsLoggedIn(false);
      if (!storedUser) {
        router.push("/register");
      } else {
        router.push("/login");
      }
    }
    setIsLoading(false);  // Set loading to false after the check
  }, [router]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loader">Loading...</div>
      </div>
    );
  }

  return (
    <div>
      <nav className=" bg-primary " >
      <Navbar/>
      </nav>
      <h1 className="text-2xl font-bold mb-4">Select a Study Plan</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {studyPlans.map((plan) => (
          <div
            key={plan.id}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md cursor-pointer"
          >
            <h2 className="text-lg font-semibold">{plan.name}</h2>
            <p className="text-gray-600">{plan.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Studyplan;
