export interface HealthIndicator {
  icon: string;
  title: string;
  date: string;
  status: number;
  color: string;
}

export interface AnatomyIndicator {
  label: string;
  position: string;
  icon: string;
  color: string;
}

export const healthIndicators: HealthIndicator[] = [
  {
    icon: '🫁',
    title: 'Lungs',
    date: '26 Oct 2021',
    status: 75,
    color: 'from-red-400 to-red-500'
  },
  {
    icon: '🦷',
    title: 'Teeth',
    date: '26 Oct 2021',
    status: 90,
    color: 'from-cyan-400 to-cyan-500'
  },
  {
    icon: '🦴',
    title: 'Bone',
    date: '26 Oct 2021',
    status: 85,
    color: 'from-orange-400 to-orange-500'
  }
];

export const anatomyIndicators: AnatomyIndicator[] = []; 