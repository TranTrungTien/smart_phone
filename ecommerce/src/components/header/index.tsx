import React from "react";
import TopHeader from "./top-header";
import MainHeader from "./main-header";
import Nav from "../nav";

const Header = () => {
  return (
    <header>
      <TopHeader />
      <MainHeader />
      <Nav />
    </header>
  );
};

export default Header;
