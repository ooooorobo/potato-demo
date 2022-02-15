import { Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main";
import { NotFoundError } from "./pages/NotFoundError";
import { Post } from "./pages/Post";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/post" element={<Post />} />
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFoundError />} />
      </Routes>
    </div>
  );
}

export default App;
