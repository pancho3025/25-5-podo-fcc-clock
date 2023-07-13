import { FaGithub, FaCodepen } from "react-icons/fa";
function Autor() {
  return (
    <div className="autor-container">
      <p className="autor-desc">Designed and Coded by</p>
      <p className="autor-name">francisco</p>
      <div className="autor-links">
        <a target="_blank" href="https://github.com/pancho3025">
          <FaGithub className="autor-icons" />
        </a>
        <a target="_blank" href="https://codepen.io/pancho3025">
          <FaCodepen className="autor-icons" />
        </a>
      </div>
    </div>
  );
}

export default Autor;
