import Characters from "./components/Characters";
import CharacterMain from "./components/CharacterMain";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { useState } from "react";
const App = () => {
  const [charArray, setCharArray] = useState([]);
  const passArray = (array) => {
    setCharArray([...array]);
  };
  const [pulledIndex, setPulledIndex] = useState("");
  const getPulledIndex = (index) => {
    setPulledIndex(index);
    console.log("pulled index " + pulledIndex);
  };
  console.log(charArray);
  return (
    <div className="bg-slate-950 w-full h-screen">
      <Nav />
      <div className="flex h-[90%]">
        <Characters onFinish={passArray} getPulledIndex={getPulledIndex} />
        <CharacterMain charArray={charArray} index={pulledIndex} />
      </div>

      <Footer />
    </div>
  );
};
export default App;
