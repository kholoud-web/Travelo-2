import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center main-font bg-gray-50">
      <div className="text-center px-4">

        {/* 404 */}
        <h1 className="text-[120px] font-bold text-[#29bbac] leading-none">
          404
        </h1>

        {/* Title */}
        <h2 className="text-3xl font-semibold text-[#112211] mt-4">
          Page not found
        </h2>

        {/* Description */}
        <p className="text-gray-500 mt-3 max-w-md mx-auto">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Action */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-8
                     bg-[#29bbac] text-white px-6 py-3 rounded-md
                     font-medium hover:bg-[#239d90] transition"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
