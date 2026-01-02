import G from "/assets/icons/GG.png";
export function Logo() {
  return (
    <div className="flex max-lg:justify-center items-center gap-2">
      <p className="text-[64px] monotype-corsiva">Travel</p>
      <img src={G} />
    </div>
  );
}
