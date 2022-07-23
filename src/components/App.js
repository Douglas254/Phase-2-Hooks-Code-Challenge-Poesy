import React, { useEffect, useState } from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {
  const [poems, setPoems] = useState([]);
  // fetch poems from db
  useEffect(() => {
    fetch(" http://localhost:8004/poems")
      .then((res) => res.json())
      .then((ourPoems) => setPoems(ourPoems));
  }, []);

  return (
    <div className="app">
      <div className="sidebar">
        <button>Show/hide new poem form</button>
        {true ? <NewPoemForm /> : null}
      </div>
      <PoemsContainer poems={poems} />
    </div>
  );
}

export default App;
