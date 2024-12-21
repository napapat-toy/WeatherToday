import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const aqiBand = (aqi: number) => {
  let band;
  if (aqi > 0 && aqi <= 35) {
    band = "Low";
  } else if (aqi <= 53) {
    band = "Moderate";
  } else if (aqi <= 70) {
    band = "High";
  } else if (aqi > 70) {
    band = "Very High";
  }
  return band;
};

export const uvIndex = (uv: number) => {
  let text;
  if (uv > 0 && uv <= 2) {
    text = "Low";
  } else if (uv <= 5) {
    text = "Medium";
  } else if (uv <= 7) {
    text = "High";
  } else if (uv <= 10) {
    text = "Very High";
  } else if (uv > 10) {
    text = "Extremely High";
  }
  return text;
};
