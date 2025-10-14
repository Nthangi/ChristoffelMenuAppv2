import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AddDishScreen from './screens/AddDishScreen';
import MenuListScreen from './screens/MenuListScreen';

type MenuItem = {
  id: string;
  name: string;
  description: string;
  course: 'Starter' | 'Main' | 'Dessert';
  price: number;
};

const Stack = createNativeStackNavigator();

export default function App() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} menuItems={menuItems} />}
        </Stack.Screen>
        <Stack.Screen name="AddDish" options={{ title: 'Add New Dish' }}>
          {(props) => <AddDishScreen {...props} setMenuItems={setMenuItems} />}
        </Stack.Screen>
        <Stack.Screen name="MenuList" options={{ title: 'Menu Items' }}>
          {(props) => <MenuListScreen {...props} menuItems={menuItems} setMenuItems={setMenuItems} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}