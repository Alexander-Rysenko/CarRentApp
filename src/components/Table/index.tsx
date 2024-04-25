import { ReactElement, useMemo, FC } from "react";
import { iActiveCarTypes, iCarCatalogue, iMapPositionTypes } from "../../types/[types].ts";
import { tablePositionFormat } from "../../utils/utils.ts";

import "./table.scss";

type iTableTypes = {
  tableHeaders: string[];
  tableData: iCarCatalogue[];
  activeCar: iActiveCarTypes;
  handleRowClick: (carData: iActiveCarTypes) => void;
};

const Table: FC<iTableTypes> = ({
  tableData,
  tableHeaders,
  activeCar,
  handleRowClick
}): ReactElement => {
  const TableHeader = useMemo((): ReactElement => {
    return (
      <thead>
        <tr>
          {tableHeaders.map((name: string, index: number) => (
            <th key={index}>{name}</th>
          ))}
        </tr>
      </thead>
    );
  }, [tableHeaders]);

  const TableBody = useMemo((): ReactElement => {
    return (
      <tbody>
          {tableData.map(({
            id,
            carModel,
            carVendor,
            available,
            bookedBy,
            bookedDate,
            location,
            baseLocation,
          }: iCarCatalogue, index: number) => (
            <tr
              key={index}
              onClick={() => handleRowClick({ id, available })}
              className={activeCar.id === id ? "active" : ""}
              data-testid={`table-row-element-${index}`}
            >
              <td>{carModel}</td>
              <td>{carVendor}</td>
              <td>
                <div className={`checkbox ${available ? "checked" : ""}`}>
                  {available}
                </div>
              </td>
              <td data-testid="table-cell-booked">{bookedBy}</td>
              <td data-testid="table-cell-date">{bookedDate}</td>
              <td>{tablePositionFormat(location as iMapPositionTypes)}</td>
              <td>{tablePositionFormat(baseLocation)}</td>
            </tr>
          ))}

      </tbody>
    );
  }, [activeCar, tableData, handleRowClick]);

  return (
    <table className="carCatalogueTable">
      {TableHeader}
      {TableBody}
    </table>
  )
};

export default Table;
