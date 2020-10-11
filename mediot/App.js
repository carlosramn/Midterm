import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons'; 
import Information from './components/Information';
import Contact from './components/Contact';
import Maps from './components/Maps';
import AssetExample from './components/AssetExample';


function MapScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Information') {
              iconName = 'info'
                
            } else if (route.name === 'Contact') {
              iconName = focused
               ?  'message-circle'
                : 'message-square';
            }else if(route.name === 'Map'){
              iconName = focused
               ?  'map'
                : 'map-pin';
            }

            return <Feather name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#B90E0A',
          inactiveTintColor: '#515151',
          style: {
            backgroundColor: 'white' // TabBar background
          },
          labelStyle: {
          textAlign: 'center',
          fontSize: 13,
          
        }
        }}
      >

        <Tab.Screen name="Information" component={Information} />
        <Tab.Screen name="Contact" component={Contact} />
        <Tab.Screen name="Map" component={Maps} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

