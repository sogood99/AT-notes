import { HashRouter, Route, Routes } from "react-router-dom";
import Latex from "./latex";
import CatTheory from "./pages/catTheory";
import Home from "./pages/home";
import SingularHom from "./pages/singularHom";
import VanKampen from "./pages/vanKampen";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Latex>
              <Home />
            </Latex>
          }
        />
        <Route
          path="cattheory"
          element={
            <Latex>
              <CatTheory />
            </Latex>
          }
        />
        <Route
          path="vankampen"
          element={
            <Latex>
              <VanKampen />
            </Latex>
          }
        />
        <Route
          path="singularhom"
          element={
            <Latex>
              <SingularHom />
            </Latex>
          }
        />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </HashRouter>
  );
}
export default App;
