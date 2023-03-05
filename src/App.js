import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Brands from "./pages/Brands/Brands";
function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Brands />
    </>
  );
}

export default App;
