import React from "react";
import { Link } from "react-router-dom";

export default function Card() {
  return (
    <Link to="/">
      <div
        className={`border border-gray-400 headFont text-gray-600 rounded-lg p-4 hover:bg-gray-500 hover:text-white `}
      >
        <h1 className="font-bold text-2xl">Software Engineer</h1>
        <h1 className="text-xl font-bold">O2 solutions</h1>
        <h1 className="text-md font-bold ">Nugegoda, Colombo</h1>
        <h1 className="text-md font-bold ">Salary: 2000000</h1>
        <h1 className="text-md font-bold ">Experience: 2 - 3 years</h1>
        <Link
          //   to="mailto:max.mustermann@example.com?body=My custom mail body"
          onClick={(e) => {
            e.preventDefault();
            window.location =
              "mailto: max.mustermann@example.com?subject=Software Engineer";
          }}
          className="text-md font-bold hover:text-green-200"
        >
          Email: O2solutions@career.com
        </Link>
      </div>
    </Link>
  );
}
