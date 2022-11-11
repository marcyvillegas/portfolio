import { BrowserRouter } from "react-router-dom";
import NavBar from "./pages/NavBar";
import PageRoutes from "./pages/PageRoutes";

function App() {

  return (
    <BrowserRouter>
        <NavBar />
        <PageRoutes />
    </BrowserRouter>
  )
}

export default App
