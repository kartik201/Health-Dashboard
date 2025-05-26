import React from 'react';

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

const weekSchedule: DaySchedule[] = [
  {
    date: 25,
    day: 'Mon',
    slots: [
      { time: '10:00' },
      { time: '11:00' },
      { time: '12:00' }
    ]
  },
  {
    date: 26,
    day: 'Tues',
    slots: [
      { time: '08:00' },
      { time: '09:00', event: { title: 'Dentist', doctor: 'Dr. Cameron Williamson', type: 'dentist' } },
      { time: '10:00' }
    ]
  },
  {
    date: 27,
    day: 'Wed',
    slots: [
      { time: '12:00' },
      { time: '13:00', event: { title: 'Physiotherapy', doctor: 'Dr. Kevin Djones', type: 'physiotherapy' } }
    ]
  },
  {
    date: 28,
    day: 'Thurs',
    slots: [
      { time: '10:00' },
      { time: '11:00' },
      { time: '12:00' }
    ]
  },
  {
    date: 29,
    day: 'Fri',
    slots: [
      { time: '14:00' },
      { time: '16:00' }
    ]
  },
  {
    date: 30,
    day: 'Sat',
    slots: [
      { time: '12:00' },
      { time: '14:00' },
      { time: '15:00' }
    ]
  },
  {
    date: 31,
    day: 'Sun',
    slots: [
      { time: '09:00' },
      { time: '10:00' },
      { time: '11:00' }
    ]
  }
];

const Calendar: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-indigo-900">October 2021</h2>
        <div className="flex items-center space-x-2">
          <button className="text-indigo-900">←</button>
          <button className="text-indigo-900">→</button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        <div className="text-sm font-medium text-indigo-900">Mon</div>
        <div className="text-sm font-medium text-indigo-900">Tues</div>
        <div className="text-sm font-medium text-indigo-900">Wed</div>
        <div className="text-sm font-medium text-indigo-900">Thurs</div>
        <div className="text-sm font-medium text-indigo-900">Fri</div>
        <div className="text-sm font-medium text-indigo-900">Sat</div>
        <div className="text-sm font-medium text-gray-400">Sun</div>

        {weekSchedule.map((day) => (
          <div key={day.date} className="space-y-2">
            <div className={`text-lg font-semibold ${day.day === 'Sun' ? 'text-gray-400' : 'text-indigo-900'}`}>
              {day.date}
            </div>
            <div className="space-y-1">
              {day.slots.map((slot, index) => (
                <div
                  key={index}
                  className={`text-sm py-1 px-2 rounded-lg ${
                    slot.event
                      ? slot.event.type === 'dentist'
                        ? 'bg-indigo-600 text-white'
                        : 'bg-indigo-100 text-indigo-900'
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

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-indigo-600 text-white p-4 rounded-2xl">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold">Dentist</h3>
            <span className="text-2xl">🦷</span>
          </div>
          <div className="text-sm">09:00-11:00</div>
          <div className="text-sm">Dr. Cameron Williamson</div>
        </div>
        
        <div className="bg-indigo-100 text-indigo-800 p-4 rounded-2xl">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold">Physiotherapy Appointment</h3>
            <span className="text-2xl">🏃</span>
          </div>
          <div className="text-sm">11:00-12:00</div>
          <div className="text-sm">Dr. Kevin Djones</div>
        </div>
      </div>
    </div>
  );
};

export default Calendar; 