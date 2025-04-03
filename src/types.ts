export interface Hotel {
    id: string;
    name: string;
    location: string;
    price: number;
    rating: number;
    locationUrl : string,
    bookingEngine: string;
    description: string;
    images: string[];
    amenities: string[];
  }
  
  export interface BookingFormData {
    checkIn: string;
    checkOut: string;
    guests: number;
    rooms: number;
  }