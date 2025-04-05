import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


interface ContactDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface BookingDetails {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  checkIn: string;
  checkOut: string;
  cost: number;
  destination: string;
  hotelId: string;
  rooms: number;
  guests: number;
  bookingDate: string;
  type: string;
  promoCode?: string;
  contactDetails: ContactDetails;
  __v: number;
  hotelName:string;
}
const BookingSuccess = () => {
  const bookingId=useParams();
  const navigate=useNavigate();
  const [booking, setBooking] = useState<BookingDetails | null>(null);

  useEffect(() => {
    console.log("success", `${import.meta.env.VITE_API_URL}/bookings/${bookingId.bookingId}`);

    const fetchBookingById = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings/${bookingId.bookingId}`
          //  ${import.meta.env.VITE_BACKEND_URL}
         );

        if (!response.ok) {
          throw new Error("Failed to fetch booking by ID");
        }

        const data = await response.json();
        setBooking(data); // Ensure API returns correct format
      } catch (error) {
        console.error("Error fetching booking:", error);
      }
    };

    fetchBookingById();
  }, [bookingId.bookId]);

  if (!booking) {
    
    return (<div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div>Loading booking...</div>
      </div>);
  }

  const formatDate = (isoString: string): string => {
    const date = new Date(isoString);
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Booking Confirmed!</h1>
        <p className="text-gray-700 text-lg mb-6">
          We have received your booking
        </p>

        <div className="text-left text-gray-800 space-y-2 mb-6">
          <h2 className="text-2xl font-bold text-black pt-4">Personal Information</h2>
          <p><span className="font-semibold">First Name:</span> {booking.contactDetails.firstName}</p>
          <p><span className="font-semibold">Last Name:</span> {booking.contactDetails.lastName}</p>
          <p><span className="font-semibold">Email:</span> {booking.contactDetails.email}</p>
          <p><span className="font-semibold">Phone No:</span> {booking.contactDetails.phone}</p>
          <h2 className="text-2xl font-bold text-black pt-4">Booking Information</h2>
          <p><span className="font-semibold">Hotel Name:</span> {booking.hotelName}</p>
          <p><span className="font-semibold">Check In Date:</span> {formatDate(booking.checkIn)}</p>
          <p><span className="font-semibold">Check Out Date:</span> {formatDate(booking.checkOut)}</p>
          <p><span className="font-semibold">Total Cost:</span> {booking.cost}</p>
          <p><span className="font-semibold">Destination:</span> {booking.destination}</p>
          <p><span className="font-semibold">Rooms:</span> {booking.rooms}</p>
          <p><span className="font-semibold">Guests:</span> {booking.guests}</p>
          <p><span className="font-semibold">Booking Date:</span> {formatDate(booking.bookingDate)}</p>
        </div>

        <p className="text-yellow-600 font-medium">
          Kindly pay at the hotel during check-in.
        </p>
      <button className="bg-red-900 p-2 mt-4 text-white" onClick={()=>{navigate('/')}}>Home</button>
      </div>
    </div>
  );
};


export default function BookingPage() {
  return (
    <BookingSuccess/>
  );
}