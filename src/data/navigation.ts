import type { IconType } from 'react-icons';
import {
  MdDashboard,
  MdHistory,
  MdCalendarToday,
  MdSchedule,
  MdBarChart,
  MdChat,
  MdSupport,
  MdSettings
} from 'react-icons/md';

export interface NavItem {
  icon: IconType;
  label: string;
  isActive?: boolean;
}

export const generalNavItems: NavItem[] = [
  { icon: MdDashboard, label: 'Dashboard', isActive: true },
  { icon: MdHistory, label: 'History' },
  { icon: MdCalendarToday, label: 'Calendar' },
  { icon: MdSchedule, label: 'Appointments' },
  { icon: MdBarChart, label: 'Statistics' }
];

export const toolsNavItems: NavItem[] = [
  { icon: MdChat, label: 'Chat' },
  { icon: MdSupport, label: 'Support' },
  { icon: MdSettings, label: 'Setting' }
]; 