// import React from "react";
import HotelCarousel from "@/components/HotelCarousel";
import { ArrowRight } from "lucide-react";
import { content } from "@/lib/content";
import { images } from "../../public/assets/export";
import { useEffect, useState, useRef } from "react";
import { useInView } from 'react-intersection-observer'; // Import Intersection Observer hook
import WhyChooseSaavi from "@/components/whychoosesaavi";
import PerfectGateway from "@/components/perfectgateway";
// import background_Image2 from "../../public/assets/backgroundImage2.png";
import background_Image1 from "../../public/assets/backgroundImage1.png";
import Experience from "../components/experience";
import Testimonial from "@/components/testimonial";
import SaaviCards from "@/components/saaviCards";
import homeImage1 from "../../public/assets/homeImage1.png";
import homeImage2 from "../../public/assets/homeImage2.png";
import homeImage3 from "../../public/assets/HomeImage3.png";
import BookingSearchForm from "@/components/mobileHomeForm";
import S4 from '../../public/assets/s4.jpg';


import { useNavigate } from "react-router-dom";


import "react-datepicker/dist/react-datepicker.css";


import HomeForm from "@/components/homeForm";


// import SearchFrom from "@/components/searchform";


import { motion, useScroll, useTransform } from "framer-motion";
import { ParallaxProvider } from 'react-scroll-parallax';


function Facilities({ }) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });


  // const x = useTransform(
  //   scrollYProgress,
  //   [0, 1],
  //   ["0%", `-${(content.facilities.length - 3) * 33.33}%`]
  // );


  // Transform values for scroll-based animations
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-110%"]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  // const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);


  return (
    <section className="md:relative md:h-[300vh]">
      {/* Mobile View - Simple vertical scroll */}
      <div className="block md:hidden bg-gradient-to-b from-white via-[#8B2B06] to-white min-h-screen">
        <h2 className="text-2xl font-bold text-center font-serif text-[#8B2B06] pt-8 mb-6">
          Our Facilities
        </h2>

        <div className="px-4 pb-8 space-y-6">
          {content.facilities.map((facility, index) => (
            <div key={index} className="rounded-lg shadow-xl overflow-hidden">
              <div className="relative h-[40vh]">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold mb-2 text-white">{facility.title}</h3>
                  <p className="text-sm text-white">{facility.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Desktop View with Framer Motion */}
      <motion.div
        ref={targetRef}
        className="hidden md:block relative h-[300vh]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        mr-20
      >
        <div className="sticky top-0 h-screen overflow-hidden bg-gradient-to-b from-white via-[#8B2B06] to-white">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
            <div className="absolute inset-0" style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23991b1b\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
              backgroundSize: '30px 30px'
            }} />
          </div>


          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Large floating circles */}
            <motion.div
              className="absolute top-20 left-[10%] w-32 h-32 rounded-full bg-gradient-to-br from-[#8B2B06] to-red-100/40 backdrop-blur-sm"
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
              }}
              style={{ rotate }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-40 right-[15%] w-24 h-24 rounded-full bg-gradient-to-tr from-[#8B2B06] to-red-200/30 backdrop-blur-sm"
              animate={{
                y: [0, 20, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />


            {/* Scroll-responsive elements */}
            <motion.div
              className="absolute top-1/4 left-[5%] w-40 h-40"
              style={{ y, rotate }}
            >
              <div className="w-full h-full border-3 border-[#8B2B06] rounded-full shadow-lg" />
              <div className="absolute inset-4 border-3 border-[#8B2B06] rounded-full shadow-lg" />
            </motion.div>


            {/* Floating dots */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-[#8B2B06]/40 to-[#8B2B06]/40 rounded-full shadow-lg"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>


          <motion.h2
            className="relative text-3xl font-bold text-center font-serif text-[#8B2B06] pt-12 mb-8"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Our Facilities
          </motion.h2>


          <motion.div
            className="flex gap-16 px-[10vw]"
            style={{ x }}
          >
            {content.facilities.map((facility, index) => (
              <motion.div
                key={index}
                className="w-[35vw] flex-shrink-0 group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: "easeOut"
                }}
              >
                <div className="relative h-[65vh] rounded-xl shadow-xl overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{facility.title}</h3>
                    <p className="text-sm transform transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                      {facility.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>


          <motion.div
            className="absolute bottom-8 left-[15vw] right-[15vw] h-1 bg-[#8B2B06] rounded-full"
            style={{ scaleX: scrollYProgress }}
          />
        </div>
      </motion.div>
    </section>
  );
}


function OurStory() {
  const storyRef = useRef<HTMLElement>(null);
  const { ref: inViewRef } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });


  const handleClick = () => {
    navigate('/about#company');
  };
  // Merge refs
  useEffect(() => {
    if (storyRef.current) {
      inViewRef(storyRef.current);
    }
  }, [inViewRef]);


  const { scrollYProgress } = useScroll({
    target: storyRef,
    offset: ["start end", "end start"]
  });


  // Parallax effect for background
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const navigate = useNavigate();




  return (
    <motion.section
      ref={storyRef}
      className="py-32 relative overflow-hidden bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Background Elements Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blurred background */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{ y: backgroundY }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            style={{
              backgroundImage: `url(${images.Image_3})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              filter: "blur(10px)"
            }}
          />
        </motion.div>


        {/* Floating circles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 border border-red-200/20 rounded-full -z-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>


      {/* Content Layer */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        style={{ y: contentY }}
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col justify-center text-left">
            {/* <motion.div
             initial={{ width: 0 }}
             whileInView={{ width: "40%" }}
             transition={{ duration: 1, ease: "easeOut" }}
             className="h-1 bg-red-700 mb-8"
           /> */}


            <motion.h2
              className="text-4xl font-serif font-bold mb-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Story
            </motion.h2>


            {/* Rest of the content */}
            <motion.h3 className="text-2xl font-serif font-semibold text-[#8B2B06] mb-8">
              A Legacy of Luxury
            </motion.h3>


            {/* Update text content with establishment year in the first paragraph */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.2 }
                }
              }}
            >
              {[
                { text: "<span class='font-bold text-[#8B2B06]'>SAAVI HOTELS</span>, established in 2019, has been redefining the hospitality industry with luxury and comfort." },
                { text: "Our journey began with a vision to create world-class accommodations that cater to the diverse needs of our guests." },
                { text: "We pride ourselves on offering exceptional hospitality, from the moment you step into our lobby to the time you check out." }
              ].map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="text-base text-gray-600 mb-6 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: paragraph.text }}


                />
              ))}
            </motion.div>


            {/* Enhanced button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                className="flex items-center bg-[#8B2B06] text-white px-6 py-3 rounded-lg group relative overflow-hidden"
                whileHover="hover"
                onClick={handleClick}
              >
                <motion.span
                  className="relative z-10 flex items-center"
                  variants={{
                    hover: {
                      x: [0, 5]
                    }
                  }}
                >




                  Learn More




                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-[#8B2B06]"
                  variants={{
                    hover: {
                      x: ["100%", "0%"]
                    }
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
          </div>


          {/* Enhanced image section */}
          <div className="relative">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Background decorative elements */}
              <div className="absolute -inset-8 -z-10">
                <motion.div
                  className="absolute -right-12 -top-12 w-64 h-64 border-2 border-[#8B2B06]/40"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute -left-8 -bottom-8 w-48 h-48 border-2 border-[#8B2B06]/30 rounded-full"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, -360]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>


              {/* Main image with diagonal accents */}
              <div className="relative p-4">
                <motion.div
                  className="relative rounded-lg overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={images.Image_3}
                    alt="Our Story"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </motion.div>


                {/* Enhanced corner accents */}
                <div className="absolute -top-2 -right-2 w-16 h-16 border-t-4 border-r-4 border-[#8B2B06]/30" />
                <div className="absolute -bottom-2 -left-2 w-16 h-16 border-b-4 border-l-4 border-[#8B2B06]/30" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}


export default function Home() {
  const [currentImage, setCurrentImage] = useState(homeImage1);
  // const [previousImage, setPreviousImage] = useState(homeImage1);
  const imageArray = [homeImage1, homeImage2, homeImage3];
  // const [text, setText] = useState("Where Every Stay Becomes a Memory");


  const textArray = [
    "",
  ];


  const quoteArray = [
    ""
  ];


  const [text, setText] = useState(textArray[0]); // Initial text
  const [currentQuote, setCurrentQuote] = useState(quoteArray[0]); // Initial quote


  //Where comfort feels luxurious
  //Luxury meets confortable at Saavi


  useEffect(() => {
    const interval = setInterval(() => {
      // setPreviousImage(currentImage);
      setCurrentImage((prevImage) => {
        const currentIndex = imageArray.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % imageArray.length;
        return imageArray[nextIndex];
      });


      setText((prevText) => {
        const currentTextIndex = textArray.indexOf(prevText);
        const nextTextIndex = (currentTextIndex + 1) % textArray.length;
        return textArray[nextTextIndex];
      });
      // Change quote
      setCurrentQuote((prevQuote) => {
        const currentQuoteIndex = quoteArray.indexOf(prevQuote);
        const nextQuoteIndex = (currentQuoteIndex + 1) % quoteArray.length;
        return quoteArray[nextQuoteIndex];
      });
    }, 7000); // Slightly longer duration for more comfortable viewing


    return () => clearInterval(interval);
  }, [currentImage]);


  // Smooth animation variants
  const imageVariants = {
    enter: {
      opacity: 0,
      scale: 1.05,
    },
    center: {
      zIndex: 1,
      opacity: 1,
      scale: 1,
    },
    exit: {
      zIndex: 0,
      opacity: 0,
      scale: 1.02,
    },
  };


  return (
    <ParallaxProvider>
      <div className="">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative h-[65vh] flex items-center justify-center overflow-hidden md:h-[84vh]"
        >
          <div className="bg-red"></div>
          {/* Background Image */}
          <motion.div
            key={currentImage}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              opacity: { duration: 1.2, ease: "easeInOut" },
              scale: { duration: 1.5, ease: "easeOut" },
            }}
            className="absolute inset-0 z-0 "
          >

            <img
              src={currentImage}
              alt="background-image"
              className="w-full h-full object-cover hidden md:block"
            />
            <img
              src={S4}
              alt="background-image"
              className="w-full h-full object-cover "
            />


            {/* Subtle Gradient Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"
            />
          </motion.div>
          <div>
            <div className="-mr-10 mt-15 ">
              <div className="relative z-10 text-center max-w-3xl pr-60">
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-white text-4xl font-sans md:text-5xl font-bold leading-tight"


                >
                  {text}


                </motion.h1>
                <div className="mt-10">
                  <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-white text-center text-xl font-semibold leading-relaxed"
                  >
                    {currentQuote}
                  </motion.p>
                </div>
              </div>
            </div>


            {/* Text Content */}


            <div className="lg:mt-15  ">
              <div className="relative z-50 w-full max-w-7xl mx-auto px-4 lg:px-8 flex flex-col items-center">
                {/* Desktop Form */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                  className="hidden lg:block w-full"
                >
                  <HomeForm />
                </motion.div>

                {/* Mobile Form */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                  className="lg:hidden w-full py-2"
                  
                >
                  <BookingSearchForm />
                </motion.div>
              </div>
            </div>
          </div>

          {/* <BookingSearchForm /> */}

          {/* Form Content */}


        </motion.section>


        {/* Hide HomeForm on mobile screens */}




        {/* Featured Hotels */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-20 bg-gray-50 w-full"
          style={{ backgroundImage: `url(${background_Image1})` }}
        >
          <div className="w-full px-0">
            <h2 className="text-3xl font-serif text-[#8B2B06] z-10 font-bold text-center mb-12 animate-slide-in-top">
              Experience Saavi Hospitality
            </h2>
            <div className="w-full">
              <HotelCarousel />
            </div>
          </div>
        </motion.section>


        <WhyChooseSaavi />


        {/* Our Facilities */}
        <Facilities />


        <div>
          {/* <OurStory /> */}
          {/* Our Story Section */}
          <OurStory />


          <PerfectGateway />


          <div >
            <Experience />
          </div>
          {/* <Guest /> */}
        </div>
        <Testimonial />
        <SaaviCards />
        {/* Upcoming Projects */}
        {/* <section className="py-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-bold text-center mb-12 animate-slide-in-bottom">
             Upcoming Projects
           </h2>
           <div className="grid md:grid-cols-2 gap-8">
             {content.upcomingProjects.map((project) => (
               <div key={project.id} className="group relative overflow-hidden rounded-lg">
                 <img
                   src={project.image}
                   alt={project.name}
                   className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <div className="text-white text-center p-4">
                     <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                     <p>Coming Soon - {project.openingDate}</p>
                   </div>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </section> */}


        {/* Features */}
        {/* <section className="py-20 bg-gray-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-3 gap-8 text-center">
             {content.features.map((feature, index) => (
               <div
                 key={index}
                 className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
               >
                 <Star className="h-12 w-12 mx-auto mb-4 text-primary" />
                 <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                 <p className="text-gray-600">{feature.description}</p>
               </div>
             ))}
           </div>
         </div>
       </section> */}
      </div>
    </ParallaxProvider>
  );
}
