import { BrowserRouter } from "react-router-dom";
//components
import NavBar from "./components/navBar/NavBar";

//style
import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
