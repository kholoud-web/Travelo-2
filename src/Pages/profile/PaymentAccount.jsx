import PaymentMethodForm from "../../components/profile/PaymentMethodForm"
import { useState } from "react";
const pay = [
  {
    id: '1',
    brand: 'visa',
    last4: '1316',
    expMonth: 6,
    expYear: 2022,
    isDefault: true,
  },
  {
    id: '2',
    brand: 'mastercard',
    last4: '2410',
    expMonth: 7,
    expYear: 2027,
    isDefault: false,
  },
];


const PaymentAccount = ({ paymentMethods = pay, giftCredit = 0, couponsCount = 0 }) => {
  const isExpired = (expMonth, expYear) => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1; // getMonth() returns 0–11

    if (expYear < currentYear) return true;
    if (expYear === currentYear && expMonth < currentMonth) return true;
    return false;
  };

  const hasPaymentMethods = paymentMethods.length > 0;

  const getCardLogo = (brand) => {
    switch (brand.toLowerCase()) {
      case 'visa':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 32" className="w-8 h-6">
            <path fill="#1A1F71" d="M48 16H0V0h48v16z" />
            <path fill="#FFD700" d="M48 32H0V16h48v16z" />
            <path fill="#1A1F71" d="M12 16c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" />
            <path fill="#FFF" d="M48 32H0V0h48v32z" opacity="0.5" />
          </svg>
        );
      case 'mastercard':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 32" className="w-8 h-6">
            <circle cx="16" cy="16" r="12" fill="#EB001B" />
            <circle cx="32" cy="16" r="12" fill="#F79E1B" />
            <path fill="#FFF" d="M16 16c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" />
            <path fill="#FFF" d="M32 16c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" />
          </svg>
        );
      default:
        return <div className="w-8 h-6 bg-gray-200 rounded"></div>;
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="p-6 bg-white rounded-xl">
      <PaymentMethodForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div >
        <div className="mb-4 pb-3 border-b border-gray-200">
          <h1 className="text-lg font-semibold text-gray-800 mb-2">Payment methods</h1>
          <p className="text-sm text-gray-500 mb-4">
            Securely add or remove payment methods to make it easier when you book.        </p>
        </div>
        {/* Section: Payment Methods */}
        <div className="mb-3 pb-3 ">
          <div className='flex  justify-between'>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Payment methods</h3>
              <p className="text-sm  text-gray-500 mb-4">
                Add a payment method using our secure payment system, then start planning your next trip.
              </p>
            </div>
            <button onClick={() => setIsModalOpen(true)} className="mt-4 cursor-pointer  text-teal-600 hover:text-teal-800 font-medium transition-colors">
              Add payment method
            </button>
          </div>
          {hasPaymentMethods ? (
            <div className="space-y-4">

              {paymentMethods.map((card) => {
                const expired = isExpired(card.expMonth, card.expYear);
                return (
                  <div
                    key={card.id}

                    className="flex items-center justify-between py-3 border-b border-gray-200"
                  >
                    <div className="flex items-center gap-3">

                      <div className="bg-white p-1 rounded border border-gray-200">
                        {getCardLogo(card.brand)}
                      </div>


                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-800 capitalize">{card.brand}</span>
                          <span className="text-gray-500">.... {card.last4}</span>
                          {card.isDefault && (
                            <span className="text-xs bg-gray-100 text-gray-800 px-2 py-0.5 rounded">
                              DEFAULT
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          {expired ? 'Expired' : `Expiration: ${card.expMonth}/${card.expYear}`}
                        </p>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 text-lg">
                      ...
                    </button>

                  </div>
                );
              })}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="flex justify-between mb-4 pb-6 ">
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Tripto gift credit</h2>
          <p className="text-sm text-gray-500 mb-4">
            Add gift credits to your Tripto account to enhance your travel experience.
          </p></div>
        <button className="text-teal-600 hover:text-teal-700 font-medium transition-colors">
          Add gift card
        </button>
      </div>

      {/* Section: Coupons */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Coupons</h2>
        <div className="flex justify-between items-center py-3 border-t border-gray-200">
          <span className="text-gray-700 font-medium">Your coupons</span>
          <span className="text-gray-900 font-bold">0</span>
        </div>
        <div className="mt-4">
          <button className="text-teal-600 hover:text-teal-700 font-medium transition-colors">
            Add coupons
          </button>
        </div>
      </div>
    </div>
  );
};


export default PaymentAccount;



