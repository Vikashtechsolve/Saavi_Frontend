import React from 'react';
import { content } from '@/lib/content';
interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  imageSrc: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, description, imageSrc }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
      <img
        src={imageSrc}
        alt={name}
        className="w-24 h-24 rounded-full mb-4 border-4 border-[#8B2B06]"
      />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-[#8B2B06] font-medium mb-4">{role}</p>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <div className="flex space-x-4">
        <a href="#" className="text-gray-500 hover:text-gray-900">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-900">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-900">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

const MeetOurTeam: React.FC = () => {
  const teamMembers = content.team;

  return (
    <div className=" py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#8B2B06] mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <TeamMember
              key={member.name}
              name={member.name}
              role={member.role}
              description={member.description}
              imageSrc={member.imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
