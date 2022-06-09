import { Text, View, StyleSheet, ScrollView, FlatList } from "react-native";
export default function ShowLaps(props) {
  const todoItems = props.laps.map((todo, index) => (
    <Text style={styles.Text} key={index}>
      {index + 1}. {todo}
    </Text>
  ));
  return (
    <View style={styles.Lap}>
      {props.laps.length > 0 && (
        <Text style={styles.Text}>Number of laps : {props.laps.length}</Text>
      )}
      <ScrollView>{todoItems}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Lap: {
    flexDirection: "column",
    alignItems: "center",
  },

  Text: {
    fontSize: 25,
  },
});
