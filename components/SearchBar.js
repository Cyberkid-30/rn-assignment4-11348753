import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.inputbox}>
        <Image source={require("../assets/Icons/searchIcon.png")} />
        <TextInput
          style={{ marginLeft: 10, fontSize: 16 }}
          placeholder="Search a job or position"
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Image source={require("../assets/Icons/randomIcon.png")} />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchContainer: {
    height: 70,
    widht: "100%",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    marginBottom: 25,
  },

  buttonWrapper: {
    backgroundColor: "#EEEEEE",
    width: 55,
    height: 55,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  inputbox: {
    height: 55,
    flex: 1,
    flexDirection: "row",

    alignItems: "center",
    paddingLeft: 15,
    backgroundColor: "#EEEEEE",
    widht: 250,
    borderRadius: 10,
  },
});
