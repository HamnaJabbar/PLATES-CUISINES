import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import ProductItem from './Product';
const CustomFlatListComponent = ({ data, isLoading }) => {
if (isLoading) {
return (
<View style={styles.container}>
<Text>Loading...</Text>
</View>
);
}

return (
<FlatList
data={data}
renderItem={({ item }) => <ProductItem item={item} />}
keyExtractor={(item) => item.id.toString()}
/>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},
item: {
backgroundColor: 'lightgrey',
padding: 20,
marginVertical: 8,
marginHorizontal: 16,
},
title: {
fontSize: 24,
},
category: {
fontSize: 18,
},
});

export default CustomFlatListComponent;