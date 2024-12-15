import React from "react";

export const ArrowLateralScrolling = ({ active, position }: any) => {
  return (
    <>
      {position === "left" ? (
        active ? (
          <span className="group">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43958 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43958 0.5 16 0.5C24.5604 0.5 31.5 7.43959 31.5 16Z"
                fill="white"
                className="stroke-[#D8D8D8] group-hover:stroke-[#272727]"
              />
              <path
                d="M19.0471 10.4081L12.0391 16.0002L19.0471 21.5923"
                strokeWidth="2"
                strokeLinecap="square"
                stroke="#272727"
              />
            </svg>
          </span>
        ) : (
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43958 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43958 0.5 16 0.5C24.5604 0.5 31.5 7.43959 31.5 16Z"
              fill="white"
              stroke="#D8D8D8"
            />
            <path
              d="M19.0471 10.4081L12.0391 16.0002L19.0471 21.5923"
              strokeWidth="2"
              strokeLinecap="square"
              stroke="#D8D8D8"
            />
          </svg>
        )
      ) : position === "right" && active ? (
        <span className="group">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43958 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43958 0.5 16 0.5C24.5604 0.5 31.5 7.43959 31.5 16Z"
              fill="white"
              className="stroke-[#D8D8D8] group-hover:stroke-[#272727]"
            />
            <path
              d="M12.9529 10.4081L19.9609 16.0002L12.9529 21.5923"
              strokeWidth="2"
              strokeLinecap="square"
              stroke="#272727"
            />
          </svg>
        </span>
      ) : (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43958 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43958 0.5 16 0.5C24.5604 0.5 31.5 7.43959 31.5 16Z"
            fill="white"
            stroke="#D8D8D8"
          />
          <path
            d="M12.9529 10.4081L19.9609 16.0002L12.9529 21.5923"
            strokeWidth="2"
            strokeLinecap="square"
            stroke="#D8D8D8"
          />
        </svg>
      )}
    </>
  );
};

export default ArrowLateralScrolling;
