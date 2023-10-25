import React from "react";

import { Img, Line, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Img
          className="h-[50px] sm:h-auto md:ml-[0] ml-[300px] md:mt-0 my-5 object-cover w-[3%] md:w-full"
          src="images/img_logoartistry.png"
          alt="logoartistry"
        />
        <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start md:ml-[0] ml-[46px] md:mt-0 my-5 p-[9px] rounded-[5px] w-[42%] md:w-full">
          <div className="flex sm:flex-col flex-row gap-5 items-center justify-center md:ml-[0] ml-[15px] w-auto sm:w-full">
            <div className="flex flex-row gap-3 items-center justify-center w-auto">
              <Text
                className="text-gray-900 text-sm w-auto"
                size="txtInterMedium14Gray900"
              >
                Jakarta
              </Text>
              <Img
                className="h-4 w-4"
                src="images/img_arrowdown_gray_500.svg"
                alt="arrowdown"
              />
            </div>
            <Line className="bg-gray-300 h-8 sm:h-px sm:w-full w-px" />
            <div className="flex flex-row gap-3 items-start justify-start w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_fisearch.svg"
                alt="fisearch"
              />
              <Text
                className="text-base text-gray-500 w-auto"
                size="txtInterRegular16"
              >
                Job tittle, keyword, company
              </Text>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-6 items-center justify-start md:ml-[0] ml-[331px] mr-[300px] md:mt-0 my-[21px] w-auto">
          <Img
            className="h-6 w-6"
            src="images/img_notification.svg"
            alt="notification"
          />
          <Img
            className="h-12 md:h-auto rounded-[50%] w-12"
            src="images/img_ellipse18.png"
            alt="ellipseEighteen"
          />
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
