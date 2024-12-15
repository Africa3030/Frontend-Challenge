import React from "react";

export const CrossPopup = ({ color, mobile }: any) => {
  return mobile ? (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5584 1.44158L1.44155 16.5584"
        stroke={`${color || "#ffffff"}`}
        strokeWidth="1.6"
        stroke-linecap="square"
      />
      <path
        d="M16.5584 16.5584L1.4416 1.44158"
        stroke={`${color || "#ffffff"}`}
        strokeWidth="1.6"
        stroke-linecap="square"
      />
    </svg>
  ) : (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.448 1.55197L1.55191 20.448"
        stroke={`${color || "#ffffff"}`}
        strokeWidth="2"
        strokeLinecap="square"
      />
      <path
        d="M20.4481 20.448L1.55203 1.55197"
        stroke={`${color || "#ffffff"}`}
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>
  );
};

export default CrossPopup;
