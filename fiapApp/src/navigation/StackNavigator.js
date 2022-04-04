import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native-web';
import CadastroScreen from '../screens/CadastroScreen';
import LoginScreen from '../screens/LoginScreen';




const Stack = createNativeStackNavigator();


export default function MainStackNavigator() {
    return (
        <Stack.Navigator initialRouteName='Login'
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: '#ee125a'
                }
            }}
        >
            <Stack.Screen name='Login' component={LoginScreen}
                options={{ headerShown: false }} />
            <Stack.Screen name='Cadastro' component={CadastroScreen}
                options={{ headerShown: false }} />
        </Stack.Navigator>


    )
}

const styles = StyleSheet.create({
    screenOptions: {
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: '#ee125a'
        }
    },


})