import React from 'react';
import { MdSearch } from 'react-icons/md';

interface HealthIndicator {
  icon: string;
  title: string;
  date: string;
  status: number;
  color: string;
}

const healthIndicators: HealthIndicator[] = [
  {
    icon: '🫁',
    title: 'Lungs',
    date: '20.08.2021',
    status: 75,
    color: 'from-red-400 to-red-500'
  },
  {
    icon: '🦷',
    title: 'Teeth',
    date: '20.08.2021',
    status: 90,
    color: 'from-blue-400 to-blue-500'
  },
  {
    icon: '🦴',
    title: 'Bone',
    date: '20.08.2021',
    status: 85,
    color: 'from-orange-400 to-orange-500'
  },
];

const HealthStatus: React.FC = () => {
  return (
    <div className="card">
      <div className="absolute top-6 right-6">
        <button className="btn btn-secondary p-2 rounded-full">
          <MdSearch className="text-xl" />
        </button>
      </div>

      <div className="flex">
        <div className="w-1/2 relative">
          <div className="aspect-square relative">
            <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-xl">
              <img
                src="/human_anatomy.png"
                alt="Human Anatomy"
                className="max-w-[80%] max-h-[80%] object-contain"
              />
            </div>

            {/* <button className="absolute top-1/3 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-success-500 text-white rounded-full text-sm flex items-center shadow-lg">
              <span className="mr-2">❤️</span>
              Healthy Heart
            </button> */}
          </div>
        </div>

        <div className="w-1/2 pl-8">
          {healthIndicators.map((indicator) => (
            <div key={indicator.title} className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <span className="text-2xl mr-2">{indicator.icon}</span>
                  <span className="font-medium text-gray-900">{indicator.title}</span>
                </div>
                <span className="text-sm text-gray-500">{indicator.date}</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${indicator.color}`}
                  style={{ width: `${indicator.status}%` }}
                />
              </div>
            </div>
          ))}
          <button className="text-primary-600 text-sm font-medium mt-4 flex items-center hover:text-primary-700 transition-colors duration-200">
            Details
            <span className="ml-2">+</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HealthStatus; 