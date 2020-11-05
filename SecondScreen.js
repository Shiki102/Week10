import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const SecondScreen = ({navigation}) => {
	
	const goBackToFirst = () => {
		navigation.navigate('First');
	}
	
  return (
    <View style={styles.container}>
      <Text style={style.title}>
	  Second screen
	  </Text>
	  <Button title="go Back to First Screen" 
	    onPress={goBackToFirst} />
      <StatusBar style="auto" />
    </View>
  );
}

export default SecondScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
	  backgroundColor: '#FFF',
	  alignItems: 'center',
	  justifyContent: 'flex-end',
	  flexWrap: 'wrap',
  },
			
	title:{
		fontSize: 36,
		marginBottom: 20
	}
});
