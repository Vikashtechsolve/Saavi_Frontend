
import Profile1 from '../../public/assets/profile1.png';
import Marquee from 'react-fast-marquee';
import Background_image from '../../public/assets/guestBackground.png';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PUBLIC_KEY = "zNdQllj7Had9NmZc4"; // Replace with your EmailJS public key
const SERVICE_ID = "service_lhep98x"; // Replace with your EmailJS service ID
const TEMPLATE_ID = "template_a7nj9ff"; // Replace with your EmailJS template ID

const Guest = () => {
    const [activeIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            content:
                'Saavi Hotel Huda City Center exceeded all my expectations. The location was perfect.',
            author: 'Ms. Priya Desai',
            image: Profile1,
        },
        {
            id: 2,
            content:
                'The service was impeccable, & the staff went out of their way to ensure a comfortable stay.',
            author: 'Mr. Rahul Sharma',
            image: Profile1,
        },
        {
            id: 3,
            content:
                'The food at Saavi Hotel was beyond delicious. I would recommend this place to any foodie.',
            author: 'Ms. Aarti Patel',
            image: Profile1,
        },
        {
            id: 4,
            content:
                'A perfect getaway spot. The rooms were spacious and clean, and the atmosphere was relaxing.',
            author: 'Mr. Vishal Kapoor',
            image: Profile1,
        },
        {
            id: 5,
            content:
                'Unforgettable stay! The staff was warm, and the attention to detail was remarkable.',
            author: 'Ms. Sneha Roy',
            image: Profile1,
        },
    ];

    // const handlePrev = () => {
    //     setActiveIndex((prevIndex) =>
    //         prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    //     );
    // };

    // const handleNext = () => {
    //     setActiveIndex((prevIndex) =>
    //         prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    //     );
    // };

    const getVisibleCards = () => {
        const visibleCards = [];
        for (let i = 0; i < 5; i++) {
            visibleCards.push(testimonials[(activeIndex + i) % testimonials.length]);
        }
        return visibleCards;
    };
    const [email, setEmail] = useState("");

    const handleNotify = () => {
        if (!email) {
            toast.error("Please enter an email address.");
            return;
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        const templateParams = {
            user_email: email,
        };

        emailjs
            .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then(() => {
                toast.success("Subscription successful! You'll be notified of exclusive offers.");
                setEmail(""); // Clear the input field
            })
            .catch(() => {
                toast.error("Failed to subscribe. Please try again.");
            });
    };
    return (
        <div className="w-auto mx-auto text-center mt-8">
            {/* Header */}
            <ToastContainer position="top-right" autoClose={5000} />
            <header className="mb-8">
                <h1 className="text-3xl text-[#8B2B06] font-bold font-serif">What Our Guests Say</h1>
                <p className="text-lg text-gray-600 font-serif">Hear from our satisfied travelers</p>
            </header>
            <Marquee>
                {/* Testimonials */}
                <div className="relative overflow-hidden">
                    <div className="flex gap-4 justify-center">
                        {getVisibleCards().map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="w-72 bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
                            >
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.author}
                                    className="w-20 h-20 rounded-full mb-4"
                                />
                                <p className="text-gray-700 text-sm italic mb-3">
                                    "{testimonial.content}"
                                </p>
                                <h3 className="font-semibold text-gray-800">{testimonial.author}</h3>
                                <div className="flex mt-2">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <span key={index} className="text-yellow-500 text-lg">
                                            &#9733;
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Marquee>
            {/* Navigation */}
            {/* <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={handlePrev}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-full"
        >
          &#9664;
        </button>
        <div className="flex gap-1">
          {Array.from({ length: testimonials.length }).map((_, index) => (
            <span
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-3 w-3 rounded-full cursor-pointer ${
                index === activeIndex
                  ? 'bg-gray-800'
                  : 'bg-gray-400 hover:bg-gray-600'
              }`}
            ></span>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-full"
        >
          &#9654;
        </button>
      </div> */}

            {/* Subscription Section */}
            <div
            className="relative mt-6 w-full h-40 sm:h-60 md:h-72 lg:h-60 bg-center bg-cover"
            style={{ backgroundImage: `url(${Background_image})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#8b2b06] opacity-60"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center h-full px-4 sm:px-8 md:px-12 text-center sm:text-left">
                {/* Left Section */}
                <div className="text-white max-w-lg">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide mb-2">
                        Unlock Exclusive Offers
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg">
                        Only the best deals reach your inbox.
                    </p>
                </div>

                {/* Right Section */}
                <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3 w-full sm:w-auto mt-4 sm:mt-0">
                    {/* Email Input */}
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="px-4 py-2 rounded-lg text-sm border border-gray-300 w-full sm:w-72 bg-white focus:outline-none focus:ring-2 focus:ring-[#8B2B06]"
                    />
                    
                    {/* Button */}
                    <button
                        onClick={handleNotify}
                        className="px-6 py-2 bg-white text-black border-b-4 border-black rounded-lg font-semibold shadow-md hover:bg-[#8B2B06] hover:text-white transition w-full sm:w-auto"
                    >
                        Notify Me
                    </button>
                </div>
            </div>
        </div>



        </div>
    );
};

export default Guest;
