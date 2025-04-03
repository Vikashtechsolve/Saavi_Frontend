import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loader2, MapPin, Star } from "lucide-react";

export default function HotelDetail() {
  const navigate = useNavigate();
  const { hotelId } = useParams();
  const [loading, setLoading] = useState(true);
  const [hotel, setHotel] = useState<any>(null);
  const fetchHotel = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/hotels/${hotelId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
        },
      }
    );
    const data = await response.json();
    setHotel(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchHotel();
  }, [hotelId]);

  const [selectedImage, setSelectedImage] = useState(0);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-10 w-10 animate-spin text-red-700" />
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/custom-booking-engine?hotelId=${hotelId}`);
  };

  if (!hotel) {
    return (
      <p className="text-center text-red-600 text-xl mt-10">Hotel not found.</p>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[30vh] overflow-hidden">
        <img
          src={hotel?.imageUrls[selectedImage]}
          alt={hotel?.name}
          className="w-full h-full object-cover"
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: 1,
            filter: "contrast(1.2) brightness(0.4)",
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
          <div className="container mx-auto mb-10">
            <h1 className="text-4xl font-bold text-white mb-2">
              {hotel?.name}
            </h1>
            <div className="flex items-center text-white gap-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-1" />
                <span>{hotel?.address}</span>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 mr-1" />
                <span>{hotel?.rating}/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {hotel?.imageUrls.map((image: any, index: any) => (
            <a
              key={index}
              onClick={() => setSelectedImage(index)}
              className={` ${
                selectedImage === index ? "rounded-lg ring-2 ring-red-700" : ""
              }`}
            >
              <img
                src={image}
                alt={`View ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">About the Listing</h2>
              <p
                className="text-gray-600 leading-relaxed whitespace-pre-line"
                dangerouslySetInnerHTML={{
                  __html: hotel?.description,
                }}
              />
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {hotel?.facilities &&
                  JSON.parse(hotel?.facilities).map(
                    (amenity: any, index: any) => {
                      // const Icon = amenityIcons[amenity] || Wind;
                      return (
                        <div key={index} className="flex items-center gap-3">
                          {/* <Icon className="h-5 w-5 text-red-700" /> */}
                          <svg
                            className="w-3.5 h-3.5 me-2 text-red-700 dark:text-red-400 shrink-0"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                          </svg>
                          <span className="text-gray-700">{amenity}</span>
                        </div>
                      );
                    }
                  )}
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Location</h2>
              <div className="aspect-w-16 aspect-h-9 h-[300px] rounded-lg overflow-hidden">
                <iframe
                  src={hotel?.location}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-red-700">
                      ₹{hotel?.pricePerNight}
                    </span>
                    <span className="text-gray-600"> onwards /night</span>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center font-semibold text-red-700">
                      <Star className="h-4 w-4 mr-1" />
                      {hotel?.rating}/5
                    </div>
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <button
                    type="submit"
                    className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
                  >
                    Book Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
