import React from "react";

export const PaginationArrow = ({ active, position, extreme }: any) => {
  return (
    <>
      {position === "left" && extreme && (
        <svg
          width="12"
          height="12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 11 5 5.97 11 1"
            stroke={active ? "#6C6C6C" : "#DFDFDF"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.5 1.455v9.09"
            stroke={active ? "#6C6C6C" : "#DFDFDF"}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )}
      {position === "left" && !extreme && (
        <svg
          width="12"
          height="12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 11 3 5.97 9 1"
            stroke={active ? "#6C6C6C" : "#DFDFDF"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {position === "right" && !extreme && (
        <svg
          width="12"
          height="12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m3 11 6-5.03L3 1"
            stroke={active ? "#6C6C6C" : "#DFDFDF"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {position === "right" && extreme && (
        <svg
          width="12"
          height="12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m1 11 6-5.03L1 1"
            stroke={active ? "#6C6C6C" : "#DFDFDF"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.5 1.455v9.09"
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
