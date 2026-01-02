import Modal from './Modal'

const LANGUAGES = [
  { code: "en-us", label: "English (US)", flag: "assets/Flag-icons/us.svg" },
  { code: "en-uk", label: "English (UK)", flag: "assets/Flag-icons/uk.svg" },
  { code: "ar", label: "العربية", flag: "assets/Flag-icons/sa.svg" },
  { code: "de", label: "Deutsch", flag: "assets/Flag-icons/de.svg" },
  { code: "nl", label: "Nederlands", flag: "assets/Flag-icons/ne.svg" },
  { code: "fr", label: "Français", flag: "assets/Flag-icons/fr.svg" },
  { code: "es", label: "Español", flag: "assets/Flag-icons/es.svg" },
  { code: "es-ar", label: "Español (AR)", flag: "assets/Flag-icons/ar.svg" },
  { code: "es-mx", label: "Español (MX)", flag: "assets/Flag-icons/mx.svg" },
  { code: "it", label: "Italiano", flag: "assets/Flag-icons/it.svg" },
  { code: "pt-pt", label: "Português (PT)", flag: "assets/Flag-icons/pt.svg" },
  { code: "pt-br", label: "Português (BR)", flag: "assets/Flag-icons/po.svg" },
  { code: "no", label: "Norsk", flag: "assets/Flag-icons/no.svg" },
  { code: "fi", label: "Suomi", flag: "assets/Flag-icons/su.svg" },
  { code: "sv", label: "Svenska", flag: "assets/Flag-icons/se.svg" },
  { code: "da", label: "Dansk", flag: "assets/Flag-icons/da.svg" },
  { code: "cs", label: "Čeština", flag: "assets/Flag-icons/ce.svg" },
  { code: "hu", label: "Magyar", flag: "assets/Flag-icons/ma.svg" },
  { code: "ro", label: "Română", flag: "assets/Flag-icons/ro.svg" },
  { code: "ja", label: "日本語", flag: "assets/Flag-icons/jp.svg" },
  { code: "zh-cn", label: "简体中文", flag: "assets/Flag-icons/cn.svg" },
  { code: "zh-tw", label: "繁體中文", flag: "assets/Flag-icons/tw.svg" },
  { code: "uz", label: "O'zbekcha", flag: "assets/Flag-icons/oz.svg" },
  { code: "pl", label: "Polski", flag: "assets/Flag-icons/pl.svg" },
  { code: "el", label: "Ελληνικά", flag: "assets/Flag-icons/gr.svg" },
  { code: "ru", label: "Русский", flag: "assets/Flag-icons/py.svg" },
  { code: "tr", label: "Türkçe", flag: "assets/Flag-icons/tu.svg" },
  { code: "bg", label: "Български", flag: "assets/Flag-icons/bg.svg" },
  { code: "pl-alt", label: "Poland", flag: "assets/Flag-icons/pol.svg" },
  { code: "se", label: "Slovenščina", flag: "assets/Flag-icons/bg.svg" },
  { code: "lv", label: "Latviski", flag: "assets/Flag-icons/lv.svg" },
  { code: "uk", label: "Українська", flag: "assets/Flag-icons/yk.svg" },
  { code: "hi", label: "हिन्दी", flag: "assets/Flag-icons/in.svg" },
  { code: "id", label: "Bahasa Indonesia", flag: "assets/Flag-icons/id.svg" },
  { code: "ms", label: "Bahasa Malaysia", flag: "assets/Flag-icons/my.svg" },
  { code: "th", label: "ภาษาไทย", flag: "assets/Flag-icons/th.svg" },
  { code: "et", label: "Eesti", flag: "assets/Flag-icons/ee.svg" },
  { code: "hr", label: "Hrvatski", flag: "assets/Flag-icons/hr.svg" },
  { code: "lt", label: "Lietuvių", flag: "assets/Flag-icons/li.svg" },
  { code: "sl", label: "Slovenščina", flag: "assets/Flag-icons/si.svg" },
  { code: "sr", label: "Srpski", flag: "assets/Flag-icons/sr.svg" },
  { code: "vi", label: "Tiếng Việt", flag: "assets/Flag-icons/ti.svg" },
  { code: "is", label: "Íslenska", flag: "assets/Flag-icons/is.svg" },
  { code: "fi", label: "Filipino", flag: "assets/Flag-icons/ph.svg" },
];


// const LANGUAGES = [
//   { code: "en-us", label: "English (US)" },
//   { code: "en-uk", label: "English (UK)" },
//   { code: "de", label: "Deutsch" },
//   { code: "nl", label: "Nederlands" },
//   { code: "fr", label: "Français" },
//   { code: "es", label: "Español" },
//   { code: "es-ar", label: "Español (AR)" },
//   { code: "es-mx", label: "Español (MX)" },
//   { code: "it", label: "Italiano" },
//   { code: "pt-pt", label: "Português (PT)" },
//   { code: "pt-br", label: "Português (BR)" },
//   { code: "no", label: "Norsk" },
//   { code: "fi", label: "Suomi" },
//   { code: "sv", label: "Svenska" },
//   { code: "da", label: "Dansk" },
//   { code: "cs", label: "Čeština" },
//   { code: "hu", label: "Magyar" },
//   { code: "ro", label: "Română" },
//   { code: "ja", label: "日本語" },
//   { code: "zh-cn", label: "简体中文" },
//   { code: "zh-tw", label: "繁體中文" },
//   { code: "uz", label: "O'zbekcha" },
//   { code: "pl", label: "Polski" },
//   { code: "el", label: "Ελληνικά" },
//   { code: "ru", label: "Русский" },
//   { code: "tr", label: "Türkçe" },
//   { code: "bg", label: "Български" },
//   { code: "ar", label: "العربية" },
//   { code: "pl-alt", label: "Poland" },
//   { code: "he", label: "עברית" },
//   { code: "lv", label: "Latviski" },
//   { code: "uk", label: "Українська" },
//   { code: "hi", label: "हिन्दी" },
//   { code: "id", label: "Bahasa Indonesia" },
//   { code: "ms", label: "Bahasa Malaysia" },
//   { code: "th", label: "ภาษาไทย" },
//   { code: "et", label: "Eesti" },
//   { code: "hr", label: "Hrvatski" },
//   { code: "lt", label: "Lietuvių" },
//   { code: "sl", label: "Slovenščina" },
//   { code: "sr", label: "Srpski" },
//   { code: "vi", label: "Tiếng Việt" },
//   { code: "is", label: "Íslenska" },
//   { code: "fil", label: "Filipino" },
// ];


const LanguagesModal = ({
  isOpen,
  onClose,
  activeTab,
  setActiveTab,
  selectedLanguage,
  setSelectedLanguage,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {/* Tabs */}
      <div className="flex border-b-2 text-gray-200 mb-4">
        <button
          onClick={() => setActiveTab('language')}
          className={`pb-2 mr-6 ${
            activeTab === 'language'
              ? 'border-b-2 border-black text-black'
              : 'text-gray-400'
          }`}
        >
          Languages
        </button>

        <button
          onClick={() => setActiveTab('currency')}
          className="pb-2 text-gray-500 hover:text-gray-700"
        >
          Currency
        </button>
      </div>

      <div className="flex items-center justify-between mb-4 p-4 bg-[#F1F2F380] rounded-lg">
        <div>
            <span className="flex items-center gap-2 font-medium text-sm">Translate
            <img src="assets/Flag-icons/Translation.svg"
                 className="w-5 h-5 rounded-xl"></img></span> 
            <p className="text-xs text-gray-500">
            Automatically translate descriptions and reviews into English
            </p>
        </div>

        <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer 
            peer-checked:bg-teal-500 
            after:content-[''] after:absolute after:top-[2px] after:left-[2px]
            after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all
            peer-checked:after:translate-x-full relative">
            </div>
        </label>
        </div>


      <h3 className="font-semibold mb-4">Choose a language</h3>

      <div className="grid grid-cols-4">
        {LANGUAGES.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setSelectedLanguage(lang)}
            className={`flex items-center gap-2 p-2 rounded-lg text-sm
              ${
                selectedLanguage.code === lang.code
                  ? 'border border-teal-500 text-teal-700'
                  : 'hover:bg-gray-50'
              }
            `}
          >
            <img
                src={lang.flag}
                alt={lang.label}
                className="w-5 h-5 rounded-xl"
            />
            <span>{lang.label}</span>
          </button>
        ))}
      </div>
    </Modal>
  )
}

export default LanguagesModal
