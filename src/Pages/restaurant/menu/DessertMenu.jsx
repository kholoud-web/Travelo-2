import dessertImg from "../../../assets/img/dessert.jpg";
import MenuItem from "../../../components/restaurant/MenuItem";

function DessertMenu() {
  return (
    <>
      <section className="container mx-auto px-6 py-3 grid lg:grid-cols-2 gap-12 items-center ">
        <div className="flex justify-end rounded-2xl">
          <img
            src={dessertImg}
            alt="drink"
            className="rounded-4xl p-6 w-full object-cover max-h-[90vh]"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Dessert</h2>

          <MenuItem
            title="Fig and lemon cake"
            price="32$"
            subTitle="Toasted French bread topped with romano, cheddar"
            cal="560 CAL"
          />
          <MenuItem
            title="Creamy mascarpone cake"
            price="43$"
            subTitle="Creamy mascarpone cake"
            cal="700 CAL"
          />
          <MenuItem
            title="Pastry, blueberries, lemon juice"
            price="14$"
            subTitle="Ground cumin, avocados, peeled and cubed"
            cal="1000 CAL"
          />
          <MenuItem
            title="Pain au chocolat"
            price="36$"
            subTitle="Spreadable cream cheese, crumbled blue cheese"
            cal="500 CAL"
          />
        </div>
      </section>
    </>
  );
}

export default DessertMenu;
