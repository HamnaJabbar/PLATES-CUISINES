import {View,Text,TouchableOpacity} from 'react-native';
import React from 'react';


const MyButton= () => {
return(
<TouchableOpacity style ={{width:200,
height:50,
marginTop:20,
justifyContent:"center",
alignItems:'center',
backgroundColor:"green",
}
}>
    <Text style={{color : '#fff'}}>MyButton</Text>
</TouchableOpacity>

);
};

export default MyButton;