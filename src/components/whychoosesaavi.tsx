// import React from "react";
import Card1 from "../../public/assets/whyChooseSaaviCard1.png";
import Card2 from "../../public/assets/whyChooseSaaviCard2.png";
import Card3 from "../../public/assets/whyChooseSaaviCard3.png";
import background_Image from "../../public/assets/whyChooseSaaviBackground.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function WhyChooseSaavi() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      title: "Personalized Service",
      description:
        "Our dedicated staff is committed to providing personalized service, ensuring your stay is comfortable and enjoyable.",
      imgSrc: Card1,
    },
    {
      title: "Pristine Cleanliness",
      description:
        "We prioritize cleanliness and hygiene, maintaining the highest standards of sanitation.",
      imgSrc: Card2,
    },
    {
      title: "Food",
      description:"Indulge in our exquisite culinary offerings, designed to provide the ultimate dining experience and satisfaction." ,    
       imgSrc: Card3,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
    hover: {
      y: -12,
      scale: 1.03,
      transition: {
        type: "spring",
        bounce: 0.4,
      },
    },
  };

  return (
    <div className="relative text-center text-black mt-6" ref={ref}>
      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-4xl font-serif font-bold mb-2 text-[#8B2B06]">
          Why Choose Saavi?
        </h1>
        <p className="text-base sm:text-lg mb-20 font-serif text-[#8B2B06]">
          Luxurious accommodations, world-class service, and prime locations.
        </p>
      </motion.header>

      {/* Features Section */}
      <div className="relative pb-12 z-10">
        <motion.div 
          className="flex flex-wrap justify-center gap-12 sm:gap-16 px-5"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-lg shadow-[0px_-10px_0px_#8b2b06] w-full sm:w-1/3 lg:w-1/4 p-5 text-center"
              variants={cardVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <motion.img
                src={feature.imgSrc}
                alt={feature.title}
                className="w-full rounded-lg mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
              <h2 className="text-[#8B2B06] text-lg font-semibold mb-2">
                {feature.title}
              </h2>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Background Image */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-48 bg-center bg-cover -z-10"
          style={{ backgroundImage: `url(${background_Image})` }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { 
            opacity: [0, 0.3, 1],
            y: [20, 0],
          } : { opacity: 0, y: 20 }}
          transition={{ 
            duration: 1.2,
            times: [0, 0.5, 1],
            ease: "easeOut",
          }}
          whileInView={{
            backgroundPosition: ["50% 50%", "50% 40%"],
          }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
}

export default WhyChooseSaavi;
