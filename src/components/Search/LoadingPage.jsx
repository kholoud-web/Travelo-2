const LoadingScreen = () => {
  return (
    <div className="min-h-screen flex items-center justify-center 
                    bg-gradient-to-br from-indigo-50 via-white to-purple-50"
                    style={{ backgroundImage: "url('/assets/images/Map.svg')" }}>

      <div className="text-center">
        
        {/* Logo */}
        <div className="flex items-center justify-center gap-2">
          <span
            className="font-medium sm:text-4xl lg:text-5xl logo-font"
          >
            Travel
          </span>

          {/* icon */}
          <img
            src="assets/icons/GG.png"
            alt="logo"
            className="w-10 h-10"
          />
        </div>

        {/* Subtitle */}
        <p className="mt-4 text-[#2f7f77] text-lg">
          Find your perfect stay in every city.
        </p>

        {/* Spinner SVG */}
        <div className="mt-8 flex justify-center">
          <img
            src="/assets/images/spinner.svg"
            alt="loading"
            className="w-10 h-10 animate-spin"
          />
        </div>

      </div>
    </div>
  );
};

export default LoadingScreen;
