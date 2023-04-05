import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalIten(props) {
  return (
    <View style={styles.textOutputContainer}>
      <Pressable
        android_ripple={{ color: "#103072" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed})=> pressed && styles.pressedItem }
      >
        <Text style={styles.textOutput}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalIten;

const styles = StyleSheet.create({
  textOutputContainer: {
    margin: 5,
    borderWidth: 1,
    borderColor: "gray",
    paddingLeft: 5,
    borderRadius: 10,
    backgroundColor: "#0885C4",
  },
  pressedItem: {
    backgroundColor: 'blue',
  },
  textOutput: {
    color: "white",
    padding: 10,
  },
});
