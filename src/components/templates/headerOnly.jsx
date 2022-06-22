import React from "react";
import { Header } from "../organisms/header";

export const HeaderOnly = (props) => {
  const { children } = props;
  return (
    <>
      <Header />{children}
    </>
  );
};
