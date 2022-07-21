import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Characters from "./components/Characters/Characters";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <About />
      <Characters />
    </div>
  );
}

export default App;
