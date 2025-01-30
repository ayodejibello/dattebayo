import Nav from "../Nav";
import Footer from "../Footer";
import ImageCard from "../ImageCard";
const KekkeiGenkai = () => {
  return (
    <div className="h-max">
      <Nav />
      <div className="p-4">
        <h1 className="text-3xl underline font-bold mb-4">Kekkei Genkai</h1>
        <p>
          Kekkei genkai (血継限界, literally meaning: Bloodline Limit) are DNA
          anomalies that allow their wielders to use unique techniques. A kekkei
          genkai's name describes both the anomaly and the resulting technique.
          Most kekkei genkai are passed down between generations of a clan, an
          exception being Hashirama Senju's Wood Release. Likewise, most
          individuals with kekkei genkai only inherit one kekkei genkai, however
          this is not always the case.
        </p>
        <h2 className="mt-4 mb-4">Some Kekkei Genkai:</h2>
        <div className="flex gap-4 flex-wrap justify-around">
          <ImageCard
            name={"Byakugan"}
            src={
              "https://i.pinimg.com/736x/c7/75/e2/c775e2e319536efb83f24e5efab10fa5.jpg"
            }
          />
          <ImageCard
            name={"Rinnegan"}
            src={
              "https://i.pinimg.com/736x/d8/d7/ec/d8d7ec2b0aca37764da517e80e0ddd1f.jpg"
            }
          />
          <ImageCard
            name={"Sharingan"}
            src={
              "https://i.pinimg.com/736x/1b/81/bf/1b81bfe9419f1594113edd6e0e709d50.jpg"
            }
          />
          <ImageCard
            name={"Mud Release"}
            src={
              "https://i.pinimg.com/736x/28/75/19/2875193e91b218a8278eaa5200b98ece.jpg"
            }
          />
          <ImageCard
            name={"Storm Release"}
            src={
              "https://i.pinimg.com/736x/ea/91/36/ea913649ce1d639601b560a7927f52af.jpg"
            }
          />
          <ImageCard
            name={"Senrigan"}
            src={
              "https://i.pinimg.com/736x/91/82/61/9182614f2aba0bdc924b8087a80d065e.jpg"
            }
          />
          <ImageCard
            name={"Dark Release"}
            src={
              "https://i.pinimg.com/736x/46/2f/58/462f58731a9ca02f672ae843b8d7d254.jpg"
            }
          />
          <ImageCard
            name={"Explosion Release"}
            src={
              "https://i.pinimg.com/736x/56/0b/1b/560b1bc4a9dcedc850063b17ea38d39b.jpg"
            }
          />
          <ImageCard
            name={"Ice Release"}
            src={
              "https://i.pinimg.com/736x/84/10/95/841095c2e7b9c65f9229df05c3a298e7.jpg"
            }
          />
          <ImageCard
            name={"Jogan"}
            src={
              "https://i.pinimg.com/736x/42/1a/ed/421aed30cca980efb5a90bc84c2dac35.jpg"
            }
          />
          <ImageCard
            name={"Lava Release"}
            src={
              "https://i.pinimg.com/736x/89/2d/1d/892d1d7704dbee835255aab19263fbed.jpg"
            }
          />
          <ImageCard
            name={"Magnet Release"}
            src={
              "https://i.pinimg.com/736x/58/53/2d/58532dc32d8faa887802d3fd44917d47.jpg"
            }
          />
          <ImageCard
            name={"Mangekyo Sharingan"}
            src={
              "https://i.pinimg.com/736x/f2/19/1a/f2191a22615cf04aaaa3039cbd781ad5.jpg"
            }
          />
          <ImageCard
            name={"Shikotsumyaku"}
            src={
              "https://i.pinimg.com/736x/f0/bd/3d/f0bd3d48d76c3cf115e802d22f509254.jpg"
            }
          />
          <ImageCard
            name={"Tenseigan"}
            src={
              "https://i.pinimg.com/736x/7b/98/69/7b986936a3dd19668ffd20d29102282d.jpg"
            }
          />
          <ImageCard
            name={"Wood Release"}
            src={
              "https://i.pinimg.com/736x/1c/f5/25/1cf52567ebe336d27456e46e048b8cdf.jpg"
            }
          />
          <ImageCard
            name={"Ranmaru's Kekkei Kenkai"}
            src={
              "https://i.pinimg.com/736x/ba/bb/b8/babbb861e2c63d9c908e0c34469cf3ec.jpg"
            }
          />
          <ImageCard
            name={"Kokugan"}
            src={
              "https://i.pinimg.com/736x/d2/eb/93/d2eb932ac35f9120f11ff7635c310c28.jpg"
            }
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default KekkeiGenkai;
