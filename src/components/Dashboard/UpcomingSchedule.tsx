import React from 'react';

interface Appointment {
  title: string;
  time: string;
  icon: string;
}

interface DaySchedule {
  day: string;
  appointments: Appointment[];
}

const schedule: DaySchedule[] = [
  {
    day: 'Thursday',
    appointments: [
      {
        title: 'Health checkup complete',
        time: '11:00 AM',
        icon: '💉'
      },
      {
        title: 'Ophthalmologist',
        time: '14:00 PM',
        icon: '👁️'
      }
    ]
  },
  {
    day: 'Saturday',
    appointments: [
      {
        title: 'Cardiologist',
        time: '12:00 AM',
        icon: '❤️'
      },
      {
        title: 'Neurologist',
        time: '16:00 PM',
        icon: '🧠'
      }
    ]
  }
];

const UpcomingSchedule: React.FC = () => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold text-indigo-900 mb-4">The Upcoming Schedule</h2>

      <div className="space-y-6">
        {schedule.map((day) => (
          <div key={day.day}>
            <h3 className="text-gray-400 mb-3">On {day.day}</h3>
            <div className="grid grid-cols-2 gap-3">
              {day.appointments.map((appointment, index) => (
                <div
                  key={index}
                  className="bg-indigo-50 rounded-xl p-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-indigo-900">{appointment.title}</h4>
                      <p className="text-indigo-900 mt-1">{appointment.time}</p>
                    </div>
                    <span className="text-xl">{appointment.icon}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule; 