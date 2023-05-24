import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* Landing Page Goes here */}
        <HomeScreen />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
