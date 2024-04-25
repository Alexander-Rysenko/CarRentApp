import { ReactElement, useMemo, useId, FC, useCallback } from "react";
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import Car from "../../components/Car";
import { iActiveCarTypes, iCarCatalogue, iMapPositionTypes, iNearestRoadsApiTypes, iNearestRoadsTypes } from "../../types/[types].ts";
import { DEFAULT_CENTER, DEFAULT_ZOOM, GOOGLE_MAP_KEY } from "../../constants/constants.ts";
import { getNearestRoads } from "../../api/api.ts";
import { MapMouseEvent } from "@vis.gl/react-google-maps";

import "./map.scss";

type iGoogleMapTypes = {
  carCatalogueData: iCarCatalogue[];
  isSelectionMapPosition: boolean;
  activeCar: iActiveCarTypes;
  getSelectedPosition: (position: iNearestRoadsTypes) => void;
  setActiveCar: (data: iActiveCarTypes) => void;
};


const GoogleMap: FC<iGoogleMapTypes> = ({
  carCatalogueData,
  isSelectionMapPosition,
  activeCar,
  getSelectedPosition,
  setActiveCar
}): ReactElement => {
  const handleMapClick = useCallback(async ({ detail }: MapMouseEvent): Promise<void> => {
    if (isSelectionMapPosition && detail?.latLng) {
      const position: iMapPositionTypes = detail.latLng;
      const nearestRoads: iNearestRoadsApiTypes | undefined = await getNearestRoads(position?.lat, position?.lng);

      if (nearestRoads?.snappedPoints) {
        getSelectedPosition(nearestRoads.snappedPoints[0]);
      }
    }

  }, [isSelectionMapPosition, getSelectedPosition]);

  const carList: ReactElement[] = useMemo(() => {
    return carCatalogueData?.map((item: iCarCatalogue, index: number) => (
      <div key={index}>
        {item.available && (
          <Car
            data-testid={`map-marker-${index}`}
            carData={item}
            activeCar={activeCar}
            setActiveCar={setActiveCar}
          />
        )}
      </div>
    ));
  }, [carCatalogueData, activeCar]);

  return (
    <div data-testid="google-map" className="googleMapWrapper">
      <APIProvider apiKey={GOOGLE_MAP_KEY}>
        <Map
          mapId={useId()}
          defaultCenter={DEFAULT_CENTER}
          defaultZoom={DEFAULT_ZOOM}
          onClick={handleMapClick}
        >
          {carList}
        </Map>
      </APIProvider>
    </div>
  )
};

export default GoogleMap;
