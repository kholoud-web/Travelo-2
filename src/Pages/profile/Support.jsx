import {
  ChevronRight,
  MessageCircleQuestionMark,
  MessageSquareText,
  Pencil,
} from "lucide-react";
import { useState } from "react";
import Feedback from "../../components/feedback/Feedback";
import ChatBot from "../../components/chat/ChatBot";

function Support() {
  const [openModal, setOpenModal] = useState(null);

  const handleOpen = (id) => {
    setOpenModal(id);
  };

  const handleClose = () => {
    setOpenModal(null);
  };

  const actions = [
    { name: "Chat now", id: "chat", icon: MessageSquareText },
    {
      name: "Visit the help center",
      id: "help_center",
      icon: MessageCircleQuestionMark,
    },
    { name: "Share your feedback", id: "feedback", icon: Pencil },
  ];
  return (
    <>
      <div className="h-full pb-6 ">
        <div className="bg-[#FFF] px-6 pt-6 rounded-2xl h-full">
          <div className="flex flex-col mb-10">
            <h3 className="font-roboto !important font-semibold text-[28px] text-[#454C58] mb-2">
              Help and feedback
            </h3>
            <p className="font-roboto !important font-normal text-[18px] text-[#8B94A4]">
              Have questions or feedback for us? We’re listening
            </p>
          </div>
          <div className="flex flex-col  gap-6">
            {actions.map((action) => (
              <div
                key={action.id}
                onClick={() => handleOpen(action.id)}
                className="cursor-pointer flex justify-between border border-[#B5BAC2] hover:border-[#27A599] py-4 ps-4 pe-3 text-[#454C58] hover:text-[#27A599] rounded-xl transition-colors duration-300"
              >
                <div className="flex gap-1 items-center">
                  <action.icon size={15} />
                  <span>{action.name}</span>
                </div>
                <ChevronRight size={25} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {openModal === "feedback" && <Feedback handleClose={handleClose} />}
      {openModal === "chat" && <ChatBot handleClose={handleClose}/>}
    </>
  );
}

export default Support;
