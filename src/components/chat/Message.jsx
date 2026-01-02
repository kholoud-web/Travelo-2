function Message({ message, state, time }) {
  const isSent = state === "sent";

  return (
    <div className={`flex mb-3 ${isSent ? "justify-end" : "justify-start"}`}>
      <div className="flex flex-col max-w-[75%]">
        <div
          className={`
            px-4 py-2 rounded-2xl text-sm
            ${
              isSent
                ? "bg-[#27A599] text-white rounded-br-sm"
                : "bg-[#F2F4F7] text-[#1F2226] rounded-bl-sm"
            }
          `}
        >
          {message}
        </div>
      </div>
    </div>
  );
}
export default Message;
