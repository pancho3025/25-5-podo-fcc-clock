import "./App.sass";
import Break from "./Componentes/Break";
import Sesion from "./Componentes/Sesion";
import Clock from "./Componentes/Clock";
import { useState, useEffect } from "react";
import Botones from "./Componentes/Botones";
import Autor from "./Componentes/Autor";

function App() {
  const [descanso, setDescanso] = useState(5);
  const [sesion, setSesion] = useState(25);
  const [play, setPlay] = useState(false);
  const [seccion, setSeccion] = useState("SESSION");
  const [tiempoRestante, setTiempoRestante] = useState(1500);

  

  const timeout = setTimeout(() => {
    if(tiempoRestante && play) {
      setTiempoRestante(tiempoRestante - 1);
    }
  }, 1000);

  const cambiarTimer = () => {
    const audio = document.getElementById("beep");
    if (!tiempoRestante && seccion === "SESSION") {
      setTiempoRestante(descanso * 60);
      setSeccion("BREAK");
      audio.play();
    }
    if (!tiempoRestante && seccion === "BREAK") {
      setTiempoRestante(sesion * 60);
      setSeccion("SESSION");
      audio.pause();
      audio.currentTime = 0;
    }
  };
  
  const crearTiempo = () => {
    const minutos = Math.floor(tiempoRestante / 60);
    const segundos = tiempoRestante - minutos * 60;

    const segundosCheck = segundos < 10 ? "0" + segundos : segundos;
    const minutosCheck = minutos < 10 ? "0" + minutos : minutos;
    return `${minutosCheck}:${segundosCheck}`;
  };
  const startOPausar = () => {
    clearTimeout(timeout);
    setPlay(!play);
  };
  const reloj = () => {
    if (play) {
      timeout
      cambiarTimer();
    } else {
      clearTimeout(timeout);
    }
  };
  const resetear = () => {
    clearTimeout(timeout);
    setPlay(false);
    setDescanso(5);
    setSesion(25);
    setTiempoRestante(1500);
    setSeccion("SESSION");
    const audio = document.getElementById("beep");
    audio.pause();
    audio.currentTime = 0;
    setTiempoRestante(1500);
  };

  useEffect(() => {
    reloj();
  }, [play, tiempoRestante, timeout]);

  return (
    <>
      <h1 className="clock-title">25 + 5 Clock</h1>
      <div className="options-container">
        <Break
          play={play}
          descanso={descanso}
          setDescanso={setDescanso}
        />
        <Sesion
          tiempoRestante={tiempoRestante}
          setTiempoRestante={setTiempoRestante}
          play={play}
          sesion={sesion}
          setSesion={setSesion}
        />
      </div>
      <Clock crearTiempo={crearTiempo} seccion={seccion} />
      <Botones startOPausar={startOPausar} resetear={resetear} />
      <Autor />
      <audio
        id="beep"
        preload="auto"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      />
    </>
  );
}

export default App;

/*
Funcionalidad:  
    1.Me falta hacer la funcionalidad del reloj.  
      1.1Cuando de click en resume/despausar/continuar se inicie el reloj (si clickeo de vuelta se pausa), y cuando terminé la sesion suene un sonido y comienze el break, y cuando termine el break lo mismo.
    2. Me falta el audio al finalizar una session o un break.
    3.Cuando hago click en reset, ademas de la funcion de reiniciar que ya hice, debe detenerse el timer.

https://realtimecolors.com/?colors=ffffff-0e0f12-0094ff-1a1d21-1fbf75

Lo mas dificil creo que es calcular cuando termine la session/break o sea, cuando llegue a 0, cambiar a otro reloj.
O sea si termina el tiempo de session, inicia el tiempo de break, y si termina el tiempo de break, inicia el tiempo de session.
*/
