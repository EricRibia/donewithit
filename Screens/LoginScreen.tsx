import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";
//in app imports
import Screen from "../components/Screen";
import { AppForm, AppFormField, AppSubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
export default function () {
  return (
    <Screen styles={styles.container}>
      <Image style={styles.logo} source={require("../assets/benz-logo.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          icon="email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
          placeholder="Email"
          name="email"
        />
        <AppFormField
          icon="lock"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          textContentType="password"
          name="password"
          placeholder="Password"
        />
        <AppSubmitButton label="Login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 60,
    marginBottom: 30,
  },
});
