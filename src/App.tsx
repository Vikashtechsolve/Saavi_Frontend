import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Hotels from '@/pages/Hotels';
import Booking from '@/pages/Booking';
import Events from '@/pages/Events';
import Gallery from '@/pages/Gallery';
import Promotions from '@/pages/Promotions';
import Career from '@/pages/careers'
import Contact from '@/pages/Contact';
import BanqAndEvents from '@/pages/banqAndEvents';
import HotelDetail from '@/pages/HotelDescription';
import ImportantLinks from '@/pages/ImportantLinks';
import ExplorePage from '@/pages/Explore';
import { Analytics } from '@vercel/analytics/react';
import ScrollToTop from './lib/scroolToTop';
import CustomBookingEnginePage from '@/pages/CustomBookingEnginePage';
function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="hotel-theme">
    <ScrollToTop />
      <div className="min-h-screen flex flex-col w-full">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/promotions" element={<Promotions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/banqAndEvents" element={<BanqAndEvents />} />
            <Route path="/careers" element={<Career />} />
            <Route path="/hotelDesc/:hotelId" element={<HotelDetail />} />
            <Route path="/links" element={<ImportantLinks />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/custom-booking-engine" element={<CustomBookingEnginePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Analytics />
    </ThemeProvider>
  );
}

export default App;
