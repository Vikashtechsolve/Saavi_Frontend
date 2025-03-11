
import Card1 from "../../public/assets/hands.png";
import Frame from "../../public/assets/guestBackground.png";
import Card2 from "../../public/assets/building.png";
import Card3 from "../../public/assets/suite.png";
import { useEffect, useState } from "react";


const SaaviCards = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Card data with titles, descriptions, links, and images
  const cards = [
    {
      title: "Join the Saavi Family",
      description: "Partner with us to bring luxury hospitality to new heights.",
      link: "Partner with Saavi",
      image: Card1,
    },
    {
      title: "Elevate Your Corporate Events",
      description:
        "Experience world-class hospitality for your business events and meetings.",
      link: "Get in touch",
      image: Card2,
    },
    {
      title: "Join Our Team",
      description: "Be part of a team that's redefining luxury hospitality.",
      link: "Join us",
      image: Card3,
    },
  ];

  return (
    <div className="flex flex-col items-center w-full mt-8 ">
      {/* Cards Container */}
      <div
        className={`flex flex-wrap gap-20 justify-center ${
          windowWidth < 768 ? "flex-col" : "flex-row"
        }`}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-between bg-white rounded-2xl border border-gray-300 shadow-md p-6 w-full sm:w-80 md:w-96 max-w-xs min-h-[330px] overflow-hidden"
          >
            <h2 className="text-[#8B2B06] text-xl font-semibold mb-4 mt-2">
              {card.title}
            </h2>
            <p className="text-gray-700 text-sm flex-grow">{card.description}</p>
            <a
              href="/contact"
              className="text-gray-500 underline mt-4 text-sm"
            >
              {card.link}
            </a>
            <img
              src={card.image}
              alt={card.title}
              className="absolute bottom-4 right-4 w-32 h-auto object-cover"
            />
          </div>
        ))}
      </div>

      {/* Rectangle Container Below Cards */}
      <div
        className="relative w-full h-32 bg-cover bg-center rounded-lg mt-10"
        style={{ backgroundImage: `url(${Frame})` }}
      >
        <div className="absolute inset-0 bg-[#8b2b06] opacity-80"></div>
      </div>
    </div>
  );
};

export default SaaviCards;
