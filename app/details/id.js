import { router } from "expo-router";
import { Field, Formik } from "formik";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

import { CustomInput } from "../../lib/components/customInput";
import { useUser, useUserDispatch } from "../../lib/contexts";
import { idValidationSchema } from "../../lib/validations";

export default function Id() {
  const { id } = useUser();
  const dispatch = useUserDispatch();

  function handleChangeId(id) {
    dispatch({ type: "SET_ID", payload: id });
  }

  const _submit = ({ id }) => {
    handleChangeId(id);
    router.push("/details/tel");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.main}>
        <View style={styles.content}>
          <Formik
            initialValues={{ id }}
            onSubmit={_submit}
            validationSchema={idValidationSchema}
          >
            {({ handleSubmit, isValid }) => (
              <View style={styles.inputContainer}>
              <Field
                component={CustomInput}
                name="id"
                label="ID Number"
                keyboardType="numeric"
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
