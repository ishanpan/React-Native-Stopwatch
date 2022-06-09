import { View, Text, StyleSheet } from "react-native";
export default function TimerClock(props) {
  return (
    <View style={styles.textContainer}>
      <View>
        <Text style={styles.text}>
          {("0" + Math.floor((props.timer / 60000) % 60)).slice(-2)}:
        </Text>
      </View>
      <View>
        <Text style={styles.text}>
          {("0" + Math.floor((props.timer / 1000) % 60)).slice(-2)}.
        </Text>
      </View>
      <View>
        <Text style={styles.text}>
          {("0" + ((props.timer / 10) % 100)).slice(-2)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 40,
  },
  text: {
    fontSize: 80,
  },
});
