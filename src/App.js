import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<First />} />
      <Route exact path="/second" element={<Second />} />
      <Route exact path="/third" element={<Third />} />
      <Route exact path="/fourth" element={<Fourth />} />
    </Routes>
  );
}

export default App;
