import { content } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Link, useSearchParams } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

export default function Hotels() {
  const [searchParams] = useSearchParams();
  const destination = searchParams.get("destination")?.toLowerCase(); // Get destination from URL

  // If destination exists, filter hotels; otherwise, show all hotels
  const filteredHotels = destination
    ? content.hotels.filter((hotel) => hotel.city.toLowerCase() === destination)
    : content.hotels;

  // Dynamically generate meta title and description based on destination
  const pageTitle = destination
    ? `Saavi Hotels in ${destination.charAt(0).toUpperCase() + destination.slice(1)} | Luxury & Comfort`
    : "Saavi Hotels & Resorts | Luxury Stays Across India";

  const metaDescription = destination
    ? `Find comfortable and luxurious Saavi Hotels in ${destination.charAt(0).toUpperCase() + destination.slice(1)}. Book your perfect stay with amenities like Free WiFi, Restaurant, Room Service & more.`
    : "Experience comfort and luxury at Saavi Hotels across Gurugram and Himachal Pradesh. Our properties in Sector 46, Golf Course, Sector 45, Sector 10, Hassan Valley, and Jibhi offer perfect stays.";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="Saavi Hotels, Gurugram hotels, Himachal Pradesh hotels, luxury hotels, comfortable stay, affordable hotels, Sector 46, Golf Course Road, Sector 45, Sector 10, Hassan Valley, Jibhi, business hotels, leisure stays" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Saavi Hotel" />
        <link rel="canonical" href={`https://www.saavihotels.com/hotels${destination ? `?destination=${destination}` : ''}`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={`https://www.saavihotels.com/hotels${destination ? `?destination=${destination}` : ''}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.saavihotels.com/images/hotels-og.jpg" />

        {/* Individual Hotel Meta Data */}
        {destination && (
          <>
            {destination === "gurugram" && (
              <>
                <meta name="keywords" content="Saavi Hotel Sector 46, Saavi Hotel Golf Course, Saavi Hotel Sector 45, Saavi Hotel Sector 10, Gurugram hotels, comfortable stay Gurugram, hotels near Huda City Centre, budget hotels Gurugram" />
                <link rel="alternate" href="https://www.saavihotels.com/saavi-hotel-sector-46" />
                <link rel="alternate" href="https://www.saavihotels.com/saavi-hotel-golf-course" />
                <link rel="alternate" href="https://www.saavihotels.com/saavi-hotel-sector-45" />
                <link rel="alternate" href="https://www.saavihotels.com/saavi-hotel-sector-10" />
              </>
            )}
            {destination === "himachal pradesh" && (
              <>
                <meta name="keywords" content="Hassan Valley By Saavi, Saavi Hotel Jibhi, Shimla hotels, scenic stay Shimla, Jibhi hotels, nature retreat Himachal Pradesh" />
                <link rel="alternate" href="https://www.saavihotels.com/hassan-valley-by-saavi" />
                <link rel="alternate" href="https://www.saavihotels.com/saavi-hotel-jibhi" />
              </>
            )}
          </>
        )}
      </Helmet>
      <div className="pt-24 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-16">
            {destination ? `Hotels in ${destination.charAt(0).toUpperCase() + destination.slice(1)}` : "Our Hotels & Resorts"}
          </h1>

          {filteredHotels.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredHotels.map((hotel) => (
                <div key={hotel.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
                  <div className="relative">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2">{hotel.name}</h3>
                    <p className="text-gray-600 mb-4">{hotel.location}</p>
                    <p className="text-gray-700 mb-6">{hotel.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Amenities:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {hotel.amenities.map((amenity, index) => (
                          <li key={index} className="text-gray-600">• {amenity}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6">
                      <Link to={`/hotelDesc/${hotel.id}`}>
                        <Button className="w-full">Book Now</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600 text-lg">No hotels found for "{destination}".</p>
          )}
        </div>
      </div>
    </>
  );
}
