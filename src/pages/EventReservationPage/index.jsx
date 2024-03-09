import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import Footer from "components/Footer";

const textboxEightOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const EventReservationPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 font-lexend h-[1977px] mx-auto relative shadow-bs3 w-full">
        <Footer className="absolute bg-gray-300 bottom-[0] flex inset-x-[0] items-center justify-center mx-auto md:px-5 w-full" />
        <div className="absolute flex flex-col md:gap-10 gap-16 justify-start md:px-5 right-[4%] top-[13%] w-[83%]">
          <Text
            className="md:ml-[0] ml-[13px] sm:text-[38px] md:text-[44px] text-[52px] text-blue_gray-900"
            size="txtLexendBold52"
          >
            Conférence Annuelle{" "}
          </Text>
          <div className="flex flex-col h-[1199px] md:h-auto items-start justify-start w-[1199px] md:w-full">
            <Img
              className="h-[390px] sm:h-auto object-cover rounded-lg w-[92%] md:w-full"
              src="images/img_image68_390x1099.png"
              alt="imageSixtyEight"
            />
            <div className="bg-gray-50 flex md:flex-col flex-row font-manrope md:gap-5 items-end justify-start mt-[19px] p-3 rounded-lg w-[92%] md:w-full">
              <Img
                className="h-7 md:mt-0 my-4 w-7"
                src="images/img_clock1_light_blue_900.svg"
                alt="clockOne"
              />
              <Text
                className="mb-3.5 md:mt-0 mt-[17px] text-light_blue-900 text-xl"
                size="txtManropeBold20Lightblue900"
              >
                10:00 - 11:00 AM
              </Text>
              <Img
                className="h-7 md:ml-[0] ml-[182px] md:mt-0 my-4 w-7"
                src="images/img_calendar.svg"
                alt="calendar"
              />
              <Text
                className="mb-3.5 ml-1 md:ml-[0] md:mt-0 mt-[17px] text-light_blue-900 text-xl"
                size="txtManropeBold20Lightblue900"
              >
                11/12/2021
              </Text>
              <Img
                className="h-7 md:ml-[0] ml-[185px] md:mt-0 my-4 w-7"
                src="images/img_pin31_light_blue_900.svg"
                alt="pinThirtyOne"
              />
              <Text
                className="mb-3.5 ml-1 md:ml-[0] md:mt-0 mt-[17px] text-light_blue-900 text-xl"
                size="txtManropeBold20Lightblue900"
              >
                Hotel X-Y-Z
              </Text>
              <div className="flex flex-col items-center justify-start mb-3.5 md:ml-[0] ml-[124px] md:mt-0 mt-2.5 w-[11%] md:w-full">
                <div className="bg-light_blue-900_01 flex flex-row gap-1.5 items-center justify-start p-[7px] rounded-[18px] w-full">
                  <Img
                    className="h-5 ml-1 w-5"
                    src="images/img_bag.svg"
                    alt="bag"
                  />
                  <Text
                    className="text-sm text-white-A700"
                    size="txtManropeRegular14WhiteA700"
                  >
                    Reserver
                  </Text>
                </div>
              </div>
            </div>
            <Text
              className="mt-[77px] sm:text-[25px] md:text-[27px] text-[29px] text-blue_gray-900"
              size="txtLexendBold29"
            >
              Details
            </Text>
            <Text
              className="leading-[22.00px] mt-[11px] text-gray-900 text-sm w-[92%] sm:w-full"
              size="txtManropeRegular14"
            >
              Enim nisi est laboris occaecat culpa quis elit fugiat laboris id
              sunt commodo anim minim laborum magna. Cillum amet id id cillum
              mollit magna incididunt culpa ea quis do consectetur reprehenderit
              ut elit.Dolore esse Lorem cupidatat deserunt ullamco ullamco dolor
              consequat veniam Lorem aliqua anim consectetur esse est eiusmod
              ad. Dolor nulla laborum laborum ut magna fugiat id aliqua mollit
              est velit incididunt eu eu fugiat fugiat. Sit irure Lorem ut aute
              pariatur magna. Quis ea ea non nostrud ex do cupidatat consectetur
              do labore mollit sunt voluptate. Consequat magna ad cupidatat
              occaecat est pariatur laboris commodo magna consectetur.Minim in
              eiusmod labori
            </Text>
            <Text
              className="mt-[33px] sm:text-[25px] md:text-[27px] text-[29px] text-blue_gray-900"
              size="txtLexendBold29"
            >
              Thematique
            </Text>
            <Text
              className="leading-[22.00px] mt-2 text-gray-900 text-sm w-[92%] sm:w-full"
              size="txtManropeRegular14"
            >
              Enim nisi est laboris occaecat culpa quis elit fugiat laboris id
              sunt commodo anim minim laborum magna. Cillum amet id id cillum
              mollit magna incididunt culpa ea quis do consectetur reprehenderit
              ut elit.Dolore esse Lorem cupidatat deserunt ullamco ullamco dolor
              consequat veniam Lorem aliqua anim consectetur esse est eiusmod
              ad. Dolor nulla laborum laborum ut magna fugiat id aliqua mollit
              est velit incididunt eu eu fugiat fugiat. Sit irure Lorem ut aute
              pariatur magna. Quis ea ea non nostrud ex do cupidatat consectetur
              do labore mollit sunt voluptate. Consequat magna ad cupidatat
              occaecat est pariatur laboris commodo magna consectetur.Minim in
              eiusmod labori
            </Text>
            <Text
              className="mt-[30px] sm:text-[25px] md:text-[27px] text-[29px] text-blue_gray-900"
              size="txtLexendBold29"
            >
              Partenaires
            </Text>
            <div className="flex sm:flex-col flex-row gap-[38px] items-center justify-start ml-5 md:ml-[0] mt-7 w-1/2 md:w-full">
              <Img
                className="h-[119px] md:h-auto object-cover w-[119px]"
                src="images/img_image22_82x82.png"
                alt="imageSixtyNine"
              />
              <Img
                className="h-[119px] md:h-auto object-cover w-[119px]"
                src="images/img_image22_5.png"
                alt="imageSixtyNine_One"
              />
              <Img
                className="h-[119px] md:h-auto object-cover w-[119px]"
                src="images/img_image69.png"
                alt="imageSixtyNine_Two"
              />
              <Img
                className="h-[119px] md:h-auto object-cover w-[119px]"
                src="images/img_image22_6.png"
                alt="imageSixtyNine_Three"
              />
            </div>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[109px] md:ml-[0] ml-[1090px] mt-9 rounded"
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
          </div>
        </div>
        <div className="absolute flex md:flex-col flex-row font-manrope md:gap-10 gap-[63px] inset-x-[0] items-start justify-start max-w-[1314px] mx-auto md:px-5 top-[4%] w-full">
          <Img
            className="md:flex-1 h-[63px] sm:h-auto object-cover w-[7%] md:w-full"
            src="images/img_image.png"
            alt="image"
          />
          <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-center justify-evenly w-[89%] md:w-full">
            <List
              className="sm:flex-col flex-row sm:gap-5 grid sm:grid-cols-1 grid-cols-3 w-[43%] md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col items-center justify-start sm:ml-[0] p-1 w-full">
                <Img className="h-6 w-6" src="images/img_home.svg" alt="home" />
                <Text
                  className="text-[10px] text-white-A700"
                  size="txtManropeRegular10"
                >
                  Accueil
                </Text>
              </div>
              <div className="flex flex-col items-center justify-end sm:ml-[0] p-[3px] w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_cinfo.svg"
                  alt="cinfo"
                />
                <Text
                  className="mt-0.5 text-[10px] text-white-A700"
                  size="txtManropeRegular10"
                >
                  A Propos de nous
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start sm:ml-[0] p-1 w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_camera3.svg"
                  alt="cameraThree"
                />
                <Text
                  className="text-[10px] text-white-A700"
                  size="txtManropeRegular10"
                >
                  Media
                </Text>
              </div>
            </List>
            <div className="flex flex-col items-center justify-start pt-1 w-[15%] md:w-full">
              <Img
                className="h-6 w-6"
                src="images/img_geometry.svg"
                alt="geometry"
              />
              <Text
                className="text-[10px] text-white-A700"
                size="txtManropeBold10"
              >
                Activités
              </Text>
              <Line className="bg-white-A700 h-0.5 mt-0.5 w-full" />
            </div>
            <List
              className="sm:flex-col flex-row gap-px grid sm:grid-cols-1 grid-cols-3 w-[43%] md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col items-center justify-end sm:ml-[0] p-[3px] w-full">
                <Img className="h-6 w-6" src="images/img_grid.svg" alt="grid" />
                <Text
                  className="mt-0.5 text-[10px] text-white-A700"
                  size="txtManropeRegular10"
                >
                  Bibliotheque
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start sm:ml-[0] p-1 w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_newsletter.svg"
                  alt="newsletter"
                />
                <Text
                  className="text-[10px] text-white-A700"
                  size="txtManropeRegular10"
                >
                  Contact
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start sm:ml-[0] p-1 w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_television.svg"
                  alt="television"
                />
                <Text
                  className="text-[10px] text-white-A700"
                  size="txtManropeRegular10"
                >
                  Adheration
                </Text>
              </div>
            </List>
          </div>
        </div>
        <div className="absolute bg-light_blue-900 flex flex-col inset-x-[0] items-start justify-start mx-auto rounded shadow-bs1 top-[3%] w-full">
          <div className="flex flex-col items-center justify-start md:px-5 w-[15%] md:w-full">
            <Img
              className="h-[107px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-full"
              src="images/img_rectangle6_14.png"
              alt="rectangleSix"
            />
          </div>
        </div>
        <div className="absolute flex flex-col font-lexend inset-[0] justify-center m-auto md:px-5 w-full">
          <div className="bg-light_blue-900_99 flex flex-col md:gap-10 gap-[109px] items-start justify-center mb-auto mt-[-57px] mx-auto p-[139px] md:px-10 sm:px-5 w-full z-[1]">
            <Line className="bg-light_blue-900 h-[3px] md:ml-[0] ml-[71px] mt-[186px] w-[8%]" />
            <div className="bg-gray-100 flex flex-col items-center justify-end mb-[805px] md:ml-[0] ml-[72px] p-[37px] sm:px-5 rounded-lg shadow-bs5 w-[94%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[31px] w-[97%] md:w-full">
                <div className="flex flex-col items-start justify-start md:mt-0 mt-0.5 w-[43%] md:w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900"
                    size="txtLexendRegular40"
                  >
                    Conférence Annuelle{" "}
                  </Text>
                  <Line className="bg-light_blue-900 h-[3px] mt-[3px] w-1/5" />
                  <Text
                    className="mt-[26px] text-gray-900 text-xl"
                    size="txtLexendRegular20Gray900"
                  >
                    Reserver votre place
                  </Text>
                  <div className="flex sm:flex-col flex-row font-manrope sm:gap-10 items-center justify-between mt-[9px] w-full">
                    <Input
                      name="textboxTwentySeven"
                      placeholder="Nom"
                      className="!placeholder:text-blue_gray-900 !text-blue_gray-900 font-bold p-0 text-left text-sm w-full"
                      wrapClassName="flex sm:flex-1 outline outline-[1px] outline-gray-500 rounded sm:w-full"
                      prefix={
                        <Img
                          className="mt-6 mb-auto h-4 mr-[-16px]"
                          src="images/img_profile_gray_900_16x16.svg"
                          alt="Profile"
                        />
                      }
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    ></Input>
                    <div className="bg-white-A700 flex flex-col items-start justify-end outline outline-[1px] outline-gray-500 p-[3px] rounded">
                      <div className="flex flex-col items-start justify-start ml-2 md:ml-[0] w-[39%] md:w-full">
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtManropeBold14Bluegray900"
                        >
                          Prenom
                        </Text>
                        <div className="flex flex-row gap-1.5 items-center justify-start mt-[3px] w-full">
                          <Img
                            className="h-4 w-4"
                            src="images/img_profile_gray_900_16x16.svg"
                            alt="profile_One"
                          />
                          <Text
                            className="text-gray-400 text-sm"
                            size="txtManropeRegular14Gray400"
                          >
                            Prenom
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col font-manrope items-start justify-end mt-[33px] outline outline-[1px] outline-gray-500 p-[3px] rounded w-full">
                    <div className="flex flex-col items-start justify-start ml-2 md:ml-[0] w-[14%] md:w-full">
                      <Text
                        className="text-blue_gray-900 text-sm"
                        size="txtManropeBold14Bluegray900"
                      >
                        Email
                      </Text>
                      <div className="flex flex-row gap-1.5 items-center justify-start mt-[3px] w-full">
                        <Img
                          className="h-4 w-4"
                          src="images/img_lock.svg"
                          alt="lock_One"
                        />
                        <Text
                          className="text-gray-400 text-sm"
                          size="txtManropeRegular14Gray400"
                        >
                          Email
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col font-manrope items-start justify-end mt-[29px] outline outline-[1px] outline-gray-500 p-[3px] rounded w-full">
                    <div className="flex flex-col items-start justify-start ml-2 md:ml-[0] mt-0.5 w-[18%] md:w-full">
                      <Text
                        className="text-blue_gray-900 text-sm"
                        size="txtManropeBold14Bluegray900"
                      >
                        Telephone
                      </Text>
                      <div className="flex flex-row gap-1.5 items-center justify-start w-[74%] md:w-full">
                        <Img
                          className="h-4 w-4"
                          src="images/img_call_gray_900_16x16.svg"
                          alt="call"
                        />
                        <Text
                          className="text-gray-400 text-sm"
                          size="txtManropeRegular14Gray400"
                        >
                          +216{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row font-manrope gap-[15px] items-center justify-end md:ml-[0] ml-[159px] mt-[37px] w-[63%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-[46%]">
                      <Button
                        className="common-pointer cursor-pointer flex items-center justify-center min-w-[120px] rounded-[22px]"
                        onClick={() => navigate("/singleeventpage")}
                        leftIcon={
                          <Img
                            className="h-6 mr-1.5"
                            src="images/img_close.svg"
                            alt="close"
                          />
                        }
                        color="light_blue_900_02"
                        size="md"
                        variant="outline"
                      >
                        <div className="text-base text-left">Annuler</div>
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[49%]">
                      <Button
                        className="common-pointer cursor-pointer flex items-center justify-center min-w-[129px] rounded-[22px]"
                        onClick={() => navigate("/reservationsuccess")}
                        leftIcon={
                          <Img
                            className="h-6 mr-1.5"
                            src="images/img_calendar_white_a700.svg"
                            alt="calendar"
                          />
                        }
                        color="light_blue_900_02"
                        size="md"
                        variant="fill"
                      >
                        <div className="text-base text-left">Reserver</div>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[23px] justify-start w-1/2 md:w-full">
                  <Img
                    className="h-[408px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-full"
                    src="images/img_image68_408x486.png"
                    alt="imageSixtyEight_One"
                  />
                  <div className="flex flex-row gap-4 items-center justify-end md:ml-[0] ml-[131px] w-[52%] md:w-full">
                    <Img
                      className="h-12 md:h-auto object-cover w-[21%]"
                      src="images/img_image69_48x51.png"
                      alt="imageSixtyNine_Four"
                    />
                    <Img
                      className="h-12 md:h-auto object-cover w-[21%]"
                      src="images/img_image69_1.png"
                      alt="imageSixtyNine_Five"
                    />
                    <Img
                      className="h-12 md:h-auto object-cover w-[21%]"
                      src="images/img_image69_2.png"
                      alt="imageSixtyNine_Six"
                    />
                    <Img
                      className="h-12 md:h-auto object-cover w-[21%]"
                      src="images/img_image69_3.png"
                      alt="imageSixtyNine_Seven"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventReservationPagePage;
