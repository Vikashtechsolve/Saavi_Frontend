import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faChild,
  faInfoCircle,
  faBed, faCoffee,faUtensils
} from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { RoomType } from "../../types/booking";
import PaymentForm from "../payment/paymentGateway";

interface RoomCardProps {
  index:number;
  setRoomData:object;
  roomData:object;
  setTotalPrices:object;
  totalGuests: number;
  nightsStay: number;
  children: number;
  hotelData:object;
  selectedRooms: Record<string, Record<string, number>>;
  onSelectRoom: (roomId: number, planId: number, count: number) => void;
  onReserve: (roomId: number) => void;
}

const RoomCard: React.FC<RoomCardProps> = ({
  index,
  setRoomData,
  setTotalPrices,
  totalGuests,
  nightsStay,
  children,
  selectedRooms,
  hotelData,
  onSelectRoom,
  onReserve,
}) => {
  
  const handleSelectRoom = (roomId: number, planId: number, count: number) => {
    // Call the existing onSelectRoom function
    onSelectRoom(roomId, planId, count);
    
    // Determine which count to update based on the planId
   const selectedPlan = hotelData.rooms[roomId].plans[planId];
  const totalPrice = selectedPlan ? selectedPlan.price * nightsStay * count : 0;

  // Determine which count and price to update
  let updatedCounts = {};
  let updatedPrices = {};

  switch (planId) {
    case 0: // Room Only
      updatedCounts = { totalRoomsOnly: count };
      updatedPrices = { totalRoomsOnlyPrice: totalPrice };
      break;
    case 1: // Breakfast Included
      updatedCounts = { totalBreakfast: count };
      updatedPrices = { totalBreakfastPrice: totalPrice };
      break;
    case 2: // Breakfast and 1 Major Meal
      updatedCounts = { totalMeal: count };
      updatedPrices = { totalMealPrice: totalPrice };
      break;
    default:
      break;
  }

  // Update the roomData state
  setRoomData((prevData) => ({
    ...prevData,
    ...updatedCounts,
  }));

  // Update the totalPrices state
  setTotalPrices((prevPrices) => ({
    ...prevPrices,
    ...updatedPrices,
  }));

  

console.log("updated counttttttt",updatedCounts,updatedPrices);

  };
  
  return (
    <div className="room-card bg-white mb-4 border-b border-gray-200">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 h-48 md:h-auto relative">
          <img
            src={hotelData.imageUrls[hotelData.imageUrls.length - index-1]}
            alt={"card images"}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full flex justify-center space-x-1 p-2">
            {[1, 2, 3, 4, 5, 6, 7].map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full ${
                  idx === 0 ? "bg-red-800" : "bg-gray-400"
                }`}
              ></div>
            ))}
          </div>
        </div>
        <div className="md:w-2/3 p-4">
          <div className="flex justify-between">
            <h3 className="text-xl font-bold text-red-900">{hotelData.rooms[index].type.toUpperCase()}</h3>
            <div className="text-right">
              <p className="text-sm text-gray-600">Starting From</p>
              <p className="text-2xl font-bold">₹ {hotelData.rooms[index].minPrice}</p>
              <p className="text-xs text-gray-500">Avg per night</p>
              <p className="text-xs text-gray-500">taxes excluded</p>
            </div>
          </div>

          <div className="mt-2">
            <div className="flex items-center">
              <span className="mr-2">Max Guests:</span>
              {Array(3)
                .fill(0)
                .map((_, idx) => (
                  <FontAwesomeIcon
                    key={idx}
                    icon={faUser}
                    className="text-red-900 mr-1"
                  />
                ))}
              {totalGuests >= 3 && (
                <span className="text-red-500 text-xs ml-2">
                  (Exceeds capacity)
                </span>
              )}
            </div>
            <div className="flex items-center">
              <span className="mr-2">Max Children:</span>
              {Array(1)
                .fill(0)
                .map((_, idx) => (
                  <FontAwesomeIcon
                    key={idx}
                    icon={faChild}
                    className="text-red-900 mr-1"
                  />
                ))}
              {children >= 1 && (
                <span className="text-red-500 text-xs ml-2">
                  (Exceeds capacity)
                </span>
              )}
            </div>

            <p className="mt-2 text-gray-700">{hotelData.rooms[index].description}</p>
          </div>

        </div>
      </div>

        <div className="border-t border-gray-200 p-4">
          <div className="grid grid-cols-3 gap-4 mt-2">
            <p className="font-medium">Rate Plan</p>
            <p className="font-medium">
              Price for {nightsStay} {nightsStay > 1 ? "nights" : "night"}
            </p>
            <p className="font-medium">Rooms</p>
          </div>

          {hotelData.rooms[index].plans.map((room,planIndex) => (
            <div
              key={planIndex}
              className="grid grid-cols-3 gap-4 mt-4 items-center"
            >
              <div className="flex items-center">
                <div className="mr-2">
                  <FontAwesomeIcon icon={planIndex==0?faBed:planIndex==1?faCoffee:faUtensils} />
                </div>
                <div>
                  <p>{room.name}</p>
                  <div className="flex items-center">
                    <p className="text-xs text-gray-500 mr-1">{room.id}</p>
                    <FontAwesomeIcon
                      icon={faInfoCircle}
                      className="text-gray-500 text-xs"
                    />
                  </div>
                </div>
              </div>

              <div>
                <p>₹ {room.price * nightsStay}</p>
                <p className="text-xs text-gray-500">
                  ₹ {room.price} per night
                </p>
              </div>

              <div>
                <select
                  className="border border-gray-300 rounded-md p-2 w-full bg-white"
                  value={selectedRooms[index]?.[planIndex] || 0}
                  onChange={(e) =>
                handleSelectRoom(index, planIndex, parseInt(e.target.value))
              }
                  disabled={totalGuests > room.maxGuests}
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>
          ))}

          <div className="mt-6 flex justify-between items-center">
            <p className="text-sm">Please select one or more Rooms</p>
            <button
              className={clsx(
                "px-10 py-2 rounded-md",
                totalGuests >= 3 ||
                  !Object.keys(selectedRooms[index] || {}).some(
                    (key) => (selectedRooms[index] || {})[key] > 0
                  )
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-red-900 text-white hover:bg-red-800"
              )}
              onClick={() => onReserve(index)}
              disabled={
                totalGuests >= 3 ||
                !Object.keys(selectedRooms[index] || {}).some(
                  (key) => (selectedRooms[index] || {})[key] > 0
                )
              }
            >
              Reserve
            </button>
            {/* <PaymentForm/> */}
          </div>
        </div>
    </div>
  );
};

export default RoomCard;
