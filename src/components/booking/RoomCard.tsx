import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faChild,
  faChevronUp,
  faChevronDown,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { RoomType } from "../../types/booking";

interface RoomCardProps {
  room: RoomType;
  expanded: boolean;
  totalGuests: number;
  nightsStay: number;
  children: number;
  selectedRooms: Record<string, Record<string, number>>;
  onToggleDetails: () => void;
  onSelectRoom: (roomId: string, planId: string, count: number) => void;
  onReserve: (roomId: string) => void;
  onSelectType: (type: string) => void;
}

const RoomCard: React.FC<RoomCardProps> = ({
  room,
  expanded,
  totalGuests,
  nightsStay,
  children,
  selectedRooms,
  onToggleDetails,
  onSelectRoom,
  onReserve,
  onSelectType,
}) => {
  return (
    <div className="room-card bg-white mb-4 border-b border-gray-200">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 h-48 md:h-auto relative">
          <img
            src={room.image}
            alt={room.title}
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
            <h3 className="text-xl font-bold text-red-900">{room.title}</h3>
            <div className="text-right">
              <p className="text-sm text-gray-600">Starting From</p>
              <p className="text-2xl font-bold">₹ {room.startingPrice}</p>
              <p className="text-xs text-gray-500">Avg per night</p>
              <p className="text-xs text-gray-500">taxes excluded</p>
            </div>
          </div>

          <div className="mt-2">
            <div className="flex items-center">
              <span className="mr-2">Max Guests:</span>
              {Array(room.maxGuests)
                .fill(0)
                .map((_, idx) => (
                  <FontAwesomeIcon
                    key={idx}
                    icon={faUser}
                    className="text-red-900 mr-1"
                  />
                ))}
              {totalGuests > room.maxGuests && (
                <span className="text-red-500 text-xs ml-2">
                  (Exceeds capacity)
                </span>
              )}
            </div>
            <div className="flex items-center">
              <span className="mr-2">Max Children:</span>
              {Array(room.maxChildren)
                .fill(0)
                .map((_, idx) => (
                  <FontAwesomeIcon
                    key={idx}
                    icon={faChild}
                    className="text-red-900 mr-1"
                  />
                ))}
              {children > room.maxChildren && (
                <span className="text-red-500 text-xs ml-2">
                  (Exceeds capacity)
                </span>
              )}
            </div>

            <p className="mt-2 text-gray-700">{room.description}</p>
          </div>

          <div className="mt-4 flex justify-end">
            <button
              className="bg-white border border-red-900 text-red-900 px-4 py-2 rounded-md flex items-center hover:bg-red-50"
              onClick={() => {
                onToggleDetails();
                onSelectType(room.title);
              }}
            >
              {expanded ? "Close" : "Details & Book"}
              <FontAwesomeIcon
                icon={expanded ? faChevronUp : faChevronDown}
                className="ml-2"
              />
            </button>
          </div>
        </div>
      </div>

      {expanded && (
        <div className="border-t border-gray-200 p-4">
          <div className="grid grid-cols-3 gap-4 mt-2">
            <p className="font-medium">Rate Plan</p>
            <p className="font-medium">
              Price for {nightsStay} {nightsStay > 1 ? "nights" : "night"}
            </p>
            <p className="font-medium">Rooms</p>
          </div>

          {room.ratePlans.map((plan) => (
            <div
              key={plan.id}
              className="grid grid-cols-3 gap-4 mt-4 items-center"
            >
              <div className="flex items-center">
                <div className="mr-2">
                  <FontAwesomeIcon icon={plan.icon} />
                </div>
                <div>
                  <p>{plan.name}</p>
                  <div className="flex items-center">
                    <p className="text-xs text-gray-500 mr-1">{plan.code}</p>
                    <FontAwesomeIcon
                      icon={faInfoCircle}
                      className="text-gray-500 text-xs"
                    />
                  </div>
                </div>
              </div>

              <div>
                <p>₹ {plan.price * nightsStay}</p>
                <p className="text-xs text-gray-500">
                  ₹ {plan.price} per night
                </p>
              </div>

              <div>
                <select
                  className="border border-gray-300 rounded-md p-2 w-full bg-white"
                  value={selectedRooms[room.id]?.[plan.id] || 0}
                  onChange={(e) =>
                    onSelectRoom(room.id, plan.id, parseInt(e.target.value))
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
                totalGuests > room.maxGuests ||
                  !Object.keys(selectedRooms[room.id] || {}).some(
                    (key) => (selectedRooms[room.id] || {})[key] > 0
                  )
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-red-900 text-white hover:bg-red-800"
              )}
              onClick={() => onReserve(room.id)}
              disabled={
                totalGuests > room.maxGuests ||
                !Object.keys(selectedRooms[room.id] || {}).some(
                  (key) => (selectedRooms[room.id] || {})[key] > 0
                )
              }
            >
              Reserve
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomCard;
