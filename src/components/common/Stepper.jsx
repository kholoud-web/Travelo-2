import { Check } from "lucide-react";

export default function Stepper({ step: currentStep }) {
  const steps = [
    { number: 1, label: "Your selection" },
    { number: 2, label: "Your details" },
    { number: 3, label: "Finish booking" }
  ];

  return (
    <div className="flex mb-12 px-4 w-[80%] mx-auto  ">
      {steps.map((step, index) => {
        const isActive = currentStep === step.number;
        const isCompleted = currentStep > step.number;

        return (
          <div key={step.number} className="flex items-  flex-1">
            <div className="flex items-center flex-col gap-3 justify-center">
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full font-semibold transition-all
                  ${
                    isCompleted
                      ? "bg-[#454C58]  text-white"
                      : isActive
                      ? " text-white bg-[#27A599]"
                      : " bg-[#454C58]  text-white"
                  }
                `}
              >
                {isCompleted ? <Check size={20} strokeWidth={3} /> : step.number}
              </div>

              <span
                className={`ml-3 text-sm font-medium whitespace-nowrap text-[#454C58]  `}
              >
                {step.label}
              </span>
            </div>

            {index !== steps.length - 1 && (
              <div
                className={`flex-1 h-0.5  mt-5  transition-all ${
                  isCompleted ? "bg-[#454C58]" : "bg-gray-300"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
