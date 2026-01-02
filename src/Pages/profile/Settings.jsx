import { useState } from "react";

import Dropdown from "../../Components/profile/Dropdown";
const currencies = [
    "$ U.S. dollar",
    "£ Pound sterling",
    "CNY Chinese yuan",
    "SAR Saudi Arabian riyal",
    "RUB Russian ruble",
    "DKK Danish krone",
    "AZN Azerbaijan, New Manats",
    "TWD New Taiwan dollar",
];

const languages = [
    { name: "English (US)", flag: "us" },
    { name: "Deutsch", flag: "de" },
    { name: "Nederlands", flag: "nl" },
    { name: "Français", flag: "fr" },
    { name: "Español", flag: "es" },
    { name: "Español (AR)", flag: "ar" },
    { name: "Español (MX)", flag: "mx" },
    { name: "Italiano", flag: "it" },
];


export default function Settings() {
    const [currency, setCurrency] = useState(currencies[0]);
    const [language, setLanguage] = useState(languages[0]);
    const [personalized, setPersonalized] = useState(true);

    return (
        <>
            <div className="w-full bg-white rounded-2xl p-8 ">
                <h2 className="text-xl font-semibold mb-6">Customization preferences</h2>

                <div className="flex items-start justify-between mb-8">
                    <div>
                        <h3 className="font-medium">Currency</h3>
                        <p className="text-sm text-gray-400 max-w-md">
                            Select your desired currency for transactions and price display, simplifying international use.
                        </p>
                    </div>
                    <Dropdown
                        value={currency}
                        setValue={setCurrency}
                        options={currencies}
                        accent="border-teal-500 text-teal-600"

                    />
                </div>

                <div className="flex items-start justify-between mb-8">
                    <div>
                        <h3 className="font-medium">Language</h3>
                        <p className="text-sm text-gray-400">
                            Choose your preferred language for app display, enhancing your user experience.
                        </p>
                    </div>
                    <Dropdown
                        value={language}
                        setValue={setLanguage}
                        options={languages}
                        accent="border-blue-500 text-blue-600"

                    />
                </div>

                <div className="flex items-center justify-between mb-10">
                    <div>
                        <h3 className="font-medium">Personalized recommendations</h3>
                        <p className="text-sm text-gray-400">
                            We personalize recommendations based on your activity. You can opt out anytime.
                        </p>
                    </div>
                    <button
                        onClick={() => setPersonalized(!personalized)}
                        className={`w-12 h-6 rounded-full flex items-center px-1 transition ${personalized ? "bg-teal-500" : "bg-gray-300"
                            }`}
                    >
                        <span
                            className={`h-4 w-4 bg-white rounded-full transition transform ${personalized ? "translate-x-6" : "translate-x-0"
                                }`}
                        />
                    </button>
                </div>

                <h2 className="text-xl font-semibold mb-6">Security</h2>
                <hr className="my-8 text-gray-300" />

                <div className="mb-6">
                    <h3 className="font-medium">Password</h3>
                    <p className="text-sm text-gray-500 mb-3">
                        Easily update your password in settings to maintain account security and ensure privacy.
                    </p>
                    <button className="px-5 py-2 rounded-xl border bg-white hover:bg-gray-100">
                        Set password
                    </button>
                </div>

                <div className="mt-10">
                    <h3 className="font-medium">Remove account</h3>
                    <p className="text-sm text-gray-500 mb-4">
                        Delete your account through settings for complete removal of your data from the system.
                    </p>
                    <button className="px-6 py-2 rounded-xl border border-red-500 text-red-600 hover:bg-red-50">
                        Delete account
                    </button>
                </div>
            </div>
        </>
    );
}