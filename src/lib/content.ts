import { images } from "../../public/assets/export";
import foodImage from "../../public/assets/food.png";
// import roomImage from "../../public/assets/roomImage.png";
import bonfireImage from "../../public/assets/bonfire.png";
// import guestAccessImage from "../../public/assets/guestAccess.png";
import adventureImage from "../../public/assets/advanterus.jpeg";
// import BanqAndEvents from "@/pages/banqAndEvents";
import bnq1 from "../../public/assets/bnq1.jpeg";
import bnq2 from "../../public/assets/bnq2.jpeg";
import bnq3 from "../../public/assets/bnq3.jpeg";
import bnq4 from "../../public/assets/bnq4.jpeg";
import bnq5 from "../../public/assets/bnq5.jpeg";
import bnq6 from "../../public/assets/bnq6.jpeg";
import Deepak from "../../public/assets/Deepak.jfif";
import DeepakRedhu from "../../public/assets/DeepakRedhu.jfif"
import KritiMisra from "../../public/assets/KritiMishra.jfif"
import SauravSingh from "../../public/assets/SauravSingh.jfif"

export const content = {
  company: {
    name: "Saavi",
    description: "Experience luxury and comfort at our world-class hotels and resorts.",
    contact: {
      address: "545,Sector 43,Golf course Road,",
      city: "Gurugram, Haryana 122003",
      phone: "9999575044, 7290006773",
      email: "sales@saavigroups.com"
    }
  },
  hotels: [
    {
      id: "golf-course-luxury",
      name: "Saavi Hotel Golf course",
      location: "Gurugram, Haryana, India",
      city: "Gurugram",
      image: images.Image_1,
      description: "Combines luxury accommodations with a serene, well-maintained golf experience.",
      amenities: ["Scenic Views", "Indoor Dining", "Luxury Suites","24/7 Room Service"],
      bookingEngine : "http://bookingengine.maximojo.com?hid=IN-7fc00e1a-24e9-4e40-9e88-b3f0f8a6d8ac"
    },
    {
      id: "sector-46",
      name: "Saavi Hotel Sector 46",
      location: "Gurugram, Haryana, India",
      city: "Gurugram",
      image: images.F46,
      description: " Offers comfortable accommodations with modern amenities in a convenient and vibrant location.",
      amenities: ["Scenic Views", "Indoor Dining", "Luxury Suites","24/7 Room Service"],
      bookingEngine : "http://bookingengine.maximojo.com?hid=IN-d94400e8-db75-4daa-9a98-d84564413313"
    },
    {
      id: "sector-45",
      name: "Saavi Hotel Sector 45",
      location: "Gurugram, Haryana, India",
      city: "Gurugram",
      image: images.F45,
      description: "Provides cozy accommodations with modern facilities, ensuring a convenient and pleasant stay.",
      amenities: ["Scenic Views", "Indoor Dining", "Luxury Suites","24/7 Room Service"],
      bookingEngine :"http://bookingengine.maximojo.com?hid=IN-c2ecb7a0-0dd5-4ce2-a9b7-2c2afeb8754b"
    },
    {
      id: "sector-10",
      name: "Saavi Hotel Sector 10",
      location: "Gurugram, Haryana, India",
      city: "Gurugram",
      image: images.F10,
      description: "Offers comfortable and well-equipped accommodations for a relaxing and convenient stay.",
      amenities: ["Scenic Views", "Indoor Dining", "Luxury Suites","24/7 Room Service"],
      bookingEngine : "http://bookingengine.maximojo.com?hid=IN-f59a1bd3-916f-4a62-9092-9624599ac2c6"
    },
    {
      id: 'shimla-mountain-resort',
      name: "Hassan Valley By Saavi",
      location: "Shimla, Himachal Pradesh, India",
      city: "Shimla",
      image: images.Image_5,
      description: "A serene getaway nestled amidst picturesque landscapes, offering modern amenities and a tranquil escape in the heart of nature.",
      amenities: ["Eco-Cottages", "Trekking Assistance", "Bonfire Nights", "Organic Meals"]
    },
    // {
    //   id: "saavi-rishikesh",
    //   name: "Saavi Hotel and Resorts",
    //   location: "Rishikesh,Uttrakhand, India",
    //   city: "Rishikesh",
    //   image: images.Image_6,
    //   description: " Offers a serene retreat with modern amenities, surrounded by the tranquil beauty of the Himalayan foothills and the Ganges River.",
    //   amenities: ["Wellness Center", "Luxury Rooms", "Multi-Cuisine Dining", "Bonfire"]
    // },
    {
      id: "saavi-jibhi",
      name: "Saavi Hotel Jibhi",
      location: "Jibhi,Himachal Pradesh, India",
      city: "Jibhi",
      image: images.Fjb,
      description: "A charming retreat offering cozy accommodations, modern amenities, and stunning views of the lush Himalayan landscape.",
      amenities: ["Banquet Halls", "Bonfire", "Outdoor Pool"]
    }
  ],
  upcomingProjects: [
    {
      id: "saavi-gurgaon",
      name: "Saavi Hotel Gurgaon",
      location: "Gurgaon, Delhi",
      city: "Gurugram",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800",
      description: "A new level of luxury in the heart of Gurgaon.",
      openingDate: "2025"
    },
    {
      id: "saavi-goa",
      name: "Saavi Hotel Goa",
      location: "Goa, India",
      city: "Goa",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800",
      description: "Elegant suites with stunning views.",
      openingDate: "2025"
    }
  ],
  features: [
    {
      title: "5-Star Service",
      description: "Experience world-class hospitality with our dedicated staff."
    },
    {
      title: "Luxury Amenities",
      description: "Indulge in premium facilities and services at all our properties."
    },
    {
      title: "Prime Locations",
      description: "Discover our carefully selected destinations worldwide."
    }
  ],
  facilities: [
    {
      title: "Food",
      description: "Indulge in a variety of cuisines prepared with love and care for a memorable dining experience.",
      image: foodImage // Replace with the relevant image from your assets
    },
    {
      title: "Rooms",
      description: "Relax in our comfortable, well-furnished rooms designed to offer you a homely ambiance.",
      image: images.Image_14 // Replace with the relevant image from your assets
    },
    {
      title: "Bonfire",
      description: "Gather around a warm bonfire under the open sky, creating unforgettable moments with loved ones.",
      image: bonfireImage // Replace with the relevant image from your assets
    },
    {
      title: "Guest Access",
      description: "Enjoy seamless access to all facilities, ensuring a memorable and hassle-free stay.",
      image: images.Image_7 // Replace with the relevant image from your assets
    },
    {
      title: "Relax",
      description: "Escape the hustle and find your peace in a serene and rejuvenating ambiance.",
      image: adventureImage // Replace with the relevant image from your assets
    }
  ],
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Hotels', href: '/hotels' },
    { name: 'Book Now', href: '/booking' },
    { name: 'Banquet & Events', href: '/events' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Promotions', href: '/promotions' },
    { name: 'Career', href: '/career' },
    { name: 'Contact Us', href: '/contact' }
  ],
  banqAndEvents: {

    description1: "Our Banquet hall has a video conferencing facility at Saavi hotels, Gurgram. It has a lavish decor and provides a traditional touch with an opulent environment that is ideal for hosting any form of event.",
    description2: "Host events like receptions, parties, or even business meetings in this elegant hall that comes well-equipped with a projector , A/C, Wi-Fi, and audiovisual system.",
    description3: "Book your stay at one of the best Gurugram hotel near Golf course road during your grand event at our state of the art event venue.",
    images: [
      {
        url: bnq1,
        title: "Luxury Suite"
      },
      {
        url: bnq2,
        title: "Swimming Pool"
      },
      {
        url: bnq3,
        title: "Hotel Exterior"
      },
      {
        url: bnq4,
        title: "Restaurant"
      },
      {
        url: bnq5,
        title: "Spa"
      },
      {
        url: bnq6,
        title: "Hotel Room"
      },
    ]
  },
  team: [
    {
      name: 'Deepak Dangi',
      role: 'Founder & CEO',
      description: 'Mr Deepak Dangi completed his education in the field of IT (B.Sc IT) and completed his Post Graduation in Management (MBA). Worked with big brands like Imperial Hotel Delhi, Le Meridien , Metropolitan, Pi hotels etc., Mr. Deepak Dangi emerged as an exceptional amalgamation of IT and hospitality. To His love for geniality and his burning desire to achieve the inevitable success, In 2019 founded the Saavi Events and Entertainment, His experience of 12 years in the industry adds fuel to passion driven approach of Saavi Hotel. Now Saavi Hotels operates five plus hotels in India, this contemporary approach of attention to the corporate stay and Social events is driven by the vast expertise of this charming entrepreneur.',
      imageSrc: Deepak,
    },
    {
      name: 'Kriti Mishra',
      role: 'Director Sales & marketing',
      description: "Kriti Mishra is a results-driven sales professional with 6+ years of experience in banking and finance. With an MBA in Marketing and Finance, she excels in strategic sales, client relationship management, and market analysis. Recognized as a **Top Sales Performer** for three consecutive years, she has successfully grown revenue by 20% YoY and led teams to exceed targets by 30%. Known for her consultative sales approach, Kriti focuses on delivering tailored financial solutions and fostering long-term client relationships.",
      imageSrc: KritiMisra,
    },
    
    {
      name: 'Deepak Redhu',
      role: 'Account Head',
      description: "Deepak Redhu is a senior executive responsible for managing the financial actions of the company. They are often in charge of tracking cash flow, analyzing strengths/weaknesses in the company’s finances and overseeing all aspects of its financial success. Mr. Redhu completed his bachelor's in accounts management. Worked with big brands like Indusind bank and L&T Finance. His expertise is to Ensure cash flow is appropriate for the organization’s operations and Control and evaluate the organization’s fundraising plans and capital structure. Now using his vast experience for more than 10 years to expedite the potential of SAAVI Hotels.",
      imageSrc: DeepakRedhu,
    },
    {
      name: 'Vikas Kadian',
      role: 'Director Food And Beverages',
      description: "An experienced F&B leader, I specialize in operations, team management, and strategic growth. With expertise in optimizing guest experiences, cost control, and profitability, I drive excellence in service, quality, and hygiene. Skilled in budgeting, vendor relations, and market analysis, I implement innovative strategies to enhance revenue and streamline operations while staying ahead of industry trends.",
      imageSrc: SauravSingh,
    },
    
  ],
  terms_and_conditions: [
    {
      title: 'Terms and Conditions',
      content: `Terms and Conditions for Saavi Hotel

Welcome to Saavi Hotel. By accessing or using our services, including making reservations, checking in, and utilizing hotel facilities, you agree to comply with the following terms and conditions. Please read them carefully.

Reservation Policy

Reservations can be made via our official website, phone, or authorized third-party platforms.
A valid credit card is required to secure a booking.
Cancellation policies vary depending on the booking type. Guests are advised to refer to their specific reservation details for cancellation timelines and fees.
No-shows and late cancellations may result in a penalty charge, including but not limited to the cost of the first night’s stay.
Check-in/Check-out Policy

Check-in time begins at 2:00 PM. Early check-in is subject to availability and may incur additional charges.
Check-out time is by 12:00 PM. Late check-outs may be subject to additional fees if they exceed one hour beyond the stated check-out time.
Payment Terms

Payment for the stay is due at the time of check-in or as specified in the reservation agreement.
Accepted payment methods include credit/debit cards and cash (subject to hotel discretion).
All applicable taxes and service charges will be added to the final bill and may vary based on local regulations.
Guest Responsibilities

Guests are required to maintain appropriate conduct while on hotel property, adhering to all hotel policies, rules, and regulations.
Saavi Hotel reserves the right to refuse service to any guest displaying disruptive or illegal behavior, including but not limited to intoxication, noise disturbances, or property damage.
Privacy and Data Protection

Personal information collected during the reservation process or during the stay will be stored and processed in accordance with applicable privacy laws and Saavi Hotel’s privacy policy.
The hotel will not disclose any personal data without the consent of the guest, unless required by law or in relation to the provision of services.
Liability

Saavi Hotel is not liable for any loss, damage, or injury to guests or their property, except in cases of negligence on the part of the hotel.
The hotel does not assume responsibility for personal items left in guest rooms or common areas. Guests are encouraged to use in-room safes or lockers for valuable items.
Hotel Amenities and Services

Access to certain hotel amenities such as the pool, gym, and restaurant may be subject to additional charges and availability.
The hotel reserves the right to alter or suspend certain services or amenities due to maintenance, local regulations, or unforeseen circumstances.
Force Majeure

Saavi Hotel shall not be held responsible for failure or delay in the performance of any obligations due to circumstances beyond its reasonable control, including but not limited to natural disasters, pandemics, or governmental restrictions.
Amendments to Terms and Conditions

Saavi Hotel reserves the right to update or modify these terms and conditions at any time. All updates will be published on our website and will apply to any bookings or services made thereafter.
By proceeding with a reservation or stay, you acknowledge that you have read, understood, and agreed to these terms and conditions. If you have any questions or require further clarification, please contact our guest services team.`
    }
  ],
};
