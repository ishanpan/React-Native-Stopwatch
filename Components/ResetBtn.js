import { View, Button, StyleSheet } from "react-native";

const ResetBtn = (props) => {
  return (
    <View style={styles.btn}>
      <Button title="Reset" onPress={props.fn} />
    </View>
  );
};

export default ResetBtn;

const styles = StyleSheet.create({
  btn: {
    width: 160,
    margin: 10,
  },
});
