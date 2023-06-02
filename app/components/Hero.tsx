import React from "react";

const Hero = () => {
  return (
    <div className="h-[calc(100vh_-_200px)] bg-primary relative overflow-hidden">
      <div className="honda-animation"></div>
      <div className="honda-animation1"></div>
      <div className="honda-animation2"></div>
      {/* <div className="honda-animation3"></div> */}

      <div className="container mx-auto h-full flex justify-center">
        <div className="h-1/2 w-1/2 pt-20 text-center">
          <h1 className="text-4xl text-yellow-50 font-aeonik text-center">
            API EMPRESARIAL DE CONSULTAS RUC, DNI Y PLACA DE VEHÍCULOS
          </h1>
          <p className="text-2xl text-center text-gray-100 font-thin mt-5">
            Consulta datos públicos de empresas y personas de forma rápida
            mediante interfaz de programación (API REST).
          </p>
          <p className="text-2xl text-center text-gray-100 font-thin mt-5">
            Ideal para hacer búsquedas desde tus aplicaciones web y móviles, te
            ayudará a validar información de tus clientes de forma gratuita,
            integrable desde cualquier lenguaje de programación.
          </p>
          <div className="flex justify-center mt-5">
            <button className="rounded rounded-lg flex items-center border border-red-300 text-red-500 py-2 px-3 justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
              Ver Documentación
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
