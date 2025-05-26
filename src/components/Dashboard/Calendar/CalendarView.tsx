import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import CalendarGrid from './CalendarGrid';

const CalendarView: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-2.5 h-full flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold text-gray-900">October 2021</h2>
        <div className="flex items-center space-x-1">
          <button className="p-1 rounded-full bg-white">
            <MdChevronLeft className="text-lg text-gray-600" />
          </button>
          <button className="p-1 rounded-full bg-white">
            <MdChevronRight className="text-lg text-gray-600" />
          </button>
        </div>
      </div>

      <div className="flex-1">
        <CalendarGrid />
      </div>

      <div className="mt-2 grid grid-cols-2 gap-2">
        <div className="bg-violet-600 text-white p-2 rounded-xl">
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center">
              <span className="text-base mr-1">🦷</span>
              <span className="font-medium text-sm">Dentist</span>
            </div>
          </div>
          <div className="text-xs text-white/90">09:00-11:00</div>
          <div className="text-xs text-white/90">Dr. Cameron Williamson</div>
        </div>

        <div className="bg-violet-50 p-2 rounded-xl">
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center">
              <span className="text-base mr-1">🧘‍♂️</span>
              <span className="font-medium text-sm text-gray-900">Physiotherapy</span>
            </div>
          </div>
          <div className="text-xs text-gray-600">11:00-12:00</div>
          <div className="text-xs text-gray-600">Dr. Kevin Djones</div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView; 