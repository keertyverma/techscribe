import React, { Fragment } from "react";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Fragment>
      <Navbar />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
