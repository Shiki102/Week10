import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const FirstScreen = ({ navigation }) => {
	
	const goToSecond = () => {
		navigation.navigate('Second');
	}
	
	
  return (
    <View style={styles.container}>
      <Text style={style.title}>
	  First screen
	  </Text>
	  <Button title="go to Second Screen" 
	    onPress={goToSecond} />
      <StatusBar style="auto" />
    </View>
  );
}

export default FirstScreen;

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
		
		marginBottom: 20,
	}
});

