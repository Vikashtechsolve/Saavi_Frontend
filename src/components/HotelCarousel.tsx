import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function HotelCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [hotels, setHotels] = useState<any[]>([]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (carouselRef.current) {
  //       // Simulate a click on the "next" button to auto-scroll
  //       const nextButton = carouselRef.current.querySelector(".carousel-next");
  //       if (nextButton) {
  //         (nextButton as HTMLElement).click();
  //       }
  //     }
  //   }, 2000); // Change slide every 2 seconds

  //   return () => clearInterval(interval); // Clear interval on unmount
  // }, []);

  const fetchHotels = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/hotels`, {
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
    <Carousel
      ref={carouselRef}
      opts={{
        align: "start",
        loop: true,
      }}
      className="max-w-8xl h-full mx-auto"
    >
      {hotels?.length > 0 ? (
      <CarouselContent>
        {hotels?.map((hotel) => (
          <CarouselItem
            key={hotel?.id}
            className="sm:basis-1/2 h-full md:basis-1/3 lg:basis-1/4"
          >
            <motion.div
              className="p-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden group h-150">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={hotel.homeImageUrl[0]}
                      alt={hotel.name}
                      className="w-full h-[300px] object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <motion.div
                    className="p-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-xl font-semibold mb-2">{hotel.name}</h3>
                    <p className="text-muted-foreground mb-2">
                      {hotel.address}
                    </p>
                    <p className="text-sm mb-4"


                      dangerouslySetInnerHTML={{
                        __html: hotel.homeDescription,
                      }}
                    />
                    <div className="flex justify-end">
                      <Link to={`/hotelDesc/${hotel.id}`}>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button className="text-lg bg-[#8B2B06] hover:bg-[#8B2B06]">
                            Book Now
                          </Button>
                        </motion.div>
                      </Link>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </CarouselItem>
        ))}
        </CarouselContent>
      ) : (
        <div className="flex justify-center items-center h-full">
          No hotels found
        </div>
      )}
      <motion.div
        className="flex justify-center gap-4 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <CarouselPrevious className="carousel-previous relative bg-[#8B2B06] !static" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <CarouselNext className="carousel-next relative bg-[#8B2B06] !static" />
        </motion.div>
      </motion.div>
    </Carousel>
  );
}
