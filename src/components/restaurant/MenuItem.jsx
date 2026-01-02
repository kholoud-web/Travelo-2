const MenuItem = ({ title, price, subTitle, cal }) => {
  return (
    <div className="flex justify-between py-3 ">
      <div className="flex flex-col">
        <span className="text-[#259F93] font-bold text-2xl mb-2">{title}</span>
        <span className="text-[#4F4F4F] font-normal text-[16px] mb-2">{subTitle}</span>
        <span className="text-[#828282] font-normal text-[16px] mb-2">{cal}</span>
      </div>
      <span className="font-semibold text-[#2EC4B6]">{price}</span>
    </div>
  );
};

export default MenuItem;
