import { StatusBar, SafeAreaView } from "react-native";
import React from 'react';

import myStyle from "./src/styles/global";
import { View, Text } from "react-native";

import { 
  FirstBasic, 
  UseState, 
  CustomComponent, 
  TextInputHandler, 
  ScrollViewHandler, 
  FlatListHandler, 
  HorizontalSwaper,
  GestureScreenBad,
  GestureGood,
  ScrollCarouselAuto,
} from "./src/reduce/AllTutorials";


export default function App() {
  return (

      <SafeAreaView>
        <StatusBar barStyle="dark-content"  />
        {/* <FirstBasic /> */}
        {/* <Cafe /> */}
        {/* <UseState /> */}
        {/* <TextInputHandler   /> */}
        {/* <ScrollViewHandler  /> */}
        {/* <FlatListHandler  /> */}
        {/* <HorizontalSwaper /> */}
        {/* <GestureScreenBad  /> */}
        {/* <GestureGood  /> */}
        <ScrollCarouselAuto />
      </SafeAreaView>

  );
}

