import React from "react";
import {  TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButton = ({ title, buttonStyle, textStyle ,onPress}) => {
  return (
    
      <TouchableOpacity style={[style.button, buttonStyle ]} activeOpacity ={0.7} onPress ={onPress} >
        <Text style={[style.textStyles, textStyle]}>{title}</Text>
      </TouchableOpacity>
    
  );
};

const style = StyleSheet.create({
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    width: "50%",
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
  },
  textStyles: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default CustomButton;
