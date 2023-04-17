import { describe, it, vi } from 'vitest'
import { render } from '@testing-library/react';
import ErrorPage from './ErrorPage.views';

vi.mock("react-router-dom", () => ({
  useRouteError: () => ({
    statusText: "404 Not Found",
    message: "Oops! Sorry, an unexpected error has occurred.",
  }),
}));

describe("ErrorPage", () => {
  it("renders the error message", () => {
    const { getByText } = render(<ErrorPage />);
    const errorMessage1 = getByText(/Oops!/i);
    const errorMessage2 = getByText(/Sorry, an unexpected error has occurred./i);
    const errorMessage3 = getByText(/404 Not Found/i);

    expect(errorMessage1).toBeInTheDocument();
    expect(errorMessage2).toBeInTheDocument();
    expect(errorMessage3).toBeInTheDocument();
  });
});