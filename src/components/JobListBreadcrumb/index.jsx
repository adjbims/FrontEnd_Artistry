import React from "react";

import { Text } from "components";

const JobListBreadcrumb = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-center text-gray-900 text-lg w-auto"
          size="txtInterMedium18"
        >
          {props?.jobtext}
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
            {props?.homepath}
          </Text>
          <Text
            className="text-gray-900 text-sm w-auto"
            size="txtInterRegular14Gray900"
          >
            {props?.findjobtext}
          </Text>
        </div>
      </div>
    </>
  );
};

JobListBreadcrumb.defaultProps = {
  jobtext: "Find Job",
  hometext: "Home",
  homepath: "/",
  findjobtext: "Find job",
};

export default JobListBreadcrumb;
