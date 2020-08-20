import React, { useEffect } from "react";
import { Animated, PanResponder, StyleSheet, View } from "react-native";

// good
import { PanGestureHandler } from "react-native-gesture-handler";
import ReAnimated from "react-native-reanimated";
import { usePanGestureHandler, withOffset } from "react-native-redash";

const GestureScreenBad: React.FC = (): any => {
  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (): boolean => true,      // return 과 {} 생략된 문법, onMoveShouldSetPanResponder는 Handler 이다.
    onPanResponderGrant: (): void => {
      position.setOffset({
        x: position.x._value,
        y: position.y._value,
      });
      position.setValue({x: 0, y: 0});
    },
    onPanResponderMove: Animated.event([
      null,
      {dx: position.x, dy: position.y},
    ]),
    onPanResponderRelease: (): void => {
      position.flattenOffset();
    },
  });

  // useEffect(() => {
  //   new Array(5000).fill(0).map(() => console.log("js thread busy!"))
  // });
 
  return (
    <View style={{flex: 1,}}>
      <Animated.View  
        style={[{backgroundColor: "red", height:100, width: 100, borderRadius: 50}, position.getLayout()]} 
        {...panResponder.panHandlers}
      />
    </View>
  );
}

const GestureGood: React.FC = () => {
  const { gestureHandler, translation, state } = usePanGestureHandler();
  const translateX = withOffset(translation.x, state);
  const translateY = withOffset(translation.y, state);
  
  return (
    <View style={{flex: 1,}}>
      <PanGestureHandler  {...gestureHandler}>
        <ReAnimated.View  style={[{backgroundColor: "darkgreen", height:100, width: 100, borderRadius: 50},
      {transform: [{ translateX }, { translateY }]} ]}/>
      </PanGestureHandler>

    </View>
  )
}


export {
  GestureScreenBad,
  GestureGood,
}


const style = StyleSheet.create({

});