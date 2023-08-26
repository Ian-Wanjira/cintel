import { Field, Formik } from "formik";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { router } from "expo-router";

import { CustomInput } from "../../lib/components/customInput";
import { idValidationSchema } from "../../lib/validations";
import { useUser, useUserDispatch } from "../../lib/contexts";

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
              <>
                <Field
                  component={CustomInput}
                  name="id"
                  label="ID Number"
                  keyboardType="numeric"
                  autoFocus
                />
                <View style={{ flexDirection: "row", marginTop: 12 }}>
                  <Button
                    mode="contained"
                    onPress={handleSubmit}
                    disabled={!isValid}
                  >
                    Next
                  </Button>
                </View>
              </>
            )}
          </Formik>
        </View>
        <Image
          style={styles.image}
          source={require("../../assets/details.png")}
        />
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
});
