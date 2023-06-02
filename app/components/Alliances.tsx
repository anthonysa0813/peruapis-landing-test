import Image from "next/image";
import React from "react";

const Alliances = () => {
  return (
    <div className="bg-primary">
      <div className="container flex justify-center mx-auto borderThin first-line:border-gray-100 ">
        <div className="flex flex-wrap items-center justify-center gap-5 p-8 lg:w-1/2">
          <div className="">
            <Image
              src="https://www.peruapis.com/img/volvo.png"
              width={100}
              height={40}
              className="w-36"
              alt="Logo de Volvo"
            />
          </div>
          <div className="">
            <Image
              src="https://www.peruapis.com/img/sky.png"
              width={100}
              height={40}
              className="w-36"
              alt="Logo de Volvo"
            />
          </div>{" "}
          <div className="">
            <Image
              src="https://www.peruapis.com/img/autoland.png"
              width={100}
              height={40}
              className="w-36"
              alt="Logo de Volvo"
            />
          </div>{" "}
          <div className="">
            <Image
              src="https://www.peruapis.com/img/simplefact.png"
              width={100}
              height={40}
              className="w-36"
              alt="Logo de Volvo"
            />
          </div>{" "}
          <div className="">
            <Image
              src="https://www.peruapis.com/img/automotores.png"
              width={100}
              height={40}
              className="w-36"
              alt="Logo de Volvo"
            />
          </div>
          <div className="">
            <Image
              src="https://www.peruapis.com/img/sokso.png"
              width={100}
              height={40}
              className="w-36"
              alt="Logo de Volvo"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col py-8 text-center gap-y-3">
        <h1 className="text-4xl text-center text-white font-aeonik">UPTIME</h1>
        <p className="font-thin text-gray-200">
          Uptime en planes Empresariales
        </p>
        <span className="text-6xl font-bold text-sky-500">99.9%</span>
      </div>
    </div>
  );
};

export default Alliances;
