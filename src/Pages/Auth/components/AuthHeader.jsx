export default function AuthHeader({ title, subTitle }) {
  return (
    <div className="flex flex-col gap-4 mb-6 max-lg:text-center">
      <h3 className="font-bold text-[40px] capitalize">{title}</h3>
      <span className="text-[#112211]">{subTitle}</span>
    </div>
  );
}
