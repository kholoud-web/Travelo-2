import testImg from "/assets/images/hotel-arts-barcelona.jpg";
export default function BookingSummaryCard() {
  return (
    <div className="flex flex-col h-fit gap-6 p-6 rounded-2xl border border-gray-200 bg-white shadow-md shadow-[#0000001F]">
      <div className="flex items-center gap-4 max-sm:flex-col">
        <div>
          <img
            src={testImg}
            alt="Hotel"
            className="size-[136px] rounded-md object-cover"
          />
        </div>

        <div className="flex flex-col gap-4 flex-1 max-sm:self-stretch">
          <div className="flex gap-2 justify-between">
            <h3 className="text-sm font-semibold text-gray-900">
              Hotel Arts Barcelona
            </h3>
            <span className="text-[#FAC91E] text-sm">★★★★★</span>
          </div>

          <p className="text-xs text-[#656F81]">Barcelona, Spain</p>

          <div className="mt-1 flex items-center gap-2 text-xs">
            <span className="px-[4.8px] py-0.5 font-semibold bg-[#0046CC]/10 text-[#0046CC] rounded-lg w-8 text-center">
              5.0
            </span>
            <span className="text-[#0046CC]">Excellent</span>
            <span className="text-[#8B94A4]">1,260 reviews</span>
          </div>
        </div>
      </div>

      <BookingDatesAndGuests />

      <PriceDetailsBox />
    </div>
  );
}

function BookingDatesAndGuests() {
  return (
    <div className="flex flex-col p-2 text-sm border border-[#DDDFE3] rounded-lg">
      <div>
        <div className="flex max-sm:flex-col py-2">
          <div className="flex-1">
            <DateInfo title="Check-in" date="08/14/2025" />
          </div>

          <div className="sm:border-l max-sm:border-t border-[#DDDFE3] flex-1 sm:self-end">
            <DateInfo title="Check-out" date="08/19/2025" />
          </div>
        </div>
        <div className="h-[0.2px] w-full bg-[#DDDFE3] mb-2" />
      </div>

      <div className="py-2 px-4">
        <p className="font-medium text-neutral-700 text-lg">Rooms and Guests</p>
        <p className="mt-1 text-neutral-600">1 room, 2 adults</p>
      </div>
    </div>
  );
}

function DateInfo({ title, date }) {
  return (
    <div className="flex flex-col gap-1 px-[18px] py-2.5">
      <span className="text-xs text-gray-500">{title}</span>
      <span className="font-medium text-gray-900">{date}</span>
    </div>
  );
}

function PriceDetailsBox() {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-lg font-medium text-neutral-700">Price details:</p>

      <div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap justify-between text-neutral-400">
            <span>$300 × 5 nights</span>
            <span>$1,500</span>
          </div>

          <div className="mt-2 flex flex-wrap justify-between text-neutral-400">
            <span>Tripto service fee</span>
            <span>$4.20</span>
          </div>

          <div className="mt-2 flex flex-wrap justify-between text-neutral-400">
            <span>Taxes</span>
            <span>$24.70</span>
          </div>
        </div>
        <div className="h-[0.2px] w-full bg-[#DDDFE3] my-2" />
        <div className="flex justify-between font-medium text-neutral-700">
          <span>
            Total <span className="underline">USD</span>
          </span>
          <span>$1,528</span>
        </div>
      </div>
    </div>
  );
}
