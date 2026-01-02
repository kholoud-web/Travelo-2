import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function CartDetails({ icon, title, desc, color }) {
  return (
    <>
      <div
        className={`flex bg-[${color}] mb-9 items-start py-9 px-7 rounded-2xl`}
      >
        <div className=" w-16 h-16 me-4">
          <img
            src={icon}
            alt="security Image"
            className="w-full bg-white p-2 rounded-2xl"
          />
        </div>
        <div>
          <h3 className="text-[20px] font-bold mb-2">{title}</h3>
          <p className="text-sm font-medium text-[#737373]">{desc}</p>
          <span className="text-sm font-bold flex items-center gap-1 text-[#494949] mt-2 ">
            <Link> Learn More </Link>
            <FaArrowRight />
          </span>
        </div>
      </div>
    </>
  );
}

export default CartDetails;
