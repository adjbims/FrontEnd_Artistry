import React from "react";

const sizeClasses = {
  txtInterRegular16Gray700: "font-inter font-normal",
  txtInterRegular14Gray500: "font-inter font-normal",
  txtInterMedium16WhiteA700: "font-inter font-medium",
  txtInterRegular14Bluegray400: "font-inter font-normal",
  txtInterRegular14Bluegray500: "font-inter font-normal",
  txtInterMedium24: "font-inter font-medium",
  txtInterRegular14Bluegray800: "font-inter font-normal",
  txtInterSemiBold24: "font-inter font-semibold",
  txtInterRegular18Bluegray800: "font-inter font-normal",
  txtMontserratRomanBold20: "font-bold font-montserrat",
  txtMontserratRomanBold40: "font-bold font-montserrat",
  txtMontserratRomanMedium15: "font-medium font-montserrat",
  txtInterMedium16Gray90001: "font-inter font-medium",
  txtInterMedium14WhiteA700: "font-inter font-medium",
  txtMontserratRomanMedium16: "font-medium font-montserrat",
  txtInterMedium14Gray700: "font-inter font-medium",
  txtInterMedium14Gray900: "font-inter font-medium",
  txtInterRegular14Bluegray600a2: "font-inter font-normal",
  txtInterMedium18Gray90001: "font-inter font-medium",
  txtInterRegular14WhiteA700a2: "font-inter font-normal",
  txtMontserratRomanSemiBold16: "font-montserrat font-semibold",
  txtInterMedium32WhiteA700: "font-inter font-medium",
  txtInterRegular16Bluegray700: "font-inter font-normal",
  txtInterMedium18: "font-inter font-medium",
  txtInterMedium40Gray90001: "font-inter font-medium",
  txtInterRegular16Bluegray500: "font-inter font-normal",
  txtMontserratMedium16: "font-medium font-montserrat",
  txtInterMedium56: "font-inter font-medium",
  txtInterRegular18Indigo70033: "font-inter font-normal",
  txtInterMedium20WhiteA700: "font-inter font-medium",
  txtInterMedium18Blue800: "font-inter font-medium",
  txtMontserratRomanRegular20: "font-montserrat font-normal",
  txtInterSemiBold12: "font-inter font-semibold",
  txtInterMedium32: "font-inter font-medium",
  txtInterMedium16: "font-inter font-medium",
  txtInterMedium14: "font-inter font-medium",
  txtMontserratRomanRegular16: "font-montserrat font-normal",
  txtInterMedium20: "font-inter font-medium",
  txtInterMedium40: "font-inter font-medium",
  txtInterMedium18WhiteA700: "font-inter font-medium",
  txtInterRegular12: "font-inter font-normal",
  txtInterRegular14Gray900: "font-inter font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtMontserratRomanMedium22: "font-medium font-montserrat",
  txtInterRegular16: "font-inter font-normal",
  txtInterRegular18: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
