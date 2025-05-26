import React from 'react';
import SimpleAppointmentCard from '../../common/SimpleAppointmentCard';
import { scheduleData } from '../../../data/calendar';

const UpcomingSchedule: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-3 h-full flex flex-col">
      <h2 className="text-xl font-semibold text-gray-900 mb-3">
        The Upcoming Schedule
      </h2>

      <div className="flex-1 space-y-3">
        {scheduleData.map((group) => (
          <div key={group.day}>
            <h3 className="text-sm font-medium text-gray-500 mb-2">
              On {group.day}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {group.appointments.map((appointment) => (
                <SimpleAppointmentCard
                  key={appointment.title}
                  title={appointment.title}
                  time={appointment.time}
                  icon={appointment.icon}
                  variant="default"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule; 