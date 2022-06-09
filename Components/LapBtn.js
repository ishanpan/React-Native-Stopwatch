import { View, Button, StyleSheet } from "react-native";

const LapBtn = (props) => {
  return (
    <View style={styles.btn}>
      <Button title="Lap" onPress={props.fn} />
    </View>
  );
};

export default LapBtn;

const styles = StyleSheet.create({
  btn: {
    width: 160,
    margin: 10,
  },
});
