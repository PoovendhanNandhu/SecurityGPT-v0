"use client";
import { signIn } from "next-auth/react";
import { CpuChipIcon } from "@heroicons/react/24/solid";

function Login() {
  return (
    <div>
    <div className="bg-black h-screen flex flex-col items-center justify-center text-center text-gray-100 gap-2 pb-10">
    <img src="https://i.postimg.cc/mrH2M9Jk/securityai-02.png"/>
      <p>Welcome to SecurityGPT</p>
      <p>Log in with your Google account to continue</p>
      <div className="flex flex-row mt-2 gap-3">
        <button onClick={() => signIn("google")} className="myButton">
          Log in
        </button>
        <button onClick={() => signIn("google")} className="myButton">
          Sign up
        </button>
      </div>
    </div>
    </div>
  );
}

export default Login;
