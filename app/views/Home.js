import React, { Component } from 'react';
import { Button, ScrollView, StyleSheet, Text } from 'react-native';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      badgeCount: 0
    };
  }

  // gets +1 or -1 as parameter and changes badgeCount accordingly
  changeBadgeCount = (number) => {
    if (this.state.badgeCount + number >= 0)
      this.setState({ badgeCount: this.state.badgeCount + number });
  };
  render() {
    return (
      <ScrollView>
        <Text style={styles.text}> Welcome </Text>
        <Button onPress={() => this.changeBadgeCount(1)} title="+" color="#f0f" />
        <Button onPress={() => this.changeBadgeCount(-1)} title="-" color="#0ff" />
        <Text>{this.state.badgeCount}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 300
  }
});

export default Home;
