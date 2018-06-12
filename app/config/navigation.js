import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IconBadge from 'react-native-icon-badge';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Home from '../views/Home';
import First from '../views/First';
import Second from '../views/Second';
import Ionicons from 'react-native-vector-icons/Ionicons';

/**
 * implementation from https://github.com/yanqiw/react-native-icon-badge
 *
 * originally uses this.state.badgeCount, changed it to navigation.state.badgeCount, as there is
 * no this object used here.
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
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        return (
          <View>
            <IconBadge
              // Icon goes here
              MainElement={<Ionicons name={iconName} size={30} color={tintColor} />}
              // Counter element
              BadgeElement={
                <Text style={styles.badgeText}>
                  {navigation.state.params !== undefined && navigation.state.params.badgeCount}
                </Text>
              }
              // Styling for the badge
              IconBadgeStyle={styles.badgeIcon}
              // Hides badge when counter == 0
              Hidden={navigation.state.params === undefined || !navigation.state.params.badgeCount}
            />
          </View>
        );
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
  badgeText: {
    color: '#FFFFFF',
    fontSize: 10
  },
  badgeIcon: {
    position: 'absolute',
    top: -5,
    right: -10,
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#555'
  }
});
