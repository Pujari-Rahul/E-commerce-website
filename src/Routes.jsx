import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import LandingPage from "pages/LandingPage/index";
import AboutUs from "pages/AboutUs/index"; // Import the AboutUs component
import Listing from "pages/Listing/index";
import PropertyDetails from "pages/PropertyDetails/index";
import AgentList from "pages/AgentList/index";
import Login from "pages/Login";
import CreateAccount from "pages/CreateAccount";
import SuccessPage from "pages/SuccessPage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/home", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <LandingPage />,
      
    },
    {
      path: "/aboutus", // Make sure the path starts with a slash
      element: <AboutUs />, // Use the AboutUs component
    },
    {
      path: "/listing",
      element: <Listing />,
    },
    {
      path: "/propertydetails",
      element: <PropertyDetails />,
    },
    {
      path: "/agentlist",
      element: <AgentList />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path:"/createaccount",
      element:<CreateAccount/>
    },
    {
      path:"/SuccessPage",
      element:<SuccessPage/>
    }
  ]);

  return element;
};

export default ProjectRoutes;
