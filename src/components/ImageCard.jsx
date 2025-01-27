const ImageCard = ({ src, name }) => {
  return (
    <div
      className="bg-center bg-cover bg- bg-no-repeat sm:size-48 size-24 rounded-md"
      style={{ backgroundImage: `url(${src})` }}
    >
      <h3 className="w-full bg-black bg-opacity-20 p-2 text-white font-bold rounded-md">
        {name}
      </h3>
    </div>
  );
};
export default ImageCard;
