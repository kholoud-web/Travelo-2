import photo from "/assets/images/RECTANGLE.png";
export default function SideImg() {
  return (
    <div className="hidden lg:flex justify-center">
      <div>
        <img
          src={photo}
          alt="Signup"
          className="w-full h-full object-contain rounded-xl"
        />
      </div>
    </div>
  );
}
