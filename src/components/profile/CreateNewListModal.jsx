import React from "react";

const CreateNewListModal = ({ setIsOpen }) => {
  return (
    <div
      className="fixed inset-0 z-50 grid place-content-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="w-[700px]     py-[50px] px-11 rounded-2xl bg-white p-6 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h2
          id="modalTitle"
          className="text-[32px]   font-medium text-gray-900  "
        >
          Create New List
        </h2>
        <div className="  flex flex-col">
          <label
            htmlFor="listName"
            className="cursor-pointer text-[18px] pt-6 pb-2 font-medium "
          >
            List Name ? <span className="text-red-600">*</span>
          </label>
          <input
            id="listName"
            type="text"
            placeholder="next trip"
            className=" mb-6 px-4 py-2 border rounded-xl border-[#B5BAC2]"
          />
          <button className="cursor-pointer text-[20px] rounded-xl text-white px-4 py-2 bg-[#27A599]">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateNewListModal;
