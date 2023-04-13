import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList, TouchableOpacity } from 'react-native';
import { useEffect, useState } from "react";
import React from 'react';


const DATA = [
  {
    title: 'Main dishes',
    data: ['Broadway Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const  CustomSectionlist= ()=> {

    return (
  <SectionList
      sections={DATA} //array of sections as a prop
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <View style={{backgroundColor:'green'}}>
          <Text style={styles.title}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <View style={{backgroundColor:'lightgrey'}}>
        <Text style={styles.header}>{title}</Text>
        </View>
      )}
    /> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop:100
  },
});

export default CustomSectionlist;