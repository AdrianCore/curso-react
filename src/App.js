import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import MiComponente from './components/MiComponente';


function HolaMundo(nombre, edad){
  var presentacion = <div>
  <h2>Hola, soy {nombre}</h2>
  <h3>Y tengo {edad} años</h3>
  </div>
  return presentacion;
}


function App() {
  var nombre = "Adrian García";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Aquí podemos poner el texto que queramos.
        </p>
        {HolaMundo(nombre, 27)}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende más de React
        </a>
        
      </header>

      <section>
          <MiComponente />
        </section>

    </div>
  );
}

export default App;
