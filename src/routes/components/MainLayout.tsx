import { StatusBar, StatusBarStyle } from "expo-status-bar";
import React from "react";
import { useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  children: React.ReactNode;
  statusColor?: "light" | "dark" | null;
};

const MainLayout = ({ children, statusColor = useColorScheme() }: Props) => {
  const diccionaryColor = {
    dark: "light",
    light: "dark",
  };
  return (
    <SafeAreaView>
      <View>
        <StatusBar style={diccionaryColor[statusColor!] as StatusBarStyle} />
        {children}
      </View>
    </SafeAreaView>
  );
};

export default MainLayout;
