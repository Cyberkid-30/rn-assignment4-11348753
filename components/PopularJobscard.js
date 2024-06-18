import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

const PopularJobscard = ({ job }) => {
  return (
    <View style={styles.container}>
      <Image source={job.companyIcon} />
      <View>
        <View style={styles.jobInfo}>
          <Text style={{ fontWeight: "bold" }}>{job.jobTitle}</Text>
          <Text style={{ fontWeight: "bold" }}>{job.salary}</Text>
        </View>
        <View style={styles.jobInfo}>
          <Text>{job.companyName}</Text>
          <Text>{job.location}</Text>
        </View>
      </View>
    </View>
  );
};

export default PopularJobscard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 100,
    widht: "100%",
    backgroundColor: "#fff",
    gap: 20,
    marginBottom: 20,
    borderRadius: 15,
  },
  jobInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 40,
  },
});
