import React from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Text, Heading, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function AboutUsPage() {
  return (
    <>
      <Helmet>
        <title>Apanaghar</title>
        <meta name="description" content="Website created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-8 bg-white-A700">
        <Header className="w-full md:h-auto p-4 bg-white-A700" />
        <div className="flex flex-col items-center justify-start w-full gap-8">
          <div className="flex justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full gap-4 px-4 max-w-[1200px]">
              <div className="flex flex-col items-center justify-start w-full gap-4">
                <Heading size="6xl" as="h1" className="text-center">
                  Reimagining real estate to make it easier to unlock.
                </Heading>
                <Text as="p" className="text-center">
                  On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble.
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-8">
                <div className="flex justify-center w-full gap-8">
                  <Img
                    src="images/img_rectangle_5592.png"
                    alt="image"
                    className="w-[66%] md:w-full object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_rectangle_5593.png"
                    alt="image_one"
                    className="w-[32%] md:w-full object-cover rounded-[10px]"
                  />
                </div>
                <div className="flex justify-center w-full gap-8">
                  <Img
                    src="images/img_rectangle_5595.png"
                    alt="image_two"
                    className="w-[32%] md:w-full object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_rectangle_5594.png"
                    alt="image_three"
                    className="w-[66%] md:w-full object-cover rounded-[10px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center w-full gap-8 p-4 md:gap-4 md:p-2 bg-gray-50">
  <div className="flex flex-col items-center justify-start w-[17%] md:w-full gap-4 md:ml-2">
    <Button color="white_A700" size="3xl" shape="circle" className="w-16">
      <Img src="images/img_frame.svg" />
    </Button>
    <div className="flex flex-col items-center justify-start w-full gap-2">
      <Heading size="5xl" as="h2">
      ₹15k
      </Heading>
      <Heading size="lg" as="h3">
        Owned from Properties transactions
      </Heading>
    </div>
  </div>
  <div className="flex flex-col items-center justify-start w-[17%] md:w-full gap-4">
    <Button color="white_A700" size="3xl" shape="circle" className="w-16">
      <Img src="images/img_frame_orange_a700.svg" />
    </Button>
    <div className="flex flex-col items-center justify-start w-full gap-2">
      <Heading size="5xl" as="h4">
        25K+
      </Heading>
      <Heading size="lg" as="h5">
        Properties for Buy & sell Successfully
      </Heading>
    </div>
  </div>
  <div className="flex flex-col items-center justify-start w-[17%] md:w-full gap-4">
    <Button color="white_A700" size="3xl" shape="circle" className="w-16">
      <Img src="images/img_icon.svg" />
    </Button>
    <div className="flex flex-col items-center justify-start w-full gap-2">
      <Heading size="5xl" as="h6">
      500
      </Heading>
      <Heading size="lg" as="h5">
        Daily completed transactions
      </Heading>
    </div>
  </div>
  <div className="flex flex-col items-center justify-start w-[17%] md:w-full gap-4 md:mr-2">
    <Button color="white_A700" size="3xl" shape="circle" className="w-16">
      <Img src="images/img_icon_orange_a700.svg" />
    </Button>
    <div className="flex flex-col items-center justify-start w-full gap-2">
      <Heading size="5xl" as="h1">
      600+
      </Heading>
      <Heading size="lg" as="h5">
        Regular Clients
      </Heading>
    </div>
  </div>
</div>

          <div className="flex justify-center w-full px-8 py-16 md:p-4 bg-gray-900">
            <div className="flex flex-col items-center justify-start w-full gap-8 max-w-[1200px]">
              <div className="flex flex-col items-center justify-start w-[54%] md:w-full gap-4 p-5 bg-gray-400_01 rounded-[10px]">
                <Heading size="3xl" as="h3">
                  For Recent Update, News.
                </Heading>
                <Text as="p" className="text-center">
                  We help businesses customize, automate, and scale up their ad production and delivery.
                </Text>
                <div className="flex flex-col sm:flex-row justify-center w-full gap-4">
                  <Input
                    color="gray_50_02"
                    size="sm"
                    shape="round"
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    className="w-[78%] md:w-full font-semibold"
                  />
                  <Button shape="round" className="px-5 font-semibold min-w-[126px]">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="w-full pl-16 pr-8 py-8 md:py-4 bg-white-A700" />
      </div>
    </>
  );
}
