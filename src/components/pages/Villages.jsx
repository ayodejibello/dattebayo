import { useEffect, useState } from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import Loading from "../Loading";
const Villages = () => {
  const [villages, setVillages] = useState(null);
  const [loading, setLoading] = useState(true);

  let endPoint = "https://dattebayo-api.onrender.com/villages";
  useEffect(() => {
    const getVillages = async () => {
      try {
        const response = await fetch(endPoint);
        const data = await response.json();
        setVillages(data.villages);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getVillages();
  }, []);
  console.log(villages);
  console.log(loading);

  return (
    <div className="h-max">
      <Nav />
      <div className="min-h-[80%]">
        {loading ? (
          <Loading />
        ) : (
          <div className="p-2">
            <ol>
              {villages.map((item) => {
                return <li className="text-lg">{item.name}</li>;
              })}
            </ol>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};
export default Villages;
