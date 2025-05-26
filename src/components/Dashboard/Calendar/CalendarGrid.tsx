import React from 'react';
import { weekSchedule } from '../../../data/calendar';

interface TimeSlot {
  time: string;
  event?: {
    title: string;
    doctor: string;
    type: 'dentist' | 'physiotherapy';
  };
}

interface DaySchedule {
  date: number;
  day: string;
  slots: TimeSlot[];
}

const CalendarGrid: React.FC = () => {
  return (
    <div className="h-full grid grid-cols-7">
      <div className="text-sm font-medium text-gray-500 ml-3">Mon</div>
      <div className="text-sm font-medium text-gray-500 ml-3">Tues</div>
      <div className="text-sm font-medium text-gray-500 ml-3">Wed</div>
      <div className="text-sm font-medium text-gray-500 ml-3">Thurs</div>
      <div className="text-sm font-medium text-gray-500 ml-3">Fri</div>
      <div className="text-sm font-medium text-gray-500 ml-3">Sat</div>
      <div className="text-sm font-medium text-gray-400 ml-3">Sun</div>

      {weekSchedule.map((day) => (
        <div key={day.date}>
          <div className={`text-lg font-medium ml-4 ${day.day === 'Sun' ? 'text-gray-400' : 'text-gray-900'}`}>
            {day.date}
          </div>
          <div className="space-y-1">
            {day.slots.map((slot, index) => (
              <div
                key={index}
                className={`text-sm py-1 px-2 rounded ${
                  slot.event
                    ? slot.event.type === 'dentist'
                      ? 'bg-violet-600 text-white'
                      : 'bg-violet-50 text-violet-900'
                    : ''
                }`}
              >
                {slot.time}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CalendarGrid; 