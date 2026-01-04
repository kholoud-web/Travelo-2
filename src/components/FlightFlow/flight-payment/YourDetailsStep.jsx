import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import FlightSummaryCard from "./FlightSummaryCard";
import CustomInputField from "../../common/CustomInputField";

export default function YourDetailsStep({ flight, onNext }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });
  const [errors, setErrors] = useState({});
  const [paymentPlan, setPaymentPlan] = useState("full");

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (formData.phone.length < 8) {
      newErrors.phone = "Phone number must be at least 8 digits";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      onNext({ passengerDetails: formData, paymentPlan });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section className="flex gap-16 max-lg:gap-8 max-lg:flex-col">
      <form onSubmit={handleSubmit} className="flex-1 space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Passenger details</h2>

          <div className="space-y-4">
            <CustomInputField
              label="First name"
              id="firstName"
              placeholder="Enter first name"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              error={errors.firstName}
              required
            />
            <CustomInputField
              label="Last name"
              id="lastName"
              placeholder="Enter last name"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              error={errors.lastName}
              required
            />
            <CustomInputField
              label="Email"
              id="email"
              type="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              error={errors.email}
              required
            />
            <CustomInputField
              label="Phone"
              id="phone"
              type="tel"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              error={errors.phone}
              required
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Payment options</h3>

          <div
            onClick={() => setPaymentPlan("full")}
            className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
              paymentPlan === "full"
                ? "border-teal-600 bg-teal-50"
                : "border-gray-200 bg-white hover:border-gray-300"
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-gray-900">Pay in full</h4>
                  {paymentPlan === "full" && (
                    <CheckCircle2 className="w-5 h-5 text-teal-600" />
                  )}
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Pay the total and you are all set
                </p>
              </div>
            </div>
          </div>

          <div
            onClick={() => setPaymentPlan("partial")}
            className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
              paymentPlan === "partial"
                ? "border-teal-600 bg-teal-50"
                : "border-gray-200 bg-white hover:border-gray-300"
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-gray-900">Pay part now, part later</h4>
                  {paymentPlan === "partial" && (
                    <CheckCircle2 className="w-5 h-5 text-teal-600" />
                  )}
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Pay ${(flight?.price / 2) || 120} now, and the rest (${(flight?.price / 2) || 120}) will be automatically charged to the same payment method on Nov 14, 2022. No extra fees.
                </p>
                <button
                  type="button"
                  className="text-sm text-gray-700 underline mt-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  More info
                </button>
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-teal-600 hover:bg-teal-700 text-white font-medium h-14 rounded-lg w-full transition-colors"
        >
          Continue to payment
        </button>
      </form>

      <FlightSummaryCard flight={flight} />
    </section>
  );
}
