import React from "react";
import { StyleSheet, View, Text } from "react-native";

const LoginHeader = () => {
  return (
    <View style={styles.appInfo}>
      <Text style={styles.appName}>Jobizz</Text>
      <Text style={styles.welcomeMsg}>Welcome back 👋</Text>
      <Text style={{ color: "#AFB0B6", fontSize: 14 }}>
        Let's log in. Apply for jobs!
      </Text>
    </View>
  );
};

export default LoginHeader;

const styles = StyleSheet.create({
  appInfo: {
    marginBottom: 40,
  },

  appName: {
    color: "#356899",
    fontSize: 22,
    marginBottom: 12,
    fontFamily: "poppins",
  },

  welcomeMsg: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
