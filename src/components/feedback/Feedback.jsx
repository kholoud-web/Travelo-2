import { useState } from "react";
import SendFeedback from "./SendFeedback";

function Feedback({ handleClose }) {
  const [step, setStep] = useState("form");

  const rates = [
    { name: "very_bad", rate: 1 },
    { name: "bad", rate: 2 },
    { name: "not_bad", rate: 3 },
    { name: "happy", rate: 4 },
    { name: "very_happy", rate: 5 },
  ];
  const handleSend = () => {
    setStep("send");
    setTimeout(handleClose, 2000)
  };
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
        <div className="relative bg-white rounded-2xl py-6 px-8 max-w-[550px] max-h-[90vh] overflow-auto">
          {step === "form" ? (
            <div className="flex flex-col">
              <h2 className="font-medium text-[#2B3037] text-[16px] mb-4">
                How likely are you to recommend tripto to a friend or colleague?
              </h2>
              <div className="flex justify-center gap-2 mb-6">
                {rates.map((rate) => (
                  <button
                    key={rate.rate}
                    className="cursor-pointer border border-[#8B94A4] px-4 py-2 rounded-full font-medium text-[16px] text-[#454C58] hover:bg-[#27A599] hover:text-white "
                  >
                    {rate.rate}
                  </button>
                ))}
              </div>
              <h3 className="font-medium text-[#454C58] text-[16px] mb-4">
                Please include anything else you like us to know
              </h3>
              <textarea
                placeholder="Enter your comments here"
                className="border border-[#DDDFE3] rounded-xl h-[200px] px-4 py-3 w-full resize-none mb-6 "
              ></textarea>
              <div className="flex flex-col mb-6">
                <h4 className="text-[#454C58] font-medium text-[16px] mb-1.5">
                  Email address
                </h4>
                <p className="text-[#8B94A4] font-medium text-[14px] ">
                  we will use your email address (emmily.morgan@gmail.com) to
                  follow-up on account issues, and for no other purpose.
                </p>
              </div>
              <div className="flex justify-center items-center gap-10">
                <button
                  onClick={handleClose}
                  className="border border-[#8B94A4] px-4 py-2 rounded-xl hover:bg-[#27A599] hover:text-white font-medium text-xs transition-colors duration-300"
                >
                  Not now
                </button>
                <button
                  onClick={handleSend}
                  className="border border-[#8B94A4] px-4 py-2 rounded-xl font-medium text-xs bg-[#27A599] text-white hover:bg-white hover:text-black transition-colors duration-300"
                >
                  Send feedback
                </button>
              </div>
            </div>
          ) : (
            <SendFeedback/>
          )}
        </div>
      </div>
    </>
  );
}

export default Feedback;
