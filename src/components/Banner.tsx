import React from "react";
import "../app/beneBeneficiado.css";

const Banner = () => {
  return (
    <div className="menosMarginTop flex justify-center items-center w-full md:w-8/12 lg:w-6/12 bg-[#324F72] p-2 rounded-xl">
      <div className="flex flex-col md:flex-row justify-between items-center w-full bg-[#14213D] py-4 px-6 md:px-8 shadow-md rounded-xl">
        <div className="flex flex-col items-center text-center w-full md:w-1/3 mb-4 md:mb-0">
          <p className="text-sm text-gray-300">Clientes</p>
          <h3 className="text-2xl font-semibold text-white">+82K</h3>
        </div>

        <div className="hidden md:block border-l border-gray-500 h-12"></div>

        <div className="flex flex-col items-center text-center w-full md:w-1/3 mb-4 md:mb-0">
          <p className="text-sm text-gray-300">Atendimento ao Cliente</p>
          <h3 className="text-2xl font-semibold text-white">+20K</h3>
        </div>

        <div className="hidden md:block border-l border-gray-500 h-12"></div>

        <div className="flex flex-col items-center text-center w-full md:w-1/3">
          <p className="text-sm text-gray-300">Serviços</p>
          <h3 className="text-2xl font-semibold text-white">+75</h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;
