import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';

import ControlPanel from "./index.tsx"

import { defaultActiveCar, defaultPanelText } from "../../mockData.ts";
import { controlButtons } from "../../constants/constants.ts";


describe('Control Panel component tests', () => {
  it('Renders correctly initial component', async () => {
    render(
      <ControlPanel
        activeCar={defaultActiveCar}
        isSelectionMapPosition={false}
        handleControlClick={() => null}
      />
    )

    expect(screen.getByText<HTMLButtonElement>(controlButtons.rent)).toBeInTheDocument();
    expect(screen.getByText<HTMLButtonElement>(controlButtons.return)).toBeInTheDocument();
    expect(screen.getByText<HTMLButtonElement>(controlButtons.return)).toBeDisabled();
  });

  it('Check button state with diff data', async () => {
    render(
      <ControlPanel
        activeCar={{
          id: "1",
          available: false
        }}
        isSelectionMapPosition={true}
        handleControlClick={() => null}
      />
    )

    expect(screen.getByText<HTMLButtonElement>(controlButtons.rent)).toBeDisabled();
    expect(screen.getByText<HTMLButtonElement>(defaultPanelText)).toBeInTheDocument();
  });
});
