import { ChangeEvent, ReactElement, useCallback, useEffect, useMemo, useState } from "react";
import GoogleMap from "../Map";
import CarCatalogue from "../CarCatalogue";
import { iActiveCarTypes, iCarCatalogue, iMapPositionTypes, iNearestRoadsTypes } from "../../types/[types].ts";
import { controlButtons } from "../../constants/constants.ts";
import { addCarPosition } from "../../utils/utils.ts";
import { defaultActiveCar } from "../../mockData.ts";

import "../../styles/app.scss";
import Modal from "../../components/Modal";
import Button from "../../components/Button";


const App = (): ReactElement => {
  const [carCatalogueData, setCarCatalogueData] = useState<iCarCatalogue[]>([]);
  const [activeCar, setActiveCar] = useState<iActiveCarTypes>(defaultActiveCar);
  const [nameFieldValue, setNameFieldValue] = useState<string>("");
  const [isSelectionMapPosition, setIsSelectionMapPosition] = useState<boolean>(false);
  const [isModalAppear, setIsModalAppear] = useState<boolean>(false);


  useEffect(() => {
    const formattedCarCatalogue: iCarCatalogue[] = addCarPosition();

    setCarCatalogueData(formattedCarCatalogue);
  }, []);

  const updateCatalogData = useCallback((action: string, location?: iMapPositionTypes): void => {
    const newCatalogueData: iCarCatalogue[] = carCatalogueData.map((item: iCarCatalogue) => {
      if (item.id === activeCar?.id) {
        if (action === controlButtons.rent) {
          return {
            ...item,
            available: false,
            bookedBy: nameFieldValue,
            bookedDate: new Date(Date.now()).toLocaleString(),
          }
        }

        if (action === controlButtons.return) {
          return {
            ...item,
            available: true,
            bookedBy: "",
            bookedDate: "",
            location: location,
          }
        }
      }

      return item;
    });

    if (action === controlButtons.rent) {
      setIsModalAppear(true);
    }
    if (action === controlButtons.return) {
      setIsSelectionMapPosition(false);
    }

    setCarCatalogueData(newCatalogueData);
    setActiveCar(defaultActiveCar);
  }, [carCatalogueData, activeCar, nameFieldValue]);

  const handleRowClick = useCallback(({ id, available }: iActiveCarTypes): void => {
    setActiveCar({
      id,
      available
    });
  }, []);

  const handleControlClick = useCallback((action: string): void => {
    if (action === controlButtons.return) {
      setIsSelectionMapPosition(true);
    }

    if (action === controlButtons.rent) {
      updateCatalogData(action);
    }
  }, [carCatalogueData, activeCar, nameFieldValue]);

  const handleNameChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    setNameFieldValue(e.target.value);
  }, []);

  const getSelectedPosition = useCallback((position: iNearestRoadsTypes): void => {
    const location: iMapPositionTypes = {
      lat: position.location.latitude,
      lng: position.location.longitude
    }

    updateCatalogData(controlButtons.return, location);
  }, [updateCatalogData]);

  const onModalClose = useCallback((): void => {
    setIsModalAppear(false);
    setNameFieldValue("");
  }, []);

  const getModalContent: ReactElement = useMemo(() => (
     <div className="formModalContent">
       <div className="formModalInfoText">
         Dear {nameFieldValue ? nameFieldValue : "Guest"} thank you for rental car!
       </div>
       <Button onClick={onModalClose}>Ok</Button>
     </div>
  ), [nameFieldValue]);

  return (
    <div data-testid="main-component" className="mainContent">
      <GoogleMap
        carCatalogueData={carCatalogueData}
        isSelectionMapPosition={isSelectionMapPosition}
        getSelectedPosition={getSelectedPosition}
        activeCar={activeCar}
        setActiveCar={setActiveCar}
      />
      <CarCatalogue
        carCatalogueData={carCatalogueData}
        activeCar={activeCar}
        fieldValue={nameFieldValue}
        isSelectionMapPosition={isSelectionMapPosition}
        handleRowClick={handleRowClick}
        handleControlClick={handleControlClick}
        handleNameChange={handleNameChange}
      />

      {isModalAppear && (
        <Modal
          content={getModalContent}
          onClose={onModalClose}
        />
      )}
    </div>
  );
}

export default App;
