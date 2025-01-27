import Nav from "../Nav";
import Footer from "../Footer";
import smiley from "../../assets/smiley.gif";
const Home = () => {
  return (
    <div className="h-screen">
      <Nav />
      <div className="h-[80%] p-5">
        <h1 className="font-bold text-xl mb-5">
          Welcome to <b className="text-blue-700">Blue</b>Ramen
        </h1>
        <p className="text-lg">
          Blue Ramen is a fun project by Blue. It integrates The{" "}
          <a href="https://api-dattebayo.vercel.app/" className="underline">
            Dattebayo API{" "}
          </a>
          to create a cool site that allows Otakus to have Access to some cool
          Naruto Facts . But most of all, it is just a practice project of an
          aesthetic Otaku with love for Tech.......
          <img
            src={smiley}
            alt="smiley face"
            className="inline-block p-2 w-10"
          />
        </p>
        <p>Have Fun (: </p>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
