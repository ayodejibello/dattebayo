import Nav from "../Nav";
import Footer from "../Footer";
import PageWrapper from "../pageWrapper";
import MiniCard from "../MiniCard";
import { useEffect, useState } from "react";
import Loading from "../Loading";

const CharactersPage = () => {
  const Endpoint = "https://dattebayo-api.onrender.com/characters";
  const [characters, setCharacters] = useState(null);
  const [loading, setLoading] = useState(true);
  let [clickedIndex, setClickedIndex] = useState(0);
  function handleClick(index) {
    setClickedIndex(index);
  }
  useEffect(() => {
    const getCharacters = async () => {
      try {
        const response = await fetch(Endpoint);
        const data = await response.json();
        setLoading(true);
        setCharacters(data.characters);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getCharacters();
  }, []);
  console.log(characters);

  return (
    <PageWrapper>
      <Nav />
      <div className="h-full w-full">
        <div className="w-full flex sm:flex-row flex-col">
          {loading ? (
            <Loading />
          ) : (
            <div className="overflow-y-scroll sm:w-1/4 w-full sm:h-[800px] flex sm:flex-col flex-row overflow-x-scroll">
              {characters.map((item, index) => {
                return (
                  <MiniCard
                    onClick={() => {
                      handleClick(index);
                    }}
                    name={item.name}
                    img={item.images[0] || item.images[1]}
                    key={index}
                  />
                );
              })}
            </div>
          )}
          <div className=" w-full h-[800px]">
            {characters && characters.length > 0 && characters[clickedIndex] ? (
              <div
                className="sm:bg-cover bg-contain sm:bg-center bg-no-repeat w-full h-full overflow-scroll"
                style={{
                  backgroundImage: `url(${
                    characters[clickedIndex].images[1] ||
                    characters[clickedIndex].images[0]
                  })`,
                }}
              >
                <div className="w-full  h- p-4 bg-black opacity-80">
                  <h2 className="sm:text-4xl text-2xl font-bold underline text-yellow-400 m-2">
                    {characters[clickedIndex].name}
                  </h2>
                  <h2 className="sm:text-4xl text-2xl  font-bold text-yellow-400 m-2">
                    Clan:{" "}
                    <span className="text-white">
                      {characters[clickedIndex].personal.clan}
                    </span>
                  </h2>
                  <h2 className="sm:text-4xl text-2xl  font-bold text-yellow-400 m-2">
                    Team:{" "}
                    <span className="text-white text-lg">
                      {characters[clickedIndex].personal.team}
                    </span>
                  </h2>

                  <div className="flex gap-2 ">
                    <div>
                      <h2 className="sm:text-3xl text-lg font-bold  text-orange-400 mt-2">
                        Jutsu:
                      </h2>
                      <p>
                        {characters[clickedIndex].jutsu.map((item) => {
                          return <div className="text-white">{item}</div>;
                        })}
                      </p>
                    </div>
                    <div>
                      <h2 className="sm:text-3xl text-lg font-bold  text-orange-400 mt-2">
                        Family:
                      </h2>
                      <h4 className="text-white">
                        Father:{" "}
                        {characters[clickedIndex].family &&
                          characters[clickedIndex].family.father}
                      </h4>
                      <h4 className="text-white">
                        Mother:{" "}
                        {characters[clickedIndex].family &&
                          characters[clickedIndex].family.mother}
                      </h4>
                      <h4 className="text-white">
                        Brother:{" "}
                        {characters[clickedIndex].family &&
                          characters[clickedIndex].family.brother}
                      </h4>
                      <h4 className="text-white">
                        Son:{" "}
                        {characters[clickedIndex].family &&
                          characters[clickedIndex].family.son}
                      </h4>
                      <h4 className="text-white">
                        daughter:{" "}
                        {characters[clickedIndex].family &&
                          characters[clickedIndex].family.daughter}
                      </h4>
                      <h4 className="text-white">
                        Sister:{" "}
                        {characters[clickedIndex].family &&
                          characters[clickedIndex].family.sister}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>

      <Footer />
    </PageWrapper>
  );
};
export default CharactersPage;
