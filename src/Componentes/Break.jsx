import { FaArrowUp, FaArrowDown } from "react-icons/fa";

export default function Break({ play, descanso, setDescanso }) {
  const incrementar = () => {
    if (descanso < 60) {
      setDescanso(descanso + 1);
    }
  };
  const decrementar = () => {
    if (descanso > 1) {
      setDescanso(descanso - 1);
    }
  };

  return (
    <div className="data-container">
      <h4 className="data-title" id="break-label">
        Break Length
      </h4>
      <div className="botones">
        <input
          disabled={play}
          onClick={decrementar}
          className="boton"
          name="break-decrement"
          id="break-decrement"
          type="button"
        ></input>
        <label className="boton-flecha" htmlFor="break-decrement">
          <FaArrowDown className="icon" />
        </label>
        <p id="break-length">{descanso}</p>
        <input
          disabled={play}
          onClick={incrementar}
          className="boton"
          name="break-increment"
          id="break-increment"
          type="button"
        ></input>
        <label className="boton-flecha" htmlFor="break-increment">
          <FaArrowUp className="icon" />
        </label>
      </div>
    </div>
  );
}
