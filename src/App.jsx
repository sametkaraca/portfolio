import React from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Pages } from "./components/Pages";

const App = () => {
  return (
    <div>
      <Navbar />
      <Pages />
      <Footer />
    </div>
  );
};

export default App;
