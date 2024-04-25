import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';

import GoogleMap from "./index.tsx";

import { carCatalog, defaultActiveCar } from "../../mockData.ts";


describe('Google Map component tests', () => {
  it('Renders correctly initial component', () => {
    render(
      <GoogleMap
        carCatalogueData={carCatalog}
        isSelectionMapPosition={false}
        activeCar={defaultActiveCar}
        getSelectedPosition={() => null}
        setActiveCar={() => null}
      />
    )

    expect(screen.getByTestId<HTMLElement>("google-map")).toBeInTheDocument();
  });
});
