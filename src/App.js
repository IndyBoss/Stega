import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Home from "./Home/Home";

function App() {
  document.title = "My Steganography manager";
  return (
    <SnackbarProvider maxSnack={4} autoHideDuration={3000}>
      <BrowserRouter basename={"/Stega"}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* ERROR */}
          <Route
            path="*"
            element={
              <div id="fullscreen">
                <span>Your princess is in another castle!</span>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
