import React from "react";

import { Text } from "components";

const JobDetailBreadcrumb = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-center text-gray-900 text-lg w-auto"
          size="txtInterMedium18"
        >
          {props?.jobdetailstext}
        </Text>
        <div className="flex flex-row gap-2 items-start justify-start w-auto">
          <Text
            className="text-blue_gray-500 text-sm w-auto"
            size="txtInterRegular14Bluegray500"
          >
            {props?.hometext}
          </Text>
          <Text
            className="text-blue_gray-500 text-sm w-auto"
            size="txtInterRegular14Bluegray500"
          >
            {props?.homeslash}
          </Text>
          <Text
            className="text-blue_gray-500 text-sm w-auto"
            size="txtInterRegular14Bluegray500"
          >
            {props?.findjobtext}
          </Text>
          <Text
            className="text-blue_gray-500 text-sm w-auto"
            size="txtInterRegular14Bluegray500"
          >
            {props?.findjobslash}
          </Text>
          <Text
            className="text-blue_gray-500 text-sm w-auto"
            size="txtInterRegular14Bluegray500"
          >
            {props?.graphicsdesigntext}
          </Text>
          <Text
            className="text-blue_gray-500 text-sm w-auto"
            size="txtInterRegular14Bluegray500"
          >
            {props?.graphicsdesignslash}
          </Text>
          <Text
            className="text-gray-900 text-sm w-auto"
            size="txtInterRegular14Gray900"
          >
            {props?.jobdetailstext1}
          </Text>
        </div>
      </div>
    </>
  );
};

JobDetailBreadcrumb.defaultProps = {
  jobdetailstext: "Job Details",
  hometext: "Home",
  homeslash: "/",
  findjobtext: "Find Job",
  findjobslash: "/",
  graphicsdesigntext: "Graphics & Design",
  graphicsdesignslash: "/",
  jobdetailstext1: "Job Details",
};

export default JobDetailBreadcrumb;
