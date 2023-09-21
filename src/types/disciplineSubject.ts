interface Activity {
  title: string;
  description: string;
}

export interface Discipline {
  id: number;
  activities: Activity[];
}
