import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Homepage</h1>
      
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/" style={{ color: "#87CEFA", textDecoration: "none" }}>
            LandingPage
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/aboutus" style={{ color: "#87CEFA", textDecoration: "none" }}>
            AboutUs
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/listing" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Listing
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/propertydetails" style={{ color: "#87CEFA", textDecoration: "none" }}>
            PropertyDetails
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/agentlist" style={{ color: "#87CEFA", textDecoration: "none" }}>
            AgentList
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
