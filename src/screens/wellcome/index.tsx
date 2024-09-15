import Button from "Components/Button";
import { ResizeMode, Video } from "expo-av";
import { useRouter } from "expo-router";
import { useRef } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Wellcome() {
  const ref = useRef(null);
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Video
        ref={ref}
        style={styles.video}
        source={{
          uri: "https://cdn.pixabay.com/video/2023/05/31/165208-832102298_large.mp4",
        }}
        resizeMode={ResizeMode.COVER}
        shouldPlay
        isLooping
      />
      <View style={styles.overlay}>
        <Text style={{ fontSize: 16 * 4, color: "white", fontWeight: "700" }}>
          Wellcome
        </Text>
        <Text style={{ fontSize: 24, color: "white" }}>test Application</Text>
        <View
          style={{
            justifyContent: "space-around",
            flexDirection: "row",
            position: "absolute",
            bottom: 30,
            left: 0,
            right: 0,
          }}
        >
          <Button
            title="sign in"
            variant="contained"
            onPress={() => router.push("/(auth)/sign-in")}
          />
          <Button
            variant="outline"
            title="sign up"
            onPress={() => router.push("/(auth)/sign-up")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});
