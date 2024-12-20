import React from "react";
import Image from "next/image";
import Logo from "../../public/img/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-[#E4E7F2]">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center absolute left-4">
          <Image
            src={Logo}
            alt="Logo BeneBenefícios"
            width={36} 
            height={36}
          />
          <span className="text-xl font-bold text-[#13413D] ml-2">
            Bene<span className="text-blue-500">Benefícios</span>
          </span>
        </div>

        <div className="flex-1 flex justify-center">
          <ul className="hidden md:flex space-x-12 items-center">
            <li>
              <a
                href="#"
                className="group text-[#59423A] font-semibold text-lg hover:text-blue-500 transition duration-300 relative"
              >
                Início
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 opacity-0 group-hover:opacity-100 transition duration-300"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="group text-[#59423A] font-semibold text-lg hover:text-blue-500 transition duration-300 relative"
              >
                Serviços
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 opacity-0 group-hover:opacity-100 transition duration-300"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="group text-[#59423A] font-semibold text-lg hover:text-blue-500 transition duration-300 relative"
              >
                Contate-nos
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 opacity-0 group-hover:opacity-100 transition duration-300"></span>
              </a>
            </li>
          </ul>
        </div>

        <div className="md:hidden">
          <button className="text-gray-800 focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
