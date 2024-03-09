import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  List,
  SelectBox,
  Text,
} from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import Navbar from "components/Navbar";

const textboxEightOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const EditProfilePagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto shadow-bs3 w-full">
        <div className="flex flex-col justify-start w-full">
          <Header className="bg-gray-300 flex md:flex-col flex-row font-lexend md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full" />
          <Navbar className="font-manrope h-[107px] md:h-[281px] md:px-5 relative w-full" />
          <Text
            className="md:ml-[0] ml-[206px] mt-[90px] sm:text-[38px] md:text-[44px] text-[52px] text-blue_gray-900"
            size="txtLexendBold52"
          >
            Modifer Mon Profile
          </Text>
          <Line className="bg-light_blue-900 h-[3px] md:ml-[0] ml-[210px] mr-[1111px] mt-[5px] w-[9%]" />
          <div className="bg-white-A700 flex flex-col font-manrope items-center justify-start md:ml-[0] ml-[206px] mr-[108px] mt-16 p-8 md:px-5 rounded shadow-bs1 w-[79%] md:w-full">
            <div className="flex flex-col items-start justify-start mb-[89px] mt-[97px] w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
                <Img
                  className="h-[136px] sm:h-auto object-cover rounded w-[15%] md:w-full"
                  src="images/img_image130_136x156.png"
                  alt="image130"
                />
                <div className="flex flex-col gap-[9px] items-start justify-start ml-5 md:ml-[0] md:mt-0 mt-[5px] w-[19%] md:w-full">
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[75px] rounded-[14px]"
                    leftIcon={
                      <Img
                        className="h-3 mt-px mb-0.5 mr-1"
                        src="images/img_contrast.svg"
                        alt="contrast"
                      />
                    }
                    color="light_blue_900"
                    size="sm"
                    variant="fill"
                  >
                    <div className="text-[11px] text-left">Membre</div>
                  </Button>
                  <Text
                    className="text-gray-900 text-sm"
                    size="txtManropeRegular14"
                  >
                    Ajouter votre image{" "}
                  </Text>
                  <Text
                    className="text-gray-700 text-xs"
                    size="txtManropeRegular12Gray700"
                  >
                    Format autorisés PNG ou JPG
                  </Text>
                  <div className="flex flex-row gap-3 items-center justify-between w-full">
                    <Button
                      className="!text-deep_purple-A400 border border-deep_purple-A400 border-solid cursor-pointer min-w-[115px] text-center text-xs"
                      shape="round"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    >
                      Choisir une image
                    </Button>
                    <div className="flex flex-col items-center justify-end p-[5px] rounded-[3px]">
                      <Text
                        className="mt-1 text-gray-500 text-xs"
                        size="txtManropeRegular12Gray500"
                      >
                        Supprimer
                      </Text>
                    </div>
                  </div>
                </div>
                <Img
                  className="h-[63px] sm:h-auto md:ml-[0] ml-[596px] md:mt-0 mt-[5px] object-cover w-[8%] md:w-full"
                  src="images/img_image.png"
                  alt="image_Three"
                />
              </div>
              <div className="flex flex-col items-start justify-end mt-[45px] w-full">
                <Text
                  className="text-blue_gray-800 text-sm"
                  size="txtManropeBold14Bluegray800"
                >
                  Nom
                </Text>
                <Input
                  name="textfield"
                  placeholder="Flen"
                  className="p-0 placeholder:text-gray-400 text-left text-sm w-full"
                  wrapClassName="rounded w-full"
                  color="gray_100"
                  size="md"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-end mt-4 w-full">
                <Text
                  className="text-blue_gray-800 text-sm"
                  size="txtManropeBold14Bluegray800"
                >
                  Prenom
                </Text>
                <Input
                  name="textfield_One"
                  placeholder="Ben Foulen"
                  className="p-0 placeholder:text-gray-400 text-left text-sm w-full"
                  wrapClassName="rounded w-full"
                  color="gray_100"
                  size="md"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-end mt-4 w-full">
                <Text
                  className="text-blue_gray-800 text-sm"
                  size="txtManropeBold14Bluegray800"
                >
                  Telephone
                </Text>
                <Input
                  name="textfield_Two"
                  placeholder="+216 12 345 678"
                  className="p-0 placeholder:text-gray-400 text-left text-sm w-full"
                  wrapClassName="rounded w-full"
                  color="gray_100"
                  size="md"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-row gap-4 items-center justify-end md:ml-[0] ml-[865px] mt-[21px] w-1/5 md:w-full">
                <div className="flex flex-col items-center justify-start p-[7px] rounded">
                  <Text
                    className="text-gray-500 text-sm"
                    size="txtManropeRegular14Gray500"
                  >
                    Annuler
                  </Text>
                </div>
                <Button
                  className="common-pointer cursor-pointer min-w-[117px] rounded-lg text-center text-sm"
                  onClick={() => navigate("/profilepage")}
                  color="light_blue_900"
                  size="sm"
                  variant="fill"
                >
                  Sauvegarder
                </Button>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-manrope gap-[21px] items-center justify-end md:ml-[0] ml-[206px] mt-[69px] md:px-5 w-[77%] md:w-full">
            <Text className="text-gray-900 text-xl" size="txtManropeBold20">
              Evénements attendus
            </Text>
            <Line className="bg-gray-400 h-px mb-[11px] md:mt-0 mt-[15px] w-[79%]" />
          </div>
          <div className="flex flex-row font-manrope md:gap-10 gap-[864px] items-center justify-end md:ml-[0] ml-[206px] mt-2.5 md:px-5 w-[77%] md:w-full">
            <Text
              className="text-base text-gray-900"
              size="txtManropeRegular16Gray900"
            >
              Conference annuelle
            </Text>
            <Text
              className="text-base text-gray-500 text-right"
              size="txtManropeRegular16Gray500"
            >
              02/01/2022
            </Text>
          </div>
          <div className="flex flex-row font-manrope md:gap-10 gap-[864px] items-center justify-end md:ml-[0] ml-[206px] mt-[13px] md:px-5 w-[77%] md:w-full">
            <Text
              className="text-base text-gray-900"
              size="txtManropeRegular16Gray900"
            >
              Conference annuelle
            </Text>
            <Text
              className="text-base text-gray-500 text-right"
              size="txtManropeRegular16Gray500"
            >
              02/01/2022
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-manrope gap-[21px] items-center justify-end md:ml-[0] ml-[206px] mt-[55px] md:px-5 w-[77%] md:w-full">
            <Text className="text-gray-900 text-xl" size="txtManropeBold20">
              Documents consultés
            </Text>
            <Line className="bg-gray-400 h-px mb-[11px] md:mt-0 mt-[15px] w-[79%]" />
          </div>
          <div className="flex flex-row font-manrope md:gap-10 gap-[950px] items-start justify-end md:ml-[0] ml-[206px] mt-2.5 md:px-5 w-[77%] md:w-full">
            <Text
              className="text-base text-gray-900"
              size="txtManropeRegular16Gray900"
            >
              Rapport 1
            </Text>
            <Text
              className="text-base text-gray-500 text-right"
              size="txtManropeRegular16Gray500"
            >
              02/01/2022
            </Text>
          </div>
          <div className="flex flex-row font-manrope md:gap-10 gap-[975px] items-center justify-end md:ml-[0] ml-[206px] mt-[11px] md:px-5 w-[77%] md:w-full">
            <Text
              className="text-base text-gray-900"
              size="txtManropeRegular16Gray900"
            >
              Guide
            </Text>
            <Text
              className="text-base text-gray-500 text-right"
              size="txtManropeRegular16Gray500"
            >
              02/01/2022
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-lexend gap-[59px] items-start justify-center max-w-[1080px] mt-[115px] mx-auto md:px-5 w-full">
            <div className="h-[345px] sm:h-[432px] md:h-[538px] relative w-[72%] md:w-full">
              <div className="h-[345px] sm:h-[432px] md:h-[538px] m-auto w-full">
                <div className="absolute bg-light_blue-900_e5 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[27px] sm:px-5 rounded-lg shadow-bs5 w-[99%]">
                  <div className="flex flex-col gap-[34px] items-start justify-start mb-[52px] w-[98%] md:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                        size="txtLexendBold40"
                      >
                        Carte Membre{" "}
                      </Text>
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                        size="txtLexendBold40"
                      >
                        2024
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row font-manrope gap-[57px] items-start justify-start w-[88%] md:w-full">
                      <Img
                        className="h-[139px] sm:h-auto object-cover w-[28%] md:w-full"
                        src="images/img_image71.png"
                        alt="imageSeventyOne"
                      />
                      <div className="flex flex-col gap-3 items-start justify-start w-[63%] md:w-full">
                        <div className="flex flex-row gap-[92px] items-center justify-start w-[47%] md:w-full">
                          <Text
                            className="text-gray-300 text-xl"
                            size="txtManropeBold20Gray300"
                          >
                            Nom{" "}
                          </Text>
                          <Text
                            className="text-white-A700 text-xl"
                            size="txtManropeRegular20WhiteA700"
                          >
                            Flen
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[62px] items-center justify-start w-[63%] md:w-full">
                          <Text
                            className="text-gray-300 text-xl"
                            size="txtManropeBold20Gray300"
                          >
                            Prenom
                          </Text>
                          <Text
                            className="text-white-A700 text-xl"
                            size="txtManropeRegular20WhiteA700"
                          >
                            Ben Foulen
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[84px] items-start justify-start w-full">
                          <Text
                            className="mb-0.5 text-gray-300 text-xl"
                            size="txtManropeBold20Gray300"
                          >
                            Email{" "}
                          </Text>
                          <Text
                            className="mt-0.5 text-white-A700 text-xl"
                            size="txtManropeRegular20WhiteA700"
                          >
                            flenbenfoulen@gmail.com
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[35px] items-start justify-start w-3/4 md:w-full">
                          <Text
                            className="mt-0.5 text-gray-300 text-xl"
                            size="txtManropeBold20Gray300"
                          >
                            Telephone{" "}
                          </Text>
                          <Text
                            className="mb-0.5 text-white-A700 text-xl"
                            size="txtManropeRegular20WhiteA700"
                          >
                            +216 12 345 678
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute bottom-[0] h-[103px] right-[0] rounded-[18px]"
                  src="images/img_triangle1.svg"
                  alt="triangleOne"
                />
              </div>
              <Img
                className="absolute bottom-[0] h-[103px] right-[9%] rounded-[18px]"
                src="images/img_triangle1_gray_50_01.svg"
                alt="triangleOne_One"
              />
            </div>
            <div className="flex md:flex-1 flex-col font-manrope items-start justify-start md:mt-0 mt-[35px] w-[23%] md:w-full">
              <CheckBox
                className="text-base text-left text-light_green-900"
                inputClassName="mr-[5px]"
                name="payementvalid"
                id="payementvalid"
                label="Payement  validé"
              ></CheckBox>
              <Text
                className="ml-1 md:ml-[0] mt-[21px] text-base text-cyan-900"
                size="txtManropeBold16"
              >
                Insctructions
              </Text>
              <Text
                className="leading-[20.00px] ml-1 md:ml-[0] mt-2.5 text-cyan-900 text-xs w-[99%] sm:w-full"
                size="txtManropeRegular12Cyan900"
              >
                Labore enim qui sunt eu eiusmod id aliqua. Culpa adipisicing
                nisi ea minim sunt proiden
              </Text>
              <Button
                className="border border-light_blue-900 border-solid cursor-pointer flex items-center justify-center min-w-[242px] ml-1 md:ml-[0] mt-[33px] rounded"
                leftIcon={
                  <Img
                    className="h-4 mt-px mb-[3px] mr-1.5"
                    src="images/img_print.svg"
                    alt="Print"
                  />
                }
                shape="round"
                color="white_A700"
                size="sm"
                variant="fill"
              >
                <div className="text-left text-sm">Imprimer ma carte</div>
              </Button>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[242px] ml-1 md:ml-[0] mt-[9px] rounded"
                leftIcon={
                  <Img
                    className="h-4 mt-px mb-[3px] mr-1.5"
                    src="images/img_reply.svg"
                    alt="reply"
                  />
                }
                shape="round"
                color="light_blue_900"
                size="sm"
                variant="fill"
              >
                <div className="text-left text-sm">Telecharger en PDF</div>
              </Button>
            </div>
          </div>
          <Button
            className="common-pointer cursor-pointer flex items-center justify-center min-w-[109px] md:ml-[0] ml-[1288px] mr-[54px] mt-[25px] rounded"
            onClick={() => navigate("/profilepage")}
            leftIcon={
              <Img
                className="h-5 mr-1.5 my-px"
                src="images/img_arrowdown.svg"
                alt="arrow_down"
              />
            }
            shape="round"
            color="light_blue_50"
            size="md"
            variant="fill"
          >
            <div className="font-manrope text-base text-left">Retour</div>
          </Button>
          <Footer className="bg-gray-300 flex items-center justify-center mt-[52px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default EditProfilePagePage;
