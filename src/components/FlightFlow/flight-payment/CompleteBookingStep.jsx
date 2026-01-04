import { useState } from "react";
import { Plus, CheckCircle2, CreditCard } from "lucide-react";
import FlightSummaryCard from "./FlightSummaryCard";
import CustomInputField from "../../common/CustomInputField";

export default function CompleteBookingStep({ flight, passengerDetails, onComplete }) {
  const [showNewCardForm, setShowNewCardForm] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("card");
  const [saveCard, setSaveCard] = useState(false);

  const [personalDetails, setPersonalDetails] = useState({
    addressLine: "",
    city: "",
    postalCode: "",
    state: ""
  });

  const [cardDetails, setCardDetails] = useState({
    cardholderName: "",
    cardNumber: "",
    expiry: "",
    cvc: ""
  });

  const [errors, setErrors] = useState({});

  const savedCards = [
    {
      id: 1,
      last4: "4321",
      expiry: "02/27",
      type: "visa"
    }
  ];

  const paymentMethods = [
    { id: "visa", icon: "💳", label: "Visa" },
    { id: "diners", icon: "🍴", label: "Diners" },
    { id: "mastercard", icon: "💳", label: "Mastercard" },
    { id: "stripe", icon: "💳", label: "Stripe" },
    { id: "paypal", icon: "P", label: "PayPal" },
    { id: "googlepay", icon: "G", label: "Google Pay" },
    { id: "applepay", icon: "🍎", label: "Apple Pay" }
  ];

  const handlePersonalDetailsChange = (field, value) => {
    setPersonalDetails(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleCardDetailsChange = (field, value) => {
    let formattedValue = value;

    if (field === "cardNumber") {
      formattedValue = value.replace(/\s/g, "").replace(/(.{4})/g, "$1 ").trim();
    } else if (field === "expiry") {
      formattedValue = value.replace(/\D/g, "");
      if (formattedValue.length >= 2) {
        formattedValue = formattedValue.slice(0, 2) + "/" + formattedValue.slice(2, 4);
      }
    } else if (field === "cvc") {
      formattedValue = value.replace(/\D/g, "").slice(0, 3);
    }

    setCardDetails(prev => ({ ...prev, [field]: formattedValue }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!personalDetails.addressLine.trim()) newErrors.addressLine = "Address is required";
    if (!personalDetails.city.trim()) newErrors.city = "City is required";
    if (!personalDetails.postalCode.trim()) newErrors.postalCode = "Postal code is required";
    if (!personalDetails.state.trim()) newErrors.state = "State is required";

    if (showNewCardForm) {
      if (!cardDetails.cardholderName.trim()) newErrors.cardholderName = "Cardholder name is required";
      if (!cardDetails.cardNumber.trim()) {
        newErrors.cardNumber = "Card number is required";
      } else if (cardDetails.cardNumber.replace(/\s/g, "").length < 15) {
        newErrors.cardNumber = "Invalid card number";
      }
      if (!cardDetails.expiry.trim()) {
        newErrors.expiry = "Expiry is required";
      } else if (!/^\d{2}\/\d{2}$/.test(cardDetails.expiry)) {
        newErrors.expiry = "Invalid expiry format (MM/YY)";
      }
      if (!cardDetails.cvc.trim()) {
        newErrors.cvc = "CVC is required";
      } else if (cardDetails.cvc.length < 3) {
        newErrors.cvc = "Invalid CVC";
      }
    } else if (!selectedCard) {
      newErrors.selectedCard = "Please select a payment method";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      onComplete({
        personalDetails,
        cardDetails: showNewCardForm ? cardDetails : savedCards.find(c => c.id === selectedCard),
        saveCard
      });
    } else {
      setErrors(newErrors);
    }
  };

  if (!showNewCardForm && savedCards.length > 0) {
    return (
      <section className="flex gap-16 max-lg:gap-8 max-lg:flex-col">
        <div className="flex-1 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Select payment method</h2>

          <div className="space-y-4">
            {savedCards.map((card) => (
              <div
                key={card.id}
                onClick={() => setSelectedCard(card.id)}
                className={`p-5 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                  selectedCard === card.id
                    ? "border-teal-600 bg-teal-50"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">**** {card.last4}</p>
                    <p className="text-sm text-gray-500">{card.expiry}</p>
                  </div>
                </div>
                {selectedCard === card.id && (
                  <CheckCircle2 className="w-6 h-6 text-teal-600" />
                )}
              </div>
            ))}

            <button
              onClick={() => setShowNewCardForm(true)}
              className="w-full p-8 rounded-xl border-2 border-dashed border-teal-600 bg-white hover:bg-teal-50 transition-all flex flex-col items-center justify-center gap-3 group"
            >
              <div className="w-14 h-14 rounded-full bg-teal-100 group-hover:bg-teal-200 flex items-center justify-center transition-colors">
                <Plus className="w-7 h-7 text-teal-600" />
              </div>
              <span className="text-teal-600 font-medium">Add a new card</span>
            </button>
          </div>

          <button
            onClick={handleSubmit}
            className="bg-teal-600 hover:bg-teal-700 text-white font-medium h-14 rounded-lg w-full transition-colors"
          >
            Confirm and pay
          </button>
        </div>

        <FlightSummaryCard flight={flight} />
      </section>
    );
  }

  return (
    <section className="flex gap-16 max-lg:gap-8 max-lg:flex-col">
      <form onSubmit={handleSubmit} className="flex-1 space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Complete registration payment</h2>

          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-4">Personal details</h3>
            <div className="grid grid-cols-2 gap-4">
              <CustomInputField
                label="Address line"
                id="addressLine"
                placeholder="P.O.Box 1223"
                value={personalDetails.addressLine}
                onChange={(e) => handlePersonalDetailsChange("addressLine", e.target.value)}
                error={errors.addressLine}
                required
              />
              <CustomInputField
                label="City"
                id="city"
                placeholder="Arusha"
                value={personalDetails.city}
                onChange={(e) => handlePersonalDetailsChange("city", e.target.value)}
                error={errors.city}
                required
              />
              <CustomInputField
                label="Postal code"
                id="postalCode"
                placeholder="9090"
                value={personalDetails.postalCode}
                onChange={(e) => handlePersonalDetailsChange("postalCode", e.target.value)}
                error={errors.postalCode}
                required
              />
              <CustomInputField
                label="State"
                id="state"
                placeholder="Arusha,Tanzania"
                value={personalDetails.state}
                onChange={(e) => handlePersonalDetailsChange("state", e.target.value)}
                error={errors.state}
                required
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-semibold text-gray-900 mb-4">Payment methods</h3>
          <div className="flex gap-3 flex-wrap">
            {paymentMethods.map((method) => (
              <button
                key={method.id}
                type="button"
                onClick={() => setSelectedPaymentMethod(method.id)}
                className={`px-4 py-2 rounded-lg border-2 transition-all ${
                  selectedPaymentMethod === method.id
                    ? "border-teal-600 bg-teal-50"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <span className="text-xl">{method.icon}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-base font-semibold text-gray-900 mb-4">Card details</h3>
          <div className="space-y-4">
            <CustomInputField
              label="Cardholder's name"
              id="cardholderName"
              placeholder="Seen on your card"
              value={cardDetails.cardholderName}
              onChange={(e) => handleCardDetailsChange("cardholderName", e.target.value)}
              error={errors.cardholderName}
              required
            />

            <div className="relative">
              <CustomInputField
                label="Card number"
                id="cardNumber"
                placeholder="Seen on your card"
                value={cardDetails.cardNumber}
                onChange={(e) => handleCardDetailsChange("cardNumber", e.target.value)}
                error={errors.cardNumber}
                required
              />
              <div className="absolute right-3 top-9">
                <span className="text-2xl">💳</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <CustomInputField
                label="Expiry"
                id="expiry"
                placeholder="MM/YY"
                value={cardDetails.expiry}
                onChange={(e) => handleCardDetailsChange("expiry", e.target.value)}
                error={errors.expiry}
                required
              />
              <CustomInputField
                label="CVC"
                id="cvc"
                placeholder="CVC"
                value={cardDetails.cvc}
                onChange={(e) => handleCardDetailsChange("cvc", e.target.value)}
                error={errors.cvc}
                required
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="saveCard"
                checked={saveCard}
                onChange={(e) => setSaveCard(e.target.checked)}
                className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
              />
              <label htmlFor="saveCard" className="text-sm text-gray-700">
                Save Card
              </label>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-teal-600 hover:bg-teal-700 text-white font-medium h-14 rounded-lg w-full transition-colors"
        >
          Confirm and pay
        </button>
      </form>

      <FlightSummaryCard flight={flight} />
    </section>
  );
}
