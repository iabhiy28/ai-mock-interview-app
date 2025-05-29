import React from 'react';
import { Code, Activity, Briefcase } from 'lucide-react';

const SimpleMockInterviewPage: React.FC = () => {
  const interviewTypes = [
    {
      title: "Technical Interview",
      description: "Practice coding questions, system design, and technical concepts with our AI interviewer.",
      icon: <Code size={24} className="text-blue-600" />,
    },
    {
      title: "Data Science Interview",
      description: "Prepare for data analysis, machine learning, and statistical questions.",
      icon: <Activity size={24} className="text-blue-600" />,
    },
    {
      title: "Behavioral Interview",
      description: "Practice answering common behavioral questions with personalized feedback.",
      icon: <Briefcase size={24} className="text-blue-600" />,
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Mock Interview Practice</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Improve your interview skills with our AI-powered mock interviews
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">How It Works</h2>
            <div className="flex flex-col md:flex-row gap-6 text-center md:text-left">
              <div className="flex-1">
                <div className="inline-block bg-blue-100 rounded-full p-3 mb-4">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Select Interview Type</h3>
                <p className="text-gray-600">Choose the domain and role you want to practice for</p>
              </div>
              <div className="flex-1">
                <div className="inline-block bg-blue-100 rounded-full p-3 mb-4">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Practice with AI</h3>
                <p className="text-gray-600">Answer questions from our AI interviewer in real-time</p>
              </div>
              <div className="flex-1">
                <div className="inline-block bg-blue-100 rounded-full p-3 mb-4">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Get Feedback</h3>
                <p className="text-gray-600">Receive personalized feedback to improve your skills</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleMockInterviewPage;