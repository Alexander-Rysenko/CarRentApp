import { GOOGLE_MAP_KEY } from "../constants/constants.ts";
import { iNearestRoadsApiTypes } from "../types/[types].ts";

export const getNearestRoads = async (lat: number, lng: number) => {
  try {
    const response: Response = await fetch(
      `https://roads.googleapis.com/v1/nearestRoads?points=${lat}%2C${lng}&key=${GOOGLE_MAP_KEY}`,
      { method: "GET" },
    );
    const nearestRoadsData: iNearestRoadsApiTypes = await response.json();

    return nearestRoadsData;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};
