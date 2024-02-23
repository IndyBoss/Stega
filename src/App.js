import { BrowserRouter } from "react-router-dom";
import Router from "./Router/Router";

function App() {
  return (
    <BrowserRouter basename={"/"}>
      <Router />
      </BrowserRouter>
  );
}

export default App;
