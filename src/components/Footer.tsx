const Footer = () => {
  return (
    <footer className="bg-[#E4E7F2] text-white py-12">
      <div className="container mx-auto px-4 flex flex-col flex-wrap justify-between">
        <div className="flex justify-between">
          <div className="w-full md:w-1/4 mb-8 md:mb-0 flex flex-col">
            <h3 className="text-2xl font-bold mb-4 text-[#59423A]">BeneBeneficio</h3>
            <p className="text-gray-400 transition ease-in delay-75 text-sm">CNPJ 11.111.111/0001-11 </p>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4 text-[#59423A]">Links importantes</h3>
            <ul className="text-gray-400">
              <li className="transition hover:underline ease-in delay-75 hover:text-white"><a href="/termos">Termos de uso</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4 text-[#59423A]">Contato</h3>
            <ul className="text-gray-400">
              <li className="transition hover:underline ease-in delay-75 hover:text-white"><a target="_blank" href="https://www.instagram.com/adrena_paintball/">(11)9999-9999</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;