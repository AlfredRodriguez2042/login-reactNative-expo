import Button from "Components/Button";
import { useFormik } from "formik";
import { StyleSheet, Text, TextInput, View } from "react-native";
import * as Yup from "yup";
const validateSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(12),
});
const SignUpForm = () => {
  const handleSubmit = () => {
    console.log("hola");
  };
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: handleSubmit,
    validationSchema: validateSchema,
  });
  const { isValid, values, handleBlur, handleChange, errors } = formik;
  return (
    <View style={styles.container}>
      <Text
        style={{ fontSize: 16 * 2, fontWeight: "700", marginBottom: 16 * 1.5 }}
      >
        Sign Up
      </Text>
      <View style={{ width: 300 }}>
        <TextInput
          placeholder="Email"
          onChangeText={handleChange("email")}
          value={values.email}
          style={styles.input}
          keyboardType="email-address"
        />
        {errors.email && <Text style={styles.errorInput}>{errors.email}</Text>}
        <TextInput
          placeholder="Password"
          onChangeText={handleChange("password")}
          value={values.password}
          style={styles.input}
          secureTextEntry
        />
        {errors.password && (
          <Text style={styles.errorInput}>{errors.password}</Text>
        )}
      </View>
      <View
        style={{ borderColor: "red", borderWidth: 1, alignItems: "flex-end" }}
      >
        <Button
          title="SignUp"
          onPress={formik.handleSubmit}
          disabled={!isValid}
          variant="contained"
        />
      </View>
    </View>
  );
};
export default SignUpForm;
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    height: "100%",
    width: "100%",
  },
  input: {
    height: 40,
    width: "100%",
    margin: 10,
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
  },
  errorInput: {
    fontSize: 11,
    color: "red",
    marginLeft: 20,
    marginBottom: 12,
  },
});
