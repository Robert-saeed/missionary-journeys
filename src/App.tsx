import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Maps from "./Maps";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Maps />} />
      </Routes>
    </>
  );
}

export default App;
