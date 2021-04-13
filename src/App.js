import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./BaseComponents/Routes";
import { WardrobeProvider } from "./Context/WardrobeContext";

const App = () => {
  return <Router>
    <WardrobeProvider>
      <Routes />
    </WardrobeProvider>
  </Router>
}

export default App;
