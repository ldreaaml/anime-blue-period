import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <About />
    </div>
  );
}

export default App;
