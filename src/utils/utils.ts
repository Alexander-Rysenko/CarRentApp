import { iCarCatalogue, iMapPositionTypes } from "../types/[types].ts";
import { carCatalog, initialPlaces } from "../mockData.ts";

export const addCarPosition = () => {
  const shuffledList: iMapPositionTypes[] = shuffle(initialPlaces);

  return carCatalog.map((item: iCarCatalogue, index: number) => {
    const position: iMapPositionTypes = shuffledList[index];

    return {
      ...item,
      location: position,
      baseLocation: position
    }
  });
};

export const shuffle = (list: iMapPositionTypes[]) => {
  return list.sort(() => Math.random() - 0.5);
}

export const tablePositionFormat = (position: iMapPositionTypes) => {
  return `${position?.lat.toFixed(6)}, ${position?.lng.toFixed(6)}`;
}
