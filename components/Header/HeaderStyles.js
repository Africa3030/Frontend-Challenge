import css from "styled-jsx/css";

export default css`
  .is-visible {
    visibility: hidden;
  }

  @media (min-width: 768px) {
    .is-visible {
      visibility: visible;
    }
  }
`;
