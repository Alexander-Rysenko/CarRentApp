// Mock data
import { iActiveCarTypes, iCarCatalogue, iMapPositionTypes } from "./types/[types].ts";

export const defaultPosition: iMapPositionTypes = {
  lat: 0,
  lng: 0
};

export const defaultActiveCar: iActiveCarTypes = {
  id: "",
  available: true
};

export const carCatalog: iCarCatalogue[] = [
  {
    id: "1",
    carModel: "Model 3",
    carVendor: "Tesla",
    available: true,
    bookedBy: "",
    bookedDate: "",
    location: defaultPosition,
    baseLocation: defaultPosition,
  },
  {
    id: "2",
    carModel: "Golf",
    carVendor: "Volkswagen",
    available: true,
    bookedBy: "",
    bookedDate: "",
    location: defaultPosition,
    baseLocation: defaultPosition,
  },
  {
    id: "3",
    carModel: "Polo",
    carVendor: "Volkswagen",
    available: true,
    bookedBy: "",
    bookedDate: "",
    location: defaultPosition,
    baseLocation: defaultPosition,
  },
  {
    id: "4",
    carModel: "Polo",
    carVendor: "Volkswagen",
    available: true,
    bookedBy: "",
    bookedDate: "",
    location: defaultPosition,
    baseLocation: defaultPosition,
  },
  {
    id: "5",
    carModel: "Polo",
    carVendor: "Volkswagen",
    available: true,
    bookedBy: "",
    bookedDate: "",
    location: defaultPosition,
    baseLocation: defaultPosition,
  },
  {
    id: "6",
    carModel: "Range Rover",
    carVendor: "Land Rover",
    available: true,
    bookedBy: "",
    bookedDate: "",
    location: defaultPosition,
    baseLocation: defaultPosition,
  },
  {
    id: "7",
    carModel: "911",
    carVendor: "Porsche",
    available: true,
    bookedBy: "",
    bookedDate: "",
    location: defaultPosition,
    baseLocation: defaultPosition,
  }
];

export const initialPlaces: iMapPositionTypes[] = [
  { lat: 25.043856335890112, lng: 55.12209965158195 },
  { lat: 24.36768686125466, lng: 54.76598553365419 },
  { lat: 24.53410336340573, lng: 54.48373357848677 },
  { lat: 24.34481638461524, lng: 54.50228696435262 },
  { lat: 25.06332535529201, lng: 55.22143197500817 },
  { lat: 24.45573009977286, lng: 54.624940770483775 },
  { lat: 25.17305754091435, lng: 55.24168801748864 },
  { lat: 25.125508663617506, lng: 55.23550820791833 },
  { lat: 24.495726347467826, lng: 54.372255223608775 },
  { lat: 24.39660497497675, lng: 54.743285580439895 },
  { lat: 24.32029125101932, lng: 54.57162420348677 },
  { lat: 24.612688134630474, lng: 54.76514909378478 },
  { lat: 24.540349720195813, lng: 54.69247381286177 },
  { lat: 25.230041019915202, lng: 55.31020310743762 },
  { lat: 24.795462200679776, lng: 54.863339401401966 },
  { lat: 25.1874038457976, lng: 55.299881671359124 },
  { lat: 25.11055859866704, lng: 55.21994265838023 },
  { lat: 24.41661406662761, lng: 54.48922674254927 },
  { lat: 25.10465182091303, lng: 55.150763123468124 },
  { lat: 24.878639417265664, lng: 55.1228300691236 },
  { lat: 24.367836352973384, lng: 54.520812435908645 },
  { lat: 25.017784704095586, lng: 55.09931246048102 },
];

export const latAreaMinLimitation = 24.162000;
export const latAreaMaxLimitation = 25.777000;
export const lngAreaMinLimitation = 54.294000;
export const lngAreaMaxLimitation = 55.626000;

export const defaultPanelText: string =  "Please choose car return position clicking on the map near road";

export const defaultCarImage: string = "data:image/png;base64,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";

