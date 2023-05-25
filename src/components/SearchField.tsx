import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {useState} from 'react';


type Props = {onSubmit: (searchString: string) => Promise<void>};

const Search = ({onSubmit}: Props) => {
  // State for Search
  const [searchString, setSearchString] = useState<string>('');
  const heandleSearch = () => {
    onSubmit(searchString);
  };
  return (
    <View className="flex-row">
      <TextInput
        className="border rounded-md border-gray-400 border-s m-2 flex-1 p-2"
        onChangeText={setSearchString}
      />
      <TouchableOpacity
        className="bg-black my-2 p-2 mr-2 rounded-md border border-s border-gray-500 justify-center"
        onPress={heandleSearch}>
        <Text className="color-white">Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Search;
