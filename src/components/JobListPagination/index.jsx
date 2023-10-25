import React from "react";

import { Button, Img, Text } from "components";

const JobListPagination = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button
          className="flex h-12 items-center justify-center rotate-[180deg] rounded-[50%] w-12"
          shape="circle"
          size="lg"
        >
          <Img
            className="h-6"
            src="images/img_arrowleft_blue_200.svg"
            alt="arrowleft"
          />
        </Button>
        <div className="flex flex-row items-start justify-start w-auto">
          <Text
            className="bg-blue-800 flex h-12 items-center justify-center rounded-[50%] text-center text-sm text-white-A700 w-12"
            size="txtInterMedium14WhiteA700"
          >
            {props?.pagination}
          </Text>
          <div className="flex flex-col h-12 items-center justify-start p-[15px] rounded-[50%] w-12">
            <Text
              className="text-center text-gray-700 text-sm"
              size="txtInterMedium14Gray700"
            >
              {props?.oneFour}
            </Text>
          </div>
          <div className="flex flex-col h-12 items-center justify-start p-3.5 rounded-[50%] w-12">
            <Text
              className="text-center text-gray-700 text-sm"
              size="txtInterMedium14Gray700"
            >
              {props?.oneFour}
            </Text>
          </div>
          <Text
            className="bg-gray-100 flex h-12 items-center justify-center rounded-[50%] text-center text-gray-900 text-sm w-12"
            size="txtInterMedium14Gray900"
          >
            {props?.paginationOne}
          </Text>
          <div className="flex flex-col h-12 items-center justify-start p-[15px] rounded-[50%] w-12">
            <Text
              className="text-center text-gray-700 text-sm"
              size="txtInterMedium14Gray700"
            >
              {props?.oneFour}
            </Text>
          </div>
        </div>
        <Button
          className="flex h-12 items-center justify-center rounded-[50%] w-12"
          shape="circle"
          color="blue_50"
          size="lg"
          variant="fill"
        >
          <Img
            className="h-6"
            src="images/img_arrowright.svg"
            alt="arrowright"
          />
        </Button>
      </div>
    </>
  );
};

JobListPagination.defaultProps = {
  pagination: "01",
  oneTwo: "05",
  oneThree: "05",
  paginationOne: "04",
  oneFour: "05",
};

export default JobListPagination;
