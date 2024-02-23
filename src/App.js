import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";

function App() {
  document.title = "My Steganography manager";
  return (
    <BrowserRouter basename={"/Stega"}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* ERROR */}
        <Route
          path="*"
          element={
            <div id="fullscreen">
              <span>Your princess is in another castle</span>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
