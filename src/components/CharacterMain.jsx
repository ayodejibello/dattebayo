const CharacterMain = ({ charArray, index }) => {
  console.log(charArray);
  localStorage.setItem("array", charArray);
  return (
    <div
      className="w-full h-full overflow-scroll p-5 "
      style={{ backgroundImage: `url${charArray[index].images[0]}` }}
    >
      <h1 className="text-white">{charArray[index].name}</h1>
      <span className="font-bold text-white text-lg">Skillset:</span>
      <div className="flex flex-wrap gap-1">
        {charArray[index].jutsu.map((item) => {
          return <p className="text-sm text-white">{item}, </p>;
        })}
      </div>
    </div>
  );
};
export default CharacterMain;
