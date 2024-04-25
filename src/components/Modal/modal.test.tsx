import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react';

import Modal from "./index.tsx";


describe('Modal component tests', () => {
  it('Renders correctly initial component', () => {
    render(
      <Modal
        content={<div></div>}
        onClose={() => null}
      />
    )

    expect(screen.getByTestId<HTMLElement>("modal")).toBeInTheDocument();
  });

  it('Should call close when clicked', () => {
    const mockOnClick = jest.fn();
    render(
      <Modal
        content={<div></div>}
        onClose={mockOnClick}
      />
    )

    const closButton: HTMLButtonElement = screen.getByRole('button', { name: "+" });

    fireEvent.click(closButton);
    expect(mockOnClick).toBeCalledTimes(1);
  });
});
