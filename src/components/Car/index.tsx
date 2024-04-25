import { FC, useCallback, useState } from 'react';
import {
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef
} from '@vis.gl/react-google-maps';

import { iActiveCarTypes, iCarCatalogue } from "../../types/[types].ts";
import { defaultActiveCar, defaultCarImage } from "../../mockData.ts";

type iCarTypes = {
  carData: iCarCatalogue;
  activeCar: iActiveCarTypes;
  setActiveCar: (data: iActiveCarTypes) => void;
};


const Car: FC<iCarTypes> = ({ carData, setActiveCar, activeCar }) => {
  const [infowindowOpen, setInfowindowOpen] = useState(false);
  const [markerRef, marker] = useAdvancedMarkerRef();
  const {
    id,
    carModel,
    carVendor,
    available,
    location
  } = carData;

  const handleMarkerClick = useCallback((): void => {
    setInfowindowOpen(true);
    setActiveCar({ id, available });
  }, [carData]);

  const handleMarkerClose = useCallback((): void => {
    setInfowindowOpen(false)
    setActiveCar(defaultActiveCar);
  }, [setActiveCar]);

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        onClick={handleMarkerClick}
        position={location}
        title={carModel}
      >
        <img src={defaultCarImage} alt="Car" />
      </AdvancedMarker>
      {(infowindowOpen && activeCar.id === id) && (
        <InfoWindow
          anchor={marker}
          maxWidth={200}
          onCloseClick={handleMarkerClose}
        >
          <span>{`${carVendor} ${carModel}`}</span>
        </InfoWindow>
        )}
    </>
  );
};

export default Car;
