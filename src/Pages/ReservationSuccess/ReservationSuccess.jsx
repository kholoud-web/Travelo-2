import PaymentReceiptCard from "./PaymentReceiptCard";
import { Link, useParams } from "react-router-dom";
import checkCircle from "/assets/images/check-circle.png";
import EmailForm from "./EmaiForm";
export default function ReservationSuccess() {
  const { reservationId } = useParams();
  return (
    <div className="w-[90%] mx-auto min-h-screen px-2  py-4">
      <section className="flex gap-8 md:gap-5 lg:gap-16 xl:gap-[120px] max-md:flex-col">
        <div className="flex-1 p-4">
          <div className="mb-10">
            <div className="flex items-center max-lg:flex-col gap-3 mb-7">
              <img src={checkCircle} />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                You're all set! Start getting ready for your trip.
              </h3>
            </div>
            <p className="font-medium text-neutral-300 max-w-[600px]">
              You have a confirmed reservation with Lockstate. We’ve sent your
              itinerary to emmily.morgan@gmail.com.
            </p>
          </div>

          <EmailForm />

          <div className="flex flex-col gap-3 mt-10">
            <span className="text-[#454C58] font-medium">Need help?</span>
            <Link to={"#"} className="text-lg text-[#0057FF] font-medium">
              Contact Customer Service
            </Link>
          </div>
        </div>

        <PaymentReceiptCard />
      </section>
    </div>
  );
}
