import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-montserrat sm:gap-5 md:gap-5 items-center mx-auto w-full">
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[1117px] items-center justify-start p-[219px] md:px-5 w-[48%] md:w-full"
          style={{ backgroundImage: "url('images/img_leftside.png')" }}
        >
          <div className="flex flex-col gap-[25px] items-center justify-start mb-[65px] mt-[55px] w-auto sm:w-full">
            <div className="flex flex-col items-center justify-start w-auto sm:w-full">
              <div className="flex flex-col items-center justify-start w-auto sm:w-full">
                <div className="flex flex-col items-center justify-center w-auto sm:w-full">
                  <div className="flex flex-col h-[70px] md:h-auto items-start justify-start w-[477px] sm:w-full">
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-[426px]"
                      size="txtMontserratRomanBold40"
                    >
                      Create your account
                    </Text>
                    <Text
                      className="text-gray-600 text-xl w-[195px]"
                      size="txtMontserratRomanRegular20"
                    >
                      Unlock all Features!
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-inter gap-[25px] items-center justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-2.5 items-center justify-start w-auto sm:w-full">
                <div className="flex flex-col gap-2.5 items-start justify-start w-auto sm:w-full">
                  <Input
                    name="username"
                    placeholder="Username"
                    className="md:h-auto p-0 placeholder:text-indigo-700_33 sm:h-auto text-left text-lg w-full"
                    wrapClassName="border-2 border-indigo-A100_7f border-solid flex w-full"
                    type="text"
                    prefix={
                      <Img
                        className="h-[30px] mr-2.5 my-auto"
                        src="images/img_user.svg"
                        alt="user"
                      />
                    }
                    shape="round"
                    color="indigo_A100_19"
                    size="lg"
                    variant="fill"
                  ></Input>
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
                    name="password"
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
                    shape="round"
                    color="indigo_A100_19"
                    size="lg"
                    variant="fill"
                  ></Input>
                  <Input
                    name="confirmpassword"
                    placeholder="Confirm Password"
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
                    shape="round"
                    color="indigo_A100_19"
                    size="lg"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-col font-montserrat items-start justify-start w-[453px] sm:w-full">
                  <div className="flex flex-col items-center justify-start w-[451px] sm:w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                      <Img
                        className="h-5 w-5"
                        src="images/img_docstroke.svg"
                        alt="docstroke"
                      />
                      <Text
                        className="text-base text-gray-600 w-[233px]"
                        size="txtMontserratRomanRegular16"
                      >
                        <span className="text-gray-600 font-montserrat text-left font-normal">
                          Accept{" "}
                        </span>
                        <span className="text-indigo-A100 font-montserrat text-left font-medium">
                          terms and conditions
                        </span>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 items-center justify-start w-auto sm:w-full">
                <Button
                  className="common-pointer !text-gray-100 cursor-pointer font-bold font-inter h-16 rounded-[10px] text-center text-xl w-[453px]"
                  onClick={() => navigate("/")}
                  color="indigo_A100"
                  size="2xl"
                  variant="fill"
                >
                  LOG IN
                </Button>
                <Text
                  className="common-pointer text-base text-center text-gray-900_02 w-auto"
                  size="txtMontserratMedium16"
                  onClick={() => navigate("/login")}
                >
                  <span className="text-gray-600 font-montserrat font-normal">
                    You have account?
                  </span>
                  <span className="text-gray-900_02 font-montserrat font-medium">
                    {" "}
                  </span>
                  <span className="text-indigo-A100 font-montserrat font-bold">
                    Login now
                  </span>
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start md:px-5 w-[53%] md:w-full">
          <div className="bg-indigo-500_01 h-[1118px] md:h-[661px] md:pl-10 sm:pl-5 pl-[43px] py-[43px] relative w-full">
            <div className="absolute h-[661px] inset-[0] justify-center m-auto w-[85%] md:w-full">
              <div className="bg-gradient2  h-[661px] m-auto rounded-[421px] w-full"></div>
              <div className="absolute bg-gradient3  h-[576px] inset-[0] justify-center m-auto rounded-[367px] w-[88%]"></div>
            </div>
            <div className="absolute bottom-[4%] flex flex-col h-[184px] md:h-auto inset-x-[0] items-center justify-start max-w-[894px] mx-auto py-[50px] w-full">
              <div className="flex flex-col items-center justify-start w-auto md:w-full">
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-blue-50_01 text-center text-xl"
                    size="txtMontserratRomanBold20"
                  >
                    Join us!
                  </Text>
                  <Text
                    className="mt-1 text-base text-blue-50_bf text-center"
                    size="txtMontserratRomanMedium16"
                  >
                    Just go through the boring process of creating an account.
                  </Text>
                </div>
              </div>
            </div>
            <Img
              className="absolute bottom-[23%] h-[522px] right-[0]"
              src="images/img_illustration.svg"
              alt="undrawthought"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
