/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Test from './test';
import Contact from './contact';
import JobListTwo from './JobListTwo';

import { Router, Scene } from 'react-native-router-flux';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class App extends React.Component {
  render() {
    return (
   <Router>
          <Scene key="root">
          <Scene key="jobListTwo" component={JobListTwo} title="JOB LIST2"  />
          <Scene key="contact" component={Contact} title="Job List" initial={true} />
          <Scene key="test" component={Test} title="Job List" />
          </Scene>
    </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
