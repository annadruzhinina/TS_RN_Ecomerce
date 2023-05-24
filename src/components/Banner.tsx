import {View, Text} from 'react-native';
import React from 'react';

const Banner = () => {
  return (
    <View className="h-24 bg-black justify-center">
      <View className="flex-row justify-center">
        <Text className="text-white">OMDB MOVIE DATABASE</Text>
      </View>
    </View>
  );
};

export default Banner;
