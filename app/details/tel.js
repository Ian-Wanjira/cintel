import { router } from "expo-router";
import { Field, Formik } from "formik";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

import { CustomInput } from "../../lib/components/customInput";
import { useUser, useUserDispatch } from "../../lib/contexts";
import { telValidationSchema } from "../../lib/validations";

export default function Tel() {
  const { tel } = useUser();
  const dispatch = useUserDispatch();

  const handleTelChange = (tel) => {
    dispatch({ type: "SET_TEL", payload: tel });
  };

  const _submit = ({ tel }) => {
    handleTelChange(tel);
    router.push("/details/otp");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.main}>
        <View style={styles.content}>
          <Formik
            initialValues={{ tel }}
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
