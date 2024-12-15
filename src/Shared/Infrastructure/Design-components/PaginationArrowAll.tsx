import React from "react";

export const PaginationArrow = ({ active, position }: any) => {
  return (
    <>
      {position === "left" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="13"
          viewBox="0 0 12 13"
          fill="none"
        >
          <path
            d="M11 11.5L5 6.47071L11 1.5"
            stroke={active ? "#6C6C6C" : "#DFDFDF"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 1.5V11.5"
            stroke={active ? "#6C6C6C" : "#DFDFDF"}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )}
      {position === "right" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="13"
          viewBox="0 0 12 13"
          fill="none"
        >
          <path
            d="M1 11.5L7 6.47071L1 1.5"
            stroke={active ? "#6C6C6C" : "#DFDFDF"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 1.5V11.5"
            stroke={active ? "#6C6C6C" : "#DFDFDF"}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )}
    </>
  );
};

export default PaginationArrow;
