/*
 * Home View
 * The Home view component render app home or root path
 */

import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from '../styles/styles';

export default class HomeView extends Component {
  render() {
	return (
		<View style={styles.container}>
			<Text style={styles.heading}>
			  Welcome to React Native!
			</Text>
			<Text style={styles.subHeading}>
			  Switch to 2 more views (List, Settings) using Next link given below
			  or Clicking Next button provider in top-right corner in header.
			</Text>
            <TouchableHighlight onPress={this.props.onForward}>
              <Text style={styles.link}>Next &rarr;</Text>
            </TouchableHighlight>
		</View>
	)
  }
}

HomeView.propTypes = {
  title: PropTypes.string.isRequired,
  onForward: PropTypes.func.isRequired,
};