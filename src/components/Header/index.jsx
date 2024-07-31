import React from "react";
import { Link } from "react-router-dom";
import { CloseSVG } from "../../assets/images";
import { Button, Input, Heading, Text } from "./..";
import { useNavigate } from "react-router-dom";
export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement your login logic here
    console.log("Login button clicked");
    navigate("/login");

    // You can replace the console.log with your actual login functionality
  };

  return (
    <header {...props}>
      <div className="flex flex-row md:flex-col justify-between items-center w-full mx-auto md:gap-10 md:px-5 max-w-[1200px]">
        <div className="flex flex-row justify-start items-start gap-[11px]">
          <img src="images/img_real_estate_1.svg" alt="realestateone" className="h-[40px] w-[40px]" />
          <Text size="md" as="p" className="mt-[5px] !text-orange-A700 !font-markoone">
            Relasto
          </Text>
        </div>
        <div className="flex flex-row sm:flex-col justify-between items-center w-[41%] md:w-full sm:gap-10">
          <Link to="/home" className="nav-link">
            <Heading as="h6">Home</Heading>
          </Link>
          <Link to="/listing" className="nav-link">
            <Heading as="h6">Listing</Heading>
          </Link>
          <Link to="/agentlist" className="nav-link">
            <Heading as="h6">AgentList</Heading>
          </Link>
          <Link to="/propertydetails" className="nav-link">
            <Heading as="h6">Property</Heading>
          </Link>
          <Link to="/aboutus" className="nav-link">
            <Heading as="h6">About Us</Heading>
          </Link>
        </div>
        <div className="flex flex-row justify-start items-center w-[19%] md:w-full gap-2.5">
          <Input
            size="xs"
            shape="square"
            name="search"
            placeholder="Search"
            value={searchBarValue}
            onChange={(e) => setSearchBarValue(e.target.value)}
            prefix={<img src="images/img_icon_24px_search.svg" alt="icon / 24px / search" className="cursor-pointer" />}
            suffix={
              searchBarValue?.length > 0 ? (
                <CloseSVG onClick={() => setSearchBarValue("")} height={24} width={24} fillColor="#191919ff" />
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
