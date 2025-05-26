import React from 'react';
import { MdSearch } from 'react-icons/md';
import { anatomyIndicators } from '../../../data/health';

const AnatomySection: React.FC = () => {
  return (
    <div className="bg-gray-50 rounded-2xl relative h-[320px]">
      <div className="absolute top-3 right-3 z-10">
        <button className="p-1.5 rounded-full bg-white text-gray-600 hover:bg-gray-100 transition-colors">
          <MdSearch className="text-lg" />
        </button>
      </div>

      <div className="relative h-full w-full flex items-center justify-center">
        <img
          src="/human_anatomy.png"
          alt="Human Anatomy"
          className="w-[90%] h-auto object-contain"
        />

        {/* Bottom curve decoration */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <div className="w-10 h-1 bg-gray-200 rounded-full"></div>
        </div>

        {anatomyIndicators.map((indicator) => (
          <div
            key={indicator.label}
            className={`absolute ${indicator.position}`}
          >
            <button
              className={`${
                indicator.color === 'bg-violet-600'
                  ? 'bg-violet-600'
                  : 'bg-cyan-400'
              } px-3 py-1.5 text-white rounded-full text-xs flex items-center shadow-lg transform hover:scale-105 transition-transform`}
            >
              <span className="mr-1.5">{indicator.icon}</span>
              {indicator.label}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnatomySection; 