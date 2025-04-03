import React from "react";

const ValuesAndMissionPage: React.FC = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-8">
        {/* <h1 className="text-3xl font-bold text-gray-800 mb-8">About Us</h1> */}

        {/* Vision and Mission Cards Section */}
        <div className="space-y-6 sm:space-y-8">
          <h2 className="text-lg font-bold text-red-700 mb-2">Vision and Mission</h2>

          <div className="flex flex-col sm:flex-row items-stretch gap-6">
            {/* Vision Card */}
            <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg w-full sm:w-1/2">
              <h3 className="text-xl font-bold text-red-700 text-center mb-4">Vision</h3>
              <p className="text-gray-700 text-center">
                To become a leading hospitality brand known for excellence in corporate stays and innovative guest experiences.
              </p>
            </div>

            {/* Mission Card */}
            <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg w-full sm:w-1/2">
              <h3 className="text-xl font-bold text-red-700 text-center mb-4">Mission</h3>
              <p className="text-gray-700 text-center">
                To set new benchmarks in hospitality by combining luxury, efficiency, and sustainability to meet the evolving
                needs of corporate travelers.
              </p>
            </div>
          </div>

          {/* Additional Text Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            {/* <h3 className="text-xl font-bold text-red-700 mb-4">Our Vision and Core Values</h3> */}
            <p className="text-gray-700 mb-4">
              Our Vision is to achieve monumental success in the service industry on a global stage, to leave a legacy of
              excellence in the service industry. “To enhance the lives of our customers by creating and enabling unsurpassed
              vacation and leisure experiences.” Right from the hotel room to the services provided by Saavi Hotels are of premium
              quality.
            </p>
            <p className="text-gray-700 mb-4">
              Saavi Hotels, as a company, started the venture with a vision to be the best in the world when it comes to hotels or
              resort chains and we are thriving in it.
            </p>
            <p className="text-gray-700 mb-4">
              Saavi Hotels is India’s fastest-growing chain of Hotels. Our core values make us who we are. As we change and grow, the
              beliefs that are most important to us stay the same:
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Putting people first</strong></li>
              <li><strong>Pursuing excellence</strong></li>
              <li><strong>Embracing change</strong></li>
              <li><strong>Acting with integrity</strong></li>
              <li><strong>Serving our world</strong></li>
            </ul>

            <p className="text-gray-700 mb-4">
              Being part of Saavi Hotels is being a part of an urban-thriving culture. We pursue excellence. Our dedication to the
              customer shows in everything we do. We take pride in the details every day, in every destination nationwide.
            </p>
            <p className="text-gray-700 mb-4">
              Innovation has always been a part of our story. We’re driven to continually challenge the status quo and anticipate our
              customers’ changing needs with new brands, new global locations, and new guest experiences.
            </p>
            <p className="text-gray-700 mb-4">
              We act with integrity. We hold ourselves to uncompromising ethical and legal standards.
            </p>
            <p className="text-gray-700">
              “Good food and good service at a fair price” is the crux.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuesAndMissionPage;
