import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-montserrat sm:gap-5 md:gap-5 items-center mx-auto w-full">
        <div className="md:h-[1114px] h-[1118px] sm:h-[1235px] md:mt-0 mt-[3px] md:px-5 relative w-[48%] md:w-full">
          <div className="bg-gray-100 h-[1114px] m-auto w-full"></div>
          <div
            className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto p-[221px] md:px-10 sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_group3.svg')" }}
          >
            <div className="flex flex-col gap-[25px] items-center justify-start mb-[69px] mt-[54px] w-auto sm:w-full">
              <div className="flex flex-col items-center justify-start w-auto sm:w-full">
                <div className="flex flex-col gap-[25px] items-center justify-start w-auto sm:w-full">
                  <div className="flex flex-col gap-[25px] items-center justify-center w-auto sm:w-full">
                    <div className="flex flex-col h-[74px] md:h-auto items-start justify-start w-[477px] sm:w-full">
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-[466px]"
                        size="txtMontserratRomanBold40"
                      >
                        Login to your Account
                      </Text>
                      <Text
                        className="text-gray-600 text-xl w-[398px]"
                        size="txtMontserratRomanRegular20"
                      >
                        Welcome back! Select method to log in:
                      </Text>
                    </div>
                    <List
                      className="sm:flex-col flex-row gap-10 grid sm:grid-cols-1 grid-cols-2 justify-center w-[477px] sm:w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col items-start justify-start w-auto">
                        <div className="border-2 border-indigo-A100_7f border-solid flex flex-col items-start justify-start rounded-[10px] w-auto">
                          <div className="flex flex-row gap-2.5 h-[33px] md:h-auto items-center justify-start py-2.5 w-[134px]">
                            <Img
                              className="h-[30px] md:h-auto object-cover w-[30px]"
                              src="images/img_googleglogo.png"
                              alt="googleglogo"
                            />
                            <Text
                              className="text-[22px] text-black-900 sm:text-lg md:text-xl w-20"
                              size="txtMontserratRomanMedium22"
                            >
                              Google
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <div className="border-2 border-indigo-A100_7f border-solid flex flex-col items-center justify-end p-3 rounded-[10px] w-full">
                          <div className="flex flex-row gap-2.5 h-[35px] md:h-auto items-center justify-start py-2.5 w-[163px]">
                            <Img
                              className="h-[35px] md:h-auto object-cover w-[34px]"
                              src="images/img_facebook_35x34.png"
                              alt="facebook"
                            />
                            <Text
                              className="text-[22px] text-black-900 sm:text-lg md:text-xl w-[110px]"
                              size="txtMontserratRomanMedium22"
                            >
                              Facebook
                            </Text>
                          </div>
                        </div>
                      </div>
                    </List>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-auto sm:w-full">
                    <Line className="bg-gray-600 h-px w-[27%]" />
                    <Text
                      className="text-[15px] text-center text-gray-600 w-[172px]"
                      size="txtMontserratRomanMedium15"
                    >
                      or continue with email
                    </Text>
                    <Line className="bg-gray-600 h-px w-[27%]" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[25px] items-center justify-start w-auto sm:w-full">
                <div className="flex flex-col font-inter gap-2.5 items-center justify-start w-auto sm:w-full">
                  <div className="bg-white-A700 flex flex-col gap-2.5 items-start justify-start w-auto sm:w-full">
                    <div className="bg-indigo-A100_19 border-2 border-indigo-A100_7f border-solid flex flex-row gap-2.5 h-16 md:h-auto items-center justify-start p-2.5 rounded-[10px] w-[453px] sm:w-full">
                      <Img
                        className="h-[30px] w-[30px]"
                        src="images/img_envelope.svg"
                        alt="envelope"
                      />
                      <Text
                        className="text-indigo-700_33 text-lg w-auto"
                        size="txtInterRegular18Indigo70033"
                      >
                        Email
                      </Text>
                    </div>
                    <Input
                      name="frame173"
                      placeholder="Password"
                      className="md:h-auto p-0 placeholder:text-indigo-700_33 sm:h-auto text-left text-lg w-full"
                      wrapClassName="border-2 border-indigo-A100_7f border-solid flex w-full"
                      type="password"
                      prefix={
                        <Img
                          className="h-[30px] mr-2.5 my-auto"
                          src="images/img_checkmark_indigo_700.svg"
                          alt="checkmark"
                        />
                      }
                      suffix={
                        <Img
                          className="h-[30px] ml-[35px] my-auto"
                          src="images/img_eye.svg"
                          alt="eye"
                        />
                      }
                      shape="round"
                      color="indigo_A100_19"
                      size="lg"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex flex-col font-montserrat items-start justify-start w-[453px] sm:w-full">
                    <div className="flex flex-row items-center justify-between w-[451px] sm:w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                        <Img
                          className="h-5 w-5"
                          src="images/img_docstroke.svg"
                          alt="docstroke"
                        />
                        <Text
                          className="text-base text-gray-600 w-[122px]"
                          size="txtMontserratRomanRegular16"
                        >
                          Remember me
                        </Text>
                      </div>
                      <a
                        href="javascript:"
                        className="text-base text-indigo-A100 w-[148px]"
                      >
                        <Text size="txtMontserratRomanSemiBold16">
                          Forgot Password?
                        </Text>
                      </a>
                    </div>
                  </div>
                </div>
                <Button
                  className="common-pointer cursor-pointer font-bold font-inter h-16 rounded-[10px] text-center text-xl w-[453px]"
                  onClick={() => navigate("/")}
                  color="indigo_A100"
                  size="2xl"
                  variant="fill"
                >
                  LOG IN
                </Button>
                <Button
                  className="common-pointer bg-transparent cursor-pointer font-medium font-montserrat min-w-[322px] text-base text-center text-gray-900_02"
                  onClick={() => navigate("/register")}
                  size="xs"
                >
                  Don’t have account? Create an account
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start md:px-5 w-[53%] md:w-full">
          <div className="bg-indigo-500 flex flex-col items-center justify-end p-[43px] md:px-10 sm:px-5 w-full">
            <div className="h-[661px] md:h-[845px] mt-[184px] relative w-[93%] md:w-full">
              <div className="h-[661px] m-auto w-full">
                <div className="bg-gradient2  h-[661px] m-auto rounded-[421px] w-full"></div>
                <div className="absolute bg-gradient3  h-[576px] inset-[0] justify-center m-auto rounded-[367px] w-[88%]"></div>
              </div>
              <Img
                className="absolute h-[402px] inset-[0] justify-center m-auto"
                src="images/img_illustration.svg"
                alt="icongambar"
              />
            </div>
            <div className="flex flex-col h-[184px] md:h-auto items-center justify-start max-w-[893px] py-[50px] w-full">
              <div className="flex flex-col items-center justify-start w-auto md:w-full">
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-blue-50_01 text-center text-xl"
                    size="txtMontserratRomanBold20"
                  >
                    Connect with any device.
                  </Text>
                  <Text
                    className="mt-0.5 text-base text-blue-50_bf text-center"
                    size="txtMontserratRomanMedium16"
                  >
                    Everything you need is an internet connection.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
