import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

interface Props {
  title: string;
  onPress: () => void;
}

const CustomButton = ({ title, onPress }: Props) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <LinearGradient
      colors={["#6494f2", "#a7c3fa"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.button}
    >
      <Text style={styles.text}>{title}</Text>
    </LinearGradient>
   
  </TouchableOpacity>
);

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 20,
    overflow: "hidden",
  },
  button: {
    padding: 12,
    borderRadius: 20,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});
