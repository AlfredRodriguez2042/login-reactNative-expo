import { StatusBar } from "expo-status-bar";
import React from "react";
import Wellcome from "../../screens/wellcome";

const WellcomeRoute = () => {
  return (
    <>
      <StatusBar style="light" />
      <Wellcome />
    </>
  );
};

export default WellcomeRoute;
