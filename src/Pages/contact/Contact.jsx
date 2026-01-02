import location from "../../assets/icons/location.png";
import Sms from "../../assets/icons/Sms.png";
import call from "../../assets/icons/call.png";
import { User, Mail, Phone, MessageSquare } from "lucide-react";

function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center main-font
                        border border-gray-400/30 rounded-2xl mx-9 my-14">
      <div className="w-[90%] max-w-[1200px] mx-auto py-20">

        {/* Top Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-20">
          <div className="flex flex-col items-center gap-4">
            <img src={location} className="w-10 h-10" />
            <p className="text-sm text-[#112211]">
              Damstraat 123 <br />
              1012 AB Amsterdam <br />
              The Netherlands
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <img src={Sms} className="w-10 h-10" />
            <p className="text-sm text-[#112211]">support@nextpick.com</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <img src={call} className="w-10 h-10" />
            <p className="text-sm text-[#112211]">+31 20 123 4567</p>
          </div>
        </div>

        {/* Form */}
        <div className="max-w-[500px] mx-auto">
          <h2 className="text-lg font-medium text-[#112211] mb-6">
            Feel free to contact us for any inquiries
          </h2>

          <form className="flex flex-col gap-4">
            {/* Name */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input type="text" placeholder="Name"
                className="w-full p-3 pl-10 border border-gray-300 rounded-md
                           focus:outline-none focus:border-[#29bbac]" />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input type="email" placeholder="Email"
                className="w-full p-3 pl-10 border border-gray-300 rounded-md
                           focus:outline-none focus:border-[#29bbac]" />
            </div>

            {/* Phone */}
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input type="tel" placeholder="Phone number"
                className="w-full p-3 pl-10 border border-gray-300 rounded-md
                           focus:outline-none focus:border-[#29bbac]" />
            </div>

            {/* Message */}
            <div className="relative">
              <MessageSquare className="absolute left-3 top-4 text-gray-400" size={18} />
              <textarea rows="4" placeholder="Message"
                className="w-full p-3 pl-10 border border-gray-300 rounded-md resize-none
                           focus:outline-none focus:border-[#29bbac]" />
            </div>

            <button type="submit"
              className="mt-4 bg-[#29bbac] text-white py-3 rounded-md
                         font-medium hover:bg-[#239d90] transition">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
