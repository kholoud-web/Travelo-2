const CityHero = ({ cityId }) => {
  return (
    <section
      className="relative h-130 flex items-center"
      style={{
        background:
          "linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3)), url('https://images.unsplash.com/photo-1534777367038-9404f45b869a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRvdXJpc3R8ZW58MHwwfDB8fHww') center/cover",
      }}
    >
      <div className="max-w-7xl mx-auto px-10 text-white">
        <h1 className="text-5xl font-bold capitalize">
          Discover {cityId}
        </h1>

        <p className="mt-4 text-lg max-w-xl">
          Find the best hotels & restaurants in {cityId}
        </p>
      </div>
    </section>
  );
};

export default CityHero;
