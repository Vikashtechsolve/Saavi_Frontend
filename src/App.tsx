import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
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
import BookingPage from './pages/bookingSuccess';
import ReactWhatsapp from 'react-whatsapp';

function App() {
  return (
    <HelmetProvider>
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
            <Route path="/successfulBooking/:bookingId" element={<BookingPage />} />
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
        <ReactWhatsapp
      number="+91 7290006773"
      message="Hi there!"
      element="button"
      style={{
        position: 'fixed',
        padding:'0px',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
        color: '#fff',
        border: 'none',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        cursor: 'pointer',
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        zIndex: 1000,
      }}
    >
      <img
              src="/assets/whatsapp.png"
              alt={"whatsapp image"}
              className=" bg-cover w-fit h-fit p-3"
            />
        </ReactWhatsapp>
        <Footer />
      </div>
      <Analytics />
    </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
