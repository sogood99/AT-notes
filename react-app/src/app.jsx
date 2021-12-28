import { BrowserRouter, Route, Routes } from "react-router-dom";
import Latex from "./latex";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Latex>
              <Home />
            </Latex>
          }
        />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
