import React from "react";
import { Image, StyleSheet, View } from "react-native";

const IconsPanel = () => {
  return (
    <View style={styles.iconContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.icon}
          source={require("../assets/Icons/apple.png")}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.icon}
          source={require("../assets/Icons/google.png")}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.icon}
          source={require("../assets/Icons/facebook.png")}
        />
      </View>
    </View>
  );
};

export default IconsPanel;

const styles = StyleSheet.create({
  iconContainer: {
    width: "100%",
    height: 150,
    flexDirection: "row",
    gap: 30,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "red",
  },

  imageContainer: {
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    backgroundColor: "#fff",
  },
  icon: {
    width: 60,
    height: 50,
  },
});
