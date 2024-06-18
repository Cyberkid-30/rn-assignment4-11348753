import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HomeHeader from "../components/HomeHeader";
import SearchBar from "../components/SearchBar";
import FeaturedJobs from "../components/FeaturedJobs";
import PopularJobs from "../components/PopularJobs";

const Home = () => {
  return (
    <View style={styles.homeContainer}>
      <HomeHeader />
      <SearchBar />
      <FeaturedJobs />
      <PopularJobs />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: "#FAFAFD",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});
