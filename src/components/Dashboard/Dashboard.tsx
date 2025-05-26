import React from 'react';
import DashboardOverview from './Overview/DashboardOverview';
import CalendarView from './Calendar/CalendarView';
import UpcomingSchedule from './Schedule/UpcomingSchedule';
import ActivityFeed from './Activity/ActivityFeed';

const Dashboard: React.FC = () => {
  return (
    <div className="flex-1 bg-gray-50 p-3 h-[calc(100vh-32px)] overflow-hidden">
      <div className="grid grid-cols-12 gap-2 h-full">
        {/* Left Column - Health Status */}
        <div className="col-span-6 space-y-2 h-full">
          <div className="h-[65%]">
            <DashboardOverview />
          </div>
          <div className="h-[33%]">
            <ActivityFeed />
          </div>
        </div>

        {/* Right Column - Calendar and Schedule */}
        <div className="col-span-6 space-y-2 h-full">
          <div className="h-[55%]">
            <CalendarView />
          </div>
          <div className="h-[43%]">
            <UpcomingSchedule />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 