const MiniCard = ({ img, name, onClick }) => {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className="w-full h-[80px] border-2 bg-no-repeat bg-cover bg-center p-4 cursor-pointer"
      onClick={onClick}
    >
      <div className="h-full w-full">
        <h3 className="text-white text-lg font-semibold">{name}</h3>
      </div>
    </div>
  );
};
export default MiniCard;
