import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { userEvent } from "@testing-library/user-event";

import Table from "./index.tsx"

import { tableHeaders } from "../../constants/constants.ts";
import { carCatalog, defaultActiveCar } from "../../mockData.ts";


describe('Table component tests', () => {
  it('Renders correctly initial component', () => {
    render(
      <Table
        tableData={carCatalog}
        tableHeaders={tableHeaders}
        activeCar={defaultActiveCar}
        handleRowClick={() => null}
      />
    )

    expect(screen.getByRole<HTMLTableElement>("table")).toBeInTheDocument();
  });

  it('Should call onClick when clicked', async() => {
    const mockOnClick = jest.fn();
    const { findByTestId } = render(
      <Table
        tableData={carCatalog}
        tableHeaders={tableHeaders}
        activeCar={defaultActiveCar}
        handleRowClick={mockOnClick}
      />
    );

    const tableRow = await findByTestId("table-row-element-0");

    await userEvent.click(tableRow);
    expect(mockOnClick).toBeCalledTimes(1);
  });

  it('Check active table row', async () => {
    render(
      <Table
        tableData={carCatalog}
        tableHeaders={tableHeaders}
        activeCar={{ id: "1", available: true }}
        handleRowClick={() => null}
      />
    );

    const tableRow = await screen.findByTestId<HTMLTableRowElement>("table-row-element-0");

    expect(tableRow).toHaveClass("active");
  });
});
