import React from "react";
import { Text, View, FlatList } from "react-native";

// FlatList ? Data 목록을 보기위한 Component.

const FlatListHandler: React.FC = () => {

  return (
    <View>
      <FlatList 
        data={[
          {key: "이브"},
          {key: "가브"},
          {key: "뽀브"},
        ]}
      renderItem={({item}) => <Text>{item.key}</Text>}
      />
    </View>
  )

}

export default FlatListHandler;