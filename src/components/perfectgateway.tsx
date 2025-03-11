
import Nature from '../../public/assets/nature.png';
import Chill from '../../public/assets/chill.jpeg';
import Peace from '../../public/assets/peace.png';
import TastyFood from '../../public/assets/tastyFood.png';
import LuxuaryRoom from '../../public/assets/luxuaryRoom.png';
import Marquee from "react-fast-marquee";


function PerfectGateway() {
  return (
    <div className="w-11/12 mx-auto text-center ">
      <header className="text-left mb-8">
        <h1 className="text-3xl font-bold mb-4 animate-slide-in-left font-serif">Your Perfect Getaway</h1>
        <p className="text-xl text-[#8B2B06] font-serif">Experience the Best of Nature and Luxury</p>
      </header>
<Marquee>
      <div className="ml-4 relative overflow-hidden">
        {/* Row 1 */}
        <div className="flex gap-4 mt-4 animate-scroll-left">
          <div className="flex-none w-72 bg-white rounded-xl shadow-lg relative">
            <img src={Nature} alt="Nature" className="w-full h-48 object-cover rounded-t-xl" />
            <div className="absolute bottom-0 left-0 right-0 bg-[#8B2B06] text-white py-2 text-center text-xl font-bold uppercase">
              Nature
            </div>
          </div>

          <div className="flex-none w-72 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Cozy Comfort, Modern Convenience</h2>
            <p className="text-gray-600">
              The interiors blend seamless comfort with modern amenities, infusing Native influences to bring the
              natural beauty of the great outdoors inside.
            </p>
          </div>

          <div className="flex-none w-72 bg-white rounded-xl shadow-lg relative">
            <img src={LuxuaryRoom} alt="Luxuary Room" className="w-full h-48 object-cover rounded-t-xl" />
            <div className="absolute bottom-0 left-0 right-0 bg-[#8B2B06] text-white py-2 text-center text-xl font-bold uppercase">
              Luxury Room
            </div>
          </div>

          <div className="flex-none w-72 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Easy Access, Stunning Views</h2>
            <p className="text-gray-600">
              Easy access to visit stunning Jalori Pass, located in Kullu District at a distance of about 520
              kilometers from Delhi, 150 kilometers from Shimla, and 60 kilometers from Mandi.
            </p>
          </div>

          <div className="flex-none w-72 bg-white rounded-xl shadow-lg relative">
            <img src={TastyFood} alt="Tasty Foods" className="w-full h-48 object-cover rounded-t-xl" />
            <div className="absolute bottom-0 left-0 right-0 bg-[#8B2B06] text-white py-2 text-center text-xl font-bold uppercase">
              Tasty Foods
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex gap-4 mt-8 animate-scroll-left">
          <div className="flex-none w-72 bg-white rounded-xl shadow-lg relative">
            <img src={Chill} alt="Nature" className="w-full h-48 object-cover rounded-t-xl" />
            <div className="absolute bottom-0 left-0 right-0 bg-[#8B2B06] text-white py-2 text-center text-xl font-bold uppercase">
              Chill
            </div>
          </div>

          <div className="flex-none w-72 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Cozy Comfort, Modern Convenience</h2>
            <p className="text-gray-600">
              The interiors blend seamless comfort with modern amenities, infusing Native influences to bring the
              natural beauty of the great outdoors inside.
            </p>
          </div>

          <div className="flex-none w-72 bg-white rounded-xl shadow-lg relative">
            <img src={LuxuaryRoom} alt="Luxury Room" className="w-full h-48 object-cover rounded-t-xl" />
            <div className="absolute bottom-0 left-0 right-0 bg-[#8B2B06] text-white py-2 text-center text-xl font-bold uppercase">
              Hotel's Room
            </div>
          </div>

          <div className="flex-none w-72 bg-white rounded-xl shadow-lg relative">
            <img src={TastyFood} alt="Tasty Foods" className="w-full h-48 object-cover rounded-t-xl" />
            <div className="absolute bottom-0 left-0 right-0 bg-[#8B2B06] text-white py-2 text-center text-xl font-bold uppercase">
              Foods
            </div>
          </div>

          <div className="flex-none w-72 bg-white rounded-xl shadow-lg relative">
            <img src={Peace} alt="Nature" className="w-full h-48 object-cover rounded-t-xl" />
            <div className="absolute bottom-0 left-0 right-0 bg-[#8B2B06] text-white py-2 text-center text-xl font-bold uppercase">
            Peace
            </div>
          </div>
        </div>
      </div>
      </Marquee>

    </div>
  );
}

export default PerfectGateway;
