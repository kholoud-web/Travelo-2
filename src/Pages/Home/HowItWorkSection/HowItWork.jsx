import workImg1 from "/assets/images/workImg1.png";
import workImg2 from "/assets/images/workImg2.png";
import workImg3 from "/assets/images/workImg3.png";
import securityImg from "/assets/images/security.png";
import suportImg from "/assets/images/support.svg.png";
import policyImg from "/assets/images/policy.svg.png";

import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartDetails from "./CartDetails";

const HowItWork = () => {
  const data = [
    {
      title: "Find Your Destination",
      desc: "Choose your destination based on weather, activities, and budget. Check travel advisories, visa requirements, and safety concerns.",
      icon: securityImg,
      color: "#f2d9d3",
    },
    {
      title: "Book a Ticket",
      desc: "Choose reputable platforms or book directly. Read reviews and understand cancellation policies.",
      icon: suportImg,
      color: "#ACECE5",
    },
    {
      title: "Pay and Go",
      desc: "Ensure secure transactions. Save and print confirmation emails. Consider travel insurance for unforeseen events.",
      icon: policyImg,
      color: "#d3f2f0",
    },
  ];
  return (
    <section className="h-auto px-4 how-work-bg main-font">
      <img
        src="/assets/images/How-it-work-bg.png"
        alt="background"
        className="section-image-cover"
      />

      <div className="content-wrapper w-[90%] mx-auto p-5 md:p-10 ">
        <h2 className="text-3xl md:text-5xl font-bold mb-5">How It Work?</h2>
        <p className="text-[#737373] md:text-[20px] mb-3 font-medium">
          Competitive fares for your route-specific searches.
        </p>

        <div className="flex items-start mt-16">
          {/* left side */}
          <div className="flex flex-col me-3 pe-3 w-1/2">
            <img
              src={workImg1}
              alt="workImg1"
              className="w-full rounded-2xl mb-6"
            />
            <div className="flex items-start w-full ">
              <img
                src={workImg2}
                alt="workImg2"
                className="w-1/2 rounded-2xl me-6"
              />
              <div className="relative">
                <img
                  src={workImg3}
                  alt="workImg3"
                  className="w-full rounded-2xl"
                />
                <img
                  src="/assets/icons/wavy.png"
                  alt=""
                  className="absolute bottom-0 translate-y-3/4 translate-x-20"
                />
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="flex flex-col w-1/2 ">
            {data.map((item) => (
              <CartDetails
                key={item.title}
                icon={item.icon}
                title={item.title}
                desc={item.desc}
                color={item.color}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
