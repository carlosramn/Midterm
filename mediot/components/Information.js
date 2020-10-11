import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image} from 'react-native';
import Constants from 'expo-constants';
import AssetExample from './AssetExample';
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
    <ScrollView>
      <Text style={styles.paragraph}>
      
        TIENDAS 3B
        
      </Text>
      <Card>
        <AssetExample />
      </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'rigth',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#B90E0A',
    padding: 32,
  },
  paragraph: {
    margin: 10,
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
});