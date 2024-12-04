import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it's rendered", () => {
    test("Then it should show an Image with the alt 'Danelfin AI Stock Picker (Logo)'", () => {
      const altText = "Danelfin AI Stock Picker (Logo)";

      render(<Header />);
      const imageElement = screen.getByAltText(altText);

      expect(imageElement).toBeDefined();
      expect(imageElement.getAttribute("alt")).toBe(altText);
    });

    test("Then it should show a 'Log In' button", () => {
      const buttonText = "Log In";

      render(<Header />);
      const loginButton = screen.getByRole("button", { name: buttonText });

      expect(loginButton).toBeDefined();
      expect(loginButton).toHaveTextContent(buttonText);
    });

    test("Then it should show a 'Start Trial' button", () => {
      const buttonText = "Start Trial";

      render(<Header />);
      const trialButton = screen.getByRole("button", { name: buttonText });

      expect(trialButton).toBeDefined();
      expect(trialButton).toHaveTextContent(buttonText);
    });
  });
});
