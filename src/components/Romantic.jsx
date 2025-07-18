import React, { useState } from "react";
import { Heart, Flower } from "lucide-react";
import "./../App.css";

const gridSize = 5;

const getRandomPosition = () => [
  Math.floor(Math.random() * gridSize),
  Math.floor(Math.random() * gridSize),
];

const motivationalMessages = [
  "¡Sigue intentando! 💪",
  "¡Casi lo tienes! 🌟",
  "No te rindas, lo lograrás! ❤️",
  "¡Vamos, tú puedes! 😊",
  "Un paso más cerca... 🚀",
  "No te des por vencido! 💖",
];

export default function Romantic({ onWin }) {
  const [treasurePosition] = useState(getRandomPosition);
  const [found, setFound] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [wrongAttempt, setWrongAttempt] = useState(false);
  const [message, setMessage] = useState("");
  const [wrongButtons, setWrongButtons] = useState([]); // botones incorrectos clickeados

  const handleClick = (row, col) => {
    if (found) return;

    const key = `${row}-${col}`;
    if (wrongButtons.includes(key)) return; // evitar repetir clicks

    setAttempts((prev) => prev + 1);

    if (row === treasurePosition[0] && col === treasurePosition[1]) {
      setFound(true);
      if (onWin) onWin();
      setMessage("");
    } else {
      setWrongButtons((prev) => [...prev, key]);
      setWrongAttempt(true);

      const randomMsg =
        motivationalMessages[
          Math.floor(Math.random() * motivationalMessages.length)
        ];
      setMessage(randomMsg);

      setTimeout(() => {
        setWrongAttempt(false);
        setMessage("");
      }, 1500);
    }
  };

  return (
    <div
      className={`text-center mt-12 p-6 rounded-xl transition-colors duration-500 ${
        wrongAttempt ? "bg-red-100" : "bg-white bg-opacity-80"
      }`}
      style={{ maxWidth: "350px", margin: "0 auto" }}
    >
      <h2 className="text-2xl font-bold text-pink-600 mb-2">
        ¡Búsqueda del . . . Botón!
      </h2>
        <br/>
      <p className="mb-2 text-gray-600">
        Escondido entre flores...🌹
      </p>
  <br/>
      {message && (
        <p className="mb-4 text-red-600 font-semibold animate-pulse">{message}</p>
      )}

      <div className="grid grid-cols-5 gap-2 justify-center">
        {Array.from({ length: gridSize }).map((_, row) =>
          Array.from({ length: gridSize }).map((_, col) => {
            const key = `${row}-${col}`;
            const isWrong = wrongButtons.includes(key);
            const isCorrect =
              found && row === treasurePosition[0] && col === treasurePosition[1];

            return (
              <button
                key={key}
                onClick={() => handleClick(row, col)}
                style={{
                  backgroundColor:  isCorrect ? "#34D399" :  isWrong ? "#f87171" : "#f9fafb",
                  color: isWrong ? "#b91c1c" : "#111827",
                  boxShadow: isWrong
                    ? "0 2px 10px rgba(185, 28, 28, 0.5)"
                    : "0 2px 10px rgba(17, 24, 39, 0.1)",
                }}
                className={`w-18 h-18 rounded-xl shadow-md transition-all flex items-center justify-center text-xl`}
                disabled={found || isWrong} // bloquea todos tras ganar o botón ya fallado
                type="button"
              >
                {isCorrect ? (
                   "🙈"
                ) : isWrong ? (
                  "❌"
                ) : (
                  <Flower className="w-12 h-12" />
                )}
              </button>
            );
          })
        )}
      </div>

      {found && (
          
        <div className="mt-6 text-center animate-bounce">
            <br/>
          <h2 className="text-2xl font-bold text-red-600 text-white">🎉 ¡Lo encontraste! 🎉</h2>
          <br/>
          <p className="mb-2 text-rose-600 text-white">
            Después de {attempts} intentos,
             <br/> tu amor te llevó al botón correcto.
          </p>
            <br/>
          <Heart className="w-14 h-14 mt-4 text-red-500 mx-auto" />
            <br/>
              <br/>
        </div>
      )}
    </div>
  );
}
