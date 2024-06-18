import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const Form = () => {
  return (
    <View style={styles.formContainer}>
      <TextInput style={styles.inputbox} placeholder="Name" />
      <TextInput style={styles.inputbox} placeholder="Email" />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  formContainer: {
    marginBottom: 20,
  },

  inputbox: {
    height: 55,
    borderColor: "#AFB0B6",
    borderWidth: 1,
    marginBottom: 15,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});
