import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./assets/components/Home";
import { FlagDetails } from "./assets/components/FlagDetails";
import { flagsDataStore } from "./assets/stores/flagsDataStore";
import { useEffect } from "react";

function App() {
  const { setAllStates } = flagsDataStore();

  useEffect(() => {
    setAllStates();
  }, [setAllStates]);

  return (
    <>
      <div>Ciao</div>
      <Router>
        <Routes>
          <Route element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/:name" element={<FlagDetails></FlagDetails>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
