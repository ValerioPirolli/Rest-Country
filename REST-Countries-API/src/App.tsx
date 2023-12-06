import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./assets/components/Home";
import { FlagDetails } from "./assets/components/FlagDetails";
import { flagsDataStore } from "./assets/stores/flagsDataStore";
import { useEffect } from "react";

function App() {
  const { setAllStates, allStates } = flagsDataStore();
  useEffect(() => {
    setAllStates();
  }, [setAllStates]);
  return (
    <>
      <div>Ciao</div>
      <div>
        {allStates.map((step) => (
          <h1>name: {step.name}</h1>
        ))}
      </div>
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
