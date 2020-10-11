import React, {Component} from 'react';
import { TextInput } from 'react-native';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import Communications from 'react-native-communications';

export default class App extends Component{
constructor(props) {
   super(props);
   this.state = {
     telefono: '5545109999'
   };
 }

  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
       <Text ></Text>
        <Text ></Text>
         <Text ></Text>
        <Text style={styles.headingStyle}>¿Quieres Comunicarte con Nosotros?</Text>
        
       <Text style={{color: 'green', alignSelf: 'center'}}>Numero Telefónico</Text>
       <TextInput
         value={this.state.telefono}
         onChangeText={(telefono) => this.setState({ telefono })}
         placeholder={'Escribe el telefono a marcar y para mandar SMS'}
         style={styles.input}
         keyboardType={'numeric'}
       />
 
        <TouchableOpacity 
          style = {styles.button}
          onPress={() => Communications.phonecall(this.state.telefono, true)}>
            <Text style={styles.text}>
              Realizar llamada telefónica
            </Text>
        </TouchableOpacity>
       
        <TouchableOpacity 
          style = {styles.button}
          onPress={() => Communications.web('https://tiendas3b.com/')}>
            <Text style={styles.text}>
             Nuestra Pagina Web
            </Text>
        </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
 
var styles = StyleSheet.create({
  container: {
    flex: 1,
    font: 'bold',
    backgroundColor: '#ecf0f1',
    padding: 12,
  },
  headingStyle: {
    fontWeight: 'normal',
    fontSize: 25,
    color: '#B90E0A',
    textAlign: 'center',
    padding: 30,
  },
  button: {
    justifyContent: 'center',
    width : 300,
    backgroundColor:"#B90E0A",
    marginTop : 20,
    alignItems: 'center',
    alignSelf: 'center',
    color: 'red'
  },
  text: {
    fontSize: 18,
    textAlign : 'center',
    padding : 10,
    color : '#ffffff',
    alignSelf: 'center',
  },
  input: {
    fontSize: 12,
    textAlign : 'center',
    padding : 10,
    color : '#000',
    alignSelf: 'center',
  },
   
});

