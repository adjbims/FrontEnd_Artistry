import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import JobListBreadcrumb from "components/JobListBreadcrumb";
import JobListPagination from "components/JobListPagination";

const countryOptionsList = [
  { label: "English", value: "option1" },
  { label: "Indonesia", value: "option2" },
  { label: "India", value: "option3" },
];

const JobListPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-gray-100 flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1920px] md:px-10 sm:px-5 px-[300px] w-full">
              <div className="flex sm:flex-1 sm:flex-col flex-row gap-6 items-start justify-start w-auto sm:w-full">
                <Button
                  className="common-pointer cursor-pointer min-w-[40px] text-center text-sm"
                  onClick={() => navigate("/")}
                  shape="square"
                  color="gray_100"
                  size="xl"
                  variant="fill"
                >
                  Home
                </Button>
                <Text
                  className="bg-gray-100 justify-center py-[15px] shadow-bs1 text-blue-800 text-sm w-auto"
                  size="txtInterMedium14"
                >
                  Find Job
                </Text>
                <Text
                  className="bg-gray-100 justify-center py-[15px] text-gray-700 text-sm w-auto"
                  size="txtInterRegular14"
                >
                  Employers
                </Text>
                <Text
                  className="bg-gray-100 justify-center py-[15px] text-gray-700 text-sm w-auto"
                  size="txtInterRegular14"
                >
                  Candidates
                </Text>
                <Text
                  className="bg-gray-100 justify-center py-[15px] text-gray-700 text-sm w-auto"
                  size="txtInterRegular14"
                >
                  Pricing Plans
                </Text>
                <Text
                  className="bg-gray-100 justify-center py-[15px] text-gray-700 text-sm w-auto"
                  size="txtInterRegular14"
                >
                  Customer Supports
                </Text>
              </div>
              <div className="flex flex-row gap-6 items-center justify-start w-auto">
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_call.svg"
                    alt="call"
                  />
                  <Text
                    className="text-gray-900 text-sm w-auto"
                    size="txtInterMedium14Gray900"
                  >
                    +1-202-555-0178
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-center justify-between w-[41%]">
                  <Img
                    className="h-4 md:h-auto object-cover"
                    src="images/img_image1.png"
                    alt="imageOne"
                  />
                  <SelectBox
                    className="text-gray-700 text-left text-sm w-[70%] sm:w-full"
                    placeholderClassName="text-gray-700"
                    indicator={
                      <Img
                        className="h-4 w-4"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="country"
                    options={countryOptionsList}
                    isSearchable={false}
                    placeholder="Indonesia"
                    size="xs"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <JobListBreadcrumb className="bg-gray-100 flex flex-row gap-3 items-center justify-between max-w-[1920px] md:px-10 sm:px-5 px-[300px] py-6 w-full" />
        <div className="bg-white-A700 border border-gray-300 border-solid flex md:flex-col flex-row gap-3 items-center justify-start max-w-[1320px] mt-6 mx-auto px-3 md:px-5 rounded-lg shadow-bs7 w-full">
          <Input
            name="inputfield"
            placeholder="Search by: Job tittle, Position, Keyword..."
            className="p-0 placeholder:text-gray-500 text-base text-left w-full"
            wrapClassName="flex md:flex-1 rounded-[5px] w-[45%] md:w-full"
            prefix={
              <Img
                className="h-6 my-auto"
                src="images/img_fisearch_blue_800.svg"
                alt="fi:search"
              />
            }
            color="white_A700"
            size="sm"
            variant="fill"
          ></Input>
          <Line className="bg-blue_gray-50 h-[72px] md:h-px md:w-full w-px" />
          <Input
            name="inputfield_One"
            placeholder="City, state or zip code"
            className="p-0 placeholder:text-gray-500 text-base text-left w-full"
            wrapClassName="flex md:flex-1 rounded-[5px] w-[33%] md:w-full"
            type="number"
            prefix={
              <Img
                className="h-6 my-auto"
                src="images/img_location_blue_800.svg"
                alt="location"
              />
            }
            suffix={
              <Img
                className="h-6 my-auto"
                src="images/img_location_blue_gray_500.svg"
                alt="location"
              />
            }
            color="white_A700"
            size="sm"
            variant="fill"
          ></Input>
          <div className="flex flex-row gap-3 items-start justify-start w-auto">
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[133px] rounded"
              leftIcon={
                <Img
                  className="h-6 mr-3"
                  src="images/img_settings.svg"
                  alt="settings"
                />
              }
              shape="round"
              color="gray_100"
              size="lg"
              variant="fill"
            >
              <div className="!text-gray-900 capitalize font-semibold text-base text-left">
                Filters
              </div>
            </Button>
            <Button
              className="capitalize cursor-pointer font-semibold min-w-[115px] text-base text-center"
              shape="round"
              color="blue_800"
              size="lg"
              variant="fill"
            >
              Find Job
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-start justify-start max-w-[1323px] mt-12 mx-auto md:px-5 w-full">
          <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-auto md:w-full">
            <div className="bg-gradient  border border-gray-300 border-solid flex flex-col gap-5 items-start justify-start p-6 sm:px-5 rounded-lg shadow-bs5 w-full">
              <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                <Text
                  className="text-gray-900 text-lg w-full"
                  size="txtInterMedium18"
                >
                  Techical Support Specialist
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                  <Text
                    className="bg-green-50 justify-center px-2 py-0.5 rounded-[3px] text-green-800 text-xs uppercase w-auto"
                    size="txtInterSemiBold12"
                  >
                    Part-time
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtInterRegular14Bluegray500"
                  >
                    Salary: $20,000 - $25,000
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-3 items-center justify-center w-full">
                <Button
                  className="flex h-12 items-center justify-center rounded w-12"
                  shape="round"
                  color="blue_gray_50"
                  size="lg"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_employerslogo.svg"
                    alt="employerslogo"
                  />
                </Button>
                <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtInterMedium16"
                  >
                    Google Inc.
                  </Text>
                  <Input
                    name="country_One"
                    placeholder="Jakarta, Indonesia"
                    className="p-0 placeholder:text-blue_gray-500 text-blue_gray-500 text-left text-sm w-full"
                    wrapClassName="flex w-full"
                    prefix={
                      <Img
                        className="mt-auto mb-px h-[18px] mr-1"
                        src="images/img_location.svg"
                        alt="location"
                      />
                    }
                  ></Input>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_bookmark.svg"
                  alt="bookmark"
                />
              </div>
            </div>
            <div
              className="common-pointer bg-gradient  border border-gray-300 border-solid flex flex-col gap-5 items-start justify-start p-6 sm:px-5 rounded-lg shadow-bs5 w-full"
              onClick={() => navigate("/jobdetail")}
            >
              <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                <Text
                  className="text-gray-900 text-lg w-full"
                  size="txtInterMedium18"
                >
                  Senior UX Designer
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                  <Text
                    className="bg-green-50 justify-center px-2 py-0.5 rounded-[3px] text-green-800 text-xs uppercase w-auto"
                    size="txtInterSemiBold12"
                  >
                    Full-Time
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtInterRegular14Bluegray500"
                  >
                    Salary: $20,000 - $25,000
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-3 items-center justify-center w-full">
                <Button
                  className="flex h-12 items-center justify-center rounded w-12"
                  shape="round"
                  color="blue_gray_50"
                  size="lg"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_employerslogo.svg"
                    alt="employerslogo_One"
                  />
                </Button>
                <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtInterMedium16"
                  >
                    Google Inc.
                  </Text>
                  <Input
                    name="country_Two"
                    placeholder="Jakarta, Indonesia"
                    className="p-0 placeholder:text-blue_gray-500 text-blue_gray-500 text-left text-sm w-full"
                    wrapClassName="flex w-full"
                    prefix={
                      <Img
                        className="mt-auto mb-px h-[18px] mr-1"
                        src="images/img_location.svg"
                        alt="location"
                      />
                    }
                  ></Input>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_bookmark.svg"
                  alt="bookmark_One"
                />
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-5 items-start justify-start p-6 sm:px-5 rounded-lg shadow-bs5 w-full">
              <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                <Text
                  className="text-gray-900 text-lg w-full"
                  size="txtInterMedium18"
                >
                  Marketing Officer
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                  <Text
                    className="bg-green-50 justify-center px-2 py-0.5 rounded-[3px] text-green-800 text-xs uppercase w-auto"
                    size="txtInterSemiBold12"
                  >
                    Internship
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtInterRegular14Bluegray500"
                  >
                    Salary: $20,000 - $25,000
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-3 items-center justify-center w-full">
                <Button
                  className="flex h-12 items-center justify-center rounded w-12"
                  shape="round"
                  color="blue_gray_50"
                  size="lg"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_employerslogo.svg"
                    alt="employerslogo_Two"
                  />
                </Button>
                <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtInterMedium16"
                  >
                    Google Inc.
                  </Text>
                  <Input
                    name="country_Three"
                    placeholder="Jakarta, Indonesia"
                    className="p-0 placeholder:text-blue_gray-500 text-blue_gray-500 text-left text-sm w-full"
                    wrapClassName="flex w-full"
                    prefix={
                      <Img
                        className="mt-auto mb-px h-[18px] mr-1"
                        src="images/img_location.svg"
                        alt="location"
                      />
                    }
                  ></Input>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_bookmark.svg"
                  alt="bookmark_Two"
                />
              </div>
            </div>
          </div>
          <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-auto md:w-full">
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-5 items-start justify-start p-6 sm:px-5 rounded-lg shadow-bs5 w-full">
              <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                <Text
                  className="text-gray-900 text-lg w-full"
                  size="txtInterMedium18"
                >
                  Junior Graphic Designer
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                  <Text
                    className="bg-green-50 justify-center px-2 py-0.5 rounded-[3px] text-green-800 text-xs uppercase w-auto"
                    size="txtInterSemiBold12"
                  >
                    Internship
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtInterRegular14Bluegray500"
                  >
                    Salary: $20,000 - $25,000
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-3 items-center justify-center w-full">
                <Button
                  className="flex h-12 items-center justify-center rounded w-12"
                  shape="round"
                  color="blue_gray_50"
                  size="lg"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_employerslogo.svg"
                    alt="employerslogo_Three"
                  />
                </Button>
                <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtInterMedium16"
                  >
                    Google Inc.
                  </Text>
                  <Input
                    name="country_Four"
                    placeholder="Jakarta, Indonesia"
                    className="p-0 placeholder:text-blue_gray-500 text-blue_gray-500 text-left text-sm w-full"
                    wrapClassName="flex w-full"
                    prefix={
                      <Img
                        className="mt-auto mb-px h-[18px] mr-1"
                        src="images/img_location.svg"
                        alt="location"
                      />
                    }
                  ></Input>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_bookmark.svg"
                  alt="bookmark_Three"
                />
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-5 items-start justify-start p-6 sm:px-5 rounded-lg shadow-bs5 w-full">
              <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                <Text
                  className="text-gray-900 text-lg w-full"
                  size="txtInterMedium18"
                >
                  Interaction Designer
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                  <Text
                    className="bg-green-50 justify-center px-2 py-0.5 rounded-[3px] text-green-800 text-xs uppercase w-auto"
                    size="txtInterSemiBold12"
                  >
                    Part-time
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtInterRegular14Bluegray500"
                  >
                    Salary: $20,000 - $25,000
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-3 items-center justify-center w-full">
                <Button
                  className="flex h-12 items-center justify-center rounded w-12"
                  shape="round"
                  color="blue_gray_50"
                  size="lg"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_employerslogo.svg"
                    alt="employerslogo_Four"
                  />
                </Button>
                <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtInterMedium16"
                  >
                    Google Inc.
                  </Text>
                  <Input
                    name="country_Five"
                    placeholder="Jakarta, Indonesia"
                    className="p-0 placeholder:text-blue_gray-500 text-blue_gray-500 text-left text-sm w-full"
                    wrapClassName="flex w-full"
                    prefix={
                      <Img
                        className="mt-auto mb-px h-[18px] mr-1"
                        src="images/img_location.svg"
                        alt="location"
                      />
                    }
                  ></Input>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_bookmark.svg"
                  alt="bookmark_Four"
                />
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-5 items-start justify-start p-6 sm:px-5 rounded-lg shadow-bs5 w-full">
              <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                <Text
                  className="text-gray-900 text-lg w-full"
                  size="txtInterMedium18"
                >
                  Project Manager
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                  <Text
                    className="bg-green-50 justify-center px-2 py-0.5 rounded-[3px] text-green-800 text-xs uppercase w-auto"
                    size="txtInterSemiBold12"
                  >
                    Full-Time
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtInterRegular14Bluegray500"
                  >
                    Salary: $20,000 - $25,000
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-3 items-center justify-center w-full">
                <Button
                  className="flex h-12 items-center justify-center rounded w-12"
                  shape="round"
                  color="blue_gray_50"
                  size="lg"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_employerslogo.svg"
                    alt="employerslogo_Five"
                  />
                </Button>
                <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtInterMedium16"
                  >
                    Google Inc.
                  </Text>
                  <Input
                    name="country_Six"
                    placeholder="Jakarta, Indonesia"
                    className="p-0 placeholder:text-blue_gray-500 text-blue_gray-500 text-left text-sm w-full"
                    wrapClassName="flex w-full"
                    prefix={
                      <Img
                        className="mt-auto mb-px h-[18px] mr-1"
                        src="images/img_location.svg"
                        alt="location"
                      />
                    }
                  ></Input>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_bookmark.svg"
                  alt="bookmark_Five"
                />
              </div>
            </div>
          </div>
          <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-auto md:w-full">
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-5 items-start justify-start p-6 sm:px-5 rounded-lg shadow-bs5 w-full">
              <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                <Text
                  className="text-gray-900 text-lg w-full"
                  size="txtInterMedium18"
                >
                  Software Engineer
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                  <Text
                    className="bg-green-50 justify-center px-2 py-0.5 rounded-[3px] text-green-800 text-xs uppercase w-auto"
                    size="txtInterSemiBold12"
                  >
                    Full-Time
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtInterRegular14Bluegray500"
                  >
                    Salary: $20,000 - $25,000
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-3 items-center justify-center w-full">
                <Button
                  className="flex h-12 items-center justify-center rounded w-12"
                  shape="round"
                  color="blue_gray_50"
                  size="lg"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_employerslogo.svg"
                    alt="employerslogo_Six"
                  />
                </Button>
                <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtInterMedium16"
                  >
                    Google Inc.
                  </Text>
                  <Input
                    name="country_Seven"
                    placeholder="Jakarta, Indonesia"
                    className="p-0 placeholder:text-blue_gray-500 text-blue_gray-500 text-left text-sm w-full"
                    wrapClassName="flex w-full"
                    prefix={
                      <Img
                        className="mt-auto mb-px h-[18px] mr-1"
                        src="images/img_location.svg"
                        alt="location"
                      />
                    }
                  ></Input>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_bookmark.svg"
                  alt="bookmark_Six"
                />
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-5 items-start justify-start p-6 sm:px-5 rounded-lg shadow-bs5 w-full">
              <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                <Text
                  className="text-gray-900 text-lg w-full"
                  size="txtInterMedium18"
                >
                  Visual Designer
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                  <Text
                    className="bg-green-50 justify-center px-2 py-0.5 rounded-[3px] text-green-800 text-xs uppercase w-auto"
                    size="txtInterSemiBold12"
                  >
                    Full-Time
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtInterRegular14Bluegray500"
                  >
                    Salary: $20,000 - $25,000
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-3 items-center justify-center w-full">
                <Button
                  className="flex h-12 items-center justify-center rounded w-12"
                  shape="round"
                  color="blue_gray_50"
                  size="lg"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_employerslogo.svg"
                    alt="employerslogo_Seven"
                  />
                </Button>
                <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtInterMedium16"
                  >
                    Google Inc.
                  </Text>
                  <Input
                    name="country_Eight"
                    placeholder="Jakarta, Indonesia"
                    className="p-0 placeholder:text-blue_gray-500 text-blue_gray-500 text-left text-sm w-full"
                    wrapClassName="flex w-full"
                    prefix={
                      <Img
                        className="mt-auto mb-px h-[18px] mr-1"
                        src="images/img_location.svg"
                        alt="location"
                      />
                    }
                  ></Input>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_bookmark.svg"
                  alt="bookmark_Seven"
                />
              </div>
            </div>
            <div className="bg-gradient  border border-gray-300 border-solid flex flex-col gap-5 items-start justify-start p-6 sm:px-5 rounded-lg shadow-bs5 w-full">
              <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                <Text
                  className="text-gray-900 text-lg w-full"
                  size="txtInterMedium18"
                >
                  Project Manager
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                  <Text
                    className="bg-green-50 justify-center px-2 py-0.5 rounded-[3px] text-green-800 text-xs uppercase w-auto"
                    size="txtInterSemiBold12"
                  >
                    Full-Time
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtInterRegular14Bluegray500"
                  >
                    Salary: $20,000 - $25,000
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-3 items-center justify-center w-full">
                <Button
                  className="flex h-12 items-center justify-center rounded w-12"
                  shape="round"
                  color="blue_gray_50"
                  size="lg"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_employerslogo.svg"
                    alt="employerslogo_Eight"
                  />
                </Button>
                <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtInterMedium16"
                  >
                    Google Inc.
                  </Text>
                  <Input
                    name="country_Nine"
                    placeholder="Jakarta, Indonesia"
                    className="p-0 placeholder:text-blue_gray-500 text-blue_gray-500 text-left text-sm w-full"
                    wrapClassName="flex w-full"
                    prefix={
                      <Img
                        className="mt-auto mb-px h-[18px] mr-1"
                        src="images/img_location.svg"
                        alt="location"
                      />
                    }
                  ></Input>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_bookmark.svg"
                  alt="bookmark_Eight"
                />
              </div>
            </div>
          </div>
          <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-auto md:w-full">
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-5 items-start justify-start p-6 sm:px-5 rounded-lg shadow-bs5 w-full">
              <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                <Text
                  className="text-gray-900 text-lg w-full"
                  size="txtInterMedium18"
                >
                  UI/UX Designer
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                  <Text
                    className="bg-green-50 justify-center px-2 py-0.5 rounded-[3px] text-green-800 text-xs uppercase w-auto"
                    size="txtInterSemiBold12"
                  >
                    Full-Time
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtInterRegular14Bluegray500"
                  >
                    Salary: $20,000 - $25,000
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-3 items-center justify-center w-full">
                <Button
                  className="flex h-12 items-center justify-center rounded w-12"
                  shape="round"
                  color="blue_gray_50"
                  size="lg"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_employerslogo.svg"
                    alt="employerslogo_Nine"
                  />
                </Button>
                <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtInterMedium16"
                  >
                    Google Inc.
                  </Text>
                  <Input
                    name="country_Ten"
                    placeholder="Jakarta, Indonesia"
                    className="p-0 placeholder:text-blue_gray-500 text-blue_gray-500 text-left text-sm w-full"
                    wrapClassName="flex w-full"
                    prefix={
                      <Img
                        className="mt-auto mb-px h-[18px] mr-1"
                        src="images/img_location.svg"
                        alt="location"
                      />
                    }
                  ></Input>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_bookmark.svg"
                  alt="bookmark_Nine"
                />
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-5 items-start justify-start p-6 sm:px-5 rounded-lg shadow-bs5 w-full">
              <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                <Text
                  className="text-gray-900 text-lg w-full"
                  size="txtInterMedium18"
                >
                  Product Designer
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                  <Text
                    className="bg-green-50 justify-center px-2 py-0.5 rounded-[3px] text-green-800 text-xs uppercase w-auto"
                    size="txtInterSemiBold12"
                  >
                    Full-Time
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtInterRegular14Bluegray500"
                  >
                    Salary: $20,000 - $25,000
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-3 items-center justify-center w-full">
                <Button
                  className="flex h-12 items-center justify-center rounded w-12"
                  shape="round"
                  color="blue_gray_50"
                  size="lg"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_employerslogo.svg"
                    alt="employerslogo_Ten"
                  />
                </Button>
                <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtInterMedium16"
                  >
                    Google Inc.
                  </Text>
                  <Input
                    name="country_Eleven"
                    placeholder="Jakarta, Indonesia"
                    className="p-0 placeholder:text-blue_gray-500 text-blue_gray-500 text-left text-sm w-full"
                    wrapClassName="flex w-full"
                    prefix={
                      <Img
                        className="mt-auto mb-px h-[18px] mr-1"
                        src="images/img_location.svg"
                        alt="location"
                      />
                    }
                  ></Input>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_bookmark.svg"
                  alt="bookmark_Ten"
                />
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-5 items-start justify-start p-6 sm:px-5 rounded-lg shadow-bs5 w-full">
              <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                <Text
                  className="text-gray-900 text-lg w-full"
                  size="txtInterMedium18"
                >
                  Networking Engineer
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                  <Text
                    className="bg-green-50 justify-center px-2 py-0.5 rounded-[3px] text-green-800 text-xs uppercase w-auto"
                    size="txtInterSemiBold12"
                  >
                    Internship
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtInterRegular14Bluegray500"
                  >
                    Salary: $20,000 - $25,000
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-3 items-center justify-center w-full">
                <Button
                  className="flex h-12 items-center justify-center rounded w-12"
                  shape="round"
                  color="blue_gray_50"
                  size="lg"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_employerslogo.svg"
                    alt="employerslogo_Eleven"
                  />
                </Button>
                <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtInterMedium16"
                  >
                    Google Inc.
                  </Text>
                  <Input
                    name="country_Twelve"
                    placeholder="Jakarta, Indonesia"
                    className="p-0 placeholder:text-blue_gray-500 text-blue_gray-500 text-left text-sm w-full"
                    wrapClassName="flex w-full"
                    prefix={
                      <Img
                        className="mt-auto mb-px h-[18px] mr-1"
                        src="images/img_location.svg"
                        alt="location"
                      />
                    }
                  ></Input>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_bookmark.svg"
                  alt="bookmark_Eleven"
                />
              </div>
            </div>
          </div>
          <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-auto md:w-full">
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-5 items-start justify-start p-6 sm:px-5 rounded-lg shadow-bs5 w-full">
              <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                <Text
                  className="text-gray-900 text-lg w-full"
                  size="txtInterMedium18"
                >
                  Front End Developer
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                  <Text
                    className="bg-green-50 justify-center px-2 py-0.5 rounded-[3px] text-green-800 text-xs uppercase w-auto"
                    size="txtInterSemiBold12"
                  >
                    Part-time
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtInterRegular14Bluegray500"
                  >
                    Salary: $20,000 - $25,000
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-3 items-center justify-center w-full">
                <Button
                  className="flex h-12 items-center justify-center rounded w-12"
                  shape="round"
                  color="blue_gray_50"
                  size="lg"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_employerslogo.svg"
                    alt="employerslogo_Twelve"
                  />
                </Button>
                <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtInterMedium16"
                  >
                    Google Inc.
                  </Text>
                  <Input
                    name="country_Thirteen"
                    placeholder="Jakarta, Indonesia"
                    className="p-0 placeholder:text-blue_gray-500 text-blue_gray-500 text-left text-sm w-full"
                    wrapClassName="flex w-full"
                    prefix={
                      <Img
                        className="mt-auto mb-px h-[18px] mr-1"
                        src="images/img_location.svg"
                        alt="location"
                      />
                    }
                  ></Input>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_bookmark.svg"
                  alt="bookmark_Twelve"
                />
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-5 items-start justify-start p-6 sm:px-5 rounded-lg shadow-bs5 w-full">
              <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                <Text
                  className="text-gray-900 text-lg w-full"
                  size="txtInterMedium18"
                >
                  Senior UX Designer
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                  <Text
                    className="bg-green-50 justify-center px-2 py-0.5 rounded-[3px] text-green-800 text-xs uppercase w-auto"
                    size="txtInterSemiBold12"
                  >
                    Full-Time
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtInterRegular14Bluegray500"
                  >
                    Salary: $20,000 - $25,000
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-3 items-center justify-center w-full">
                <Button
                  className="flex h-12 items-center justify-center rounded w-12"
                  shape="round"
                  color="blue_gray_50"
                  size="lg"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_employerslogo.svg"
                    alt="employerslogo_Thirteen"
                  />
                </Button>
                <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtInterMedium16"
                  >
                    Google Inc.
                  </Text>
                  <Input
                    name="country_Fourteen"
                    placeholder="Jakarta, Indonesia"
                    className="p-0 placeholder:text-blue_gray-500 text-blue_gray-500 text-left text-sm w-full"
                    wrapClassName="flex w-full"
                    prefix={
                      <Img
                        className="mt-auto mb-px h-[18px] mr-1"
                        src="images/img_location.svg"
                        alt="location"
                      />
                    }
                  ></Input>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_bookmark.svg"
                  alt="bookmark_Thirteen"
                />
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-5 items-start justify-start p-6 sm:px-5 rounded-lg shadow-bs5 w-full">
              <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                <Text
                  className="text-gray-900 text-lg w-full"
                  size="txtInterMedium18"
                >
                  Marketing Manager
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                  <Text
                    className="bg-green-50 justify-center px-2 py-0.5 rounded-[3px] text-green-800 text-xs uppercase w-auto"
                    size="txtInterSemiBold12"
                  >
                    Internship
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtInterRegular14Bluegray500"
                  >
                    Salary: $20,000 - $25,000
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-3 items-center justify-center w-full">
                <Button
                  className="flex h-12 items-center justify-center rounded w-12"
                  shape="round"
                  color="blue_gray_50"
                  size="lg"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_employerslogo.svg"
                    alt="employerslogo_Fourteen"
                  />
                </Button>
                <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                  <Text
                    className="text-base text-gray-900 w-full"
                    size="txtInterMedium16"
                  >
                    Google Inc.
                  </Text>
                  <Input
                    name="country_Fifteen"
                    placeholder="Jakarta, Indonesia"
                    className="p-0 placeholder:text-blue_gray-500 text-blue_gray-500 text-left text-sm w-full"
                    wrapClassName="flex w-full"
                    prefix={
                      <Img
                        className="mt-auto mb-px h-[18px] mr-1"
                        src="images/img_location.svg"
                        alt="location"
                      />
                    }
                  ></Input>
                </div>
                <Img
                  className="h-6 w-6"
                  src="images/img_bookmark.svg"
                  alt="bookmark_Fourteen"
                />
              </div>
            </div>
          </div>
        </div>
        <JobListPagination className="flex flex-row gap-2 items-start justify-start mt-[50px] md:px-5 w-auto" />
        <Footer className="bg-gray-900 flex items-center justify-center mt-[100px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default JobListPage;
