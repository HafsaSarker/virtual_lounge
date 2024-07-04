import React from "react";

export default function Navbar() {
  return (
    <div className="navbar border-b border-slate-600">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Cozy Lounge</a>
      </div>

      <div className="px-4">
        <div className="cursor-pointer">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src="https://i.pinimg.com/736x/a9/60/7c/a9607c78dd6892dfef091a2f892d6764.jpg"
          />
        </div>
      </div>
    </div>
  );
}
