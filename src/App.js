import "./styles/Main.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <header>
        <h1>🥔 감자마켓</h1>
      </header>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
