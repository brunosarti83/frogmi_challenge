import { useState } from "react";
import FeaturesContainer from "./Components/FeaturesContainer/FeaturesContainer";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  const [selected, setSelected] = useState(new Set([]));

  return (
    <div className="w-full min-h-[100dvh] bg-slate-700 flex flex-col text-gray-50">
      <NavBar selected={selected} setSelected={setSelected} />
      <FeaturesContainer selected={selected} />
    </div>
  );
}

export default App;
