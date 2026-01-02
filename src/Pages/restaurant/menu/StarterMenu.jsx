import dishImg from "../../../assets/img/desh.jpg";
import bizzaImg from "../../../assets/img/bizza.jpg";

import MenuItem from "../../../components/restaurant/MenuItem";

function StarterMenu() {
  return (
    <>
    {/* Starter Menu top*/}
      <section className="container mx-auto px-6 py-6 grid lg:grid-cols-2 gap-12 items-center">
        <img
          src={dishImg}
          alt="Starter Dish"
          className="rounded-2xl shadow-xl"
        />
        <div>
          <h2 className="text-3xl font-bold mb-6">Starter Menu</h2>

          <MenuItem
            title="Berries and creme tart"
            price="$43"
            subTitle="Gorgonzola, ricotta, mozzarella, taleggio"
            cal="700 CAL"
          />
          <MenuItem
            title="Berries and creme tart"
            price="$43"
            subTitle="Gorgonzola, ricotta, mozzarella, taleggio"
            cal="700 CAL"
          />
          <MenuItem
            title="Berries and creme tart"
            price="$43"
            subTitle="Gorgonzola, ricotta, mozzarella, taleggio"
            cal="700 CAL"
          />
          <MenuItem
            title="Berries and creme tart"
            price="$43"
            subTitle="Gorgonzola, ricotta, mozzarella, taleggio"
            cal="700 CAL"
          />
        </div>
      </section>
      {/* Starter Menu bottom*/}
      <section className="container mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Starter Menu</h2>

          <MenuItem
            title="Berries and creme tart"
            price="$43"
            subTitle="Gorgonzola, ricotta, mozzarella, taleggio"
            cal="700 CAL"
          />
          <MenuItem
            title="Berries and creme tart"
            price="$43"
            subTitle="Gorgonzola, ricotta, mozzarella, taleggio"
            cal="700 CAL"
          />
          <MenuItem
            title="Berries and creme tart"
            price="$43"
            subTitle="Gorgonzola, ricotta, mozzarella, taleggio"
            cal="700 CAL"
          />
          <MenuItem
            title="Berries and creme tart"
            price="$43"
            subTitle="Gorgonzola, ricotta, mozzarella, taleggio"
            cal="700 CAL"
          />
        </div>
        <div
          className="rounded-2xl"
          style={{ backgroundImage: `url(${bizzaImg})` }}
        >
          <img
            src={dishImg}
            alt="Starter Dish"
            className="rounded-4xl p-6 shadow-xl"
          />
        </div>
      </section>
    </>
  )
}

export default StarterMenu
