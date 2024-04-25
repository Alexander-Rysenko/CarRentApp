import '@testing-library/jest-dom'
import Button from "./index.tsx"
import { render, fireEvent } from '@testing-library/react';

describe('Button component', () => {

  it('Should correctly render without crashing', () => {
    const { getByText } = render(<Button>Test Button</Button>);

    expect(getByText('Test Button')).toBeInTheDocument();
  });

  it('Should call onClick when clicked', () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(<Button onClick={mockOnClick}>Test Button</Button>);

    fireEvent.click(getByText('Test Button'));

    expect(mockOnClick).toBeCalledTimes(1);
  });
});
