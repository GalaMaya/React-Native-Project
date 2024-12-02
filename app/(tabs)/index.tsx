import { View, Text, Button, TouchableOpacity, Alert, StyleSheet } from "react-native";
import React from "react";


const ClickMe = (message) => {
  Alert.alert('Alert', message, [{ text: 'OK', onPress: () => console.log('OK Pressed') }]);
}

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
        <Button title="Click Me" onPress={() => ClickMe("Button Click")} />
        
        {/* Tombol dengan komponen TouchableOpacity */}
        <TouchableOpacity 
          style={Styles.touchableButton} 
          onPress={() => ClickMe('Tombol TouchableOpacity Ditekan')}
        >
          <Text style={Styles.touchableText}>Klik Saya (TouchableOpacity)</Text>
        </TouchableOpacity>
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
  },

  touchableButton: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  touchableText: {
    color: 'white',
    fontSize: 16,
  },

})