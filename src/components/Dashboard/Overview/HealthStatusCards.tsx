import React from 'react';
import { healthIndicators } from '../../../data/health';
import { MdArrowForward } from 'react-icons/md';

export const HealthStatusCards: React.FC = () => {
  return (
    <div className="space-y-3">
      {healthIndicators.map((indicator) => (
        <div key={indicator.title} className="bg-gray-50 rounded-2xl p-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{indicator.icon}</span>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">{indicator.title}</h3>
                <p className="text-sm text-gray-400">Date: {indicator.date}</p>
              </div>
              <div className="h-2 bg-white rounded-full overflow-hidden mt-2">
                <div
                  className={`h-full bg-gradient-to-r ${indicator.color}`}
                  style={{ width: `${indicator.status}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <div className="flex justify-end pt-2">
        <button className="text-violet-400 text-sm font-medium flex items-center gap-2 hover:text-violet-700 transition-colors duration-200 bg-white">
          Details
          <MdArrowForward />
        </button>
      </div>
    </div>
  );
}; 