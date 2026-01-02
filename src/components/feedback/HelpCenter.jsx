import {
  Search,
  ChevronRight,
  Building2,
  Shield,
  CreditCard,
  User,
  Gift,
  Sparkles,
  Lock,
  AlertTriangle,
  Undo2,
} from "lucide-react";

function HelpCenter({ handleClose }) {
  const categories = [
    { name: "Stays", icon: Building2 },
    { name: "Loyalty & Rewards", icon: Gift },
    { name: "Security", icon: Shield },
    { name: "Things to do", icon: Sparkles },
    { name: "Refunds & Charges", icon: CreditCard },
    { name: "Privacy", icon: Lock },
    { name: "Account", icon: User },
    { name: "Travel Alerts", icon: AlertTriangle },
  ];

  return (
    <div className="h-full bg-white px-6 pt-6 rounded-2xl transition-transform duration-300">
      <div className="flex items-center gap-3 mb-8 justify-between">
        <h1 className="text-[32px] font-semibold text-[#121316]">
          Help Center
        </h1>
        <button
          onClick={handleClose}
          className="bg-[#27A599] text-white px-2 py-1 rounded-lg font-medium cursor-pointer flex items-center gap-1"
        >
          Back <Undo2 size={15} />
        </button>
      </div>
      <h2 className="text-[24px] font-semibold text-[#454C58] mb-6">
        Hi, Traveler
      </h2>
      <div className="flex gap-3 mb-12">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Ask"
            className="w-full h-11 border border-[#E3E6EA] rounded-lg px-4 pr-10
            focus:outline-none focus:ring-2 focus:ring-[#27A599]/30"
          />
        </div>

        <button className="bg-[#27A599] text-white px-5 rounded-lg font-medium hover:bg-[#239688] transition flex items-center gap-2">
          <Search
            size={18}
          />
          Search
        </button>
      </div>

      <h3 className="text-[24px] font-semibold text-[#454C58] mb-8">
        Explore help articles
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between border border-[#E3E6EA]
            rounded-xl px-6 py-3 cursor-pointer hover:border-[#27A599]
            transition-colors"
          >
            <div className="flex items-center gap-3 text-[#454C58]">
              <item.icon size={18} />
              <span className="font-medium">{item.name}</span>
            </div>
            <ChevronRight size={20} className="text-[#8B94A4]" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HelpCenter;
