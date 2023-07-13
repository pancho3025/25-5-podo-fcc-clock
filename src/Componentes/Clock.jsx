export default function Clock({crearTiempo,seccion}) {
  let titulo = seccion == "SESSION" ? 'Session' : 'Break'
  
  return (
    <div className="reloj-container">
        <h4 id="timer-label" className="reloj-title">{titulo}</h4>
        <p id="time-left" className="reloj-time">{crearTiempo()}</p>
    </div>
  )
}
