import './App.css'
import Messages from './components/Messages';


function Mensa() {

  return (
    <div className="App">
      <h1>Chat</h1>
      <p>Publico</p>
      <div className="container">
         <Messages/>
      </div>
    </div>
  )
}

export default Mensa
