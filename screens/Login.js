import {
  Button,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import Form from "../components/Form";
import LoginHeader from "../components/LoginHeader";
import IconsPanel from "../components/IconsPanel";

const Login = ({ navigation }) => {
  return (
    <View style={styles.loginContainer}>
      <LoginHeader />
      <Form />
      <TouchableHighlight>
        <Button
          color={"#356899"}
          title="Log in"
          onPress={() => navigation.navigate("Home")}
        />
      </TouchableHighlight>

      <View style={styles.wrapper1}>
        <Text style={styles.wrapperText}>Or continue with</Text>
      </View>
      <IconsPanel />
      <View style={styles.footer}>
        <Text style={{ color: "#AFB0B6" }}>
          Have an account?
          <Text style={{ color: "#356899" }}> Register</Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: "#FAFAFD",
    paddingHorizontal: 20,
    paddingTop: 120,
    flex: 1,
  },

  loginButton: {
    backgroundColor: "red",
    height: 50,
  },
  wrapper1: {
    marginTop: 50,
    alignItems: "center",
  },

  wrapperText: {
    textDecorationLine: "underline",
    color: "#AFB0B6",
  },

  footer: {
    alignItems: "center",
  },
});
