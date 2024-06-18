import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import JobCard from "./JobCard";
import PopularJobsCard from "./PopularJobscard";

const PopularJobs = () => {
  const jobs = [
    {
      jobTitle: "Data Analyst",
      companyIcon: require("../assets/Icons/apple.png"),
      companyName: "Apple",
      salary: "$96,000/y",
      location: "Los Angelos,US",
    },
    {
      jobTitle: "Designer",
      companyIcon: require("../assets/Icons/google.png"),
      companyName: "Google",
      salary: "$84,000/y",
      location: "Florida, US",
    },
    {
      jobTitle: "Product Manager",
      companyIcon: require("../assets/Icons/facebook.png"),
      companyName: "Facebook",
      salary: "$86,000/y",
      location: "Florida, US",
    },
    {
      jobTitle: "Data Analyst",
      companyIcon: require("../assets/Icons/apple.png"),
      companyName: "Apple",
      salary: "$96,000/y",
      location: "Los Angelos,US",
    },
    {
      jobTitle: "Designer",
      companyIcon: require("../assets/Icons/google.png"),
      companyName: "Google",
      salary: "$84,000/y",
      location: "Florida, US",
    },
    {
      jobTitle: "Product Manager",
      companyIcon: require("../assets/Icons/facebook.png"),
      companyName: "Facebook",
      salary: "$86,000/y",
      location: "Florida, US",
    },
    {
      jobTitle: "Data Analyst",
      companyIcon: require("../assets/Icons/apple.png"),
      companyName: "Apple",
      salary: "$96,000/y",
      location: "Los Angelos,US",
    },
    {
      jobTitle: "Designer",
      companyIcon: require("../assets/Icons/google.png"),
      companyName: "Google",
      salary: "$84,000/y",
      location: "Florida, US",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>Popular Jobs</Text>
        <Text style={{ fontSize: 16, color: "#AFB0B6" }}>See all</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {jobs.map((job) => (
          <PopularJobsCard job={job} color={job.color} />
        ))}
      </ScrollView>
    </View>
  );
};

export default PopularJobs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
  },

  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
