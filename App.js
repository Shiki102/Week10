import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';


const Stack = createStackNavigator();



const App = () => {
  return (
<NavigationContainer>
	  <Stack.Navigetor>
	  <Stack.Screen name="First" component={FirstScreen} />
	   <Stack.Screen name="Second" component={SecondScreen} />
       </Stack.Navigetor>
	</NavigationContainer>  
  );
}

export default App;
