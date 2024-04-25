import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';

import NameField from "./index.tsx"


describe('Control Panel component tests', () => {
  it('Renders correctly initial component', () => {
    render(
      <NameField
        value=""
        label="Name"
        onChange={() => null}
      />
    )

    expect(screen.getByLabelText<HTMLInputElement>("Name")).toBeInTheDocument();
  });
});
