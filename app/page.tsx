import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import VideoComponent from "./components/video";
import Services from "./components/Services";
import Alliances from "./components/Alliances";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <VideoComponent />
      <Services />
      <div className="py-20 mt-16 bg-primary">
        <div className="flex justify-center">
          <div className="p-8 text-center text-white rounded rounded-lg bg-quarter drop-shadow-2xl hover:drop-shadow-xl">
            <h1 className="text-3xl font-medium font-aeonik">
              Comienza a usar nuestra API, creando un Token
            </h1>
            <button className="px-3 py-2 my-4 font-semibold text-white bg-red-500 rounded rounded-l">
              Ver planes y comprar
            </button>
            <p className="my-2 font-thin">
              Consultas RUC y DNI desde <span>79$/Anual</span>
            </p>
            <a href="" className="my-5 text-sky-400">
              Leer la documentación
            </a>
          </div>
        </div>
      </div>
      <Alliances />
      <Footer />
    </div>
  );
}
