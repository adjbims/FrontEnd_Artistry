import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  SelectBox,
  Slider,
  Text,
} from "components";
import Footer from "components/Footer";

const countryOptionsList = [
  { label: "English", value: "option1" },
  { label: "Indonesia", value: "option2" },
  { label: "India", value: "option3" },
];

const HomepageTwoPage = () => {
  const navigate = useNavigate();

  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-gray-100 flex md:flex-col flex-row md:gap-10 items-center justify-between md:px-10 sm:px-5 px-[284px] w-full">
            <div className="flex sm:flex-1 sm:flex-col flex-row gap-6 h-12 md:h-auto items-start justify-start ml-4 md:ml-[0] w-auto sm:w-full">
              <Text
                className="bg-gray-100 justify-center py-[15px] shadow-bs1 text-blue-800 text-sm w-auto"
                size="txtInterMedium14"
              >
                Home
              </Text>
              <Button
                className="common-pointer cursor-pointer min-w-[58px] text-center text-sm"
                onClick={() => navigate("/joblist")}
                shape="square"
                color="gray_100"
                size="xl"
                variant="fill"
              >
                Find Job
              </Button>
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
            <div className="flex flex-row gap-6 h-6 md:h-auto items-center justify-start w-auto">
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Img className="h-6 w-6" src="images/img_call.svg" alt="call" />
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
        <header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
          <Img
            className="md:flex-1 h-[50px] sm:h-auto md:ml-[0] ml-[302px] md:mt-0 my-5 object-cover w-[3%] md:w-full"
            src="images/img_logoartistry.png"
            alt="logoartistry"
          />
          <div className="bg-white-A700 border border-gray-300 border-solid flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[46px] md:mt-0 my-5 p-[9px] rounded-[5px] w-[42%] md:w-full">
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
          <div className="flex md:flex-col flex-row gap-3 h-12 md:h-auto items-center justify-start md:ml-[0] ml-[180px] mr-[292px] md:mt-0 my-[21px] w-[253px]">
            <Button
              className="common-pointer capitalize cursor-pointer font-semibold min-w-[101px] text-base text-center"
              onClick={() => navigate("/login")}
              shape="round"
              color="blue_100"
              size="lg"
              variant="outline"
            >
              Sign in
            </Button>
            <Button
              className="capitalize cursor-pointer font-semibold min-w-[140px] text-base text-center"
              shape="round"
              color="blue_800"
              size="lg"
              variant="fill"
            >
              Post a Jobs
            </Button>
          </div>
        </header>
        <div className="bg-gray-100_99 flex flex-col items-center justify-start py-[100px] w-full">
          <div className="flex flex-col md:gap-10 gap-[100px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1320px] mx-auto md:px-5 w-full">
              <div className="flex md:flex-1 flex-col gap-8 items-start justify-start w-auto md:w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
                  <Text
                    className="leading-[64.00px] max-w-[652px] md:max-w-full md:text-5xl sm:text-[42px] text-[56px] text-gray-900"
                    size="txtInterMedium56"
                  >
                    Find a job that suits your interest & skills.
                  </Text>
                  <Text
                    className="leading-[28.00px] max-w-[536px] md:max-w-full text-gray-700 text-lg"
                    size="txtInterRegular18"
                  >
                    Aliquam vitae turpis in diam convallis finibus in at risus.
                    Nullam in scelerisque leo, eget sollicitudin velit
                    bestibulum.
                  </Text>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
                  <div className="bg-white-A700 border border-gray-300 border-solid flex md:flex-col flex-row gap-3 items-center justify-start p-3 rounded-lg shadow-bs2 w-auto md:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-center w-auto sm:w-full">
                      <div className="bg-white-A700 flex flex-row gap-3 items-center justify-start p-4 rounded-[5px] w-[57%] sm:w-full">
                        <Img
                          className="h-6 ml-0.5 w-6"
                          src="images/img_fisearch.svg"
                          alt="fisearch_One"
                        />
                        <Text
                          className="text-base text-gray-500"
                          size="txtInterRegular16"
                        >
                          Job tittle, Keyword...
                        </Text>
                      </div>
                      <Line className="bg-gray-300 h-8 sm:h-px sm:w-full w-px" />
                      <Input
                        name="inputfield"
                        placeholder="Your Location"
                        className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                        wrapClassName="flex rounded-[5px] w-[44%] sm:w-full"
                        prefix={
                          <Img
                            className="h-6 mr-3 my-auto"
                            src="images/img_fimappin.svg"
                            alt="fi:map-pin"
                          />
                        }
                        color="white_A700"
                        size="md"
                        variant="fill"
                      ></Input>
                    </div>
                    <Button
                      className="capitalize cursor-pointer font-semibold min-w-[131px] rounded text-base text-center"
                      shape="round"
                      color="blue_800"
                      size="2xl"
                      variant="fill"
                    >
                      Find Job
                    </Button>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="text-center text-gray-500 text-sm w-auto"
                      size="txtInterRegular14Gray500"
                    >
                      Suggestion:
                    </Text>
                    <Text
                      className="text-blue_gray-800 text-center text-sm w-auto"
                      size="txtInterRegular14Bluegray800"
                    >
                      {" "}
                      Designer,
                    </Text>
                    <Text
                      className="text-blue_gray-800 text-center text-sm w-auto"
                      size="txtInterRegular14Bluegray800"
                    >
                      {" "}
                      Programing,
                    </Text>
                    <Text
                      className="text-blue-800 text-center text-sm w-auto"
                      size="txtInterMedium14"
                    >
                      {" "}
                      Digital Marketing,
                    </Text>
                    <Text
                      className="text-blue_gray-800 text-center text-sm w-auto"
                      size="txtInterRegular14Bluegray800"
                    >
                      {" "}
                      Video,
                    </Text>
                    <Text
                      className="text-blue_gray-800 text-center text-sm w-auto"
                      size="txtInterRegular14Bluegray800"
                    >
                      {" "}
                      Animation.
                    </Text>
                  </div>
                </div>
              </div>
              <Img
                className="h-[382px]"
                src="images/img_illustration.svg"
                alt="illustration"
              />
            </div>
            <List
              className="sm:flex-col flex-row md:gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-between max-w-[1920px] md:px-10 sm:px-5 px-[300px] w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 hover:cursor-pointer flex flex-row gap-5 items-center justify-start sm:ml-[0] hover:mx-0 p-5 md:px-5 rounded-lg hover:shadow-bs3 w-auto hover:w-full">
                <Button
                  className="flex h-[72px] items-center justify-center rounded w-[72px]"
                  shape="round"
                  color="blue_50"
                  size="2xl"
                  variant="fill"
                >
                  <Img
                    className="h-10"
                    src="images/img_briefcaseduotone.svg"
                    alt="briefcaseduoton"
                  />
                </Button>
                <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                    size="txtInterMedium24"
                  >
                    1,75,324
                  </Text>
                  <Text
                    className="text-base text-blue_gray-500 w-auto"
                    size="txtInterRegular16Bluegray500"
                  >
                    Live Job
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 hover:cursor-pointer flex flex-row gap-5 items-center justify-start sm:ml-[0] hover:mx-0 p-5 md:px-5 rounded-lg hover:shadow-bs3 shadow-bs3 w-auto hover:w-full">
                <Button
                  className="flex h-[72px] items-center justify-center rounded w-[72px]"
                  shape="round"
                  color="blue_800"
                  size="2xl"
                  variant="fill"
                >
                  <Img
                    className="h-10"
                    src="images/img_buildingsduotone.svg"
                    alt="buildingsduoton"
                  />
                </Button>
                <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                    size="txtInterMedium24"
                  >
                    97,354
                  </Text>
                  <Text
                    className="text-base text-blue_gray-500 w-auto"
                    size="txtInterRegular16Bluegray500"
                  >
                    Companies
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 hover:cursor-pointer flex flex-row gap-5 items-center justify-start sm:ml-[0] hover:mx-0 p-5 md:px-5 rounded-lg hover:shadow-bs3 w-auto hover:w-full">
                <Button
                  className="flex h-[72px] items-center justify-center rounded w-[72px]"
                  shape="round"
                  color="blue_50"
                  size="2xl"
                  variant="fill"
                >
                  <Img
                    className="h-10"
                    src="images/img_usersduotone1.svg"
                    alt="usersduotoneOne"
                  />
                </Button>
                <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                    size="txtInterMedium24"
                  >
                    38,47,154
                  </Text>
                  <Text
                    className="text-base text-blue_gray-500 w-auto"
                    size="txtInterRegular16Bluegray500"
                  >
                    Candidates
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 hover:cursor-pointer flex flex-row gap-5 items-center justify-start sm:ml-[0] hover:mx-0 p-5 md:px-5 rounded-lg hover:shadow-bs3 w-auto hover:w-full">
                <Button
                  className="flex h-[72px] items-center justify-center rounded w-[72px]"
                  shape="round"
                  color="blue_50"
                  size="2xl"
                  variant="fill"
                >
                  <Img
                    className="h-10"
                    src="images/img_briefcaseduotone.svg"
                    alt="briefcaseduoton"
                  />
                </Button>
                <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                    size="txtInterMedium24"
                  >
                    7,532
                  </Text>
                  <Text
                    className="text-base text-blue_gray-500 w-auto"
                    size="txtInterRegular16Bluegray500"
                  >
                    New Jobs
                  </Text>
                </div>
              </div>
            </List>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-start justify-start md:px-10 sm:px-5 px-[300px] py-[100px] shadow-bs4 w-auto md:w-full">
          <div className="flex flex-col gap-[45px] items-start justify-start max-w-[1320px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900 w-auto"
              size="txtInterMedium40"
            >
              Most Popular Vacancies
            </Text>
            <div className="flex flex-col items-start justify-start w-auto md:w-full">
              <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="text-gray-900 text-lg w-auto"
                    size="txtInterMedium18"
                  >
                    Anesthesiologists
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtInterRegular14Bluegray500"
                  >
                    45,904 Open Positions
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="text-gray-900 text-lg w-auto"
                    size="txtInterMedium18"
                  >
                    Surgeons
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtInterRegular14Bluegray500"
                  >
                    50,364 Open Positions
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="text-gray-900 text-lg w-auto"
                    size="txtInterMedium18"
                  >
                    Obstetricians-Gynecologists
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtInterRegular14Bluegray500"
                  >
                    4,339 Open Positions
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="text-gray-900 text-lg w-auto"
                    size="txtInterMedium18"
                  >
                    Orthodontists
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtInterRegular14Bluegray500"
                  >
                    20,079 Open Positions
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="text-gray-900 text-lg w-auto"
                    size="txtInterMedium18"
                  >
                    Maxillofacial Surgeons
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtInterRegular14Bluegray500"
                  >
                    74,875 Open Positions
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="text-gray-900 text-lg w-auto"
                    size="txtInterMedium18"
                  >
                    Software Developer
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtInterRegular14Bluegray500"
                  >
                    43359 Open Positions
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="text-gray-900 text-lg w-auto"
                    size="txtInterMedium18"
                  >
                    Psychiatrists
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtInterRegular14Bluegray500"
                  >
                    18,599 Open Positions
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="text-blue-800 text-lg underline w-auto"
                    size="txtInterMedium18Blue800"
                  >
                    Data Scientist
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtInterRegular14Bluegray500"
                  >
                    28,200 Open Positions
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="text-gray-900 text-lg w-auto"
                    size="txtInterMedium18"
                  >
                    Financial Manager
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtInterRegular14Bluegray500"
                  >
                    61,391 Open Positions
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="text-gray-900 text-lg w-auto"
                    size="txtInterMedium18"
                  >
                    Management Analysis
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtInterRegular14Bluegray500"
                  >
                    93,046 Open Positions
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="text-gray-900 text-lg w-auto"
                    size="txtInterMedium18"
                  >
                    IT Manager
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtInterRegular14Bluegray500"
                  >
                    50,963 Open Positions
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="text-gray-900 text-lg w-auto"
                    size="txtInterMedium18"
                  >
                    Operations Research Analysis
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-sm w-auto"
                    size="txtInterRegular14Bluegray500"
                  >
                    16,627 Open Positions
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 flex flex-col gap-[50px] items-center justify-start md:px-10 sm:px-5 px-[300px] py-[100px] w-auto md:w-full">
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900 w-auto"
            size="txtInterMedium40"
          >
            How artistry work
          </Text>
          <div className="h-56 md:h-[460px] sm:h-[944px] max-w-[1320px] mx-auto relative w-full">
            <div className="flex flex-col h-full items-center justify-start m-auto w-full">
              <List
                className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-6 items-center justify-start sm:ml-[0] p-6 sm:px-5 w-auto">
                  <Button
                    className="flex h-[72px] items-center justify-center w-[72px]"
                    shape="circle"
                    color="white_A700"
                    size="2xl"
                    variant="fill"
                  >
                    <Img
                      className="h-8"
                      src="images/img_userplusduotone.svg"
                      alt="userplusduotone"
                    />
                  </Button>
                  <div className="flex flex-col gap-3 items-start justify-start w-auto">
                    <Text
                      className="text-center text-gray-900 text-lg w-auto"
                      size="txtInterMedium18"
                    >
                      Create account
                    </Text>
                    <Text
                      className="leading-[20.00px] max-w-[264px] md:max-w-full text-blue_gray-500 text-center text-sm"
                      size="txtInterRegular14Bluegray500"
                    >
                      Aliquam facilisis egestas sapien, nec tempor leo tristique
                      at.
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-6 items-center justify-start sm:ml-[0] p-6 sm:px-5 rounded-[12px] w-auto">
                  <Button
                    className="flex h-[72px] items-center justify-center w-[72px]"
                    shape="circle"
                    color="blue_800"
                    size="2xl"
                    variant="fill"
                  >
                    <Img
                      className="h-8"
                      src="images/img_upload.svg"
                      alt="upload"
                    />
                  </Button>
                  <div className="flex flex-col gap-3 items-start justify-start w-auto">
                    <Text
                      className="text-center text-gray-900 text-lg w-auto"
                      size="txtInterMedium18"
                    >
                      Upload CV/Resume
                    </Text>
                    <Text
                      className="leading-[20.00px] max-w-[264px] md:max-w-full text-blue_gray-500 text-center text-sm"
                      size="txtInterRegular14Bluegray500"
                    >
                      Curabitur sit amet maximus ligula. Nam a nulla ante. Nam
                      sodales
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-6 items-center justify-start sm:ml-[0] p-6 sm:px-5 w-auto">
                  <Button
                    className="flex h-[72px] items-center justify-center w-[72px]"
                    shape="circle"
                    color="white_A700"
                    size="2xl"
                    variant="fill"
                  >
                    <Img
                      className="h-8"
                      src="images/img_magnifyingglassplusduotone.svg"
                      alt="magnifyingglass"
                    />
                  </Button>
                  <div className="flex flex-col gap-3 items-start justify-start w-auto">
                    <Text
                      className="text-center text-gray-900 text-lg w-auto"
                      size="txtInterMedium18"
                    >
                      Find suitable job
                    </Text>
                    <Text
                      className="leading-[20.00px] max-w-[264px] md:max-w-full text-blue_gray-500 text-center text-sm"
                      size="txtInterRegular14Bluegray500"
                    >
                      Phasellus quis eleifend ex. Morbi nec fringilla nibh.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-6 items-center justify-center sm:ml-[0] p-6 sm:px-5 w-auto">
                  <Button
                    className="flex h-[72px] items-center justify-center w-[72px]"
                    shape="circle"
                    color="white_A700"
                    size="2xl"
                    variant="fill"
                  >
                    <Img
                      className="h-8"
                      src="images/img_checkmark.svg"
                      alt="checkmark"
                    />
                  </Button>
                  <div className="flex flex-col gap-3 items-start justify-start w-auto">
                    <Text
                      className="text-center text-gray-900 text-lg w-auto"
                      size="txtInterMedium18"
                    >
                      Apply job
                    </Text>
                    <Text
                      className="leading-[20.00px] max-w-[264px] md:max-w-full text-blue_gray-500 text-center text-sm"
                      size="txtInterRegular14Bluegray500"
                    >
                      Curabitur sit amet maximus ligula. Nam a nulla ante, Nam
                      sodales purus.
                    </Text>
                  </div>
                </div>
              </List>
            </div>
            <div className="absolute flex flex-col gap-3 inset-x-[0] items-center justify-start mx-auto top-[2%] w-[68%]">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <Img
                  className="h-12"
                  src="images/img_arrows.svg"
                  alt="arrows"
                />
                <Img
                  className="h-12"
                  src="images/img_arrows.svg"
                  alt="arrows_One"
                />
              </div>
              <Img
                className="h-12"
                src="images/img_arrows.svg"
                alt="arrows_Two"
              />
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-start justify-start md:px-10 sm:px-5 px-[300px] py-[100px] shadow-bs4 w-auto md:w-full">
          <div className="flex flex-col gap-[45px] items-center justify-start max-w-[1320px] mx-auto w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1320px] w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900 text-justify w-auto"
                size="txtInterMedium40"
              >
                Popular category
              </Text>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[147px]"
                rightIcon={
                  <Img
                    className="h-6 ml-3"
                    src="images/img_arrowright.svg"
                    alt="arrow_right"
                  />
                }
                shape="round"
                color="blue_50"
                size="lg"
                variant="outline"
              >
                <div className="capitalize font-semibold text-base text-left">
                  View All
                </div>
              </Button>
            </div>
            <div className="flex flex-col items-start justify-start w-auto md:w-full">
              <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-row gap-4 items-center justify-start p-6 sm:px-5 rounded-[12px] hover:shadow-bs3 hover:w-full w-full">
                  <Button
                    className="flex h-[68px] items-center justify-center rounded-lg w-[68px]"
                    color="blue_50"
                    size="2xl"
                    variant="fill"
                  >
                    <Img
                      className="h-8"
                      src="images/img_pennibduotone.svg"
                      alt="pennibduotone"
                    />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="text-gray-900 text-lg w-auto"
                      size="txtInterMedium18"
                    >
                      Graphics & Design
                    </Text>
                    <Text
                      className="text-gray-700 text-sm w-auto"
                      size="txtInterRegular14"
                    >
                      357 Open position
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-row gap-4 items-center justify-start p-6 sm:px-5 rounded-[12px] hover:shadow-bs3 hover:w-full w-full">
                  <Button
                    className="flex h-[68px] items-center justify-center rounded-lg w-[68px]"
                    color="blue_50"
                    size="2xl"
                    variant="fill"
                  >
                    <Img className="h-8" src="images/img_cut.svg" alt="cut" />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="text-gray-900 text-lg w-auto"
                      size="txtInterMedium18"
                    >
                      Code & Programing
                    </Text>
                    <Text
                      className="text-gray-700 text-sm w-auto"
                      size="txtInterRegular14"
                    >
                      312 Open position
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-row gap-4 items-center justify-start p-6 sm:px-5 rounded-[12px] hover:shadow-bs3 hover:w-full w-full">
                  <Button
                    className="flex h-[68px] items-center justify-center rounded-lg w-[68px]"
                    color="blue_50"
                    size="2xl"
                    variant="fill"
                  >
                    <Img
                      className="h-8"
                      src="images/img_megaphone.svg"
                      alt="megaphone"
                    />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="text-gray-900 text-lg w-auto"
                      size="txtInterMedium18"
                    >
                      Digital Marketing
                    </Text>
                    <Text
                      className="text-gray-700 text-sm w-auto"
                      size="txtInterRegular14"
                    >
                      297 Open position
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-row gap-4 items-center justify-start p-6 sm:px-5 rounded-[12px] hover:shadow-bs3 hover:w-full w-full">
                  <Button
                    className="flex h-[68px] items-center justify-center rounded-lg w-[68px]"
                    color="blue_50"
                    size="2xl"
                    variant="fill"
                  >
                    <Img
                      className="h-8"
                      src="images/img_television.svg"
                      alt="television"
                    />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="text-gray-900 text-lg w-auto"
                      size="txtInterMedium18"
                    >
                      Video & Animation
                    </Text>
                    <Text
                      className="text-gray-700 text-sm w-auto"
                      size="txtInterRegular14"
                    >
                      247 Open position
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-row gap-4 items-center justify-start p-6 sm:px-5 rounded-[12px] hover:shadow-bs3 hover:w-full w-full">
                  <Button
                    className="flex h-[68px] items-center justify-center rounded-lg w-[68px]"
                    color="blue_50"
                    size="2xl"
                    variant="fill"
                  >
                    <Img
                      className="h-8"
                      src="images/img_music.svg"
                      alt="music"
                    />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="text-gray-900 text-lg w-auto"
                      size="txtInterMedium18"
                    >
                      Music & Audio
                    </Text>
                    <Text
                      className="text-gray-700 text-sm w-auto"
                      size="txtInterRegular14"
                    >
                      204 Open position
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-row gap-4 items-center justify-start p-6 sm:px-5 rounded-[12px] hover:shadow-bs3 hover:w-full w-full">
                  <Button
                    className="flex h-[68px] items-center justify-center rounded-lg w-[68px]"
                    color="blue_50"
                    size="2xl"
                    variant="fill"
                  >
                    <Img className="h-8" src="images/img_icon.svg" alt="icon" />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="text-gray-900 text-lg w-auto"
                      size="txtInterMedium18"
                    >
                      Account & Finance
                    </Text>
                    <Text
                      className="text-gray-700 text-sm w-auto"
                      size="txtInterRegular14"
                    >
                      167 Open position
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-row gap-4 items-center justify-start p-6 sm:px-5 rounded-[12px] hover:shadow-bs3 hover:w-full w-full">
                  <Button
                    className="flex h-[68px] items-center justify-center rounded-lg w-[68px]"
                    color="blue_50"
                    size="2xl"
                    variant="fill"
                  >
                    <Img className="h-8" src="images/img_bag.svg" alt="bag" />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="text-gray-900 text-justify text-lg w-auto"
                      size="txtInterMedium18"
                    >
                      Health & Care
                    </Text>
                    <Text
                      className="text-gray-700 text-justify text-sm w-auto"
                      size="txtInterRegular14"
                    >
                      125 Open position
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-row gap-4 items-center justify-start p-6 sm:px-5 rounded-[12px] hover:shadow-bs3 shadow-bs3 hover:w-full w-full">
                  <Button
                    className="flex h-[68px] items-center justify-center rounded-lg w-[68px]"
                    color="blue_800"
                    size="2xl"
                    variant="fill"
                  >
                    <Img
                      className="h-8"
                      src="images/img_databaseduotone.svg"
                      alt="databaseduotone"
                    />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="text-blue-800 text-lg w-auto"
                      size="txtInterMedium18Blue800"
                    >
                      Data & Science
                    </Text>
                    <Text
                      className="text-gray-700 text-sm w-auto"
                      size="txtInterRegular14"
                    >
                      57 Open position
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col gap-[50px] items-center justify-center md:px-10 sm:px-5 px-[300px] py-[100px] w-auto md:w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1320px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900_01 w-auto"
              size="txtInterMedium40Gray90001"
            >
              Featured job
            </Text>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[147px]"
              rightIcon={
                <Img
                  className="h-6 ml-3"
                  src="images/img_arrowright.svg"
                  alt="arrow_right"
                />
              }
              shape="round"
              color="blue_50"
              size="lg"
              variant="outline"
            >
              <div className="capitalize font-semibold text-base text-left">
                View All
              </div>
            </Button>
          </div>
          <div className="flex flex-col gap-6 items-start justify-start max-w-[1320px] mx-auto w-full">
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
              <div className="bg-gradient  border border-gray-300 border-solid flex flex-col gap-5 items-start justify-start p-6 sm:px-5 rounded-lg shadow-bs5 w-full">
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
          </div>
        </div>
        <div className="flex flex-col gap-[50px] items-start justify-start pb-[100px] md:px-10 sm:px-5 px-[300px] w-auto md:w-full">
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900 w-full"
            size="txtInterMedium40"
          >
            Top companies
          </Text>
          <div className="flex flex-col items-start justify-start max-w-[1320px] mx-auto w-full">
            <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-5 items-start justify-start p-6 sm:px-5 rounded-lg shadow-bs5 w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-full">
                  <Button
                    className="flex h-14 items-center justify-center rounded w-14"
                    shape="round"
                    color="pink_400"
                    size="2xl"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_globe.svg"
                      alt="globe"
                    />
                  </Button>
                  <div className="flex flex-1 flex-col gap-1.5 items-start justify-start w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-gray-900_01 text-lg w-auto"
                        size="txtInterMedium18Gray90001"
                      >
                        Dribbble
                      </Text>
                      <Button
                        className="cursor-pointer min-w-[83px] rounded-[13px] text-center text-sm"
                        color="red_50"
                        size="sm"
                        variant="fill"
                      >
                        Featured
                      </Button>
                    </div>
                    <div className="flex flex-row gap-1 items-center justify-start w-full">
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_location.svg"
                        alt="location"
                      />
                      <Text
                        className="flex-1 text-blue_gray-500 text-sm w-auto"
                        size="txtInterRegular14Bluegray500"
                      >
                        Jakarta, Indonesia
                      </Text>
                    </div>
                  </div>
                </div>
                <Button
                  className="capitalize cursor-pointer font-semibold text-base text-center w-full"
                  shape="round"
                  color="blue_50"
                  size="lg"
                  variant="fill"
                >
                  Open Position (3)
                </Button>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-5 items-start justify-start p-6 sm:px-5 rounded-lg shadow-bs5 w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-full">
                  <Button
                    className="flex h-14 items-center justify-center rounded w-14"
                    shape="round"
                    color="pink_400"
                    size="2xl"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_globe.svg"
                      alt="globe"
                    />
                  </Button>
                  <div className="flex flex-1 flex-col gap-1.5 items-start justify-start w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-gray-900_01 text-lg w-auto"
                        size="txtInterMedium18Gray90001"
                      >
                        Dribbble
                      </Text>
                      <Button
                        className="cursor-pointer min-w-[83px] rounded-[13px] text-center text-sm"
                        color="red_50"
                        size="sm"
                        variant="fill"
                      >
                        Featured
                      </Button>
                    </div>
                    <div className="flex flex-row gap-1 items-center justify-start w-full">
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_location.svg"
                        alt="location"
                      />
                      <Text
                        className="flex-1 text-blue_gray-500 text-sm w-auto"
                        size="txtInterRegular14Bluegray500"
                      >
                        Jakarta, Indonesia
                      </Text>
                    </div>
                  </div>
                </div>
                <Button
                  className="capitalize cursor-pointer font-semibold text-base text-center w-full"
                  shape="round"
                  color="blue_50"
                  size="lg"
                  variant="fill"
                >
                  Open Position (3)
                </Button>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-5 items-start justify-start p-6 sm:px-5 rounded-lg shadow-bs5 w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-full">
                  <Button
                    className="flex h-14 items-center justify-center rounded w-14"
                    shape="round"
                    color="pink_400"
                    size="2xl"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_globe.svg"
                      alt="globe"
                    />
                  </Button>
                  <div className="flex flex-1 flex-col gap-1.5 items-start justify-start w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-gray-900_01 text-lg w-auto"
                        size="txtInterMedium18Gray90001"
                      >
                        Dribbble
                      </Text>
                      <Button
                        className="cursor-pointer min-w-[83px] rounded-[13px] text-center text-sm"
                        color="red_50"
                        size="sm"
                        variant="fill"
                      >
                        Featured
                      </Button>
                    </div>
                    <div className="flex flex-row gap-1 items-center justify-start w-full">
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_location.svg"
                        alt="location"
                      />
                      <Text
                        className="flex-1 text-blue_gray-500 text-sm w-auto"
                        size="txtInterRegular14Bluegray500"
                      >
                        Jakarta, Indonesia
                      </Text>
                    </div>
                  </div>
                </div>
                <Button
                  className="capitalize cursor-pointer font-semibold text-base text-center w-full"
                  shape="round"
                  color="blue_50"
                  size="lg"
                  variant="fill"
                >
                  Open Position (3)
                </Button>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-5 items-start justify-start p-6 sm:px-5 rounded-lg shadow-bs5 w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-full">
                  <Button
                    className="flex h-14 items-center justify-center rounded w-14"
                    shape="round"
                    color="pink_400"
                    size="2xl"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_globe.svg"
                      alt="globe"
                    />
                  </Button>
                  <div className="flex flex-1 flex-col gap-1.5 items-start justify-start w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-gray-900_01 text-lg w-auto"
                        size="txtInterMedium18Gray90001"
                      >
                        Dribbble
                      </Text>
                      <Button
                        className="cursor-pointer min-w-[83px] rounded-[13px] text-center text-sm"
                        color="red_50"
                        size="sm"
                        variant="fill"
                      >
                        Featured
                      </Button>
                    </div>
                    <div className="flex flex-row gap-1 items-center justify-start w-full">
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_location.svg"
                        alt="location"
                      />
                      <Text
                        className="flex-1 text-blue_gray-500 text-sm w-auto"
                        size="txtInterRegular14Bluegray500"
                      >
                        Jakarta, Indonesia
                      </Text>
                    </div>
                  </div>
                </div>
                <Button
                  className="capitalize cursor-pointer font-semibold text-base text-center w-full"
                  shape="round"
                  color="blue_50"
                  size="lg"
                  variant="fill"
                >
                  Open Position (3)
                </Button>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-5 items-start justify-start p-6 sm:px-5 rounded-lg shadow-bs5 w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-full">
                  <Button
                    className="flex h-14 items-center justify-center rounded w-14"
                    shape="round"
                    color="pink_400"
                    size="2xl"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_globe.svg"
                      alt="globe"
                    />
                  </Button>
                  <div className="flex flex-1 flex-col gap-1.5 items-start justify-start w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-gray-900_01 text-lg w-auto"
                        size="txtInterMedium18Gray90001"
                      >
                        Dribbble
                      </Text>
                      <Button
                        className="cursor-pointer min-w-[83px] rounded-[13px] text-center text-sm"
                        color="red_50"
                        size="sm"
                        variant="fill"
                      >
                        Featured
                      </Button>
                    </div>
                    <div className="flex flex-row gap-1 items-center justify-start w-full">
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_location.svg"
                        alt="location"
                      />
                      <Text
                        className="flex-1 text-blue_gray-500 text-sm w-auto"
                        size="txtInterRegular14Bluegray500"
                      >
                        Jakarta, Indonesia
                      </Text>
                    </div>
                  </div>
                </div>
                <Button
                  className="capitalize cursor-pointer font-semibold text-base text-center w-full"
                  shape="round"
                  color="blue_50"
                  size="lg"
                  variant="fill"
                >
                  Open Position (3)
                </Button>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col gap-5 items-start justify-start p-6 sm:px-5 rounded-lg shadow-bs5 w-full">
                <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-full">
                  <Button
                    className="flex h-14 items-center justify-center rounded w-14"
                    shape="round"
                    color="pink_400"
                    size="2xl"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_globe.svg"
                      alt="globe"
                    />
                  </Button>
                  <div className="flex flex-1 flex-col gap-1.5 items-start justify-start w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Text
                        className="text-gray-900_01 text-lg w-auto"
                        size="txtInterMedium18Gray90001"
                      >
                        Dribbble
                      </Text>
                      <Button
                        className="cursor-pointer min-w-[83px] rounded-[13px] text-center text-sm"
                        color="red_50"
                        size="sm"
                        variant="fill"
                      >
                        Featured
                      </Button>
                    </div>
                    <div className="flex flex-row gap-1 items-center justify-start w-full">
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_location.svg"
                        alt="location"
                      />
                      <Text
                        className="flex-1 text-blue_gray-500 text-sm w-auto"
                        size="txtInterRegular14Bluegray500"
                      >
                        Jakarta, Indonesia
                      </Text>
                    </div>
                  </div>
                </div>
                <Button
                  className="capitalize cursor-pointer font-semibold text-base text-center w-full"
                  shape="round"
                  color="blue_50"
                  size="lg"
                  variant="fill"
                >
                  Open Position (3)
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 flex flex-col gap-[50px] items-center justify-start py-[100px] w-auto md:w-full">
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900_01 w-auto"
            size="txtInterMedium40Gray90001"
          >
            Clients Testimonial
          </Text>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="h-[294px] md:px-5 relative w-full">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                activeIndex={sliderState}
                responsive={{
                  0: { items: 1 },
                  550: { items: 2 },
                  1050: { items: 3 },
                }}
                onSlideChanged={(e) => {
                  setsliderState(e?.item);
                }}
                ref={sliderRef}
                className="absolute gap-6 inset-[0] m-auto w-auto"
                items={[...Array(15)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="bg-white-A700 flex flex-col md:gap-10 gap-20 items-center justify-start mx-2.5 p-6 sm:px-5 rounded-[12px] shadow-bs6">
                      <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                        <Img
                          className="h-7 w-[148px]"
                          src="images/img_rating.svg"
                          alt="rating"
                        />
                        <Text
                          className="leading-[24.00px] max-w-[376px] md:max-w-full text-base text-blue_gray-700"
                          size="txtInterRegular16Bluegray700"
                        >
                          “Ut ullamcorper hendrerit tempor. Aliquam in rutrum
                          dui. Maecenas ac placerat metus, in faucibus est.”
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between mb-0.5 w-[376px] sm:w-full">
                        <div className="flex flex-row gap-3 items-center justify-start w-auto">
                          <Img
                            className="h-12 md:h-auto rounded-[50%] w-12"
                            src="images/img_image.png"
                            alt="image"
                          />
                          <div className="flex flex-col gap-1 items-start justify-start w-auto">
                            <Text
                              className="text-base text-center text-gray-900_01 w-auto"
                              size="txtInterMedium16Gray90001"
                            >
                              Robert Fox
                            </Text>
                            <Text
                              className="text-blue_gray-400 text-sm w-auto"
                              size="txtInterRegular14Bluegray400"
                            >
                              UI/UX Designer
                            </Text>
                          </div>
                        </div>
                        <Img
                          className="h-12 w-12"
                          src="images/img_quote.svg"
                          alt="quote"
                        />
                      </div>
                    </div>
                  </React.Fragment>
                ))}
                renderDotsItem={({ isActive }) => {
                  if (isActive) {
                    return (
                      <div className="inline-block cursor-pointer h-2.5 bg-blue-A700 w-6 rounded-[5px]" />
                    );
                  }
                  return (
                    <div
                      className="inline-block cursor-pointer rounded-[50%] h-2.5 bg-blue-200 w-2.5"
                      role="button"
                      tabIndex={0}
                    />
                  );
                }}
              />
              <div className="absolute flex flex-row flex-wrap gap-3 h-max inset-[0] items-center justify-between m-auto max-w-[1920px] md:px-10 sm:px-5 px-[204px] w-full">
                <Button
                  className="flex h-12 items-center justify-center rotate-[180deg] rounded-[5px] w-12"
                  shape="round"
                  color="white_A700"
                  size="lg"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_arrowleft.svg"
                    alt="arrowleft"
                  />
                </Button>
                <Button
                  className="flex h-12 items-center justify-center rounded-[5px] w-12"
                  shape="round"
                  color="white_A700"
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
            </div>
          </div>
          <PagerIndicator
            className="flex gap-2 h-2.5 items-start justify-start w-24"
            count={5}
            activeCss="inline-block cursor-pointer h-2.5 bg-blue-A700 w-6 rounded-[5px]"
            activeIndex={sliderState}
            inactiveCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-blue-200 w-2.5"
            sliderRef={sliderRef}
            selectedWrapperCss="inline-block"
            unselectedWrapperCss="inline-block"
          />
        </div>
        <List
          className="sm:flex-col flex-row gap-6 grid md:grid-cols-1 grid-cols-2 justify-start max-w-[1920px] md:px-10 sm:px-5 px-[300px] py-[100px] w-full"
          orientation="horizontal"
        >
          <div
            className="bg-cover bg-no-repeat flex md:flex-1 flex-col gap-[26px] h-[290px] items-start justify-start p-[50px] md:px-5 rounded-[12px] w-auto md:w-full"
            style={{
              backgroundImage: "url('images/img_candidateemployers.png')",
            }}
          >
            <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900_01 w-auto"
                size="txtInterMedium32"
              >
                Become a Candidate
              </Text>
              <Text
                className="leading-[20.00px] max-w-[312px] md:max-w-full text-blue_gray-600_a2 text-sm"
                size="txtInterRegular14Bluegray600a2"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                cursus a dolor convallis efficitur.
              </Text>
            </div>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[188px]"
              rightIcon={
                <Img
                  className="h-6 ml-3"
                  src="images/img_arrowright.svg"
                  alt="arrow_right"
                />
              }
              shape="round"
              color="white_A700"
              size="lg"
              variant="fill"
            >
              <div className="capitalize font-semibold text-base text-left">
                Register now
              </div>
            </Button>
          </div>
          <div
            className="bg-cover bg-gradient1  bg-no-repeat flex md:flex-1 flex-col gap-[26px] h-[290px] items-start justify-start p-[50px] md:px-5 rounded-[12px] w-auto md:w-full"
            style={{
              backgroundImage:
                "url('images/img_candidateemployers_290x648.png')",
            }}
          >
            <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                size="txtInterMedium32WhiteA700"
              >
                Become a Employers
              </Text>
              <Text
                className="leading-[20.00px] max-w-[312px] md:max-w-full text-sm text-white-A700_a2"
                size="txtInterRegular14WhiteA700a2"
              >
                Cras in massa pellentesque, mollis ligula non, luctus dui. Morbi
                sed efficitur dolor. Pelque augue risus, aliqu.
              </Text>
            </div>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[188px]"
              rightIcon={
                <Img
                  className="h-6 ml-3"
                  src="images/img_arrowright.svg"
                  alt="arrow_right"
                />
              }
              shape="round"
              color="white_A700"
              size="lg"
              variant="fill"
            >
              <div className="capitalize font-semibold text-base text-left">
                Register now
              </div>
            </Button>
          </div>
        </List>
        <Footer className="bg-gray-900 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default HomepageTwoPage;
