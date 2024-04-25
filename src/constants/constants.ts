
import { iControlButtonsTypes, iMapPositionTypes } from "../types/[types].ts";

export const GOOGLE_MAP_KEY: string = "AIzaSyAqb13_4youp5TChGV-LRfDTG3jA4dEc9s";
export const DEFAULT_CENTER: iMapPositionTypes = { lat: 24.7, lng: 54.9 };
export const DEFAULT_ZOOM: number = 10;

export const controlButtons: iControlButtonsTypes = {
  rent: "rent",
  return: "return",
}

export const tableHeaders: string[] = [
  "Car Modal",
  "Car Vendor",
  "Available",
  "Booked By",
  "Booked Date",
  "Location",
  "Base Location"
];
