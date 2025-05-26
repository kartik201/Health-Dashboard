import React from 'react';
import AnatomySection from './AnatomySection';
import { HealthStatusCards } from './HealthStatusCards';

const DashboardOverview: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-2.5 h-full">
      <div className="flex gap-2 h-full">
        <div className="w-1/2">
          <AnatomySection />
        </div>
        <div className="w-1/2">
          <HealthStatusCards />
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview; 