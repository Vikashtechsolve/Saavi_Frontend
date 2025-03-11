// import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import logo from '../../public/assets/saavi_logo.png';
import { Link } from 'react-router-dom';

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-gray-300">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12 justify-items-center">
//           {/* About Us Section */}
//           <div className="max-w-xs text-center">
//             <Link to="/" className="flex items-center justify-center gap-2">
//               <img src={logo} alt="Saavi Hotels Logo" className="h-10 w-10" />
//               <span className="text-xl font-semibold text-white">Saavi Hotels</span>
//             </Link>
//             <p className="mt-4 text-sm">
//               Saavi Hotels is a chain of boutique hotels and a subsidiary of Saavi Hotels and
//               Resort Pvt. Ltd headquartered at Gurgaon. Incorporated by the founder
//               himself, Mr. Deepak Dangi, the company is a part of the PV Group, one of India's
//               growing business conglomerates.
//             </p>
//           </div>

//           {/* Important Links Section */}
//           <div className="text-center">
//             <h3 className="text-white font-semibold mb-4">Important Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
//               </li>
//               <li>
//                 <Link to="/hotels" className="hover:text-white transition-colors">Our Hotels</Link>
//               </li>
//               <li>
//                 <Link to="/offers" className="hover:text-white transition-colors">Offers & Packages</Link>
//               </li>
//               <li>
//                 <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
//               </li>
//             </ul>
//           </div>

//           {/* Headquarter Section */}
//           <div className="text-center">
//             <h3 className="text-white font-semibold mb-4">Headquarter</h3>
//             <ul className="space-y-2 text-sm">
//               <li>The Saavi Hotel</li>
//               <li>545,Sector 43,Golf course Road,
//                 </li>
//               <li>Gurugram, Haryana 122003</li>
//             </ul>
//           </div>

//           {/* Follow Us Section */}
//           <div className="text-center">
//             <h3 className="text-white font-semibold mb-4">Follow Us</h3>
//             <div className="flex justify-center space-x-4">
//               {/* Facebook */}
//               <a
//                 href="https://www.facebook.com/profile.php?id=61565142656404"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-white transition-colors"
//               >
//                 <Facebook className="h-5 w-5" />
//               </a>

//               {/* Instagram */}
//               <a
//                 href="https://www.instagram.com/saavihotels?igsh=and4OXdkMTJoNWcx"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-white transition-colors"
//               >
//                 <Instagram className="h-5 w-5" />
//               </a>

//               {/* LinkedIn */}
//               <a
//                 href="https://www.linkedin.com/company/96062794/admin/dashboard/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-white transition-colors"
//               >
//                 <Linkedin className="h-5 w-5" />
//               </a>

//               {/* YouTube */}
//               <a
//                 href="https://www.youtube.com/@SaaviHotelsAndResorts"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-white transition-colors"
//               >
//                 <Youtube className="h-5 w-5" />
//               </a>
//             </div>
//           </div>

//         </div>

//         {/* Footer Bottom */}
//         <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center">
//           <p>&copy; {new Date().getFullYear()} Saavi Hotels. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }



// import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
          <Link to="/" className="flex gap-2">
               <img src={logo} alt="Saavi Hotels Logo" className="h-10 w-10" />
               <span className="text-xl font-semibold text-white">Saavi Hotels</span>
             </Link>
            {/* <h3 className="text-xl font-semibold">About Us</h3> */}
            <p className="text-gray-400 leading-relaxed">
            Saavi Hotels and Resorts Private Limited is an emerging hospitality brand in India, founded by Deepak Dangi, a seasoned professional with over 13 years of experience in five-star hospitality. Saavi Hotels is committed to redefining corporate hospitality by offering world-class accommodations, personalized services, and modern amenities designed to meet the needs of business travelers and professionals.</p>
            <Link to='/about#company'>Read more...</Link>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 ml-20">
            <h3 className="text-xl font-semibold">Explore </h3>
            <ul className="space-y-2">
              
              <li>
                <Link to="/explore#business" className="text-gray-400 hover:text-[#8B2B06] transition-colors">Business</Link>
              </li>
              <li>
              <Link to="/explore#family" className="text-gray-400 hover:text-[#8B2B06] transition-colors">Family</Link>
              </li>
              <li>
              <Link to="/explore#leisure" className="text-gray-400 hover:text-[#8B2B06] transition-colors">Leisure</Link>
              </li>
              {/* <li>
              <Link to="/explore#select" className="text-gray-400 hover:text-red-700 transition-colors">Select</Link>
              </li>
              <li>
              <Link to="/explore#staycation" className="text-gray-400 hover:text-red-700 transition-colors">Staycation</Link>
              </li> */}
            </ul>
          </div>

          {/* Popular Locations */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Important Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/links#terms" className="text-gray-400 hover:text-[#8B2B06] transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/links#privacy-policy" className="text-gray-400 hover:text-[#8B2B06] transition-colors">Privacy Policy</Link>
              </li>
              <li>
              <Link to="/careers" className="text-gray-400 hover:text-[#8B2B06] transition-colors">Career</Link>
              </li>
              <li>
              <Link to="/links#loyalty-program" className="text-gray-400 hover:text-[#8B2B06] transition-colors">Loyalty Program</Link>
              </li>
              <li>
              <Link to="/contact" className="text-gray-400 hover:text-[#8B2B06] transition-colors">Contact us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-[#8B2B06]" />
                <span className="text-gray-400">Golf Course Road, Gurugram</span>
              </li>
              <hr className="flex-grow border-t border-gray-500 border-dashed" /> 

              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#8B2B06]" />
                <a href="tel:+919999575044" className="text-gray-400 hover:text-[#8B2B06] transition-colors">
                  +91 9999575044
                </a>
              </li>
              <hr className="flex-grow border-t border-gray-500 border-dashed" /> 

              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#8B2B06]" />
                <a href="sales@saavigroups.com" className="text-gray-400 hover:text-[#8B2B06] transition-colors">
                sales@saavigroups.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © {currentYear} All rights reserved to Saavi Hotels and Resorts Private Limited.
            </p>
            <div className="flex space-x-6">
            <div className="flex items-center gap-4 sm:gap-8">
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
      </div>
    </footer>
  );
}