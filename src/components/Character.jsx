const Character = ({ name, url, indexInArray, onFinish }) => {
  let clicked;
  const pullItem = () => {
    console.log(indexInArray);
    clicked = indexInArray;
    onFinish(indexInArray);
  };
  return (
    <div
      className="w-full h-44 bg-cover bg-center flex bg-no-repeat hover:border-2 hover:border-red-500 transition-all "
      style={{ backgroundImage: `url(${url})` }}
      onClick={pullItem}
    >
      <span className="h-full w-full bg-black bg-opacity-20 text-white font-bold text-lg text-center hover:bg-opacity-0 hover:bg-transparent transition-all ">
        {name}
      </span>
    </div>
  );
};
export default Character;
