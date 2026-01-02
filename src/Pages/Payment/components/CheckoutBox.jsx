import { useState } from "react";
import YourDetailsStep from "./CheckoutSteps/YourDetailsStep";
import CompleteBookingStep from "./CheckoutSteps/CompleteBookingStep";
import Stepper from "../../../components/common/Stepper";

export default function CheckoutBox() {
  const [step, setStep] = useState(3);

  return (
    <div className="flex flex-col">
      <Stepper step={step} />

      {step === 2 && <YourDetailsStep />}
      {step === 3 && <CompleteBookingStep />}
    </div>
  );
}
