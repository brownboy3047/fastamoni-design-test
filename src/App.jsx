import { BrowserRouter } from "react-router-dom";

//components
import NavBar from "./components/navBar/NavBar";
import LandingPage from "./pages/landingPage/LandingPage";
import Footer from "./components/footer/Footer";

//style
import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <LandingPage />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
