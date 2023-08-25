import { useState, useEffect } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Button, Snackbar, Text } from "react-native-paper";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { router } from "expo-router";
import moment from "moment";

const CELL_COUNT = 4;

export default function Details() {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [isLoading, setIsLoading] = useState(false);

  const [seconds, setSeconds] = useState(30);
  useEffect(() => {
    const timerId = setTimeout(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timerId);
  }, [seconds]);

  const _submit = async (_) => {
    setIsLoading(true);

    const result = await new Promise((resolve) => {
      setTimeout(() => {
        if (value === "1234") {
          resolve(true);
        } else {
          resolve(false);
        }
      }, 2500);
    });

    if (!result) {
      setErrorMessage(true);
      setIsLoading(false);
      return;
    } else {
      setErrorMessage(false);
    }

    router.push("/face");
  };

  const _otp = (_) => {
    setSeconds(30);
    setValue("");
  };

  const _onDismissSnackBar = (_) => setErrorMessage(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.main}>
        <View style={styles.content}>
          <Text style={styles.title} variant="displayLarge">
            Enter OTP
          </Text>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFiledRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <View
                // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
                onLayout={getCellOnLayoutHandler(index)}
                key={index}
                style={[styles.cellRoot, isFocused && styles.focusCell]}
              >
                <Text style={styles.cellText}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            )}
          />
          <View
            style={{
              flexDirection: "row",
              marginTop: 12,
              justifyContent: "space-between",
            }}
          >
            <Button
              disabled={seconds > 0 || isLoading}
              mode="contained"
              onPress={_otp}
            >
              Resend OTP
            </Button>
            <Button
              mode="contained"
              onPress={_submit}
              disabled={value.length < 4 || isLoading}
              loading={isLoading}
            >
              Next
            </Button>
            <Text variant="bodySmall">
              {moment(seconds * 1000).format("mm:ss")}
            </Text>
          </View>
          <Snackbar
            visible={errorMessage}
            onDismiss={_onDismissSnackBar}
            action={{
              label: "Close",
              onPress: () => {
                // Do something
              },
            }}
          >
            Invalid OTP code
          </Snackbar>
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
  root: { padding: 20, minHeight: 300 },
  title: { textAlign: "center", fontSize: 30, color: "#007AFF" },
  codeFiledRoot: {
    marginTop: 20,
    width: 280,
    marginLeft: "auto",
    marginRight: "auto",
  },
  cellRoot: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  cellText: {
    color: "#000",
    fontSize: 36,
    textAlign: "center",
  },
  focusCell: {
    borderBottomColor: "#007AFF",
    borderBottomWidth: 2,
  },
});
