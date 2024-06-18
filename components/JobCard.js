import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const JobCard = ({ job, color }) => {
  return (
    <View
      style={{
        backgroundColor: color,
        flexDirection: "column",
        justifyContent: "space-between",
        height: 240,
        width: 300,
        borderRadius: 30,
        padding: 20,
        marginRight: 15,
      }}
    >
      <View style={styles.jobHeader}>
        <View style={styles.iconWrapper}>
          <Image style={{ width: 50, height: 50 }} source={job.companyIcon} />
        </View>
        <View>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
            {job.jobTitle}
          </Text>
          <Text style={{ fontSize: 18, color: "white" }}>
            {job.companyName}
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ color: "white",fontWeight:"500" }}>{job.salary}</Text>
        <Text style={{ color: "white",fontWeight:"500"  }}>{job.location}</Text>
      </View>
    </View>
  );
};

export default JobCard;

const styles = StyleSheet.create({
  jobHeader: {
    flexDirection: "row",
    gap: 20,
  },
  iconWrapper: {
    width: 65,
    height: 65,
    backgroundColor: "#fff",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
