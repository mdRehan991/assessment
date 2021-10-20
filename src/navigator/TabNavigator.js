import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Categories from '../screens/Categories';
import MyCart from '../screens/MyCart';
import Wishlist from '../screens/Wishlist';
import Account from '../screens/Account';
import {Image, StyleSheet} from 'react-native'

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Account"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? require("../assets/home.png") : require("../assets/home-outline.png");
            } 
            else if (route.name === 'Categories') {
              iconName = focused ? require("../assets/list.png") : require("../assets/list-outline.png");
            } else if (route.name === 'MyCart') {
              iconName = focused ? require("../assets/cart.png") : require("../assets/cart-outline.png");
            } else if (route.name === 'Wishlist') {
              iconName = focused ? require("../assets/heart.png") : require("../assets/heart-outline.png");
            } else if (route.name === 'Account') {
              iconName = focused ? require("../assets/person.png") : require("../assets/person-outline.png");
            }
            return (<Image
              style={styles.image}
              source={iconName}/>);
          },
          tabBarActiveTintColor: 'gray',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            headerTitle: 'MEN CLOTHING',
          }}
        />
        <Tab.Screen
          name="Categories"
          component={Categories}
          options={{
            title: 'Categories',
            headerTitle: 'CATEGORIES',
          }}
        />
        <Tab.Screen
          name="MyCart"
          component={MyCart}
          options={{
            title: 'My Cart',
            headerTitle: 'MY CART',
          }}
        />
        <Tab.Screen
          name="Wishlist"
          component={Wishlist}
          options={{
            title: 'Wishlist',
            headerTitle: 'WISHLIST',
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 25,
    height: 25,
  },
})

export default TabNavigator;
