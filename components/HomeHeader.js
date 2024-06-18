import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const HomeHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Jan Phandoh</Text>
        <Text style={{ fontSize: 18, color: "#AFB0B6" }}>
          janphandoh@gmail.com
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          widht: 70,
          height: 70,
          borderRadius: 35,
        }}
      >
        <Image source={require("../assets/Images/officeMan.png")} />
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    height: 100,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  profilePic: {
    borderRadius: 35,
    backgroundColor: "green",
  },
});
