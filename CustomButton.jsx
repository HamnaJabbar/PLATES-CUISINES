import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SectionList, TouchableOpacity } from 'react-native';
import { useEffect, useState } from "react";

export default function CustomButton(props) {
 //const buttonPositon=props.buttonPostion;
 //const {buttonPosition}=props;
useEffect(()=>{
    console.log(props.buttonPosition)
    })
  loginBtnPressed=()=>{

  }

  if(props.buttonPosition=='top'){
    return (
        <View>
          <TouchableOpacity style={{backgroundColor:'grey', width:100, height:30, alignItems:'center', justifyContent:'center'}} onPress={loginBtnPressed}>
            <Text> Sign In </Text>
          </TouchableOpacity>
        </View>
      );
  }else  if(props.buttonPosition=='bottom'){
    return (
        <View style={styles.container}>
          <TouchableOpacity style={{backgroundColor:'green', width:100, height:30}} onPress={loginBtnPressed}>
            <Text> Sign In </Text>
          </TouchableOpacity>
        </View>
      );
  }else{
    return (
        <View style={styles.container}>
          <TouchableOpacity style={{backgroundColor:'yellow', width:100, height:30}} onPress={loginBtnPressed}>
            <Text> Sign In </Text>
          </TouchableOpacity>
        </View>
      );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
