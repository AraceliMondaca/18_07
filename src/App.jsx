import React, { useState } from "react";
import { HeartRain } from "./components/HeartRain";
import Romantic from "./components/Romantic";
import "./index.css";
import "./App.css"; 

function App() {
  const [wonGame, setWonGame] = useState(false);
  const [showCard, setShowCard] = useState(false);

  return (
    <div
      className={`min-h-screen flex items-center justify-center overflow-hidden transition-all duration-300 ${showCard ? "filter-brightness-40" : "filter-brightness-60"}`}
    >
      {showCard && <HeartRain />}
      {!showCard ? (
        <div className="relative z-50 text-center p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-xl">
          <Romantic onWin={() => setWonGame(true)} />
          {wonGame && (
            <button 
            id="button"
              onClick={() => setShowCard(true)}
              className="mt-6 px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-pulse"
              type="button"
              aria-label="Abrir tarjeta"
            >
              ups! me encontraste!! 🎉
            </button>
          )}
        </div>
      ) : (
         <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className=" relative bg-white rounded-lg shadow-lg p-8 max-w-lg overflow-hidden">
        <div className=" absolute inset-0 bg-[url('/path/to/paper-background.png')] bg-cover bg-center opacity-80 rounded-lg"></div>
        <div className="pixelated-text relative z-10 text-gray-800 dark:text-gray-300">
          <h1 className="text-3xl font-bold text-center mb-4">💖 ¡Feliz Aniversario! 💖</h1>
      
          <p className="mb-4">
            Hoy cumplimos 3 años juntos… y no puedo evitar mirar hacia atrás y
            <br/> sentirme inmensamente agradecida por cada paso que damos.
            <br/> Quiero que sepas que valoro cada uno de tus esfuerzos,
            <br/> cada gesto de amor, cada palabra de aliento 
            <br/> y cada abrazo que me sostuvo cuando lo necesité, incluso cuando no lo dije en voz alta.
          </p>
          <p className="mb-4">
            Gracias por ser mi mejor amigo, mi cómplice, mi compañero de vida, ministerio, del evangelio
            <br/>  y de locuras. Me encanta compartir el tiempo con vos, 
            <br/> porque con tu sonrisa, tus carcajadas y esa forma tan única de ver la vida,
            <br/>  llenás mi corazón.
          </p>
          <p className="mb-4">
            Agradezco a Dios por haberte puesto en mi camino, por regalarme la oportunidad de amarte. 
            <br/> Porque aunque yo sea la chica que siempre creyó que podía con todo sola,
            <br/>  vos llegaste para demostrarme que no estaba sola… que el amor también es compañía,
            <br/>  paciencia y no rendirse jamás. Y vos nunca te rendiste conmigo. Gracias por eso.
          </p>
          <p className="mb-4">
            Si pudiera elegir mil veces más, te elegiría mil veces más. Porque sos mi lugar seguro.
          </p>
          <p>
            Gracias por cambiar mis días, por quedarte, por sostenerme y por amarme así.
            <br/>  Feliz aniversario, amor mío. Te amo mucho, muchísimo...
            <br/>
          </p>
        </div>
      </div>
    </div>
    
      )}
      {showCard && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
          <button
          id="button"
            onClick={() => window.open("https://www.instagram.com/stories/mondacaraceli/3679139979778510348?igsh=d2t4NWRkZTRqb2wy", "_blank")}
            className="mt-4 inline-block px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-pulse"
            type="button"
            aria-label="Ver tarjeta"
          >
            Mírame 👀
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

