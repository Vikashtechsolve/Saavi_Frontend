import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { content } from "@/lib/content";

export default function Booking() {
  return (
    <div className="pt-24 mb-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Book Your Stay</h1>
        
        <form className="bg-white p-8 rounded-lg shadow-md">
          <div className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="hotel">Select Hotel</Label>
              <select
                id="hotel"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Select a hotel</option>
                {content.hotels.map((hotel) => (
                  <option key={hotel.id} value={hotel.id}>
                    {hotel.name} - {hotel.location}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="checkin">Check-in Date</Label>
              <Input type="date" id="checkin" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="checkout">Check-out Date</Label>
              <Input type="date" id="checkout" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="guests">Number of Guests</Label>
              <Input type="number" id="guests" min="1" placeholder="Enter number of guests" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input type="text" id="name" placeholder="Enter your full name" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Enter your email" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input type="tel" id="phone" placeholder="Enter your phone number" />
            </div>

            <Button type="submit" size="lg">
              Book Now
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}