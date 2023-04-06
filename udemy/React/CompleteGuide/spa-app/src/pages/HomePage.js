import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {

  return (
    <>
      <h1>My Home Page</h1>
      <p>
        <Link to="/products">the list of products</Link>
      </p>
    </>
  );
};

export default HomePage;
