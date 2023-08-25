import { Field, Formik } from "formik";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

import { router } from "expo-router";
import { CustomInput } from "../../components";
import { fullNameValidationSchema } from "../../utils/validationSchema";

export default function Details() {
  const _submit = (_) => {
    router.push("/details/id");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.main}>
        <View style={styles.content}>
          <Formik
            initialValues={{ fullName: "" }}
            onSubmit={_submit}
            validationSchema={fullNameValidationSchema}
          >
            {({ handleSubmit, isValid }) => (
              <>
                <Field
                  component={CustomInput}
                  name="fullName"
                  label="Full Name"
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
          source={require("../../../assets/details.png")}
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
