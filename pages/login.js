import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Login() {
  const [domain, setDomain] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    router.push("/");
  };

  return (
    <div className="h-screen items-center flex justify-center">
      <div className="flex flex-col items-center space-y-12">
        <div>
          <h2 className="text-2xl font-bold">Log in with SSO</h2>
        </div>
        <div className="p-8 rounded-md drop-shadow-md bg-white w-[460px]">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <label htmlFor="domain" className="text-sm">
              Domain
            </label>
            <input
              id="domain"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              type="text"
              placeholder="Enter domain"
              className="p-2 rounded-md border-2 mt-1"
            />
            <button className="bg-blue-800 text-white rounded-md p-2 mt-4 hover:bg-blue-600 active:bg-blue-700">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
