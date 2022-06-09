import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Stopwatch from "./Components/Stopwatch";

export default function App() {
  return (
    <View>
      <Stopwatch></Stopwatch>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
