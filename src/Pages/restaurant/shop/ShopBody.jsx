import { useState } from "react";
import Dropdown from "../../../components/restaurant/Dropdown";
import MenuItems from "../../../components/restaurant/MenuItems";

// images static
import Img_1 from "../../../assets/img/shop/1.jpg";
import Img_2 from "../../../assets/img/shop/2.jpg";
import Img_3 from "../../../assets/img/shop/3.jpg";
import Img_4 from "../../../assets/img/shop/4.jpg";
import Img_5 from "../../../assets/img/shop/5.jpg";
import Img_6 from "../../../assets/img/shop/6.jpg";
import Img_7 from "../../../assets/img/shop/7.jpg";
import Img_8 from "../../../assets/img/shop/8.jpg";
import Img_9 from "../../../assets/img/shop/9.jpg";
import Img_10 from "../../../assets/img/shop/10.jpg";
import Img_11 from "../../../assets/img/shop/11.jpg";
import Img_12 from "../../../assets/img/shop/12.jpg";
import Img_13 from "../../../assets/img/shop/13.jpg";
import Img_14 from "../../../assets/img/shop/14.jpg";
import Img_15 from "../../../assets/img/shop/15.jpg";

function ShopBody() {
  const [sortBy, setSortBy] = useState("Newest");
  const [show, setShow] = useState("Default");

  const items = [
    {
      img: Img_1,
      title: "Fresh Lime",
      price: "$38.00",
      sell: false,
      oldPrice: "$45.00",
    },
    {
      img: Img_2,
      title: "Fresh Lime",
      price: "$38.00",
      sell: false,
      oldPrice: "$83.00",
    },
    {
      img: Img_3,
      title: "Fresh Lime",
      price: "$38.00",
      sell: false,
      oldPrice: "$4725.00",
    },
    { img: Img_4, title: "Fresh Lime", price: "$38.00", sell: true },
    { img: Img_5, title: "Fresh Lime", price: "$38.00", sell: false },
    { img: Img_6, title: "Fresh Lime", price: "$38.00", sell: false },
    {
      img: Img_7,
      title: "Fresh Lime",
      price: "$38.00",
      sell: false,
      oldPrice: "$90.00",
    },
    { img: Img_8, title: "Fresh Lime", price: "$38.00", sell: false },
    {
      img: Img_9,
      title: "Fresh Lime",
      price: "$38.00",
      sell: true,
      oldPrice: "$45.00",
    },
    { img: Img_10, title: "Fresh Lime", price: "$38.00", sell: false },
    { img: Img_11, title: "Fresh Lime", price: "$38.00", sell: true },
    { img: Img_12, title: "Fresh Lime", price: "$38.00", sell: false },
    {
      img: Img_13,
      title: "Fresh Lime",
      price: "$38.00",
      sell: false,
      oldPrice: "$50.00",
    },
    { img: Img_14, title: "Fresh Lime", price: "$38.00", sell: true },
    { img: Img_15, title: "Fresh Lime", price: "$38.00", sell: false },
  ];

  return (
    <div className="m-4">
      <div className="flex flex-wrap items-center gap-8">
        <Dropdown
          label="Sort By"
          value={sortBy}
          onChange={setSortBy}
          width="w-[200px]"
          options={[
            "Newest",
            "Oldest",
            "Price: Low to High",
            "Price: High to Low",
          ]}
        />

        <Dropdown
          label="Show"
          value={show}
          onChange={setShow}
          width="w-[140px]"
          options={["Default", "10", "20", "50"]}
        />
      </div>
      <div className=" my-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {items.map((item) => (
          <MenuItems
            img={item.img}
            title={item.title}
            price={item.price}
            sell={item.sell}
            oldPrice={item.oldPrice}
          />
        ))}
      </div>
    </div>
  );
}

export default ShopBody;
