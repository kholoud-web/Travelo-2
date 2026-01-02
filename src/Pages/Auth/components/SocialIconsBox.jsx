import FacebookIcon from "/assets/icons/facebook-icon.png";
import GoogleIcon from "/assets/icons/google-icon.png";
import AppleIcon from "/assets/icons/apple-icon.png";
export function SocialIcons() {
  return (
    <div className="flex justify-center gap-2 min-[370px]:gap-4 max-[370px]:flex-col">
      <button
        type="button"
        className="cursor-pointer flex-1 py-4 px-6 flex items-center justify-center rounded-sm border border-gray-300 hover:bg-gray-100 transition-colors"
      >
        <img src={GoogleIcon} alt="Google" />
      </button>
      <button
        type="button"
        className="cursor-pointer flex-1 py-4 px-6 flex items-center justify-center rounded-sm border border-gray-300 hover:bg-gray-100 transition-colors"
      >
        <img src={FacebookIcon} alt="Facebook" />
      </button>
      <button
        type="button"
        className="cursor-pointer flex-1 py-4 px-6 flex items-center justify-center rounded-sm border border-gray-300 hover:bg-gray-100 transition-colors"
      >
        <img src={AppleIcon} alt="Apple" />
      </button>
    </div>
  );
}
