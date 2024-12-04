import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header component, ", () => {
  describe("When it's rendered", () => {
    test("Then it should show an Image with the alt 'Danelfin plus logo'", () => {
      const altText = "Danelfin plus logo";

      render(<Header />);
      const imageElement = screen.getByAltText(altText);

      expect(imageElement).not.toBeNull();
      expect(imageElement).toBeDefined();
      expect(imageElement.getAttribute("alt")).toBe(altText);
    });
  });
});
