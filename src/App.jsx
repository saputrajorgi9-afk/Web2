import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import "./index.css";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>

      {/* PRELOADER */}

      <AnimatePresence>
        {loading && (
          <Preloader
            onComplete={() => setLoading(false)}
          />
        )}
      </AnimatePresence>


      {/* NAVBAR */}

      {!loading && <Navbar />}


      {/* ROUTES */}

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;