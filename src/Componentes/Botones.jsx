import {PiPlayPauseFill} from 'react-icons/pi'
import {RiLoopRightFill} from 'react-icons/ri'

function Botones({startOPausar,resetear}) {

 

  return (
    <div className="botones-main">
        <label htmlFor="start_stop"><PiPlayPauseFill className='start main-icons'/></label>
        <input onClick={startOPausar} id="start_stop" type="button"></input>
        <label htmlFor="reset"><RiLoopRightFill className='reset main-icons'/></label>
        <input onClick={()=>{
          resetear()
          
        }} id="reset" type="button"></input>
    </div>
  )
}

export default Botones