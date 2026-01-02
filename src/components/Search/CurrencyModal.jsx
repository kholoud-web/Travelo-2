import Modal from './Modal'

const CURRENCIES = [
  { code: "USD", label: "US Dollar", symbol: "$" },
  { code: "EUR", label: "Euro", symbol: "€" },
  { code: "GBP", label: "Pound Sterling", symbol: "£" },
  { code: "EGP", label: "Egyptian Pound", symbol: "E£" },
  { code: "SAR", label: "Saudi Arabian Riyal", symbol: "SR" },
  { code: "AED", label: "Emirati Dirham", symbol: "د.إ" },
  { code: "CAD", label: "Canadian Dollar", symbol: "$" },
  { code: "AUD", label: "Australian Dollar", symbol: "$" },
  { code: "NZD", label: "New Zealand Dollar", symbol: "$" },
  { code: "CHF", label: "Swiss Franc", symbol: "CHF" },
  { code: "JPY", label: "Japanese Yen", symbol: "¥" },
  { code: "CNY", label: "Chinese Yuan", symbol: "¥" },
  { code: "HKD", label: "Hong Kong Dollar", symbol: "$" },
  { code: "SGD", label: "Singapore Dollar", symbol: "$" },
  { code: "INR", label: "Indian Rupee", symbol: "₹" },
  { code: "IDR", label: "Indonesian Rupiah", symbol: "Rp" },
  { code: "KRW", label: "South Korean Won", symbol: "₩" },
  { code: "TRY", label: "Turkish Lira", symbol: "₺" },
  { code: "QAR", label: "Qatari Riyal", symbol: "﷼" },
  { code: "ZAR", label: "South African Rand", symbol: "R" },
  { code: "BRL", label: "Brazilian Real", symbol: "R$" },
  { code: "MXN", label: "Mexican Peso", symbol: "$" },
  { code: "PLN", label: "Polish Zloty", symbol: "zł" },
  { code: "CZK", label: "Czech Koruna", symbol: "Kč" },
  { code: "DKK", label: "Danish Krone", symbol: "kr" },
  { code: "NOK", label: "Norwegian Krone", symbol: "kr" },
  { code: "SEK", label: "Swedish Krona", symbol: "kr" },
  { code: "HUF", label: "Hungarian Forint", symbol: "Ft" },
  { code: "RON", label: "Romanian Leu", symbol: "lei" },
  { code: "BGN", label: "Bulgarian Lev", symbol: "лв" },
  { code: "ILS", label: "Israeli New Shekel", symbol: "₪" },
  { code: "KES", label: "Kenyan Shilling", symbol: "KSh" },
  { code: "GHS", label: "Ghanaian Cedi", symbol: "GHC" },
  { code: "MAD", label: "Moroccan Dirham", symbol: "د.م." },
  { code: "TWD", label: "New Taiwan Dollar", symbol: "$" },
  { code: "PEN", label: "Peruvian Sol", symbol: "S/" },
  { code: "PHP", label: "Philippine Peso", symbol: "₱" },
  { code: "CRC", label: "Costa Rican Colon", symbol: "₡" },
  { code: "KZT", label: "Kazakhstani Tenge", symbol: "₸" },
  { code: "UGX", label: "Ugandan Shilling", symbol: "USh" },
  { code: "UAH", label: "Ukrainian Hryvnia", symbol: "₴" },
  { code: "UYU", label: "Uruguayan Peso", symbol: "$U" },
  { code: "VND", label: "Vietnamese Dong", symbol: "₫" },
  { code: "THB", label: "Thai Baht", symbol: "฿" },
];


const CurrencyModal = ({
  isOpen,
  onClose,
  activeTab,
  setActiveTab,
  selectedCurrency,
  setSelectedCurrency,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {/* Tabs */}
      <div className="flex border-b-2 text-gray-200 mb-4">
        <button
          onClick={() => setActiveTab('language')}
          className="pb-2 mr-6 text-gray-500 hover:text-gray-700"
        >
          Languages
        </button>

        <button
          onClick={() => setActiveTab('currency')}
          className={`pb-2 ${
            activeTab === 'currency'
              ? 'border-b-2 border-black text-black'
              : 'text-gray-400'
          }`}
        >
          Currency
        </button>
      </div>

      <h3 className="font-semibold mb-4">Choose a currency</h3>

      <div className="overflow-y-auto grid grid-cols-4">
        {CURRENCIES.map((cur) => (
          <button
            key={cur.code}
            onClick={() => setSelectedCurrency(cur)}
            className={`p-2 rounded-lg text-sm text-left
              ${
                selectedCurrency.code === cur.code
                  ? 'border border-teal-500 text-teal-700'
                  : 'hover:bg-gray-50'
              }
            `}
          >
            <div className="font-small">{cur.label}</div>
            <div className="text-gray-500">
              {cur.code} – {cur.symbol}
            </div>
          </button>
        ))}
      </div>
    </Modal>
  )
}

export default CurrencyModal
