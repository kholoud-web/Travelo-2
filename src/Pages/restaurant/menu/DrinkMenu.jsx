import drinkImg from "../../../assets/img/drink.jpg";
import MenuItem from '../../../components/restaurant/MenuItem'

function DrinkMenu() {
  return (
   <>
      <section className="container mx-auto px-6 py-3 grid lg:grid-cols-2 gap-12 items-center ">
        <div>
          <h2 className="text-3xl font-bold mb-6">Drinks</h2>

          <MenuItem
            title="Caffè macchiato"
            price="32$"
            subTitle="GToasted French bread topped with romano, cheddar"
            cal="560 CAL"
          />
          <MenuItem
            title="Aperol Spritz Capacianno"
            price="43$"
            subTitle="Gorgonzola, ricotta, mozzarella, taleggio"
            cal="700 CAL"
          />
          <MenuItem
            title="Caffe Latte Campuri"
            price="14$"
            subTitle="Ground cumin, avocados, peeled and cubed"
            cal="1000 CAL"
          />
          <MenuItem
            title="Tormentoso BushTea Pintoage"
            price="36$"
            subTitle="Spreadable cream cheese, crumbled blue cheese"
            cal="500 CAL"
          />
        </div>
        <div className="flex justify-end rounded-2xl">
          <img
            src={drinkImg}
            alt="drink"
            className="rounded-4xl p-6 w-full object-cover max-h-[90vh]"
          />
        </div>
      </section>
   </>
  )
}

export default DrinkMenu
