import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';
import { Search, ChevronDown, Plus, Minus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BG from '../../public/assets/HomeImage3.png';

// interface BookingFormData {
//   destination: string;
//   checkIn: string;
//   checkOut: string;
//   adults: number;
//   children: number;
//   rooms: string;
// }

export default function BookingSearchForm() {
  const [destination, setDestination] = useState('');
  const [isDestinationOpen, setIsDestinationOpen] = useState(false);
  const [rooms, setRooms] = useState('1');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [isGuestsOpen, setIsGuestsOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const destinations = ['Gurugram', 'Shimla', 'Manali', 'Rishikesh'];
  const destinationRef = useRef<HTMLDivElement>(null);
  const guestsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (destinationRef.current && !destinationRef.current.contains(event.target as Node)) {
        setIsDestinationOpen(false);
      }
      if (guestsRef.current && !guestsRef.current.contains(event.target as Node)) {
        setIsGuestsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const maxAdults = parseInt(rooms) * 3;
    const maxChildren = parseInt(rooms) * 1;

    if (adults > maxAdults) setAdults(maxAdults);
    if (children > maxChildren) setChildren(maxChildren);
  }, [rooms]);

  const validateInputs = () => {
    const newErrors: Record<string, string> = {};

    if (!destination) newErrors.destination = 'Destination is required.';
    if (!checkIn) newErrors.checkIn = 'Check-in date is required.';
    if (!checkOut) newErrors.checkOut = 'Check-out date is required.';
    if (checkIn && checkOut && checkOut <= checkIn) newErrors.checkOut = 'Check-out date must be after check-in date.';
    if (!rooms) newErrors.rooms = 'Select at least one room.';
    if (adults + children === 0) newErrors.guests = 'At least one guest is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateInputs()) {
      navigate(`/hotels?destination=${encodeURIComponent(destination)}`);
    }
  };

  const updateGuests = (type: 'adult' | 'child', operation: 'increment' | 'decrement') => {
    const maxAdults = parseInt(rooms) * 3;
    const maxChildren = parseInt(rooms) * 1;

    if (type === 'adult') {
      if (operation === 'increment' && adults < maxAdults) setAdults(adults + 1);
      if (operation === 'decrement' && adults > 1) setAdults(adults - 1);
    } else {
      if (operation === 'increment' && children < maxChildren) setChildren(children + 1);
      if (operation === 'decrement' && children > 0) setChildren(children - 1);
    }
  };

  return (
    <motion.div
      className="relative text-center  px-4 w-full"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } },
      }}

      style={{
        backgroundImage:BG , // Path to your image
        backgroundSize: 'cover', // Ensures the image covers the area
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat', // Prevents repeating the image
      }}
    >
      <div className="w-[350px] relative z-50" >
        <form 
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-2xl p-4 sm:space-y-4 border border-2 border-red-900"
        >
          <div className="grid sm:grid-cols-4 gap-4">
            {/* Row 1: Destination (Mobile) */}
            <div className="sm:hidden mb-4">
              <div className="relative" ref={destinationRef}>
              <label className="block text-xs font-medium text-gray-700 text-left mb-1">
              Destination
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <div
                    onClick={() => setIsDestinationOpen(!isDestinationOpen)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg cursor-pointer flex items-center justify-between"
                  >
                    <span className={destination ? 'text-gray-900' : 'text-gray-500'}>
                      {destination || 'Location'}
                    </span>
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  </div>
                  {isDestinationOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-48 overflow-y-auto">
                      {destinations.map((dest) => (
                        <div
                          key={dest}
                          className="px-3 py-2 text-sm text-gray-700 hover:bg-red-50 cursor-pointer text-left"
                          onClick={() => {
                            setDestination(dest);
                            setIsDestinationOpen(false);
                          }}
                        >
                          {dest}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {errors.destination && <p className="text-red-500 text-xs mt-1">{errors.destination}</p>}
              </div>
            </div>

            {/* Row 2: Check-in and Check-out (Mobile) */}
            <div className="sm:hidden mb-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <label className="block text-xs font-medium text-gray-700 text-left mb-2">
                    Check-in
                  </label>
                  <div className="relative">
                    {/* <Calendar className="absolute text-sm left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" /> */}
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full pl-2  py-3 border border-gray-300 rounded-lg bg-white text-gray-500 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  {errors.checkIn && <p className="text-red-500 text-sm mt-1">{errors.checkIn}</p>}
                </div>

                <div className="relative">
                  <label className="block text-xs font-medium text-gray-700 text-left mb-2">
                    Check-out
                  </label>
                  <div className="relative">
                    {/* <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" /> */}
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      min={checkIn || new Date().toISOString().split('T')[0]}
                      className="w-full pl-2 py-3 border border-gray-300 rounded-lg bg-white text-gray-500 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  {errors.checkOut && <p className="text-red-500 text-sm mt-1">{errors.checkOut}</p>}
                </div>
              </div>
            </div>

            {/* Row 3: Rooms, Guests, and Button (Mobile) */}
            <div className="sm:hidden">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="relative">
                  <label className="block text-xs font-medium text-gray-700 text-left mb-2">
                    Rooms
                  </label>
                  <div className="relative">
                    {/* <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" /> */}
                    <select
                      value={rooms}
                      onChange={(e) => setRooms(e.target.value)}
                      className="w-full pl-2 pr-4 py-3 border text-gray-900 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 appearance-none bg-white"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Room' : 'Rooms'}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
                  </div>
                  {errors.rooms && <p className="text-red-500 text-sm mt-1">{errors.rooms}</p>}
                </div>

                <div className="relative" ref={guestsRef}>
                  <label className="block text-xs font-medium text-gray-700 text-left mb-2">
                    Guests
                  </label>
                  <div className="relative">
                    {/* <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" /> */}
                    <div
                      onClick={() => setIsGuestsOpen(!isGuestsOpen)}
                      className="w-full pl-2 pr-4 py-3 border border-gray-300 rounded-lg cursor-pointer flex items-center justify-between"
                    >
                      <span className="text-gray-900">
                        {adults + children} Guest{adults + children !== 1 ? "s" : ""}
                      </span>
                      <ChevronDown className="h-4 w-4 text-gray-400" />
                    </div>
                    {isGuestsOpen && (
                      <div className="absolute top-full left-0 mt-1 -ml-20 bg-white  border border-gray-200 rounded-lg shadow-lg z-50 p-4 w-100">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-700 font-medium">Adults</span>
                            <div className="flex items-center space-x-3">
                              <button
                                type="button"
                                onClick={() => updateGuests("adult", "decrement")}
                                className="p-2 rounded-full bg-white hover:bg-gray-100 border border-gray-300"
                              >
                                <Minus className="h-4 w-4 text-red-600 " />
                              </button>
                              <span className="w-10 text-center text-gray-700 font-medium">{adults}</span>
                              <button
                                type="button"
                                onClick={() => updateGuests("adult", "increment")}
                                className="p-2 rounded-full bg-white hover:bg-gray-100 border border-gray-300"
                              >
                                <Plus className="h-4 w-4 text-red-600" />
                              </button>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-700 font-medium">Children</span>
                            <div className="flex items-center space-x-3">
                              <button
                                type="button"
                                onClick={() => updateGuests("child", "decrement")}
                                className="p-2 rounded-full bg-white hover:bg-gray-100 border border-gray-300"
                              >
                                <Minus className="h-4 w-4 text-red-600" />
                              </button>
                              <span className="w-10 text-center text-gray-700 font-medium">{children}</span>
                              <button
                                type="button"
                                onClick={() => updateGuests("child", "increment")}
                                className="p-2 rounded-full bg-white hover:bg-gray-100 border border-gray-300"
                              >
                                <Plus className="h-4 w-4 text-red-600" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  {errors.guests && <p className="text-red-500 text-sm mt-1">{errors.guests}</p>}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-red-800 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
              >
                Book Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </motion.div>
  );
}