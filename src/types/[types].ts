
export type iMapPositionTypes = {
  lat: number;
  lng: number;
};

export type iControlButtonsTypes = {
  rent: string;
  return: string;
};

export type iActiveCarTypes = {
  id: string;
  available: boolean;
};

export interface iCarCatalogue {
  id: string,
  carModel: string,
  carVendor: string,
  available: boolean,
  bookedBy: string,
  bookedDate: string,
  location: iMapPositionTypes | undefined,
  baseLocation: iMapPositionTypes,
}

export interface iNearestRoadsApiTypes {
  snappedPoints: iNearestRoadsTypes[];
}

export interface iNearestRoadsTypes {
  location: {
    latitude: number;
    longitude: number;
  };
  originalIndex: number;
  placeId: string
}
