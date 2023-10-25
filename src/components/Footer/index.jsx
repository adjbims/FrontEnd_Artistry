import React from "react";

import { Img, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start py-20 w-[69%] md:w-full">
            <div className="flex flex-col gap-6 items-start justify-start md:mt-0 mt-5 w-auto">
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Img
                  className="h-10 w-10"
                  src="images/img_briefcase1.svg"
                  alt="briefcaseOne"
                />
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                  size="txtInterSemiBold24"
                >
                  Artistry
                </Text>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start w-auto">
                <div className="flex flex-row gap-[5px] items-start justify-start w-auto">
                  <Text
                    className="text-gray-700 text-lg w-auto"
                    size="txtInterRegular18"
                  >
                    Call now:
                  </Text>
                  <Text
                    className="text-lg text-white-A700 w-auto"
                    size="txtInterMedium18WhiteA700"
                  >
                    {" "}
                    (319) 555-0115
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start md:ml-[0] ml-[90px] md:mt-0 mt-5 w-auto">
              <Text
                className="text-white-A700 text-xl w-auto"
                size="txtInterMedium20WhiteA700"
              >
                Quick Link
              </Text>
              <div className="flex flex-col gap-1 items-start justify-start w-auto">
                <div className="flex flex-col items-center justify-start py-1.5 w-auto">
                  <Text
                    className="text-base text-center text-gray-500 w-auto"
                    size="txtInterRegular16"
                  >
                    About
                  </Text>
                </div>
                <div className="flex flex-row gap-1.5 items-center justify-start py-1.5 w-auto">
                  <Img
                    className="h-5 w-5"
                    src="images/img_arrowright_white_a700.svg"
                    alt="arrowright_One"
                  />
                  <Text
                    className="text-base text-center text-white-A700 w-auto"
                    size="txtInterMedium16WhiteA700"
                  >
                    Contact
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start py-1.5 w-auto">
                  <Text
                    className="text-base text-center text-gray-500 w-auto"
                    size="txtInterRegular16"
                  >
                    Pricing
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start py-1.5 w-auto">
                  <Text
                    className="text-base text-center text-gray-500 w-auto"
                    size="txtInterRegular16"
                  >
                    Blog
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start ml-10 md:ml-[0] md:mt-0 mt-5 w-auto">
              <Text
                className="text-white-A700 text-xl w-auto"
                size="txtInterMedium20WhiteA700"
              >
                Candidate
              </Text>
              <div className="flex flex-col gap-1 items-start justify-start w-auto">
                <div className="flex flex-col items-center justify-start py-1.5 w-auto">
                  <Text
                    className="text-base text-center text-gray-500 w-auto"
                    size="txtInterRegular16"
                  >
                    Browse Jobs
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start py-1.5 w-auto">
                  <Text
                    className="text-base text-center text-gray-500 w-auto"
                    size="txtInterRegular16"
                  >
                    Browse Employers
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start py-1.5 w-auto">
                  <Text
                    className="text-base text-center text-gray-500 w-auto"
                    size="txtInterRegular16"
                  >
                    Candidate Dashboard
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start py-1.5 w-auto">
                  <Text
                    className="text-base text-center text-gray-500 w-auto"
                    size="txtInterRegular16"
                  >
                    Saved Jobs
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start ml-10 md:ml-[0] md:mt-0 mt-5 w-auto">
              <Text
                className="text-white-A700 text-xl w-auto"
                size="txtInterMedium20WhiteA700"
              >
                Employers
              </Text>
              <div className="flex flex-col gap-1 items-start justify-start w-auto">
                <div className="flex flex-col items-center justify-start py-1.5 w-auto">
                  <Text
                    className="text-base text-center text-gray-500 w-auto"
                    size="txtInterRegular16"
                  >
                    Post a Job
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start py-1.5 w-auto">
                  <Text
                    className="text-base text-center text-gray-500 w-auto"
                    size="txtInterRegular16"
                  >
                    Browse Candidates
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start py-1.5 w-auto">
                  <Text
                    className="text-base text-center text-gray-500 w-auto"
                    size="txtInterRegular16"
                  >
                    Employers Dashboard
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start py-1.5 w-auto">
                  <Text
                    className="text-base text-center text-gray-500 w-auto"
                    size="txtInterRegular16"
                  >
                    Applications
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start ml-10 md:ml-[0] md:mt-0 mt-5 w-auto">
              <Text
                className="text-white-A700 text-xl w-auto"
                size="txtInterMedium20WhiteA700"
              >
                Support
              </Text>
              <div className="flex flex-col gap-1 items-start justify-start w-auto">
                <div className="flex flex-col items-center justify-start py-1.5 w-[37px]">
                  <Text
                    className="text-base text-center text-gray-500 w-auto"
                    size="txtInterRegular16"
                  >
                    Faqs
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start py-1.5 w-auto">
                  <Text
                    className="text-base text-center text-gray-500 w-auto"
                    size="txtInterRegular16"
                  >
                    Privacy Policy
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start py-1.5 w-auto">
                  <Text
                    className="text-base text-center text-gray-500 w-auto"
                    size="txtInterRegular16"
                  >
                    Terms & Conditions
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 flex flex-row items-center justify-between max-w-[1920px] md:px-10 sm:px-5 px-[300px] py-6 shadow-bs w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <Text
                className="sm:mt-0 mt-0.5 text-blue_gray-500 text-sm w-auto"
                size="txtInterRegular14Bluegray500"
              >
                @ 2023 Artistry - Job Portal. All rights Rserved
              </Text>
              <div className="flex flex-row gap-5 items-start justify-start w-auto">
                <Img
                  className="h-5 w-2.5"
                  src="images/img_facebook.svg"
                  alt="facebook"
                />
                <Img className="h-5 w-5" src="images/img_play.svg" alt="play" />
                <Img
                  className="h-5 w-5"
                  src="images/img_instagram1.svg"
                  alt="instagramOne"
                />
                <Img
                  className="h-5 w-5"
                  src="images/img_twitter1.svg"
                  alt="twitterOne"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
