import { Link } from "react-router-dom";

export default function AuthBreadCrumb({ userType }) {
  return (
    <nav className="text-[24px] font-medium  text-[#112211] flex items-center max-lg:justify-center gap-2 ">
      <Link to="/signup" className="hover:underline">
        Sign Up
      </Link>
      <span className="text-[#112211]">&gt;</span>
      {userType && <span className="capitalize">{userType}</span>}
    </nav>
  );
}
