// NewPaymentMethodForm.jsx
import React, { useState } from 'react';

const PaymentMethodForm = ({isOpen ,onClose}) => {
    
    const [cardholderName, setCardholderName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
  if (!isOpen) return null; // لو مقفول → مفيش render

    // دالة لتحديد نوع البطاقة من الرقم
    const getCardType = (number) => {
        if (!number) return null;
        const cleaned = number.replace(/\s+/g, '');
        if (/^4/.test(cleaned)) return 'visa';
        if (/^5[1-5]/.test(cleaned) || /^2[2-7]/.test(cleaned)) return 'mastercard';
        if (/^3[47]/.test(cleaned)) return 'amex';
        if (/^6(?:011|5)/.test(cleaned)) return 'discover';
        return null;
    };

    const cardType = getCardType(cardNumber);

    // دالة لجلب شعار البطاقة
    const getCardLogo = (type) => {
        switch (type) {
            case 'visa':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 32" className="w-6 h-4">
                        <path fill="#1A1F71" d="M48 16H0V0h48v16z" />
                        <path fill="#FFD700" d="M48 32H0V16h48v16z" />
                        <path fill="#1A1F71" d="M12 16c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" />
                        <path fill="#FFF" d="M48 32H0V0h48v32z" opacity="0.5" />
                    </svg>
                );
            case 'mastercard':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 32" className="w-6 h-4">
                        <circle cx="16" cy="16" r="12" fill="#EB001B" />
                        <circle cx="32" cy="16" r="12" fill="#F79E1B" />
                        <path fill="#FFF" d="M16 16c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" />
                        <path fill="#FFF" d="M32 16c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" />
                    </svg>
                );
            case 'amex':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 32" className="w-6 h-4">
                        <rect width="48" height="32" fill="#005F9E" />
                        <text x="24" y="20" textAnchor="middle" fill="white" fontSize="16" fontFamily="Arial">AMEX</text>
                    </svg>
                );
            default:
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 32" className="w-6 h-4">
                        <rect width="48" height="32" fill="#DADADA" />
                        <text x="24" y="20" textAnchor="middle" fill="#888" fontSize="12" fontFamily="Arial">CARD</text>
                    </svg>
                );
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // هنا يمكنك إرسال البيانات إلى API
        console.log({
            cardholderName,
            cardNumber,
            expiry,
            cvc,
            cardType
        });
        alert('Payment method added successfully!');
        
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

            <div onClick={onClose} className="absolute inset-0 bg-black/60">
                <div className="relative top-60 max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg mt-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-6">New Payment methods</h2>

                    {/* Payment Method Buttons */}
                    <div className="flex flex-wrap gap-3 mb-6">
                        {['visa', 'discover', 'mastercard', 'stripe', 'paypal', 'googlepay', 'applepay'].map((method) => (
                            <button
                                key={method}
                                className={`px-4 py-2 border rounded-lg flex items-center gap-2 ${method === 'visa' || method === 'mastercard'
                                    ? 'border-gray-300 hover:border-gray-400'
                                    : 'border-gray-200 hover:border-gray-300'
                                    }`}
                            >
                                {method === 'visa' && (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 32" className="w-6 h-4">
                                        <path fill="#1A1F71" d="M48 16H0V0h48v16z" />
                                        <path fill="#FFD700" d="M48 32H0V16h48v16z" />
                                        <path fill="#1A1F71" d="M12 16c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" />
                                        <path fill="#FFF" d="M48 32H0V0h48v32z" opacity="0.5" />
                                    </svg>
                                )}
                                {method === 'discover' && (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 32" className="w-6 h-4">
                                        <rect width="48" height="32" fill="#FF6F00" />
                                        <text x="24" y="20" textAnchor="middle" fill="white" fontSize="14" fontFamily="Arial">DISCOVER</text>
                                    </svg>
                                )}
                                {method === 'mastercard' && (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 32" className="w-6 h-4">
                                        <circle cx="16" cy="16" r="12" fill="#EB001B" />
                                        <circle cx="32" cy="16" r="12" fill="#F79E1B" />
                                        <path fill="#FFF" d="M16 16c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" />
                                        <path fill="#FFF" d="M32 16c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" />
                                    </svg>
                                )}
                                {method === 'stripe' && (
                                    <span className="text-blue-600 font-medium text-sm">stripe</span>
                                )}
                                {method === 'paypal' && (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 32" className="w-6 h-4">
                                        <rect width="48" height="32" fill="#003087" />
                                        <path fill="#FFF" d="M32 16c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" />
                                    </svg>
                                )}
                                {method === 'googlepay' && (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 32" className="w-6 h-4">
                                        <circle cx="24" cy="16" r="12" fill="#4285F4" />
                                        <path fill="#FFF" d="M24 16c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" />
                                    </svg>
                                )}
                                {method === 'applepay' && (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 32" className="w-6 h-4">
                                        <rect width="48" height="32" fill="#000" />
                                        <path fill="#FFF" d="M24 16c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" />
                                    </svg>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Cardholder's Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Cardholder's name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={cardholderName}
                                onChange={(e) => setCardholderName(e.target.value)}
                                placeholder="Seen on your card"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                                required
                            />
                        </div>

                        {/* Card Number */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Card number <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={cardNumber}
                                    onChange={(e) => setCardNumber(e.target.value)}
                                    placeholder="Seen on your card"
                                    className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                                    required
                                />
                                {cardType && (
                                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                        {getCardLogo(cardType)}
                                    </div>
                                )}
                                <div className="absolute right-10 top-1/2 transform -translate-y-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Expiry & CVC */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Expiry <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={expiry}
                                    onChange={(e) => setExpiry(e.target.value)}
                                    placeholder="MM/YY"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    CVC <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={cvc}
                                    onChange={(e) => setCvc(e.target.value)}
                                    placeholder="CVC"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                                    required
                                />
                            </div>
                        </div>

                        {/* Confirm Button */}
                        <button
                            type="submit"
                            className="w-full py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                        >
                            Confirm
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethodForm;