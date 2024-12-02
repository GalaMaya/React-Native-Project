import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";

export default function index() {
  return (
    <View style={Styles.Container}>
      <Text style={Styles.Title}>Wellcome</Text>
      <Text style={Styles.Content}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium,
        ducimus libero consectetur perspiciatis ipsum magni inventore mollitia
        quis laudantium est expedita sequi aperiam saepe neque debitis cumque
        optio deleniti eveniet!
      </Text>
      <Button title="Click Me" onPress={() => {
        console.log("Hello World")
      }} />
    </View>
  );
}


const Styles = StyleSheet.create({
  Container : {
    flex:1,
    backgroundColor : "green",
    justifyContent : "center",
    alignItems : "center",
    padding : 20
  },

  Title : {
    marginBottom: 30,
    fontSize:30,
    fontWeight:500,
    color:"white"
  },

  Content : {
    fontSize:15,
    textAlign:"center",
    color:"white",
    marginBottom: 20
  }
})