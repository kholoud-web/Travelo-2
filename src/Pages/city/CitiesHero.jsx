const CitiesHero = () => {
  return (
    <section
      className="h-105 flex items-center"
      style={{
        background:
          "linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3)), url('https://images.unsplash.com/photo-1550604602-7fae1adbe912?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') center/cover",
      }}
    >
      <div className="max-w-7xl mx-auto px-10 text-white flex flex-col items-center">
        <h1 className="text-5xl font-bold">Explore Cities</h1>
        <p className="mt-4 text-lg max-w-xl">
          Discover hotels, restaurants & experiences in top destinations
        </p>
      </div>
    </section>
  );
};
export default CitiesHero;
