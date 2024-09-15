import Button from "Components/Button";
import { useRouter } from "expo-router";
import React from "react";
import { View } from "react-native";

type Props = {};

const SignIn = (props: Props) => {
  const router = useRouter();
  return (
    <View>
      <Button title="Back" onPress={() => router.back()} />
    </View>
  );
};

export default SignIn;
