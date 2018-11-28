import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import logo from './woodland_logos_cropped.jpg';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View className="App-header" style={styles.header}>
          <Image 
          source={logo} 
          className="App-logo" 
          alt="logo"
          style={{width: 193, height: 161}}/>
            <Text href="something here">Home</Text>
            <Text href="something here">Pizza</Text>
            <Text href="something here">Sandwiches</Text>
            <Text href="something here">Reviews</Text>
            <Text href="something here">About</Text>
            <Text href="something here">Directions</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B4DA55',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 48,
  },
  header:{
    flex: 1,
    marginTop:24
  },
});
