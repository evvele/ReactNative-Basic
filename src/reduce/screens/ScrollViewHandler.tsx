import React from "react"
import { Text, View, ScrollView, Image } from "react-native";

export default function ScrollViewHandler() {

  const logo = {
    width: 300,
    height: 300
  }

  // pagingEnabled ? 부드럽게 스크롤링하는거 키고 끔.
  return(
    <ScrollView pagingEnabled={true}>
      <Text style={{fontSize: 80}}>Scroll View!</Text>
      <Image source={require("../../resources/300Img.png")}  />
      <Image source={require("../../resources/300Img.png")}  />
      <Image source={require("../../resources/300Img.png")}  />
      <Image source={require("../../resources/300Img.png")}  />
      <Image source={require("../../resources/300Img.png")}  />
      <Text style={{fontSize: 80}}>Scroll View End!</Text>


    </ScrollView>  
  );
  
}