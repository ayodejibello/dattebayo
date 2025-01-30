import Nav from "../Nav";
import Footer from "../Footer";
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
    <div className="h-max">
      <Nav />
      <div className="w-full">
        <div className="w-full sm:h-[500px] h-full overflow-scroll flex sm:flex-row flex-col">
          {loading ? (
            <Loading />
          ) : (
            <div className="sm:w-1/5 w-full overflow-scroll flex sm:flex-col flex-row">
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
          <div className=" w-full h-full overflow-scroll">
            {characters && characters.length > 0 && characters[clickedIndex] ? (
              <div className="p-4">
                <div className="flex gap-2 sm:flex-row flex-col">
                  <img
                    src={
                      characters[clickedIndex].images[1] ||
                      characters[clickedIndex].images[0]
                    }
                    className="w-[250px] rounded-md"
                    alt={characters[clickedIndex].name}
                  />
                  <div>
                    <h1 className="text-5xl font-semibold ">
                      {characters[clickedIndex].name}
                    </h1>
                    <div className="flex flex-col">
                      <h2 className="underline text-xl">Table of Contents</h2>
                      <h4>Debut</h4>
                      <h4>Family</h4>
                      <h4>Nature Type</h4>
                      <h4>Tools</h4>
                      <h4>Voice Actors</h4>
                    </div>
                  </div>
                </div>
                {/* Debut */}
                <h2 className="underline text-2xl">Debut:</h2>
                <h3>Manga: {characters[clickedIndex].debut.manga}</h3>
                <h3>Anime: {characters[clickedIndex].debut.anime}</h3>
                <h3>Movie: {characters[clickedIndex].debut.movie}</h3>
                <h3>Game: {characters[clickedIndex].debut.game}</h3>
                <h3>OVA: {characters[clickedIndex].debut.ova}</h3>
                {/* Family */}
                <h2 className="underline text-2xl">Family:</h2>
                <h3>
                  Father:
                  {characters[clickedIndex].family
                    ? characters[clickedIndex].family.father
                    : "Not Mentioned/None"}
                </h3>
                <h3>
                  Mother:
                  {characters[clickedIndex].family
                    ? characters[clickedIndex].family.mother
                    : "Not Mentioned/None"}
                </h3>
                <h3>
                  Son:
                  {characters[clickedIndex].family
                    ? characters[clickedIndex].family.son
                    : "Not Mentioned/None"}
                </h3>
                <h3>
                  Daughter:
                  {characters[clickedIndex].family
                    ? characters[clickedIndex].family.daughter
                    : "Not Mentioned/None"}
                </h3>
                <h3>
                  Wife:
                  {characters[clickedIndex].family
                    ? characters[clickedIndex].family.wife
                    : "Not Mentioned/None"}
                </h3>
                <h3>
                  Brother:
                  {characters[clickedIndex].family
                    ? characters[clickedIndex].family.brother
                    : "Not Mentioned/None"}
                </h3>
                <h3>
                  Sister:
                  {characters[clickedIndex].family
                    ? characters[clickedIndex].family.sister
                    : "Not Mentioned/None"}
                </h3>
                {/* Nature Type */}
                <h2 className="underline text-2xl">Nature Type:</h2>
                <h3>
                  {characters[clickedIndex].natureType &&
                    characters[clickedIndex].natureType.map((item) => {
                      return <span>{item}, </span>;
                    })}
                </h3>
                {/* Kekkei genkai */}
                <h2 className="underline text-2xl">Tools:</h2>
                <h3>
                  {characters[clickedIndex].tools &&
                    characters[clickedIndex].tools.map((item) => {
                      return <span>{item}, </span>;
                    })}
                </h3>
                {/* Voice Actors */}
                <h2 className="underline text-2xl">Voice Actors:</h2>
                <h3>
                  Japanese: {characters[clickedIndex].voiceActors.japanese}
                </h3>
                <h3>English: {characters[clickedIndex].voiceActors.english}</h3>
                {/* Jutsu */}
                <h2 className="underline text-2xl">Justsu:</h2>
                <h3>
                  {characters[clickedIndex].jutsu &&
                    characters[clickedIndex].jutsu.map((item) => {
                      return <span>{item}, </span>;
                    })}
                </h3>
              </div>
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default CharactersPage;
