import { router } from "expo-router";
import { Field, Formik } from "formik";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

import { CustomInput } from "../../lib/components/customInput";
import { useUser, useUserDispatch } from "../../lib/contexts/userContext";
import { fullNameValidationSchema } from "../../lib/validations";

export default function Name() {
  const { fullName } = useUser();
  const dispatch = useUserDispatch();

  function handleChangeName(fullName) {
    dispatch({ type: "SET_FULL_NAME", payload: fullName });
  }

  const _submit = ({ fullName }) => {
    handleChangeName(fullName);
    router.push("/details/id");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.main}>
        <View style={styles.content}>
          <Formik
            initialValues={{ fullName }}
            onSubmit={_submit}
            validationSchema={fullNameValidationSchema}
          >
            {({ handleSubmit, isValid }) => (
              <View style={styles.inputContainer}>
                <Field
                  component={CustomInput}
                  name="fullName"
                  label="Full Name"
                  autoFocus
                  style={styles.input}
                />
                <View style={{ flexDirection: "row", marginTop: 12, gap:20 }}>
                  <Button
                    mode="contained"
                    onPress={handleSubmit}
                    disabled={!isValid}
                  >
                    Next
                  </Button>
                  <Button
                    mode="outlined"
                    style={styles.outlinedBtn}
                    
                  >
                    Back
                  </Button>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 76,
  },
  main: {
    flex: 1,
    flexDirection: "row",
    gap: 120,
  },
  content: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    marginRight: 10,
  },
  outlinedBtn: {
    borderColor: "#010089",
    borderRadius: 100,
    borderWidth: 2,
    color: "#010089",
    fontSize: 20,
  },
  
});
