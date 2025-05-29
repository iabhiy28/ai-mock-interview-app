import React from 'react';
import { Users, Award, Clock, CheckCircle } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    {
      icon: <Users size={24} className="text-blue-600" />,
      number: "10,000+",
      label: "Users Helped"
    },
    {
      icon: <Award size={24} className="text-blue-600" />,
      number: "94%",
      label: "Success Rate"
    },
    {
      icon: <Clock size={24} className="text-blue-600" />,
      number: "24/7",
      label: "Available"
    }
  ];

  const teamMembers = [
    {
      name: "Abhishek Yadav",
      role: "Developer",
      image: "../../assets/img/admin.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Helping job seekers ace their interviews with AI-powered practice
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          {/* Our Mission */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              At InterviewAI, we believe everyone deserves the opportunity to showcase their true potential in job interviews. 
              Our mission is to democratize interview preparation by providing accessible, personalized practice tools powered by cutting-edge AI technology.
            </p>
            <p className="text-gray-600">
              We've created a platform that simulates realistic interview scenarios across multiple domains, providing immediate feedback and helping candidates build confidence before their big day.
            </p>
          </div>
          
          {/* Why Choose Us */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Why Choose Us</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mt-1 mr-4">
                  <CheckCircle size={20} className="text-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Domain-Specific Training</h3>
                  <p className="text-gray-600">Our AI interviewers are trained on industry-specific questions and best practices.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-4">
                  <CheckCircle size={20} className="text-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Personalized Feedback</h3>
                  <p className="text-gray-600">Get actionable insights on how to improve your answers and presentation.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-4">
                  <CheckCircle size={20} className="text-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Realistic Scenarios</h3>
                  <p className="text-gray-600">Practice with scenarios designed to mimic real interview conditions.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-full">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-1">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Our Team */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center justify-items-center">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
                  />
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact CTA */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Have Questions?</h2>
            <p className="text-gray-600 mb-6">
              We'd love to hear from you and help you prepare for your next interview
            </p>
            <button className="bg-blue-600 text-white py-3 px-8 rounded hover:bg-blue-700 transition-colors text-lg font-medium">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;