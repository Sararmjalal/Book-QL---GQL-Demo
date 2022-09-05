import useDocTitle from "../config/customHooks";
import React from "react";

const Home = () => {
  useDocTitle("Book QL | GraphQL Demo");
  return <div className='p-20'>Home</div>;
};

export default Home;
