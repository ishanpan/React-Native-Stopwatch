import { View, Button, StyleSheet } from "react-native";

const StartBtn = (props) => {
  return (
    <View style={styles.btn}>
      <Button title="Start" onPress={props.fn} />
    </View>
  );
};

export default StartBtn;

const styles = StyleSheet.create({
  btn: {
    width: 160,
    margin: 10,
  },
});
