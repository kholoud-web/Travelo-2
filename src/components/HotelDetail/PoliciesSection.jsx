const PoliciesSection = () => {
  return (
    <div id="policies" className="mt-16 border border-gray-200 rounded-xl p-5">
      <h2 className="text-xl font-semibold mb-6">Policies</h2>

      <div className="space-y-6 text-sm text-gray-700">
        {/* 1. Check-in / Check-out */}
        <div className="flex gap-8">
          <div className="w-56 font-medium text-gray-900">
            Check-in / Check-out
          </div>
          <div className="flex-1 space-y-1">
            <p>Check-in from 15:00</p>
            <p>Check-out until 11:00</p>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* 2. Cancellation / Prepayment */}
        <div className="flex gap-8">
          <div className="w-56 font-medium text-gray-900">
            Cancellation / Prepayment
          </div>
          <div className="flex-1">
            <p>
              Cancellation and prepayment policies vary according to
              accommodation type. Please check what conditions may apply to each
              option when making your selection.
            </p>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* 3. Children and beds */}
        <div className="flex gap-8">
          <div className="w-56 font-medium text-gray-900">
            Children and beds
          </div>
          <div className="flex-1 space-y-2">
            <p>Children of any age are welcome.</p>
            <p>
              Children aged 18 years and above are considered adults at this
              property.
            </p>
            <p>Cribs and extra beds are not available at this property.</p>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* 4. Age restriction */}
        <div className="flex gap-8">
          <div className="w-56 font-medium text-gray-900">Age restriction</div>
          <div className="flex-1">
            <p>The minimum age for check-in is 18.</p>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* 5. Pets */}
        <div className="flex gap-8">
          <div className="w-56 font-medium text-gray-900">Pets</div>
          <div className="flex-1">
            <p>Pets are not allowed.</p>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* 6. Groups */}
        <div className="flex gap-8">
          <div className="w-56 font-medium text-gray-900">Groups</div>
          <div className="flex-1">
            <p>
              When booking more than 5 rooms, different policies and additional
              supplements may apply.
            </p>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* 7. Payment methods */}
        <div className="flex gap-8">
          <div className="w-56 font-medium text-gray-900">Payment methods</div>
          <div className="flex-1">
            <p>This property accepts the following payment methods:</p>
            <p>Visa · Mastercard · InstaPay</p>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* 8. Smoking */}
        <div className="flex gap-8">
          <div className="w-56 font-medium text-gray-900">Smoking</div>
          <div className="flex-1">
            <p>Smoking is not allowed.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliciesSection;
