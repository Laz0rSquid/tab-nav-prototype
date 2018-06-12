import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Home from '../views/Home';
import First from '../views/First';
import Second from '../views/Second';
import Ionicons from 'react-native-vector-icons/Ionicons';

/**
 * implementation done according to example by nguyenvanphuc from
 * https://github.com/oblador/react-native-vector-icons/issues/292
 */

export const Tab = TabNavigator(
  {
    Home: {
      screen: Home
    },
    First: {
      screen: First
    },
    Second: {
      screen: Second
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        let badgeText; // parameter to make number
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          badgeText = '2';
          return (
            <View style={styles.badgeIconView}>
              <Text style={styles.badge}> {badgeText} </Text>
              <Ionicons name={iconName} size={25} color={tintColor} />
            </View>
          );
        } else {
          iconName = `ios-options${focused ? '' : '-outline'}`;
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        }
      }
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: '#f0f',
      inactiveTintColor: '#666'
    }
  }
);

const styles = StyleSheet.create({
  badgeIconView: {
    padding: 5,
    position: 'relative'
  },
  badge: {
    backgroundColor: '#0ff',
    borderRadius: 1,
    color: '#fff',
    fontSize: 8,
    position: 'absolute',
    padding: 1,
    right: 1,
    top: 1,
    zIndex: 10
  }
});
