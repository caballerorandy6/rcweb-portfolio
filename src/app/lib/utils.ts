import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const yearsOfExperience = (startYear: number) => {
  const currentYear: number = new Date().getFullYear();
  return currentYear - startYear;
};
