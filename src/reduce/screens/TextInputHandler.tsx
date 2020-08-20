import React from "react";
import { Text, TextInput,View } from "react-native";

const TextTranslator: React.FC = () => {
  const [text, setText] = React.useState<string>("");
  return (
    <View style={{alignItems: "center", justifyContent: "center"}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Text style={{padding:10, fontSize: 24,}}>
        {text.split(" ").map((word) => {
          return (
            word && "🍕"
          );
        }).join(" ")}
      </Text>
    </View>
  );  
}

export default TextTranslator;