import '@testing-library/jest-dom'
import { cleanup, render, screen, within } from '@testing-library/react';
import { userEvent } from "@testing-library/user-event";
import { controlButtons } from "../../constants/constants.ts";

import App from "./App.tsx"


describe('Table component tests', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    render(<App />);
  });

  afterEach(() => {
    cleanup();
  });

  it('Renders correctly initial component', async () => {
    const mainComponent = screen.getByTestId<HTMLElement>("main-component");

    expect(mainComponent).toBeInTheDocument();
  });

  it('Renders correctly map component', async () => {
    const mapComponent = screen.getByTestId<HTMLElement>("map");

    expect(mapComponent).toBeInTheDocument();
  });

  it('Should update table active class name after rent car', async () => {
    const tableRow: HTMLTableRowElement = screen.getByTestId<HTMLTableRowElement>("table-row-element-0");
    const rentButton: HTMLButtonElement = screen.getByRole('button', { name: controlButtons.rent });

    await user.click(tableRow);
    expect(tableRow).toHaveClass("active");

    await user.click(rentButton);
    expect(tableRow).not.toHaveClass("active");
  });

  it('Should add date to table after rent', async () => {
    const tableRow: HTMLTableRowElement = screen.getByTestId<HTMLTableRowElement>("table-row-element-0");
    const rentButton: HTMLButtonElement = screen.getByRole('button', { name: controlButtons.rent });
    const tableCell: HTMLTableCellElement = within(tableRow).getByTestId<HTMLTableCellElement>("table-cell-date");

    await user.click(tableRow);
    expect(tableCell).not.toHaveTextContent(new Date(Date.now()).toLocaleString());

    await user.click(rentButton);
    expect(tableCell).toHaveTextContent(new Date(Date.now()).toLocaleString());
  });

  it('Should add Booked By value to table after rent', async () => {
    const inputField: HTMLInputElement = await screen.findByLabelText<HTMLInputElement>("Name");
    const tableRow: HTMLTableRowElement = screen.getByTestId<HTMLTableRowElement>("table-row-element-0");
    const tableCell: HTMLTableCellElement = within(tableRow).getByTestId<HTMLTableCellElement>("table-cell-booked");
    const rentButton: HTMLButtonElement = screen.getByRole('button', { name: controlButtons.rent });

    await user.type(inputField, "Alex");
    await user.click(tableRow);
    await user.click(rentButton);

    expect(tableCell).toHaveTextContent("Alex");
  });

  it('Should input value change', async () => {
    const inputField: HTMLInputElement = await screen.findByLabelText<HTMLInputElement>("Name");

    expect(inputField.value).toBe("");

    await user.type(inputField, "new value");
    expect(inputField.value).toBe("new value");
  });
});
