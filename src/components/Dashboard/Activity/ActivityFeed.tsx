import React from 'react';
import { activityData } from '../../../data/activity';

interface ActivityBar {
  value: number;
  color: 'cyan' | 'violet' | 'gray';
}

interface DayActivity {
  day: string;
  bars: ActivityBar[];
}

const ActivityFeed: React.FC = () => {
  const maxValue = Math.max(
    ...activityData.flatMap(day => day.bars.map(bar => bar.value))
  );

  const getBarColor = (color: 'cyan' | 'violet' | 'gray') => {
    switch (color) {
      case 'cyan':
        return 'bg-cyan-400';
      case 'violet':
        return 'bg-violet-600';
      default:
        return 'bg-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-xl p-3">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Activity</h2>
        <span className="text-xs text-gray-500">3 appointments on this week</span>
      </div>

      <div className="flex items-end justify-between h-[140px] mt-2 px-3">
        {activityData.map((day) => (
          <div key={day.day} className="flex flex-col items-center">
            <div className="flex items-end gap-1 h-[110px]">
              {day.bars.map((bar, index) => (
                <div
                  key={index}
                  className={`w-2 ${getBarColor(bar.color)} rounded-none`}
                  style={{
                    height: `${Math.max((bar.value / maxValue) * 100, 6)}px`,
                  }}
                />
              ))}
            </div>
            <span className="mt-3 text-xs text-gray-500">{day.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed; 