import { Colors } from "Config/app";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
} from "react-native";

type Props = {
  onPress: any;
  title: string;
  variant?: "contained" | "outline" | "text";
  IconLeft?: React.ComponentType<any>;
  IconRight?: React.ComponentType<any>;
  style?: any;
  color?: "text" | "primary" | "white";
  fullWidth?: boolean;
  disabled?: boolean;
};

const Button = ({ onPress, title, variant = "outline", ...rest }: Props) => {
  const { fullWidth, color = "text", IconLeft, IconRight } = rest;
  const colorScheme = useColorScheme();
  const colors = {
    primary: Colors[colorScheme as "light"].primary,
    secondary: "",
    text: Colors[colorScheme as "light"].text,
    danger: "",
    success: "",
    white: "white",
  };
  const variants = {
    outline: {
      ...styles.outline,
      width: fullWidth ? "100%" : "auto",
      backgroundColor: "white",
    },
    contained: {
      ...styles.contained,
      backgroundColor: Colors[colorScheme as "light"].primary,
      width: fullWidth ? "100%" : "auto",
    },
    text: styles.text,
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={rest.disabled ? styles.disabled : (variants[variant] as any)}
      disabled={rest.disabled}
    >
      {IconLeft && <IconLeft />}
      <Text style={[styles.appButtonText, { color: colors[color] }]}>
        {title}
      </Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  appButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "capitalize",
  },
  contained: {
    elevation: 8,
    backgroundColor: "#D17842",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  outline: {
    elevation: 8,
    backgroundColor: "withe",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: "100%",
  },
  text: {
    elevation: 8,
    backgroundColor: "#D17842",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: "100%",
  },
  disabled: {
    elevation: 0,
    backgroundColor: "#cccccc",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderColor: "#999999",
    borderWidth: 1,
    width: "100%",
    color: "#666666",
  },
});
