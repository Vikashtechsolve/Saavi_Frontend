import React from "react";

type BookingDetails = {
  hotelName: string;
  nights: number;
  roomType: string;
  numberOfPeople: number;
};

const BookingSuccess: React.FC<BookingDetails> = ({
  hotelName,
  nights,
  roomType,
  numberOfPeople,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Booking Confirmed!</h1>
        <p className="text-gray-700 text-lg mb-6">
          We have received your booking
        </p>

        <div className="text-left text-gray-800 space-y-2 mb-6">
          <p><span className="font-semibold">Hotel Name:</span> {hotelName}</p>
          <p><span className="font-semibold">Nights:</span> {nights}</p>
          <p><span className="font-semibold">Room Booked:</span> {roomType}</p>
          <p><span className="font-semibold">Number of People:</span> {numberOfPeople}</p>
        </div>

        <p className="text-yellow-600 font-medium">
          Kindly pay at the hotel during check-in.
        </p>
      <button className="bg-red-900 p-2 mt-4 text-white">Home</button>
      </div>
    </div>
  );
};


export default function BookingPage() {
  return (
    <BookingSuccess
      hotelName="The Royal Orchid"
      nights={2}
      roomType="Deluxe King Suite"
      numberOfPeople={3}
    />
  );
}