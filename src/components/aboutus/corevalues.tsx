import React from "react";

const CoreValuesPage: React.FC = () => {
  return (
    <div className=" min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-8">
        <h1 className="text-3xl font-bold text-red-700 mb-8">Core Values</h1>

        {/* Core Values Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-[#8B2B06] text-center mb-4">Guest-Centric Excellence</h3>
            <ul className="text-gray-700 space-y-4">
              <li><strong>Commitment to Exceptional Experiences:</strong> Every decision is made with the guest in mind, ensuring their comfort, convenience, and satisfaction.</li>
              <li><strong>Personalized Service:</strong> Recognizing the unique needs of each guest, especially corporate travelers, and providing tailored solutions.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-[#8B2B06] text-center mb-4">Pursuit of Excellence</h3>
            <ul className="text-gray-700 space-y-4">
              <li><strong>Uncompromising Quality:</strong> Striving for perfection in every aspect of operations, from room service to facility management.</li>
              <li><strong>Continuous Improvement:</strong> Regularly evaluating and upgrading services to stay ahead in the competitive hospitality industry.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-red-700 text-center mb-4">Integrity and Ethics</h3>
            <ul className="text-gray-700 space-y-4">
              <li><strong>Transparency:</strong> Maintaining honesty and fairness in all interactions with guests, partners, and employees.</li>
              <li><strong>Dependability:</strong> Delivering on promises and ensuring reliability in every guest experience.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-red-700 text-center mb-4">Innovation and Adaptability</h3>
            <ul className="text-gray-700 space-y-4">
              <li><strong>Forward-Thinking Solutions:</strong> Staying ahead by adopting the latest technology and trends in the hospitality industry.</li>
              <li><strong>Creative Problem-Solving:</strong> Developing innovative approaches to meet the evolving demands of modern travelers.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-red-700 text-center mb-4">Sustainability and Responsibility</h3>
            <ul className="text-gray-700 space-y-4">
              <li><strong>Eco-Friendly Practices:</strong> Integrating green initiatives into daily operations to minimize environmental impact.</li>
              <li><strong>Community Engagement:</strong> Giving back to local communities and supporting initiatives that drive positive social change.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-red-700 text-center mb-4">Collaboration and Teamwork</h3>
            <ul className="text-gray-700 space-y-4">
              <li><strong>Synergy Among Teams:</strong> Building a culture of collaboration where employees work together to achieve shared goals.</li>
              <li><strong>Employee Empowerment:</strong> Investing in staff development and creating opportunities for personal and professional growth.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-red-700 text-center mb-4">Respect and Inclusivity</h3>
            <ul className="text-gray-700 space-y-4">
              <li><strong>Valuing Diversity:</strong> Creating a welcoming environment for people from all walks of life, including guests, employees, and partners.</li>
              <li><strong>Promoting Equality:</strong> Ensuring fair treatment and fostering a culture of mutual respect.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-red-700 text-center mb-4">Accountability and Ownership</h3>
            <ul className="text-gray-700 space-y-4">
              <li><strong>Responsibility:</strong> Taking ownership of challenges and delivering solutions with efficiency and professionalism.</li>
              <li><strong>Commitment to Standards:</strong> Upholding the brand’s reputation by consistently meeting and exceeding expectations.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-red-700 text-center mb-4">Passion for Hospitality</h3>
            <ul className="text-gray-700 space-y-4">
              <li><strong>Dedication to the Craft:</strong> Driven by a genuine love for providing exceptional service.</li>
              <li><strong>Going the Extra Mile:</strong> Ensuring every guest feels valued and appreciated during their stay.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-red-700 text-center mb-4">Visionary Leadership</h3>
            <ul className="text-gray-700 space-y-4">
              <li><strong>Guiding with Purpose:</strong> Leading the brand with a clear vision to redefine corporate hospitality.</li>
              <li><strong>Inspiring Others:</strong> Encouraging a culture of leadership at every level to drive innovation and success.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValuesPage;
