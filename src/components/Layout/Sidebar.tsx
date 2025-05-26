import React from 'react';
import { generalNavItems, toolsNavItems } from '../../data/navigation';
import { LayoutGrid, History, CalendarDays, Clock, BarChart3, MessageSquare, HeadphonesIcon, Settings } from 'lucide-react';

const NavItem: React.FC<{ icon: React.ReactNode; label: string; isActive?: boolean }> = ({
  icon,
  label,
  isActive
}) => (
  <a
    href="#"
    className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-xl transition-colors ${
      isActive
        ? 'bg-violet-900 text-white'
        : 'text-gray-400 hover:bg-gray-50'
    }`}
  >
    <span className="w-5 h-5 mr-3">{icon}</span>
    {label}
  </a>
);

const Sidebar: React.FC = () => {
  const icons = {
    Dashboard: <LayoutGrid size={20} />,
    History: <History size={20} />,
    Calendar: <CalendarDays size={20} />,
    Appointments: <Clock size={20} />,
    Statistics: <BarChart3 size={20} />,
    Chat: <MessageSquare size={20} />,
    Support: <HeadphonesIcon size={20} />,
    Setting: <Settings size={20} />
  };

  return (
    <aside className="w-64 bg-gray-50 h-screen py-8 px-6 flex flex-col">
      <div>
        <h1 className="text-2xl font-bold mb-12">
          <span className="text-cyan-400">Health</span>
          <span className="text-gray-900">care.</span>
        </h1>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xs font-medium text-gray-400 mb-4 uppercase tracking-wider px-4">
              General
            </h3>
            <nav className="space-y-1">
              {generalNavItems.map((item) => (
                <NavItem
                  key={item.label}
                  icon={icons[item.label as keyof typeof icons]}
                  label={item.label}
                  isActive={item.isActive}
                />
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-xs font-medium text-gray-400 mb-4 uppercase tracking-wider px-4">
              Tools
            </h3>
            <nav className="space-y-1">
              {toolsNavItems.filter(item => item.label !== 'Setting').map((item) => (
                <NavItem
                  key={item.label}
                  icon={icons[item.label as keyof typeof icons]}
                  label={item.label}
                  isActive={item.isActive}
                />
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-8">
        <NavItem
          icon={icons['Setting']}
          label="Setting"
          isActive={false}
        />
      </div>
    </aside>
  );
};

export default Sidebar; 