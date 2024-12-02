import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";

export default function index() {
  return (
    <View style={Styles.Container}>
      
      {/* Header */}
      <View style={Styles.HeaderContainer}>
        <Text style={Styles.HeaderContent}>Wellcome</Text>
      </View>
      
      {/* Contcnt */}
      <View style={Styles.ContentContainer}>
        <Text style={Styles.TextContent}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium,
          ducimus libero consectetur perspiciatis ipsum magni inventore mollitia
          quis laudantium est expedita sequi aperiam saepe neque debitis cumque
          optio deleniti eveniet!
        </Text>
        <Button title="Click Me" onPress={() => {
          console.log("Hello World")
        }} />
      </View>
     

      {/* Footer */}
      <View style={Styles.FooterContainer}>
        <Text style={Styles.FooterContent}>Footer</Text>
      </View>
    </View>
  );
}


const Styles = StyleSheet.create({
  Container : {
    flex: 1,
    backgroundColor: '#f4f4f4',
    textAlign:"center",
  },

  HeaderContainer : {
    flex: 1,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  HeaderContent : {
    fontSize:15,
    fontWeight:500
  },

  ContentContainer :{
    flex : 6,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white"
  },

  TextContent : {
    fontSize:15,
    marginBottom: 20
  },

  FooterContainer : {
    flex : 1,
    backgroundColor: "green",
    justifyContent: 'center',
    alignItems: 'center',
  },

  FooterContent : {
    fontSize:15,
    fontWeight:500
  }
})