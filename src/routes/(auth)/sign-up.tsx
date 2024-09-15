import { useRouter } from "expo-router";
import React from "react";
import SignUp from "Screens/Auth/sign-up";
import MainLayout from "../components/MainLayout";

type Props = {};

const SignUpRoute = (props: Props) => {
  const router = useRouter();
  return (
    <MainLayout>
      <SignUp />
    </MainLayout>
  );
};

export default SignUpRoute;
