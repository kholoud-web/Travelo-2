import {
  Camera,
  ChevronDown,
  MessageCircleQuestionMark,
  Send,
  X,
} from "lucide-react";
import Message from "./Message";
import { useState } from "react";

function ChatBot({ handleClose }) {
  const [isOpen, setIsOpen] = useState(true);
  const welcome =
    "Welcome to Tripto. I’m your virtual assistant. How can I help you today? Please choose one of the options below or type your question:";

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-end items-end ${
        isOpen && "bg-black/40"
      } transition-colors duration-300`}
    >
      <div
        className={`
    relative ${isOpen ? "bg-white" : "bg-transparent"} flex flex-col
    w-full sm:w-[420px]
    h-full
    transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-y-0" : "translate-y-[calc(100%-79px)]"}
  `}
      >
        <nav
          className={`flex justify-between px-6 py-4 ${
            isOpen ? "border-b" : "border rounded-full border-gray-400 bg-white"
          } items-center`}
        >
          <ChevronDown
            size={20}
            className={`cursor-pointer transition-transform duration-300 ${
              isOpen ? "rotate-0" : "rotate-180"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          />
          <img
            src="/assets/icons/Ai-Agent Logo.png"
            alt="Ai-Agent Logo"
            className="w-10 h-10 object-contain"
          />
          <X size={20} className="cursor-pointer" onClick={handleClose} />
        </nav>

        {isOpen && (
          <>
            <main className="flex-1 overflow-y-auto px-4 py-4  no-scrollbar">
              <h1 className="text-[#27A599] font-semibold text-2xl mb-1">
                Hi there!
              </h1>
              <h2 className="text-[#1F2226] font-semibold text-lg mb-4">
                Get Started With TriptoBot
              </h2>

              <Message message={welcome} />
              <Message message="hello" state="sent" />

              <Message message={welcome} />
              <Message message="hello" state="sent" />

              <Message message={welcome} />
              <Message message="hello" state="sent" />

              <Message message={welcome} />
              <Message message="hello" state="sent" />

              <Message message={welcome} />
              <Message message="hello" state="sent" />

              <Message message={welcome} />
              <Message message="hello" state="sent" />

              <Message message={welcome} />
              <Message message="hello" state="sent" />

              <Message message={welcome} />
              <Message message="hello" state="sent" />

              <Message message={welcome} />
              <Message message="hello" state="sent" />

              <Message message={welcome} />
              <Message message="hello" state="sent" />

              <Message message={welcome} />
              <Message message="hello" state="sent" />

              <Message message={welcome} />
              <Message message="hello" state="sent" />

              <Message message={welcome} />
              <Message message="hello" state="sent" />

              <Message message={welcome} />
              <Message message="hello" state="sent" />

              <Message message={welcome} />
              <Message message="hello" state="sent" />

              <Message message={welcome} />
              <Message message="hello" state="sent" />

              <Message message={welcome} />
              <Message message="hello" state="sent" />
            </main>

            <footer className="px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="cursor-pointer bg-[#F1F2F3] w-10 h-10 rounded-full flex items-center justify-center">
                  <Camera size={20} className="cursor-pointer text-[#B5BAC2]" />
                </div>

                <div className="flex items-center gap-2 flex-1 border border-[#B5BAC2] rounded-full px-3 py-2">
                  <MessageCircleQuestionMark
                    size={18}
                    className="text-gray-400"
                  />
                  <textarea
                    rows={1}
                    placeholder="Type your message..."
                    className="flex-1 resize-none outline-none text-sm"
                  />
                </div>
                <div className="cursor-pointer text-[#FFFFFF] bg-[#27A599] w-10 h-10 rounded-full flex items-center justify-center">
                  <Send size={20} color="#FFFFFF" />
                </div>
              </div>
            </footer>
          </>
        )}
      </div>
    </div>
  );
}

export default ChatBot;
