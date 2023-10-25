import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-none",
  circle: "rounded-[50%]",
  round: "rounded-[3px]",
};
const variants = {
  outline: {
    blue_100: "border border-blue-100 border-solid text-blue-800",
    blue_50: "border border-blue-50 border-solid text-blue-800",
  },
  fill: {
    green_800: "bg-green-800 text-white-A700",
    red_50_01: "bg-red-50_01 text-red-400",
    indigo_A100: "bg-indigo-A100 text-white-A700",
    gray_100: "bg-gray-100 text-gray-700",
    red_50: "bg-red-50 text-red-400",
    pink_400: "bg-pink-400",
    blue_800: "bg-blue-800 text-white-A700",
    white_A700: "bg-white-A700 text-blue-800",
    blue_50: "bg-blue-50 text-blue-800",
    blue_gray_50: "bg-blue_gray-50",
  },
};
const sizes = {
  xs: "py-0.5",
  sm: "p-1",
  md: "p-2.5",
  lg: "p-3.5",
  xl: "py-[15px]",
  "2xl": "p-[18px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "blue_100",
    "blue_50",
    "green_800",
    "red_50_01",
    "indigo_A100",
    "gray_100",
    "red_50",
    "pink_400",
    "blue_800",
    "white_A700",
    "blue_gray_50",
  ]),
};

export { Button };
