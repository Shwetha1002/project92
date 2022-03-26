import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import HomeScreen from './screens/homeScreen'
import AddMore from './screens/addMore'
// You can import from local files
import AssetExample from './components/AssetExample';
import ChooseSubj from './screens/chooseSubj'

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';


export default function App() {
  return (
    <View style={styles.container}>
     <HomeScreen/>
     <ChooseSubj/>
     <AddMore/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
