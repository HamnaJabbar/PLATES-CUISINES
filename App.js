import { Image, StyleSheet, Text, View } from 'react-native';
import { useFetch } from './hooks/useFetch';
import  CustomFlatListComponent  from './Components/Flatlist';
import CustomSectionlist from './Components/Sectionlist';

import CustomButton from './CustomButton';

const App = () => {
const response = useFetch('https://fakestoreapi.com/products');
const obj = useFetch('https://fakestoreapi.com/products');

return (
<View style={styles.container}>
<Text>Open up App.js to start working on your app!</Text>
<CustomFlatListComponent data={response.data} isLoading={response.isLoading} /> 
<CustomFlatListComponent data={obj.data} isLoading={obj.isLoading} /> 
 


<CustomSectionlist />
{/* <CustomButton afzal="top"></CustomButton> */}

</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
marginTop:100,
margin:5
},
});

export default App;