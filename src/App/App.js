import "./App.css";
import Main from "../Components/Main/Main.js";
import Header from "../Components/Header/Header.js";
import { Router } from "react-router-dom";

function App() {
  return (

    <Router>

      <div className="App">
        <Header />
        <Main />
      </div>
      
    </Router>
  );
}

export default App;
