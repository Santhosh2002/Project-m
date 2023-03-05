import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Brands from "./pages/Brands/Brands";
import Stories from "./pages/Stories/Stories";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Brands />
      <Stories />
      <Footer />
    </>
  );
}

export default App;
