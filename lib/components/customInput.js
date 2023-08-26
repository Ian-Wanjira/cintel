import { Text, TextInput } from "react-native-paper";

export const CustomInput = (props) => {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props;
  const hasError = errors[name] && touched[name];

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
      />
      {hasError && (
        <Text style={{ fontSize: 12, color: "red" }}>{errors[name]}</Text>
      )}
    </>
  );
};
