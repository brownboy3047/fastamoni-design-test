import { BrowserRouter } from "react-router-dom";

//components
import NavBar from "./components/navBar/NavBar";
import LandingPage from "./pages/landingPage/LandingPage";

//style
import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <LandingPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
