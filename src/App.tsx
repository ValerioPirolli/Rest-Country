import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { FlagDetails } from "./components/FlagDetails";
import { flagsDataStore } from "./stores/flagsDataStore";
import { useEffect } from "react";

function App() {
  const { setAllStates } = flagsDataStore();

  useEffect(() => {
    setAllStates();
  }, [setAllStates]);

  return (
    <>
      <div className="flex justify-between p-6 bg-white mb-5 shadow-md">
        <p>Where in the world</p>
        <p>Dark Mode</p>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name" element={<FlagDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
