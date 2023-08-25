import { router } from "expo-router";
import { Field, Formik } from "formik";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

import { CustomInput } from "../../components/customInput";
import { telValidationSchema } from "../../utils/validationSchema";

export default function Details() {
  const _submit = (_) => {
    router.push("/details/otp");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.main}>
        <View style={styles.content}>
          <Formik
            initialValues={{ id: "" }}
            onSubmit={_submit}
            validationSchema={telValidationSchema}
          >
            {({ handleSubmit, isValid }) => (
              <>
                <Field
                  component={CustomInput}
                  name="tel"
                  label="Telephone Number"
                  keyboardType="phone-pad"
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
