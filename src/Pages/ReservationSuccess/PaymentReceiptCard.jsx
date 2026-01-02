import testImg from "/assets/images/hotel-arts-barcelona.jpg";

export default function PaymentReceiptCard() {
  return (
    <div className="p-4 rounded-2xl border border-gray-200 bg-white shadow-sm">
      {/* Hero Image */}
      <div className="relative w-full mb-4">
        <img
          src={testImg}
          alt="Hotel"
          className="h-[305px] rounded-sm w-full object-cover"
        />
      </div>

      {/* Hotel Info */}
      <div className="flex flex-col gap-4 mb-4">
        <h3 className="text-2xl font-bold text-[#454C58]">
          Hotel Arts Barcelona
        </h3>
        <div className="flex flex-col gap-4">
          <p className=" text-base text-neutral-300">
            Aug 14 – 19, 2025 · 2 guests
          </p>
          <p className=" text-base text-neutral-300">4400 Broadway</p>
          <p className=" text-base text-neutral-300">Boulder, CO 80304</p>
        </div>
      </div>

      {/* Payment Details */}
      <div>
        <p className="mb-4 font-medium text-neutral-400">Payment</p>

        <div className="flex justify-between font-medium text-neutral-400">
          <span>Apple Pay</span>
          <span>€ 1,528</span>
        </div>

        <p className="mt-2  text-neutral-400">Aug 14, 2025 · 14:58 PM GMT+1</p>
      </div>

      <div className="border-t border-gray-200 my-4" />

      {/* Reservation Code */}
      <div className="">
        <div className="flex justify-between items-center">
          <span className="text-neutral-300">Reservation Code</span>
          <span className="font-mono font-semibold text-[#454C58]">
            HMPJW3DKWH
          </span>
        </div>
      </div>
    </div>
  );
}
