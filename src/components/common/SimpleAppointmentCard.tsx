import React from 'react';

interface SimpleAppointmentCardProps {
  title: string;
  time: string;
  icon: string;
  variant?: 'default' | 'highlight';
}

const SimpleAppointmentCard: React.FC<SimpleAppointmentCardProps> = ({
  title,
  time,
  icon,
  variant = 'default'
}) => {
  return (
    <div className={`rounded-xl p-3 ${
      variant === 'highlight' 
        ? 'bg-violet-600 text-white' 
        : 'bg-violet-50 text-gray-900'
    }`}>
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-medium text-base mb-1">{title}</h4>
          <p className={`text-sm ${variant === 'highlight' ? 'text-white/90' : 'text-gray-500'}`}>{time}</p>
        </div>
        <span className="text-xl">{icon}</span>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard; 