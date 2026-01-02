import bakeryImg from "../../../assets/icons/bakery.png";
import berkyImg from "../../../assets/icons/berky.png";
import bistroImg from "../../../assets/icons/bistro.png";
import coffeImg from "../../../assets/icons/coffe.png";
import forkImg from "../../../assets/icons/fork.png";
import restaurantImg from "../../../assets/icons/restaurant.png";

function Partners() {
  return (
    <>
      <section className="py-6 bg-white text-center">
        <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">
          Partners & Clients
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          We work with the best people
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14">
          <img
            src={restaurantImg}
            alt="Restaurant"
            className="h-36 opacity-40 grayscale hover:opacity-70 transition"
          />
          <img
            src={bakeryImg}
            alt="Bakery"
            className="h-36 opacity-40 grayscale hover:opacity-70 transition"
          />
          <img
            src={forkImg}
            alt="Fork & Spoon"
            className="h-28 opacity-40 grayscale hover:opacity-70 transition"
          />
          <img
            src={coffeImg}
            alt="Coffee"
            className="h-28 opacity-40 grayscale hover:opacity-70 transition"
          />
          <img
            src={bistroImg}
            alt="Bistro"
            className="h-28 opacity-40 grayscale hover:opacity-70 transition"
          />
          <img
            src={berkyImg}
            alt="Bakery Logo"
            className="h-36 opacity-40 grayscale hover:opacity-70 transition"
          />
        </div>
      </section>
    </>
  );
}

export default Partners;
