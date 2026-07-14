export interface WorkingHours {
  start: string;
  end: string;
}

export interface BusinessSettings {
  timezone: string;

  workingHours: WorkingHours;

  workingDays: string[];

  holidays: string[];
}