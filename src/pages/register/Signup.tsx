import React from "react";
import "@/app/globals.css"
import { RegisterForm } from "./form";

const Signup = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
    <div className="shadow-xl px-8 pb-8 pt-12 bg-white rounded-xl space-y-12">
        <h1 className="font-semibold text-2xl mb-4">Create your Account</h1>
        <RegisterForm/>
    </div>
  </div>
  );
};

export default Signup;
