import React from "react";
import Image from "next/image";
import MedicPNG from "../../public/img/medicHome.png";
import elements from "../../public/img/elementsHome.png";
import Banner from "../components/Banner";
import "./beneBeneficiado.css";

const HomePage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center w-full max-w-7xl px-4 gap-10">
          <div className="w-full text-left">
            <Image src={elements} alt="elements" className="w-36" />
            <h2 className="text-2xl sm:text-5xl font-bold text-[#59423A]">
              Seu <span className="text-[#4698CB]">Benê</span> Sempre<br></br>{" "}
              Beneficiando Você e Sua <br></br>
              <span className="text-[#4698CB]">Empresa!</span>
            </h2>
            <button className="mt-5 px-4 py-2 bg-yellow-400 text-[#59423A] font-semibold rounded-xl shadow-md hover:bg-yellow-500 hover:shadow-lg transition duration-300">
              Adquira seu Benefício →
            </button>
          </div>
          <div>
            <Image
              className="menosMarginBottomMedic object-cover rounded-lg w-[500px] md:w-[600px] lg:w-[700px]"
              src={MedicPNG}
              alt="Médico sorridente"
            />
          </div>
        </div>

        <div className="flex justify-center w-full mt-10">
          <Banner />
        </div>

      </div>

      <div className="bg-white">
        <h1>asdasdas</h1>
        <h1>asdasdas</h1>
        <h1>asdasdas</h1>
        <h1>asdasdas</h1>
        <h1>asdasdas</h1>
      </div>
    </div>
  );
};

export default HomePage;
