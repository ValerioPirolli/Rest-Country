import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./assets/components/Home";
import { FlagDetails } from "./assets/components/FlagDetails";

function App() {
  return (
    <>
      <div>Ciao</div>
      <Router>
        <Routes>
          <Route element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/:name" Component={FlagDetails} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
