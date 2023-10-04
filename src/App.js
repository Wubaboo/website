import "./App.css";

import Home from "./screens/Home";
import Ambigrams from "./screens/Ambigrams";
import { HashRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/ambigrams/" element={<Ambigrams />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
