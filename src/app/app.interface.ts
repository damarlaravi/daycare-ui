export interface GalleryImage {
  url: string
}

export interface Event {
  day: string;
  type: string;
  description: string;
  timing: string;
  location: string
}

export interface DayCareTiming {
  dayStr: string;
  timing: string;
  className?: string;
}
