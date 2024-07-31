import React from "react";
import { Heading, Img, Text } from "./..";

export default function Footer({ ...props }) {
  return (
    <footer {...props}>
      <div className="flex flex-row md:flex-col justify-start items-center w-full mt-[5px] gap-px mx-auto md:gap-5 md:px-5 max-w-[1200px]">
        <div className="flex flex-col items-center justify-start w-[29%] md:w-full gap-[43px]">
          <div className="flex flex-row justify-start items-start w-full gap-[11px]">
            <Img src="images/img_real_estate_1.svg" alt="realestateone" className="h-[40px] w-[40px]" />
            <Text size="md" as="p" className="mt-[5px] !text-orange-A700 !font-markoone">
              Relasto
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-full gap-7">
            <Heading as="h6" className="!leading-[160%]">
              <>
                59 Bervely Hill Ave,Kothrud,
                <br />
                Pune,Maharastra,India
              </>
            </Heading>
            <div className="flex flex-col items-start justify-center gap-2">
              <Heading as="h6" className="mt-px">
              +(91)8404556732 
              </Heading>
              <Heading as="h6">info@mail.com</Heading>
            </div>
            <div className="flex flex-row justify-start w-full gap-3">
              <div className="flex flex-col items-center justify-start h-[30px] w-[30px]">
                <Img src="images/img_icon_facebook.svg" alt="iconfacebook" className="h-[30px] w-[30px]" />
              </div>
              <div className="flex flex-col items-center justify-start h-[30px] w-[30px]">
                <Img src="images/img_icon_twitter.svg" alt="icontwitter_one" className="h-[30px] w-[30px]" />
              </div>
              <Img src="images/img_icon_instragram.svg" alt="iconinstragram" className="h-[30px] w-[30px]" />
              <Img src="images/img_icon_linked_in.svg" alt="iconlinkedin" className="h-[30px] w-[30px]" />
              <div className="flex flex-col items-center justify-start h-[30px] w-[30px]">
                <Img src="images/img_icon_youtube.svg" alt="iconyoutube_one" className="h-[30px] w-[30px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row md:flex-col justify-between items-center w-[72%] md:w-full md:gap-5"> {/* Reduced gap here */}
          <div className="flex flex-col items-start justify-start w-[19%] md:w-full gap-[15px]">
            <Heading size="md" as="h6">
              Features
            </Heading>
            <div className="flex flex-col items-start justify-start w-full gap-[15px]">
              <Heading as="h6">Home </Heading>
              <Heading as="h6">About</Heading>
              
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-[19%] md:w-full gap-[15px]">
            <Heading size="md" as="h6">
              Information
            </Heading>
            <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-[15px]">
              <Heading as="h6">Listing </Heading>
              <Heading as="h6">Property Details</Heading>
              <Heading as="h6">Agent List</Heading>
              
            </div>
          </div>
         
          <div className="flex flex-col items-start justify-start w-[19%] md:w-full gap-[15px]">
            <Heading size="md" as="h6">
              Others
            </Heading>
            <div className="flex flex-col items-start justify-center w-full gap-[15px]">
              <Heading as="h6" className="mt-0.5">
                Log in
              </Heading>
              {/* <Heading as="h6">Enter OTP</Heading> */}
              <Heading as="h6">Create Account</Heading>
            </div>
          </div>
        </div>
      </div>
      <Heading as="h6" className="text-center mt-4 md:ml-5"> {/* Centered the copyright */}
        © 2024. All rights reserved.
      </Heading>
    </footer>
  );
}
