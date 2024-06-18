import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import JobCard from "./JobCard";

const FeaturedJobs = () => {
  const jobs = [
    {
      jobTitle: "Software Engineer",
      companyIcon: require("../assets/Icons/facebook.png"),
      companyName: "Facebook",
      salary: "$180,000",
      location: "Boston, Massachussets",
      color: "dodgerblue",
    },
    {
      jobTitle: "Backend Engineer",
      companyIcon: require("../assets/Icons/apple.png"),
      companyName: "Apple",
      salary: "$220,000",
      location: "Accra, Ghana",
      color: "yellowgreen",
    },
    {
      jobTitle: "Cybersecurity Engineer",
      companyIcon: require("../assets/Icons/google.png"),
      companyName: "Google",
      salary: "$155,000",
      location: "Tokyo, Japan",
      color: "#001861",
    },
    {
      jobTitle: "Software Engineer",
      companyIcon: require("../assets/Icons/facebook.png"),
      companyName: "Facebook",
      salary: "$180,000",
      location: "Boston, Massachussets",
      color: "dodgerblue",
    },
    {
      jobTitle: "Backend Engineer",
      companyIcon: require("../assets/Icons/apple.png"),
      companyName: "Apple",
      salary: "$220,000",
      location: "Accra, Ghana",
      color: "yellowgreen",
    },
    {
      jobTitle: "Cybersecurity Engineer",
      companyIcon: require("../assets/Icons/google.png"),
      companyName: "Google",
      salary: "$155,000",
      location: "Tokyo, Japan",
      color: "#001861",
    },
    {
      jobTitle: "Software Engineer",
      companyIcon: require("../assets/Icons/facebook.png"),
      companyName: "Facebook",
      salary: "$180,000",
      location: "Boston, Massachussets",
      color: "dodgerblue",
    },
    {
      jobTitle: "Backend Engineer",
      companyIcon: require("../assets/Icons/apple.png"),
      companyName: "Apple",
      salary: "$220,000",
      location: "Accra, Ghana",
      color: "yellowgreen",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>Featured Jobs</Text>
        <Text style={{ fontSize: 16, color: "#AFB0B6" }}>See all</Text>
      </View>

      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {jobs.map((job) => (
          <JobCard job={job} color={job.color} />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedJobs;

const styles = StyleSheet.create({
  container: {
    widht: "100%",
    height: 300,
    // backgroundColor: "dodgerblue",
  },

  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
