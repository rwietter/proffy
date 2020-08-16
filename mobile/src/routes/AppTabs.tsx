import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import React from 'react';
import { Platform } from 'react-native';

import Favorites from '../pages/Favorites';
import TeacherList from '../pages/TeacherList';

const { Navigator, Screen } = createBottomTabNavigator();

// eslint-disable-next-line complexity
const AppTabs: React.FC = () => {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: Platform.OS === 'ios' ? 200 : 70,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: Platform.OS === 'ios' ? 20 : 0,
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: Platform.OS === 'ios' ? 24 : 20,
        },
        safeAreaInsets: {
          bottom: 0,
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 14,
          marginLeft: 16,
        },
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#322640',
      }}>
      <Screen
        options={{
          tabBarLabel: 'Proffy',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="ios-easel"
                size={size}
                color={focused ? '#8257e5' : color}
              />
            );
          },
        }}
        name="TeacherList"
        component={TeacherList}
      />
      <Screen
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="ios-heart"
                size={size}
                color={focused ? '#8257e5' : color}
              />
            );
          },
        }}
        name="Favorites"
        component={Favorites}
      />
    </Navigator>
  );
};

export default AppTabs;
