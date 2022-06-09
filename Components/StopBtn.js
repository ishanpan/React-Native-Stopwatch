import { View, Button, StyleSheet } from "react-native";

const StopBtn = (props) => {
  return (
    <View style={styles.btn}>
      <Button title="Stop" onPress={props.fn} />
    </View>
  );
};

export default StopBtn;

const styles = StyleSheet.create({
  btn: {
    width: 160,
    margin: 10,
  },
});
