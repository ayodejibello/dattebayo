import { useEffect, useState } from "react";
import Loading from "../Loading";
import Nav from "../Nav";
import PageWrapper from "../pageWrapper";
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
    <PageWrapper>
      <Nav />
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-wrap gap-6 p-2 w-full sm:justify-around items-center">
          {akatsuki.map((item) => {
            return (
              <div
                className="sm:size-52 size-32 bg-center bg-no-repeat bg-cover rounded-md p-2"
                style={{
                  backgroundImage: `url(${item.images[0] || item.images[1]})`,
                }}
              >
                <h3 className="text-white font-bold">{item.name}</h3>
              </div>
            );
          })}
        </div>
      )}
      <Footer />
    </PageWrapper>
  );
};
export default Akatsuki;
