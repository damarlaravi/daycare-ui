import {FormControl} from "@angular/forms";

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

export interface User {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
}

export interface LoginUser {
  usernameOrEmail: string;
  password: string;
}
