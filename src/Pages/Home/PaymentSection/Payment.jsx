import bgpayment from "/assets/images/bg-payment.svg.png";
import paypal from "/assets/images/PayPal.png";
import strip from "/assets/images/Stripe.png";
import Mastercard from "/assets/images/Mastercard.png";
import skrill from "/assets/images/skrill.png.png";
import Img1 from "/assets/images/1.png";
import Img2 from "/assets/images/2.png";
import Img3 from "/assets/images/3.png";
import Img4 from "/assets/images/4.png";
import { FaCheck } from "react-icons/fa";

const Payment = () => {
  return (
    <section className=" ">
      <div className="w-[90%] mx-auto p-5 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 my-20 main-font gap-5">
          {/* left section*/}
          <div>
            <div className="flex items-center gap-5">
              <h3 className="text-sm font-bold ">Easy payment</h3>
              <img src={bgpayment} alt="" className="w-80" />
            </div>

            <div>
              <h3 className="text-3xl md:text-5xl font-bold w-[80%] my-10">
                We offer tours in a range of locations
              </h3>
              <p className="text-[20px] font-medium text-gray-700">
                Choose one style or create a package, fill your passports with
                adventures together.
              </p>

              <div className="flex items-center gap-10">
                <ul>
                  <li className="flex items-center gap-3 my-5">
                    <FaCheck className="text-green-600" />
                    Security Assurance
                  </li>
                  <li className="flex items-center gap-3 my-5">
                    <FaCheck className="text-green-600" />
                    Transparent Policies
                  </li>
                </ul>

                <ul>
                  <li className="flex items-center gap-3 my-5">
                    <FaCheck className="text-green-600" />
                    Customer Support
                  </li>
                  <li className="flex items-center gap-3 my-5">
                    <FaCheck className="text-green-600" />
                    Reputable Affiliations
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-sm font-bold text-gray-600 my-10">
                  Payment is secure and safe
                </p>
                <div className="flex items-center gap-10">
                  <img src={paypal} alt="" className="cursor-pointer" />
                  <img src={strip} alt="" className="cursor-pointer" />
                  <img src={Mastercard} alt="" className="cursor-pointer" />
                  <img src={skrill} alt="" className="cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          {/* right section*/}

          <div class="grid grid-cols-2 gap-4">
            <div>
              <div class="rounded-lg overflow-hidden shadow-lg aspect-square ">
                <img
                  src={Img1}
                  alt="Mountain Scenery with Pagoda"
                  class="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              <div class="rounded-lg overflow-hidden shadow-lg row-span-2">
                <img
                  src={Img2}
                  alt="Two girls sitting on cliff rocks"
                  class="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
            </div>

            <div>
              <div class="rounded-lg overflow-hidden shadow-lg aspect-4/3 sm:aspect-square mb-10">
                <img
                  src={Img3}
                  alt="Girl sitting on beach with hat"
                  class="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              <div class="rounded-lg overflow-hidden shadow-lg mt-[-50%] sm:mt-0">
                <img
                  src={Img4}
                  alt="Two girls standing on a jeep"
                  class="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
