import React, { useState, useEffect } from "react";
import Character from "./Character";

const Characters = ({ onFinish, getPulledIndex }) => {
  let endpoint = "https://dattebayo-api.onrender.com/characters";
  let index;
  const [array, setArray] = useState([]);
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setArray(data.characters);
        onFinish(data.characters);
      } catch (error) {
        console.log("error fetching characters", error);
      }
    };
    fetchCharacters();
  }, []);

  console.log(array);
  const getIndex = (value) => {
    index = value;
    console.log(index + " in characters components");
    getPulledIndex(index);
  };

  return (
    <div className="w-1/5 h-full bg-white overflow-y-scroll">
      {array.map((item, index) => {
        return (
          <Character
            name={item.name}
            url={item.images[1] || item.images[0]}
            charArray={array}
            indexInArray={index}
            onFinish={getIndex}
          ></Character>
        );
      })}
    </div>
  );
};
export default Characters;
