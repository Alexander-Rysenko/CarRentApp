import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';

import CarCatalogue from "./index.tsx";

import { carCatalog, defaultActiveCar } from "../../mockData.ts";


describe('Car Catalogue component tests', () => {
  it('Renders correctly initial component', () => {
    render(
      <CarCatalogue
        carCatalogueData={carCatalog}
        activeCar={defaultActiveCar}
        fieldValue="test value"
        isSelectionMapPosition={false}
        handleRowClick={() => null}
        handleControlClick={() => null}
        handleNameChange={() => null}
      />
    )

    expect(screen.getByTestId<HTMLElement>("car-catalog")).toBeInTheDocument();
  });
});
