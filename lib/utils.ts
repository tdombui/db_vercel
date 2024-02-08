import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import AWS from 'aws-sdk'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Get sizes
export function getSizeName(value: string) {
  switch (value) {
    case "xs":
      return "X-Small"
    case "s":
      return "Small"
    case "m":
      return "Medium"
    case "l":
      return "Large"
    case "xl":
      return "X-Large"
    case "one-size":
      return "One Size"
  }
}

export function getColorName(value: string) {
  switch (value) {
    case "gry":
      return "Heather Gray"
    case "brg":
      return "British Racing Green"
    case "tan":
      return "Desert Tan"
    case "blk":
      return "Black"
  }
}

// Send email
export const validateString = (value: unknown, maxLength: number) => {
  if (!value || typeof value != "string" || value.length > maxLength) {
    return false;
  }
  return true;
}
export const getErrorMessage = (error: unknown): string => {
  let message: string;
  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong"
  }
  return message;
};