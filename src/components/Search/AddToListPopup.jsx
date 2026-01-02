import React from "react";

const AddToListPopup = ({ isOpen, onClose, hotelName }) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-[320px] rounded-xl shadow-lg p-6 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        <h2 className="text-lg font-semibold mb-4">Add the List</h2>

        {/* List name */}
        <input
          type="text"
          placeholder="Next trip"
          className="w-full border-b border-gray-300 focus:outline-none focus:border-teal-500 py-2 mb-4"
        />

        {/* Hotel name */}
        <input
          type="text"
          value={hotelName}
          readOnly
          className="w-full border-b border-gray-300 bg-gray-50 text-gray-600 py-2 mb-6"
        />

        <button className="w-full bg-teal-500 text-white py-2 rounded-lg font-medium hover:bg-teal-600 transition">
          Add
        </button>
      </div>
    </div>
  );
};

export default AddToListPopup;
