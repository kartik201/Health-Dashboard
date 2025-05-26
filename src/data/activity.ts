export interface ActivityBar {
  value: number;
  color: 'cyan' | 'violet' | 'gray';
}

export interface DayActivity {
  day: string;
  bars: ActivityBar[];
}

export const activityData: DayActivity[] = [
  {
    day: 'Mon',
    bars: [
      { value: 60, color: 'cyan' },
      { value: 20, color: 'gray' },
      { value: 40, color: 'cyan' },
      { value: 30, color: 'gray' }
    ]
  },
  {
    day: 'Tues',
    bars: [
      { value: 80, color: 'cyan' },
      { value: 30, color: 'gray' },
      { value: 50, color: 'violet' },
      { value: 25, color: 'cyan' }
    ]
  },
  {
    day: 'Wed',
    bars: [
      { value: 20, color: 'cyan' },
      { value: 35, color: 'gray' },
      { value: 40, color: 'violet' },
      { value: 30, color: 'violet' }
    ]
  },
  {
    day: 'Thurs',
    bars: [
      { value: 50, color: 'cyan' },
      { value: 25, color: 'gray' },
      { value: 35, color: 'cyan' },
      { value: 40, color: 'violet' }
    ]
  },
  {
    day: 'Fri',
    bars: [
      { value: 70, color: 'cyan' },
      { value: 25, color: 'gray' },
      { value: 45, color: 'cyan' },
      { value: 35, color: 'violet' }
    ]
  },
  {
    day: 'Sat',
    bars: [
      { value: 30, color: 'cyan' },
      { value: 20, color: 'gray' },
      { value: 35, color: 'violet' },
      { value: 25, color: 'gray' }
    ]
  },
  {
    day: 'Sun',
    bars: [
      { value: 55, color: 'cyan' },
      { value: 30, color: 'gray' },
      { value: 40, color: 'violet' },
      { value: 25, color: 'gray' }
    ]
  }
]; 