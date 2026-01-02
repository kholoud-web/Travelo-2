import infoBarImg from "../../../assets/img/infoBar.jpg";
import cookImg from "../../../assets/icons/cook.png";
import eatImg from "../../../assets/icons/eat.png";
import spiceImg from "../../../assets/icons/spice.png";
import toolsImg from "../../../assets/icons/tools.png";
import InfoBox from "../../../components/restaurant/InfoBox";

function FlowBar() {
  return (
    <>
      <section className="w-full text-white pt-6">
        <div
          className="relative h-[50vh] bg-cover bg-center flex flex-col items-center justify-center"
          style={{ backgroundImage: `url(${infoBarImg})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-20 container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-3 text-center">
            <InfoBox icon={cookImg} title="Professional Chefs" value="420" />
            <InfoBox icon={eatImg} title="Items Of Food" value="320" />
            <InfoBox icon={toolsImg} title="Years Of Experienced" value="30+" />
            <InfoBox icon={spiceImg} title="Happy Customers" value="220" />
          </div>
        </div>
      </section>
    </>
  );
}

export default FlowBar;
