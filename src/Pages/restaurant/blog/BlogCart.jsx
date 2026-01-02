import blog from "../../../assets/img/blog/blog.jpg";
import { Calendar, MessageSquare, User } from "lucide-react";

function BlogCart() {
  return (
    <div className="bg-white border border-gray-200 rounded-md overflow-hidden mb-6">
      {/* Image */}
      <div className="relative">
        <img src={blog} alt="blog" className="w-full h-[360px] object-cover" />

        {/* Date Badge */}
        <div className="absolute top-5 left-5 bg-orange-400 text-white text-center px-3 py-2 rounded-sm">
          <span className="block text-lg font-semibold leading-none">14</span>
          <span className="block text-xs uppercase">Feb</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>Feb 14, 2022</span>
          </div>

          <div className="flex items-center gap-1">
            <MessageSquare size={16} />
            <span>3</span>
          </div>

          <div className="flex items-center gap-1">
            <User size={16} />
            <span>Admin</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-orange-500 cursor-pointer">
          10 Reasons To Do A Digital Detox Challenge
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat
        </p>

        {/* Button */}
        <button
          className="px-6 py-2 border border-orange-400 text-orange-400 rounded-md
                     hover:bg-orange-400 hover:text-white transition"
        >
          Read More
        </button>
      </div>
    </div>
  );
}

export default BlogCart;
