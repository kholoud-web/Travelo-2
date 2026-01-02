import { ChevronLeftIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function BackToLink({ to, title }) {
  return (
    <div className="flex max-lg:justify-center">
      <Link
        className="flex w-fit items-center  text-[#112211] font-medium"
        to={to}
      >
        <ChevronLeftIcon />
        {title}
      </Link>
    </div>
  );
}
