import React, { FC, ReactElement } from "react";

type Props = {
  iconName:
    | "sun"
    | "moon"
    | "pause"
    | "previous"
    | "next"
    | "download"
    | "play"
    | "pause";
  color: string;
  size: number;
};
type Parts = {
  color: string;
  size: number;
};
export function Sun({ color, size }: Parts): ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 512 512"
    >
      <line
        x1="256"
        y1="48"
        x2="256"
        y2="96"
        style={{
          fill: "none",
          stroke: color,
          strokeLinecap: "round",
          strokeMiterlimit: 10,
          strokeWidth: "32px",
        }}
      />
      <line
        x1="256"
        y1="416"
        x2="256"
        y2="464"
        style={{
          fill: "none",
          stroke: color,
          strokeLinecap: "round",
          strokeMiterlimit: 10,
          strokeWidth: "32px",
        }}
      />
      <line
        x1="403.08"
        y1="108.92"
        x2="369.14"
        y2="142.86"
        style={{
          fill: "none",
          stroke: color,
          strokeLinecap: "round",
          strokeMiterlimit: 10,
          strokeWidth: "32px",
        }}
      />
      <line
        x1="142.86"
        y1="369.14"
        x2="108.92"
        y2="403.08"
        style={{
          fill: "none",
          stroke: color,
          strokeLinecap: "round",
          strokeMiterlimit: 10,
          strokeWidth: "32px",
        }}
      />
      <line
        x1="464"
        y1="256"
        x2="416"
        y2="256"
        style={{
          fill: "none",
          stroke: color,
          strokeLinecap: "round",
          strokeMiterlimit: 10,
          strokeWidth: "32px",
        }}
      />
      <line
        x1="96"
        y1="256"
        x2="48"
        y2="256"
        style={{
          fill: "none",
          stroke: color,
          strokeLinecap: "round",
          strokeMiterlimit: 10,
          strokeWidth: "32px",
        }}
      />
      <line
        x1="403.08"
        y1="403.08"
        x2="369.14"
        y2="369.14"
        style={{
          fill: "none",
          stroke: color,
          strokeLinecap: "round",
          strokeMiterlimit: 10,
          strokeWidth: "32px",
        }}
      />
      <line
        x1="142.86"
        y1="142.86"
        x2="108.92"
        y2="108.92"
        style={{
          fill: "none",
          stroke: color,
          strokeLinecap: "round",
          strokeMiterlimit: 10,
          strokeWidth: "32px",
        }}
      />
      <circle
        cx="256"
        cy="256"
        r="80"
        style={{
          fill: "none",
          stroke: color,
          strokeLinecap: "round",
          strokeMiterlimit: 10,
          strokeWidth: "32px",
        }}
      />
    </svg>
  );
}
const Icon: FC<Props> = ({ iconName, color, size }) => {
  return (
    <>
      {iconName === "sun" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 512 512"
        >
          <line
            x1="256"
            y1="48"
            x2="256"
            y2="96"
            style={{
              fill: "none",
              stroke: color,
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: "32px",
            }}
          />
          <line
            x1="256"
            y1="416"
            x2="256"
            y2="464"
            style={{
              fill: "none",
              stroke: color,
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: "32px",
            }}
          />
          <line
            x1="403.08"
            y1="108.92"
            x2="369.14"
            y2="142.86"
            style={{
              fill: "none",
              stroke: color,
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: "32px",
            }}
          />
          <line
            x1="142.86"
            y1="369.14"
            x2="108.92"
            y2="403.08"
            style={{
              fill: "none",
              stroke: color,
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: "32px",
            }}
          />
          <line
            x1="464"
            y1="256"
            x2="416"
            y2="256"
            style={{
              fill: "none",
              stroke: color,
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: "32px",
            }}
          />
          <line
            x1="96"
            y1="256"
            x2="48"
            y2="256"
            style={{
              fill: "none",
              stroke: color,
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: "32px",
            }}
          />
          <line
            x1="403.08"
            y1="403.08"
            x2="369.14"
            y2="369.14"
            style={{
              fill: "none",
              stroke: color,
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: "32px",
            }}
          />
          <line
            x1="142.86"
            y1="142.86"
            x2="108.92"
            y2="108.92"
            style={{
              fill: "none",
              stroke: color,
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: "32px",
            }}
          />
          <circle
            cx="256"
            cy="256"
            r="80"
            style={{
              fill: "none",
              stroke: color,
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: "32px",
            }}
          />
        </svg>
      ) : iconName === "moon" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 512 512"
        >
          <path
            d="M160,136c0-30.62,4.51-61.61,16-88C99.57,81.27,48,159.32,48,248c0,119.29,96.71,216,216,216,88.68,0,166.73-51.57,200-128-26.39,11.49-57.38,16-88,16C256.71,352,160,255.29,160,136Z"
            style={{
              fill: "none",
              stroke: color,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "32px",
            }}
          />
        </svg>
      ) : iconName === "download" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 512 512"
        >
          <path
            d="M320,336h76c55,0,100-21.21,100-75.6s-53-73.47-96-75.6C391.11,99.74,329,48,256,48c-69,0-113.44,45.79-128,91.2-60,5.7-112,35.88-112,98.4S70,336,136,336h56"
            style={{
              fill: "none",
              stroke: color,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "32px",
            }}
          />
          <polyline
            points="192 400.1 256 464 320 400.1"
            style={{
              fill: "none",
              stroke: color,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "32px",
            }}
          />
          <line
            x1="256"
            y1="224"
            x2="256"
            y2="448.03"
            style={{
              fill: "none",
              stroke: color,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "32px",
            }}
          />
        </svg>
      ) : iconName === "play" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 512 512"
        >
          <path
            d="M133,440a35.37,35.37,0,0,1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37,7.46-27.53,19.46-34.33a35.13,35.13,0,0,1,35.77.45L399.12,225.48a36,36,0,0,1,0,61L151.23,434.88A35.5,35.5,0,0,1,133,440Z"
            fill={color}
          />
        </svg>
      ) : iconName === "pause" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 512 512"
          fill={color}
        >
          <path d="M208,432H160a16,16,0,0,1-16-16V96a16,16,0,0,1,16-16h48a16,16,0,0,1,16,16V416A16,16,0,0,1,208,432Z" />
          <path d="M352,432H304a16,16,0,0,1-16-16V96a16,16,0,0,1,16-16h48a16,16,0,0,1,16,16V416A16,16,0,0,1,352,432Z" />
        </svg>
      ) : iconName === "previous" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 512 512"
        >
          <path
            d="M400,111V401c0,17.44-17,28.52-31,20.16L121.09,272.79c-12.12-7.25-12.12-26.33,0-33.58L369,90.84C383,82.48,400,93.56,400,111Z"
            style={{
              fill: "none",
              stroke: color,
              strokeMiterlimit: 10,
              strokeWidth: "32px",
            }}
          />
          <line
            x1="112"
            y1="80"
            x2="112"
            y2="432"
            style={{
              fill: "none",
              stroke: color,
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: "32px",
            }}
          />
        </svg>
      ) : iconName === "next" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 512 512"
        >
          <path
            d="M112,111V401c0,17.44,17,28.52,31,20.16l247.9-148.37c12.12-7.25,12.12-26.33,0-33.58L143,90.84C129,82.48,112,93.56,112,111Z"
            style={{
              fill: "none",
              stroke: color,
              strokeMiterlimit: 10,
              strokeWidth: "32px",
            }}
          />
          <line
            x1="400"
            y1="80"
            x2="400"
            y2="432"
            style={{
              fill: "none",
              stroke: color,
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              strokeWidth: "32px",
            }}
          />
        </svg>
      ) : (
        ""
      )}
    </>
  );
};
export default Icon