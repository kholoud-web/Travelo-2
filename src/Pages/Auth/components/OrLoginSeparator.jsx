export function OrLoginSeparator() {
  return (
    <div className="relative flex items-center w-full my-4">
      <div className="flex-1 h-px bg-gray-300" />

      <span className="relative z-10 px-3 text-sm text-gray-500 bg-white whitespace-nowrap capitalize">
        or login with
      </span>

      <div className="flex-1 h-px bg-gray-300" />
    </div>
  );
}
