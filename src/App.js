import "./styles/App.css";

import Home from "./screens/home";
import Ambigrams from "./screens/ambigrams";
import { HashRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="container">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/ambigrams/" element={<Ambigrams />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}
