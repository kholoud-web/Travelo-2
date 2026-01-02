const InfoBox = ({ icon, title, value }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={icon} alt={icon} />
      <h3 className="text-3xl font-bold mt-6">{value}</h3>
      <p className="text-gray-300 mt-2">{title}</p>
    </div>
  );
};

export default InfoBox;
