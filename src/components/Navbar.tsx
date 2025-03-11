import { Link } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { content } from "@/lib/content";
import logo from "../../public/assets/saavi_logo.jpeg";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownClick = (dropdownName: any) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const handleOptionClick = () => {
    setOpenDropdown(null); // Close dropdown when an option is clicked
  };

  const [hotels, setHotels] = useState<any[]>([]);

  const fetchHotels = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/hotels?limit=6`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
    });
    const data = await response.json();
    setHotels(data);
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  return (
    <header className="z-50 bg-white w-full backdrop-blur-sm shadow-sm">
      {/* Top bar with contact info */}
      <div className="bg-[#8B2B06] text-white p-2 text-sm px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-y-2">
          {/* Contact Info */}
          <p className="flex items-center gap-2 text-xs sm:text-sm whitespace-nowrap overflow-x-auto">
            <FaPhoneAlt className="text-base" />
            <span>9999575044, 7290006773</span>
            <span className="flex items-center gap-1">
              <FaEnvelope className="text-base" />
              <span>sales@saavigroups.com</span>
            </span>
          </p>
          <div className="items-center justify-between flex flex-col sm:flex-row gap-4">
            {/* Social Media Icons */}
            <div className="flex items-center gap-4 sm:gap-6 whitespace-nowrap overflow-x-auto">
              <a
                href="https://www.facebook.com/profile.php?id=61565142656404"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors text-white"
              >
                <i className="fab fa-facebook-f text-base"></i>
              </a>
              <a
                href="https://www.instagram.com/saavihotels?igsh=and4OXdkMTJoNWcx"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors text-white"
              >
                <i className="fab fa-instagram text-base"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/96062794/admin/dashboard/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors text-white"
              >
                <i className="fab fa-linkedin-in text-base"></i>
              </a>
              <a
                href="https://www.youtube.com/@SaaviHotelsAndResorts"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors text-white"
              >
                <i className="fab fa-youtube text-base"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-6"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <div className="flex flex-col items-center">
              <img
                src={logo}
                alt="Saavi logo"
                className="w-[130px] h-30 object-cover rounded-md"
              />
            </div>
            <span className="text-sm font-bold text-gray-700 tracking-wide uppercase font-sans">
              A Comfortable stay
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between gap-4">
          <Link
            to="/"
            className="text-sm font-semibold text-gray-900 py-2 pr-4 hover:text-primary transition-colors"
          >
            Home
          </Link>

          {/* Our Hotels Dropdown */}
          <DropdownMenu
            open={openDropdown === "hotels"}
            onOpenChange={() => handleDropdownClick("hotels")}
          >
            <DropdownMenuTrigger className="flex items-center gap-1 border-0 text-sm bg-white font-semibold text-black outline-none focus:outline-none hover:border-0">
              Our Hotels <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[800px] grid grid-cols-2 gap-4 p-4 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              {hotels.map((hotel) => (
                <DropdownMenuItem
                  key={hotel.id}
                  className="p-0 focus:bg-transparent"
                >
                  <Link
                    to={`/hotelDesc/${hotel.id}`}
                    className="flex items-center gap-4 w-full p-2 rounded-md hover:bg-gray-100 transition-colors"
                    onClick={handleOptionClick}
                  >
                    <img
                      src={hotel.homeImageUrl[0]}
                      alt={hotel.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div>
                      <h3 className="font-semibold">{hotel.name}</h3>
                      <p className="text-sm text-gray-600">{hotel.address}</p>
                    </div>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* About Us Dropdown */}
          <DropdownMenu
            open={openDropdown === "about"}
            onOpenChange={() => handleDropdownClick("about")}
          >
            <DropdownMenuTrigger className="flex items-center gap-1 border-0 text-sm bg-white font-semibold text-black outline-none focus:outline-none hover:border-0">
              About Us <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[250px] p-2 bg-white text-black rounded-md shadow-md">
              {[
                { name: "Our Company", href: "/about#company" },
                { name: "Vision & Mission", href: "/about#vision-mission" },
                { name: "Core Values", href: "/about#values" },
                { name: "Our Team", href: "/about#team" },
                { name: "Why Saavi?", href: "/about#why-saavi" },
              ].map((item) => (
                <DropdownMenuItem
                  key={item.name}
                  className="p-2 hover:bg-gray-100 rounded-md focus:outline-none focus:bg-transparent"
                >
                  <Link
                    to={item.href}
                    className="w-full text-black hover:text-red-700"
                    onClick={handleOptionClick}
                  >
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Regular Navigation Links */}
          <Link
            to="/gallery"
            className="text-sm font-semibold text-gray-900 py-2 pl-4 pr-6 hover:text-primary transition-colors"
          >
            Gallery
          </Link>

          <Link
            to="/promotions"
            className="text-sm font-semibold text-gray-900 py-2 pl-4 pr-6 hover:text-primary transition-colors"
          >
            Promotions
          </Link>

          <Link
            to="/contact"
            className="text-sm font-semibold text-gray-900 py-2 pl-4 pr-6 hover:text-primary transition-colors"
          >
            Contact Us
          </Link>

          {/* More Menu Dropdown */}
          <DropdownMenu
            open={openDropdown === "more"}
            onOpenChange={() => handleDropdownClick("more")}
          >
            <DropdownMenuTrigger className="flex items-center gap-1 border-0 text-sm bg-white font-semibold text-black outline-none focus:outline-none hover:border-0">
              <Menu className="h-6 w-6" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[250px] bg-white p-2">
              {[
                { name: "Careers", href: "/careers" },
                { name: "Banquet & Events", href: "/banqAndEvents" },
              ].map((item) => (
                <DropdownMenuItem
                  key={item.name}
                  className="p-0 focus:bg-transparent"
                >
                  <Link
                    to={item.href}
                    className="w-full p-2 text-black hover:text-red-700 transition-colors"
                    onClick={handleOptionClick}
                  >
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Navigation - Hamburger Menu */}
        <div className="lg:hidden flex items-center">
          <button
            className="p-2"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6 text-black" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white p-4">
          <div className="flex flex-col items-center gap-4">
            <Link
              to="/"
              className="text-sm font-semibold text-gray-900 py-2 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            <DropdownMenu
              open={openDropdown === "mobile-hotels"}
              onOpenChange={() => handleDropdownClick("mobile-hotels")}
            >
              <DropdownMenuTrigger className="flex items-center gap-1 border-0 text-sm bg-white font-semibold text-black outline-none focus:outline-none hover:border-0">
                Our Hotels <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full p-2 bg-white">
                {content.hotels.map((hotel) => (
                  <DropdownMenuItem
                    key={hotel.id}
                    className="p-0 focus:bg-transparent"
                  >
                    <Link
                      to={`/hotelDesc/${hotel.id}`}
                      className="w-full p-2 hover:text-primary transition-colors"
                      onClick={() => {
                        handleOptionClick();
                        setMobileMenuOpen(false);
                      }}
                    >
                      {hotel.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu
              open={openDropdown === "mobile-about"}
              onOpenChange={() => handleDropdownClick("mobile-about")}
            >
              <DropdownMenuTrigger className="flex items-center gap-1 border-0 text-sm bg-white font-semibold text-black outline-none focus:outline-none hover:border-0">
                About Us <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full p-2 bg-white">
                {[
                  { name: "Our Company", href: "/about#company" },
                  { name: "Vision & Mission", href: "/about#vision-mission" },
                  { name: "Core Values", href: "/about#values" },
                  { name: "Our Team", href: "/about#team" },
                  { name: "Why Saavi?", href: "/about#why-saavi" },
                ].map((item) => (
                  <DropdownMenuItem
                    key={item.name}
                    className="p-0 focus:bg-transparent"
                  >
                    <Link
                      to={item.href}
                      className="w-full p-2 hover:text-primary transition-colors"
                      onClick={() => {
                        handleOptionClick();
                        setMobileMenuOpen(false);
                      }}
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/gallery"
              className="text-sm font-semibold text-gray-900 py-2 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </Link>

            <Link
              to="/promotions"
              className="text-sm font-semibold text-gray-900 py-2 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Promotions
            </Link>

            <Link
              to="/contact"
              className="text-sm font-semibold text-gray-900 py-2 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>

            <DropdownMenu
              open={openDropdown === "mobile-more"}
              onOpenChange={() => handleDropdownClick("mobile-more")}
            >
              <DropdownMenuTrigger className="flex items-center gap-1 border-0 text-sm bg-white font-semibold text-black outline-none focus:outline-none hover:border-0">
                <Menu className="h-6 w-6" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[250px] p-2 bg-white">
                {[
                  { name: "Careers", href: "/careers" },
                  { name: "Banquet & Events", href: "/banqAndEvents" },
                ].map((item) => (
                  <DropdownMenuItem
                    key={item.name}
                    className="p-0 focus:bg-transparent"
                  >
                    <Link
                      to={item.href}
                      className="w-full p-2 hover:text-primary transition-colors"
                      onClick={() => {
                        handleOptionClick();
                        setMobileMenuOpen(false);
                      }}
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      )}
    </header>
  );
}
