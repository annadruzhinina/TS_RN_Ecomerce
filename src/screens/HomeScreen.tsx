import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Banner from '../components/Banner';

const HomeScreen = () => {
  return (
    <SafeAreaView className="min-h-screen min-w-screen bg-red-400">
      <Banner />
    </SafeAreaView>
  );
};

export default HomeScreen;
