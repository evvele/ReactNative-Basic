import React from "react";
import myStyle from "../../styles/global"
import { ScrollView, Text, View, Image, TextInput } from "react-native";


export default function FirstBasic() {
  return (
    <ScrollView>
      <View style={{paddingHorizontal: 20}}>
        <Text>First Basic 리액트 홈피 첫번째 예제임</Text>
        <View>
          <Text>이것은 또다른 텍스트</Text>
          <Image
            style={{width: 200, height: 200}}
            source={{
              uri: "https://reactnative.dev/docs/assets/p_cat2.png",
            }}
            />
        </View>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
          }}
          />
      </View>
    </ScrollView>
  );
}