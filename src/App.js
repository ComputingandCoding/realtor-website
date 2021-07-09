import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={Home} />
      </div>
    </Router>
  );
}

export default App;
