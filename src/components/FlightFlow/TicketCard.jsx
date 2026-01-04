import Between from "./BookDetails/Between";

import Right from "./BookDetails/Right";
import Left from "./BookDetails/Left";

const TicketCard = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full mt-4 shadow-lg rounded-lg overflow-hidden">
      {/* Left */}
      <div className="h-[309px] bg-[#EBF6F2] p-3">
        <Left />
      </div>

      {/* Between */}
      <div className=" h-[309px] bg-white  border-l border-r border-gray-200">
        <Between />
      </div>

      {/* Right */}
      <div className="w-full  h-[309px] p-0 ">
        <Right />
      </div>
    </div>
  );
};

export default TicketCard;
