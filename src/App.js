import React from "react";
import Header from "./Header";
import MiddleSection from "./middleSection";

function App() {
  return (
    <div className="App">
      <div
        style={{
          position: "fixed",
          zIndex: "10",
          top: "0",
          right: "3rem",
        }}
      >
        <Header />
      </div>

      <MiddleSection />
    </div>
  );
}

export default App;
