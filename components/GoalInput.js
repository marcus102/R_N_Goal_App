import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.goalInput}>
        <View style={styles.goalInput2}>
          <Image
            style={styles.image}
            source={require("../assets/images/Goal-High-Quality-PNG.png")}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter a goal"
            onChangeText={goalInputHandler}
            value={enteredGoalText}
          />
          <View style={styles.buttonView}>
            <View style={styles.buttons}>
              <Button
                title="Add Goal"
                onPress={addGoalHandler}
                color={"purple"}
              />
            </View>
            <View style={styles.buttons}>
              <Button 
                title="Cancel" 
                onPress={props.onCancel} 
                color={"red"} 
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  goalInput: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#8D49F3",
  },
  goalInput2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#8D49F3",
    marginBottom: 200,
    width: "95%",
  },
  image: {
    width: 250,
    height: 100,
    margin: 30,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "gray",
    width: "95%",
    marginRight: 10,
    padding: 5,
    paddingLeft: 20,
    color: "black",
    backgroundColor: "white",
  },
  buttonView: {
    flexDirection: "row",
    marginTop: 16,
  },
  buttons: {
    width: 100,
    marginHorizontal: 8,
  },
});
