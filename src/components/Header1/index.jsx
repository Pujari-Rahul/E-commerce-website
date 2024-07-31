import React from "react";
import { Link } from "react-router-dom";
import { CloseSVG } from "../../assets/images";
import { Button, Input, Img, Heading, Text } from "./..";
import { useNavigate } from 'react-router-dom';

export default function Header1({ ...props }) {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement your login logic here
    console.log("Login button clicked");
    // <Link to="/login" className="nav-link">Log In</Link>
    navigate("/login");

    // You can replace the console.log with your actual login functionality
  };

  return (
    <header {...props}>
      <div className="flex flex-row md:flex-col justify-between items-center w-full mx-auto md:gap-10 md:px-5 max-w-[1200px]">
        <div className="flex flex-row justify-start items-start gap-[11px]">
          <Img src="images/img_real_estate_1.svg" alt="realestateone" className="h-[40px] w-[40px]" />
          <Text size="md" as="p" className="mt-[5px] !text-orange-A700 !font-markoone">
            Relasto
          </Text>
        </div>
        <div className="flex flex-row sm:flex-col justify-between items-center w-[41%] md:w-full sm:gap-10">
          <Link to="/home" className="nav-link">Home</Link>
          <Link to="/listing" className="nav-link">Listing</Link>
          <Link to="/agentlist" className="nav-link">AgentList</Link>
          <Link to="/propertydetails" className="nav-link">Property</Link>
          <Link to="/aboutus" className="nav-link">About Us</Link>
        </div>
        <div className="flex flex-row justify-start items-center w-[19%] md:w-full gap-2.5">
          <Input
            size="xs"
            shape="square"
            name="search"
            placeholder="Search"
            value={searchBarValue1}
            onChange={(e) => setSearchBarValue1(e.target.value)}
            prefix={<Img src="images/img_icon_24px_search.svg" alt="icon / 24px / search" className="cursor-pointer" />}
            suffix={
              searchBarValue1?.length > 0 ? (
                <CloseSVG onClick={() => setSearchBarValue1("")} height={24} width={24} fillColor="#191919ff" />
              ) : null
            }
            className="w-[55%] gap-2 text-gray-900 font-bold"
          />
         <Button size="lg" shape="round" className="sm:px-5 font-semibold min-w-[94px]" onClick={handleLogin}>
         Log In
         </Button>

        </div>
      </div>
    </header>
  );
}
