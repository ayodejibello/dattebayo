import { useEffect, useState } from "react";
import Loading from "../Loading";
import Nav from "../Nav";
import Footer from "../Footer";

const Akatsuki = () => {
  const Endpoint = "https://dattebayo-api.onrender.com/akatsuki";
  const [akatsuki, setAkatsuki] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getAkatsuki = async () => {
      try {
        const response = await fetch(Endpoint);
        const data = await response.json();
        setAkatsuki(data.akatsuki);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getAkatsuki();
  }, []);
  return (
    <div className="h-max">
      <Nav />
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-wrap gap-4 p-2 w-full justify-around items-center">
          {akatsuki.map((item) => {
            return (
              <div
                className="sm:size-52 size-28 bg-center bg-no-repeat bg-cover rounded-md p-2"
                style={{
                  backgroundImage: `url(${item.images[0] || item.images[1]})`,
                }}
              >
                <h3 className="text-white sm:text-md text-sm font-bold">
                  {item.name}
                </h3>
              </div>
            );
          })}
        </div>
      )}
      <Footer />
    </div>
  );
};
export default Akatsuki;
