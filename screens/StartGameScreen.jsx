import { View, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState("");
  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }
  function resetInputNumber() {
    setEnteredNumber("");
  }
  function confimrInputHandler() {
    console.log("chosen number", enteredNumber);
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputNumber }]
      );
      return;
    }
    console.log("valid number")
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.btnContainer}>
          <PrimaryButton onPress={resetInputNumber}>Reset</PrimaryButton>
        </View>
        <View style={styles.btnContainer}>
          <PrimaryButton onPress={confimrInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}
export default StartGameScreen;
const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 42,
    backgroundColor: "#3b021f",
    borderRadius: 8,
    elevation: 16,
    shadowColor: "#black",
    shadowOffest: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: "center",
  },
  numberInput: {
    height: 60,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  btnContainer: {
    flex: 1,
  },
});
