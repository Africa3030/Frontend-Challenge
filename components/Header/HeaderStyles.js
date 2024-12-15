import css from "styled-jsx/css";

export default css`
  .is-visible {
    opacity: 0;
    pointer-events: none;
  }

  @media (min-width: 768px) {
    .is-visible {
      opacity: 1;
      pointer-events: auto;
    }
  }
`;
