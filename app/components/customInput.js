import { useEffect, useRef } from "react";
import { TextInput, Text } from "react-native-paper";

export const CustomInput = (props) => {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props;
  const hasError = errors[name] && touched[name];
  const ref = useRef(null);

  useEffect(() => {
    if (props.autoFocus) {
      setTimeout(() => {
        ref.current.focus();
      }, 100);
    }
  }, []);

  return (
    <>
      <TextInput
        error={hasError}
        value={value}
        onChangeText={(text) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        {...inputProps}
        ref={ref}
      />
      {hasError && (
        <Text style={{ fontSize: 12, color: "red" }}>{errors[name]}</Text>
      )}
    </>
  );
};
