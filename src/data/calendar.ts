export interface TimeSlot {
  time: string;
  event?: {
    title: string;
    doctor: string;
    type: 'dentist' | 'physiotherapy';
  };
}

export interface DaySchedule {
  date: number;
  day: string;
  slots: TimeSlot[];
}

export interface ScheduleGroup {
  day: string;
  appointments: {
    title: string;
    time: string;
    icon: string;
  }[];
}

export const weekSchedule: DaySchedule[] = [
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

export const scheduleData: ScheduleGroup[] = [
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