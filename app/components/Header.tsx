import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="relative z-20 p-3 bg-secondary">
      <div className="container flex items-center justify-between mx-auto md:px-8 ">
        <div className="flex items-center h-12">
          <Image
            src="https://www.peruapis.com/img/logo.png"
            height={80}
            width={100}
            alt="Logo de peruApis"
            className="object-cover w-full"
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="font-bold text-gray-200 font-aeonik ">
            Login
          </button>
          <button className="px-3 py-2 font-bold text-gray-200 bg-red-700 rounded rounded-md font-aeonik">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
