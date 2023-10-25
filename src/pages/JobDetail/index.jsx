import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import JobDetailBreadcrumb from "components/JobDetailBreadcrumb";

const countryOptionsList = [
  { label: "English", value: "option1" },
  { label: "Indonesia", value: "option2" },
  { label: "India", value: "option3" },
];

const JobDetailPage = () => {
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
        <JobDetailBreadcrumb className="bg-gray-100 flex sm:flex-col flex-row gap-3 items-center justify-between max-w-[1920px] md:px-10 sm:px-5 px-[300px] py-6 w-full" />
        <div className="flex flex-col items-center justify-start max-w-[1320px] mt-8 mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-8 items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
              <Img
                className="h-24 md:h-auto rounded-[50%] w-24"
                src="images/img_rectangle43.png"
                alt="rectangleFortyThree"
              />
              <div className="flex flex-col gap-3 items-start justify-start ml-6 md:ml-[0] w-auto">
                <div className="flex flex-col items-center justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                    size="txtInterMedium24"
                  >
                    Senior UX Designer
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <Text
                    className="text-blue_gray-800 text-lg w-auto"
                    size="txtInterRegular18Bluegray800"
                  >
                    at Facebook
                  </Text>
                  <Button
                    className="cursor-pointer font-semibold min-w-[98px] text-center text-sm"
                    shape="round"
                    color="green_800"
                    size="sm"
                    variant="fill"
                  >
                    FULL-TIME
                  </Button>
                  <Button
                    className="cursor-pointer min-w-[83px] rounded-[14px] text-center text-sm"
                    color="red_50_01"
                    size="sm"
                    variant="fill"
                  >
                    Featured
                  </Button>
                </div>
              </div>
              <div className="flex flex-row gap-3 items-center justify-center md:ml-[0] ml-[581px] w-auto">
                <Button
                  className="flex h-14 items-center justify-center rounded w-14"
                  shape="round"
                  color="blue_50"
                  size="2xl"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_bookmark_blue_800.svg"
                    alt="bookmark"
                  />
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center rounded w-[248px]"
                  rightIcon={
                    <Img
                      className="h-6"
                      src="images/img_arrowright_white_a700.svg"
                      alt="arrow_right"
                    />
                  }
                  shape="round"
                  color="blue_800"
                  size="2xl"
                  variant="fill"
                >
                  <div className="capitalize font-semibold text-base text-left">
                    Apply now
                  </div>
                </Button>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-6 items-start justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-4 items-start justify-start w-auto md:w-full">
                <Text
                  className="text-gray-900 text-lg w-auto"
                  size="txtInterMedium18"
                >
                  Job Description
                </Text>
                <Text
                  className="leading-[24.00px] max-w-[734px] md:max-w-full text-base text-gray-700"
                  size="txtInterRegular16Gray700"
                >
                  Velstar is a Shopify Plus agency, and we partner with brands
                  to help them grow, we also do the same with our people!
                </Text>
                <Text
                  className="leading-[24.00px] max-w-[734px] md:max-w-full text-base text-gray-700"
                  size="txtInterRegular16Gray700"
                >
                  <>
                    Here at Velstar, we don&#39;t just make websites, we create
                    exceptional digital experiences that consumers love. Our
                    team of designers, developers, strategists, and creators
                    work together to push brands to the next level. From
                    Platform Migration, User Experience & User Interface Design,
                    to Digital Marketing, we have a proven track record in
                    delivering outstanding eCommerce solutions and driving sales
                    for our clients.
                  </>
                </Text>
                <Text
                  className="leading-[24.00px] max-w-[734px] md:max-w-full text-base text-gray-700"
                  size="txtInterRegular16Gray700"
                >
                  The role will involve translating project specifications into
                  clean, test-driven, easily maintainable code. You will work
                  with the Project and Development teams as well as with the
                  Technical Director, adhering closely to project plans and
                  delivering work that meets functional & non-functional
                  requirements. You will have the opportunity to create new,
                  innovative, secure and scalable features for our clients on
                  the Shopify platform
                </Text>
                <Text
                  className="text-base text-gray-700 w-auto"
                  size="txtInterRegular16Gray700"
                >
                  <>Want to work with us? You&#39;re in good company!</>
                </Text>
                <div className="flex flex-col gap-2 items-start justify-start w-auto md:w-full">
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtInterMedium16"
                  >
                    Requirements
                  </Text>
                  <Text
                    className="leading-[24.00px] text-base text-gray-700"
                    size="txtInterRegular16Gray700"
                  >
                    <>
                      Great troubleshooting and analytical skills combined with
                      the desire to tackle challenges head-on
                      <br />
                      3+ years of experience in back-end development working
                      either with multiple smaller projects simultaneously or
                      large-scale applications
                      <br />
                      Experience with HTML, JavaScript, CSS, PHP, Symphony
                      and/or Laravel
                      <br />
                      Working regularly with APIs and Web Services (REST,
                      GrapthQL, SOAP, etc)
                      <br />
                      Have experience/awareness in Agile application
                      development, commercial off-the-shelf software,
                      middleware, servers and storage, and database management.
                      <br />
                      Familiarity with version control and project management
                      systems (e.g., Github, Jira)
                      <br />
                      Great troubleshooting and analytical skills combined with
                      the desire to tackle challenges head-on
                      <br />
                      Ambitious and hungry to grow your career in a fast-growing
                      agency
                    </>
                  </Text>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-auto md:w-full">
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtInterMedium16"
                  >
                    Desirable:
                  </Text>
                  <Text
                    className="leading-[24.00px] text-base text-gray-700"
                    size="txtInterRegular16Gray700"
                  >
                    <>
                      Working knowledge of eCommerce platforms, ideally Shopify
                      but also others e.g. Magento, WooCommerce, Visualsoft to
                      enable seamless migrations.
                      <br />
                      Working knowledge of payment gateways
                      <br />
                      API platform experience / Building restful APIs
                    </>
                  </Text>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-auto md:w-full">
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtInterMedium16"
                  >
                    Benefits
                  </Text>
                  <Text
                    className="leading-[24.00px] text-base text-gray-700"
                    size="txtInterRegular16Gray700"
                  >
                    <>
                      Early finish on Fridays for our end of week catch up (4:30
                      finish, and drink of your choice from the bar)
                      <br />
                      28 days holiday (including bank holidays) rising by 1 day
                      per year PLUS an additional day off on your birthday
                      <br />
                      Generous annual bonus.
                      <br />
                      Healthcare package
                      <br />
                      Paid community days to volunteer for a charity of your
                      choice
                      <br />
                      £100 contribution for your own personal learning and
                      development
                      <br />
                      Free Breakfast on Mondays and free snacks in the office
                      <br />
                      Access to Perkbox with numerous discounts plus free points
                      from the company to spend as you wish.
                      <br />
                      Cycle 2 Work Scheme
                      <br />
                      Brand new MacBook Pro
                      <br />
                      Joining an agency on the cusp of exponential growth and
                      being part of this exciting story.
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-8 items-center justify-start w-[41%] md:w-full">
                <div className="bg-white-A700 border-2 border-blue-50 border-solid flex sm:flex-col flex-row gap-8 items-center justify-center p-8 sm:px-5 rounded-lg w-[536px] sm:w-full">
                  <div className="flex flex-col gap-3 items-center justify-center w-full">
                    <Text
                      className="text-base text-center text-gray-900 w-full"
                      size="txtInterMedium16"
                    >
                      Salary (USD)
                    </Text>
                    <div className="flex flex-col gap-1 items-center justify-center w-full">
                      <Text
                        className="text-center text-green-800 text-xl w-auto"
                        size="txtInterMedium20"
                      >
                        $100,000 - $120,000
                      </Text>
                      <Text
                        className="text-blue_gray-500 text-center text-sm w-full"
                        size="txtInterRegular14Bluegray500"
                      >
                        Yearly salary
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-blue-50 sm:h-0.5 h-24 w-0.5 sm:w-full" />
                  <div className="flex flex-col gap-2 items-center justify-center w-full">
                    <Img
                      className="h-[38px] w-[38px]"
                      src="images/img_map.svg"
                      alt="map"
                    />
                    <div className="flex flex-col gap-0.5 items-center justify-center w-full">
                      <Text
                        className="text-base text-center text-gray-900 w-full"
                        size="txtInterMedium16"
                      >
                        Job Location
                      </Text>
                      <Text
                        className="text-base text-blue_gray-500 text-center w-full"
                        size="txtInterRegular16Bluegray500"
                      >
                        Jakarta, Indonesia
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border-2 border-blue-50 border-solid flex flex-col gap-6 items-center justify-start py-8 rounded-lg w-auto sm:w-full">
                  <div className="flex flex-col gap-5 items-start justify-center w-auto sm:w-full">
                    <Text
                      className="text-gray-900 text-lg w-auto"
                      size="txtInterMedium18"
                    >
                      Job Overview
                    </Text>
                    <div className="gap-4 sm:gap-5 grid sm:grid-cols-1 grid-cols-3 justify-center min-h-[auto] w-full">
                      <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                        <Img
                          className="h-8 w-8"
                          src="images/img_calendar.svg"
                          alt="calendar"
                        />
                        <div className="flex flex-col gap-1 items-start justify-start w-full">
                          <Text
                            className="text-blue_gray-500 text-xs uppercase w-full"
                            size="txtInterRegular12"
                          >
                            Job Posted:
                          </Text>
                          <Text
                            className="text-gray-900 text-sm w-full"
                            size="txtInterMedium14Gray900"
                          >
                            14 Jun, 2021
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                        <Img
                          className="h-8 w-8"
                          src="images/img_clock.svg"
                          alt="clock"
                        />
                        <div className="flex flex-col gap-1 items-start justify-start w-full">
                          <Text
                            className="text-blue_gray-500 text-xs uppercase w-full"
                            size="txtInterRegular12"
                          >
                            Job expire in:
                          </Text>
                          <Text
                            className="text-gray-900 text-sm w-full"
                            size="txtInterMedium14Gray900"
                          >
                            14 Aug, 2021
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                        <Img
                          className="h-8 w-8"
                          src="images/img_stack.svg"
                          alt="stack"
                        />
                        <div className="flex flex-col gap-1 items-start justify-start w-full">
                          <Text
                            className="text-blue_gray-500 text-xs uppercase w-full"
                            size="txtInterRegular12"
                          >
                            Job Level:
                          </Text>
                          <Text
                            className="text-gray-900 text-sm w-full"
                            size="txtInterMedium14Gray900"
                          >
                            Entry Level
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                        <Img
                          className="h-8 w-8"
                          src="images/img_computer.svg"
                          alt="computer"
                        />
                        <div className="flex flex-col gap-1 items-start justify-start w-auto">
                          <Text
                            className="text-blue_gray-500 text-xs uppercase w-auto"
                            size="txtInterRegular12"
                          >
                            Experience
                          </Text>
                          <Text
                            className="text-gray-900 text-sm w-auto"
                            size="txtInterMedium14Gray900"
                          >
                            $50k-80k/month
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                        <Img
                          className="h-8 w-8"
                          src="images/img_briefcase.svg"
                          alt="briefcase"
                        />
                        <div className="flex flex-col gap-1 items-start justify-start w-auto">
                          <Text
                            className="text-blue_gray-500 text-xs uppercase w-auto"
                            size="txtInterRegular12"
                          >
                            Education
                          </Text>
                          <Text
                            className="text-gray-900 text-sm w-auto"
                            size="txtInterMedium14Gray900"
                          >
                            Graduation
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                    <Line className="bg-blue-50 h-0.5 w-full" />
                    <div className="flex flex-col gap-2 items-start justify-start sm:px-5 px-8 w-[536px] sm:w-full">
                      <Text
                        className="text-gray-900 text-lg w-full"
                        size="txtInterMedium18"
                      >
                        Share this job:
                      </Text>
                      <div className="flex flex-row gap-2 items-start justify-start w-auto">
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[147px] rounded"
                          leftIcon={
                            <Img
                              className="h-6 mr-1.5"
                              src="images/img_download.svg"
                              alt="download"
                            />
                          }
                          shape="round"
                          color="blue_50"
                          size="md"
                          variant="fill"
                        >
                          <div className="font-medium text-base text-left">
                            Copy Links
                          </div>
                        </Button>
                        <Button
                          className="flex h-10 items-center justify-center rounded w-10"
                          shape="round"
                          color="blue_50"
                          size="md"
                          variant="fill"
                        >
                          <Img
                            className="h-5"
                            src="images/img_linkedin.svg"
                            alt="linkedin"
                          />
                        </Button>
                        <Img
                          className="h-10 rounded w-10"
                          src="images/img_socialbutton.svg"
                          alt="socialbutton"
                        />
                        <Button
                          className="flex h-10 items-center justify-center rounded w-10"
                          shape="round"
                          color="blue_50"
                          size="md"
                          variant="fill"
                        >
                          <Img
                            className="h-5"
                            src="images/img_socialicon.svg"
                            alt="socialicon"
                          />
                        </Button>
                        <Button
                          className="flex h-10 items-center justify-center rounded w-10"
                          shape="round"
                          color="blue_50"
                          size="md"
                          variant="fill"
                        >
                          <Img
                            className="h-6"
                            src="images/img_mail.svg"
                            alt="mail"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-center justify-start mt-[100px] md:px-10 sm:px-5 px-[300px] py-[100px] shadow-bs8 w-auto md:w-full">
          <div className="flex flex-col gap-12 items-start justify-start max-w-[1323px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900 w-full"
              size="txtInterMedium40"
            >
              Related Jobs
            </Text>
            <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
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
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-900 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default JobDetailPage;
