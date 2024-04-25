import { ReactElement, FC, ChangeEvent } from "react";
import Table from "../../components/Table";
import ControlPanel from "../../components/ControlPanel";
import NameField from "../../components/NameField";
import { tableHeaders } from "../../constants/constants.ts";
import { iActiveCarTypes, iCarCatalogue } from "../../types/[types].ts";

import "./carCatalogue.scss";

type iCarCatalogueTypes = {
  carCatalogueData: iCarCatalogue[];
  activeCar: iActiveCarTypes;
  fieldValue: string | number;
  isSelectionMapPosition: boolean;
  handleRowClick: (carData: iActiveCarTypes) => void;
  handleControlClick: (action: string) => void;
  handleNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
};


const CarCatalogue: FC<iCarCatalogueTypes> = ({
  carCatalogueData,
  activeCar,
  fieldValue,
  isSelectionMapPosition,
  handleRowClick,
  handleControlClick,
  handleNameChange
}): ReactElement => {

  return (
    <div data-testid="car-catalog" className="carCatalogueWrapper">
      <Table
        tableData={carCatalogueData}
        tableHeaders={tableHeaders}
        activeCar={activeCar}
        handleRowClick={handleRowClick}
      />
      <NameField
        value={fieldValue}
        label="Name"
        onChange={handleNameChange}
      />
      <ControlPanel
        activeCar={activeCar}
        isSelectionMapPosition={isSelectionMapPosition}
        handleControlClick={handleControlClick}
      />
    </div>
  )
};

export default CarCatalogue;
