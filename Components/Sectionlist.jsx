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

// const  CustomSectionlist= ()=> {
  
  
    // const { DATA, isLoading, error } = useFetch('https://fakestoreapi.com/products');
  
  
  //   return (
  //     <SectionList
  //       sections={data}
  //       keyExtractor={(item, index) => item + index}
  //       renderItem={({ item }) => (
  //         <View style={{ backgroundColor: 'green' }}>
  //           <Text style={styles.title}>{item}</Text>
  //         </View>
  //       )}
  //     />
  //   );
  // };
  
  
  //   return (
  // <SectionList
  //     sections={DATA} //array of sections as a prop
  //     keyExtractor={(item, index) => item + index}
  //     renderItem={({item}) => (
  //       <View style={{backgroundColor:'green'}}>
  //         <Text style={styles.title}>{item}</Text>
  //       </View>
  //     )}
  //     renderSectionHeader={({section: {title}}) => (
  //       <View style={{backgroundColor:'lightgrey'}}>
  //       <Text style={styles.header}>{title}</Text>
  //       </View>
  //     )}
  //   /> 
  // );

  const CustomSectionlist = () => {
    const { data, isLoading, error } = useFetch('https://fakestoreapi.com/products');
  
    if (isLoading) {
      return <ActivityIndicator />;
    }
  
    if (error) {
      return <Text>Error: {error.message}</Text>;
    }
  
    // a single section that contains all the items
    const allItemsSection = { title: 'All Items', data: data };
  
    return (
      <SectionList
        sections={[allItemsSection]}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: 'green' }}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
      />
    );
  };
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
     alignItems: 'center',
    //justifyContent: 'center',
    marginTop:100
  },
});

export default CustomSectionlist;