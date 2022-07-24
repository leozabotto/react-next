import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from ".";

describe('<Button />', () => {
  it('should render the button with the text', () => {
    render(<Button text="load more" />);

    const button = screen.getByRole('button', {
      name: /load more/i
    });

    expect(button).toBeInTheDocument();
  });

  it('should call function on button click', () => {
    const fn = jest.fn();
    render(<Button text="load more" onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });
    
    //userEvent.click(button);
    fireEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });
  
  it('should be disabled when disabled is true', () => {
    render(<Button text="load more" disabled={true} />);

    expect(screen.getByRole('button', { name: /load more/i }))
      .toBeDisabled();
  });

  it('should be enabled when disabled is false', () => {
    render(<Button text="load more" disabled={false} />);

    expect(screen.getByRole('button', { name: /load more/i }))
      .toBeEnabled();
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(
      <Button text="Load more" disabled={false} onClick={fn} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});