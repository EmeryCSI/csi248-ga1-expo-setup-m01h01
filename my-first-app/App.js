import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React from "react";
import { useState } from "react";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [inputText, setInputText] = useState("");

  const containerStyle = {
    ...styles.container,
    backgroundColor: isDark ? "#333" : "#FFF",
  };

  const textStyle = {
    ...styles.text,
    color: isDark ? "#FFF" : "#333",
  };

  const logInputStyle = {
    ...styles.logInput,
    backgroundColor: isDark ? "#333" : "#FFF",
    color: isDark ? "#FFF" : "#333",
  };

  const logTextStyle = {
    ...styles.logText,
    color: isDark ? "#FFF" : "#333",
  };

  return (
    <View style={containerStyle}>
      <View>
        <Text style={textStyle}>{isDark ? "Dark Mode" : "Light Mode"}</Text>
        <Button
          title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          onPress={() => setIsDark(!isDark)}
        />
      </View>
      <View style={styles.logContainer}>
        <Text style={logTextStyle}>Type to log to the console</Text>
        <TextInput
          style={logInputStyle}
          onChangeText={(text) => setInputText(text)}
        />
        <Button title="Log to Console" onPress={() => console.log(inputText)} />
        <Button
          title="Warn to Console"
          onPress={() => console.warn(inputText)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: 20,
    fontSize: 20,
    marginBottom: 20,
  },
  logContainer: {
    padding: 20,
  },
  logInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  logText: {
    fontSize: 16,
    marginBottom: 10,
  },
});
