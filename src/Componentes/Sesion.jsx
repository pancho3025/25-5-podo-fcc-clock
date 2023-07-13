import { FaArrowUp, FaArrowDown } from "react-icons/fa";

export default function Sesion({
  tiempoRestante,
  setTiempoRestante,
  play,
  sesion,
  setSesion,
}) {
  const incrementar = () => {
    if (sesion < 60) {
      setSesion(sesion + 1);
      setTiempoRestante(tiempoRestante + 60);
    }
  };
  const decrementar = () => {
    if (sesion > 1) {
      setSesion(sesion - 1);
      setTiempoRestante(tiempoRestante - 60);
    }
  };

  return (
    <div className="data-container">
      <h4 className="data-title" id="session-label">
        Session Length
      </h4>
      <div className="botones">
        <input
          disabled={play}
          onClick={decrementar}
          className="boton"
          name="session-decrement"
          id="session-decrement"
          type="button"
        ></input>
        <label className="boton-flecha" htmlFor="session-decrement">
          <FaArrowDown className="icon" />
        </label>
        <p id="session-length">{sesion}</p>
        <input
          disabled={play}
          onClick={incrementar}
          className="boton"
          name="session-increment"
          id="session-increment"
          type="button"
        ></input>
        <label className="boton-flecha" htmlFor="session-increment">
          <FaArrowUp className="icon" />
        </label>
      </div>
    </div>
  );
}
