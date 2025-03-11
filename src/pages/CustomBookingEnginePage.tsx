import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faChevronRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import clsx from "clsx";
import "react-multi-date-picker/styles/colors/red.css";
import DateSelector from "../components/booking/DateSelector";
import GuestSelector from "../components/booking/GuestSelector";
import RoomCard from "../components/booking/RoomCard";
import { rooms } from "../data/rooms";
import { useSearchParams, useNavigate } from "react-router-dom";

const roomTypes = ["DELUXE ROOM", "SUITE ROOM"];
type DateRange = [Date | null, Date | null];

const ContactForm = ({
  isOpen,
  onClose,
  contactFormData,
  setContactFormData,
  onSubmit,
}: {
  isOpen: boolean;
  onClose: () => void;
  contactFormData: any;
  setContactFormData: React.Dispatch<React.SetStateAction<any>>;
  onSubmit: () => void;
}) => {
  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Contact Information</h2>
          <button onClick={onClose} className="text-white">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={contactFormData.firstName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500 bg-white"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={contactFormData.lastName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500 bg-white"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={contactFormData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500 bg-white"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={contactFormData.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500 bg-white"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-brown-800 text-white py-2 px-4 rounded-md hover:bg-brown-900 focus:outline-none focus:ring-2 focus:ring-brown-500"
          >
            Complete Reservation
          </button>
        </form>
      </div>
    </div>
  );
};

const PromoCodeForm = ({
  isOpen,
  onClose,
  promoCode,
  setPromoCode,
  onSubmit,
}: {
  isOpen: boolean;
  onClose: () => void;
  promoCode: string;
  setPromoCode: (promoCode: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Promo Code</h2>
          <button onClick={onClose} className="text-white">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label
              htmlFor="promoCode"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Promo Code *
            </label>
            <input
              type="text"
              id="promoCode"
              name="promoCode"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500 bg-white"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-brown-800 text-white py-2 px-4 rounded-md hover:bg-brown-900 focus:outline-none focus:ring-2 focus:ring-brown-500"
          >
            Apply Promo Code
          </button>
        </form>
      </div>
    </div>
  );
};

const CustomBookingEnginePage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [dateRange, setDateRange] = useState<DateRange>([null, null]);
  const [adults, setAdults] = useState<number>(2);
  const [selectedType, setSelectedType] = useState<string>("");
  const [children, setChildren] = useState<number>(0);
  const [infants, setInfants] = useState<number>(0);
  const [contactFormOpen, setContactFormOpen] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [promoCodeOpen, setPromoCodeOpen] = useState<boolean>(false);
  const [promoCode, setPromoCode] = useState<string>("");
  const [contactFormData, setContactFormData] = useState<any>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [hotelData, setHotelData] = useState<any>(null);
  const [selectedRooms, setSelectedRooms] = useState<
    Record<string, Record<string, number>>
  >({});
  const [currentRoomId, setCurrentRoomId] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchHotelData = async (hotelId: string) => {
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
    setHotelData(data);
  };

  useEffect(() => {
    const hotelId = searchParams.get("hotelId");
    if (hotelId) {
      fetchHotelData(hotelId);
    }
  }, [searchParams]);

  // Derived values
  const checkInDate = dateRange[0];
  const checkOutDate = dateRange[1];

  // Helper functions
  const toggleRoomDetails = (roomId: string) => {
    setExpanded((prev) => ({
      ...prev,
      [roomId]: !prev[roomId],
    }));
  };

  const selectRoom = (roomId: string, planId: string, count: number) => {
    setSelectedRooms((prev) => ({
      ...prev,
      [roomId]: {
        ...prev[roomId],
        [planId]: count,
      },
    }));
  };

  const validateBooking = () => {
    // Validate dates
    if (!checkInDate || !checkOutDate) {
      alert("Please select both check-in and check-out dates");
      return false;
    }

    // Validate check-out is after check-in
    if (checkOutDate <= checkInDate) {
      alert("Check-out date must be after check-in date");
      return false;
    }

    // Validate total guests
    if (totalGuests === 0) {
      alert("At least one guest is required");
      return false;
    }
    return true;
  };

  const checkAvailability = () => {
    if (!validateBooking()) {
      return;
    }
    // Continue with availability check
  };

  const handleReservation = (roomId: string) => {
    if (!validateBooking()) {
      return;
    }

    const roomPlans = selectedRooms[roomId];
    if (!roomPlans) {
      alert("Please select a room plan");
      return;
    }

    const hasSelectedRooms = Object.values(roomPlans).some(
      (count) => count > 0
    );
    if (!hasSelectedRooms) {
      alert("Please select at least one room to reserve.");
      return;
    }

    // Validate against room capacity
    const room = rooms.find((r) => r.id === roomId);
    if (room && totalGuests > room.maxGuests) {
      alert(`This room type can only accommodate ${room.maxGuests} guests`);
      return;
    }

    // Set current room ID and open the contact form
    setCurrentRoomId(roomId);
    setContactFormOpen(true);
  };

  const submitReservation = async () => {
    // Validate form
    if (
      !contactFormData.firstName.trim() ||
      !contactFormData.lastName.trim() ||
      !contactFormData.email.trim() ||
      !contactFormData.phone.trim()
    ) {
      alert("Please fill in all required fields");
      return;
    }

    try {
      setIsLoading(true);

      // Prepare reservation data
      const reservationData = {
        firstName: contactFormData.firstName,
        lastName: contactFormData.lastName,
        email: contactFormData.email,
        checkIn: checkInDate?.toISOString(),
        checkOut: checkOutDate?.toISOString(),
        userId: "1",
        cost: 3000,
        destination: hotelData.address,
        hotelId: searchParams.get("hotelId"),
        rooms: Object.values(selectedRooms[currentRoomId]).reduce(
          (acc, count) => acc + count,
          0
        ),
        guests: totalGuests,
        bookingDate: new Date(),
        type: selectedType === "DELUXE ROOM" ? "deluxe" : "suite",
        promoCode: promoCode,
        contactDetails: contactFormData,
      };

      // Make API call
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/bookings/add-booking`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
          },
          body: JSON.stringify(reservationData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create reservation");
      }

      const data = await response.json();
      console.log("reservation data", data);
      navigate(`/`);

      // Close form and reset
      setContactFormOpen(false);
    } catch (error) {
      console.error("Reservation error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Calculate stay duration
  const nightsStay =
    checkOutDate && checkInDate
      ? Math.ceil(
          (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 3600 * 24)
        )
      : 1;

  const handleDateChange = (value: any) => {
    // Extract dates from the date picker
    if (Array.isArray(value) && value.length === 2) {
      const startDate = value[0]?.toDate?.() || null;
      const endDate = value[1]?.toDate?.() || null;
      setDateRange([startDate, endDate]);
    }
  };

  const applyPromoCode = (e: React.FormEvent<HTMLFormElement>) => {
    // TODO: Implement promo code application
    e.preventDefault();
    console.log("apply promo code", promoCode);
    setPromoCodeOpen(false);
  };

  const totalGuests = adults + children + infants;

  return (
    <div className="flex flex-col lg:flex-row w-full border border-gray-300 bg-white shadow-md">
      {/* Left side - Calendar and Guest Selection */}
      <div className="w-full lg:w-2/5 p-5 border-r border-gray-300">
        <DateSelector dateRange={dateRange} onDateChange={handleDateChange} />

        <GuestSelector
          adults={adults}
          children={children}
          infants={infants}
          setAdults={setAdults}
          setChildren={setChildren}
          setInfants={setInfants}
        />

        <button
          className={clsx(
            "w-full py-3 font-medium text-center",
            !checkInDate || !checkOutDate
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-brown-800 text-white hover:bg-brown-900"
          )}
          onClick={checkAvailability}
          disabled={!checkInDate || !checkOutDate}
        >
          CHECK AVAILABILITY
        </button>

        <div className="mt-4">
          <div
            onClick={() => setPromoCodeOpen(true)}
            className="flex items-center p-3 bg-gray-100 border border-gray-300 justify-between cursor-pointer hover:bg-gray-200"
          >
            <span className="font-medium">
              {promoCode ? promoCode : "PROMO CODE"}
            </span>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
      </div>

      {/* Right side - Room Selection */}
      <div className="w-full lg:w-3/5 bg-gray-50">
        <div className="p-4 bg-white border-b border-gray-200">
          <h2 className="text-xl">
            Select the accommodation that suits you best
          </h2>

          {checkInDate && checkOutDate ? (
            <div className="flex items-center mt-3">
              <FontAwesomeIcon icon={faUser} className="text-gray-600 mr-2" />
              <span>GUESTS: {totalGuests}</span>
              <span className="mx-4">→</span>
              <span>{dayjs(checkInDate).format("ddd DD MMM YYYY")}</span>
              <span className="mx-2">-</span>
              <span>{dayjs(checkOutDate).format("ddd DD MMM YYYY")}</span>
              <span className="ml-4 border border-gray-300 px-2 py-1 rounded-md flex items-center">
                <span className="mr-1">{nightsStay}</span>
                <span>{nightsStay > 1 ? "NIGHTS" : "NIGHT"}</span>
              </span>
            </div>
          ) : (
            <p className="text-gray-500 mt-2">
              Please select dates and check availability to see rooms
            </p>
          )}
        </div>
        <div className="room-listings">
          {rooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              expanded={expanded[room.id]}
              totalGuests={totalGuests}
              nightsStay={nightsStay}
              children={children}
              selectedRooms={selectedRooms}
              onToggleDetails={() => toggleRoomDetails(room.id)}
              onSelectRoom={selectRoom}
              onSelectType={setSelectedType}
              onReserve={handleReservation}
            />
          ))}
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactForm
        isOpen={contactFormOpen}
        onClose={() => setContactFormOpen(false)}
        contactFormData={contactFormData}
        setContactFormData={setContactFormData}
        onSubmit={submitReservation}
      />
      <PromoCodeForm
        isOpen={promoCodeOpen}
        onClose={() => setPromoCodeOpen(false)}
        promoCode={promoCode}
        setPromoCode={setPromoCode}
        onSubmit={applyPromoCode}
      />

      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <p className="text-lg">Processing your reservation...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomBookingEnginePage;
