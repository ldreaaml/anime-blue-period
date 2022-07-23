import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Characters from "./components/Characters/Characters";
import Quote from "./components/Quote/Quote";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <About />
      <Characters />
      <Quote />
      <Footer />
    </div>
  );
}

export default App;
