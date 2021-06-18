import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';


export default class WriteStoryScreen extends React.Component {
    constructor(){
      super();
      }
    render(){
      return(
         <View style={styles.container}>
            <View>
              <Text style={{textAlign: 'center', fontSize: 30,backgroundColor:'lightgreen',}}>STORY HUB</Text>
            </View>
            <View style={styles.inputView}>
            <TextInput 
              style={styles.inputBox}
              placeholder="TITLE OF STORY"/>
              </View>
               <View style={styles.inputView}>
            <TextInput 
              style={styles.inputBox}
              placeholder="AUTHOR OF STORY"/>
               </View>
                <TextInput 
              style={styles.storyBox}
              placeholder="WRITE YOUR STORY HERE"
              /></View>
              )}}
              
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'lightgreen',
       
    },
    inputView:{
      flexDirection: 'row',
      margin: 20,
    },
    inputBox:{
      width: 200,
      height: 40,
      borderWidth: 1.5,
      borderRightWidth:1.5,
      fontSize: 20,
     backgroundColor:'white',
      alignSelf:'center',
     textAlign:'center',
    },
   storyBox:{
      width: 300,
      height: 100,
      borderWidth: 1.5,
      borderRightWidth:1.5,
      fontSize: 20,
     backgroundColor:'white',
     alignSelf:'center',
     textAlign:'center',
    },
  });