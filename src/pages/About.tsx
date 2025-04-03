import React, { useEffect, useState } from "react";
import {  useLocation } from "react-router-dom";
import SaaviInfo from "@/components/aboutus/saaviInfo";
import ValuesAndMissionPage from "@/components/aboutus/valuesandmission";
import CoreValues from "@/components/aboutus/corevalues";
import WhyChooseSaavi from "@/components/aboutus/whysaavi";
import OurTeam from "@/components/aboutus/ourteam";
const AboutUs: React.FC = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState<string>("Our Company");

  const pages = [
    { name: "Vision & Mission", hash: "#vision-mission" },
    { name: 'Our Company', hash: '#company' },
    { name: "Core Values", hash: "#values" },
    { name: "Our Team", hash: "#team" },
    { name: "Why Saavi?", hash: "#why-saavi" },
  ];

  useEffect(() => {
    const hash = location.hash;
    const matchedPage = pages.find((page) => page.hash === hash);
    if (matchedPage) {
      setActivePage(matchedPage.name);
    }
  }, [location.hash]);

  const renderContent = () => {
    switch (activePage) {
      case "Our Company":
        return (
          <div>
            <SaaviInfo />
          </div>
        );
      case "Vision & Mission":
        return (
          <ValuesAndMissionPage />
        );
      case "Core Values":
        return (
          <CoreValues />
        );
      case "Our Team":
        return <OurTeam />
      case "Why Saavi?":
        return (
          <WhyChooseSaavi />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      {/* <section className="relative flex items-center">
        <div className="absolute inset-0">
          <img
            src={background_Image1}
            alt="Luxury Hotel"
            className="w-full h-full object-cover"
            style={{
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              opacity: 1,
              filter: 'contrast(1.2) brightness(0.4)',
              backgroundColor: 'rgba(0,0,0,0.7)'
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 text-center text-white ">
          <div className="mt-20 hidden sm:flex sm:flex-row justify-between items-center space-y-6 sm:space-x-4 sm:space-y-0 bg-opacity-0 p-8 rounded-lg">
            <div className="flex flex-col w-full sm:w-64">

              <input
                type="text"
                id="destination"
                placeholder="Enter destination"
                className="p-3 border rounded-md text-gray-700 shadow-sm focus:ring-2 focus:ring-primary focus:outline-none bg-white placeholder-gray-700"
              />
            </div>

            <div className="flex flex-col w-full sm:w-64">
              <input
                type="text"
                id="arrival-date"
                placeholder="Checking in"
                className="p-3 border rounded-md text-gray-700 shadow-sm focus:ring-2 focus:ring-primary focus:outline-none bg-white placeholder-gray-700"
              />
            </div>

            <div className="flex flex-col w-full sm:w-64">

              <input
                type="text"
                id="departure-date"
                placeholder="Check out"
                className="p-3 border rounded-md text-gray-700 shadow-sm focus:ring-2 focus:ring-primary focus:outline-none bg-white placeholder-gray-700"
              />
            </div>

            <div className="flex flex-col w-full sm:w-64 lg:w-32">

              <input
                type="text"
                id="guest"
                placeholder="No. of guests"
                className="p-3 border rounded-md text-gray-700 shadow-sm focus:ring-2 focus:ring-primary focus:outline-none bg-white placeholder-gray-700"
              />
            </div>

            <div className="flexflex-col sm:items-end w-full sm:w-auto mt-10 sm:mt-0">
              <button className="text-white transition-colors w-full sm:w-auto">
                Search
              </button>
            </div>
          </div>
          <Link to="/booking">
            <Button size="lg" className=" mb-20 animate-fade-up animate-delay-400 transform hover:scale-105 mt-4 sm:mt-0">
              Book Your Stay Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>

        </div>

      </section> */}
      <div className=" mx-auto px-4 py-8">
        <div className="content p-6">{renderContent()}</div>
      </div>
    </div>
  );
};

export default AboutUs;

