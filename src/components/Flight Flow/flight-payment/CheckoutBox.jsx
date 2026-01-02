import { useState } from "react";
import Stepper from "../../common/Stepper";
import YourDetailsStep from "./YourDetailsStep";
import CompleteBookingStep from "./CompleteBookingStep";

export default function FlightCheckoutBox({ flight }) {
  const [step, setStep] = useState(2);
  const [bookingData, setBookingData] = useState({
    passengerDetails: null,
    paymentPlan: null,
    personalDetails: null,
    cardDetails: null,
  });

  const handleDetailsComplete = (data) => {
    setBookingData((prev) => ({
      ...prev,
      passengerDetails: data.passengerDetails,
      paymentPlan: data.paymentPlan,
    }));
    setStep(3);
  };

  const handlePaymentComplete = (data) => {
    setBookingData((prev) => ({
      ...prev,
      personalDetails: data.personalDetails,
      cardDetails: data.cardDetails,
    }));

    console.log("Booking completed:", {
      ...bookingData,
      ...data,
      flight,
    });

    alert("Booking completed successfully!");
  };

  return (
    <div className="flex flex-col">
      <Stepper step={step} />

      {step === 2 && (
        <YourDetailsStep flight={flight} onNext={handleDetailsComplete} />
      )}

      {step === 3 && (
        <CompleteBookingStep
          flight={flight}
          passengerDetails={bookingData.passengerDetails}
          onComplete={handlePaymentComplete}
        />
      )}
    </div>
  );
}
