import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Abertura from '../src/Abertura/abertura';
import Login from '../src/Login/login';
import Cadastro from '../src/Cadastro/cadastro';
// import Home from '../src/Home/home';

const Stack = createNativeStackNavigator();

function rotas() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Abertura" component={Abertura} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default rotas