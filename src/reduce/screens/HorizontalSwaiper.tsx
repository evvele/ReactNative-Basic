import React, { useRef } from "react";
import { View, Text, ScrollView, Animated, useWindowDimensions, ImageBackground, } from "react-native";

import HorizontalStyle from "../../styles/HorizontalSwaiperStyle";
export default function HorizontalSwaper() {
  const images = new Array(6).fill("https://images.unsplash.com/photo-1556740749-887f6717d7e4");

  const scrollX = useRef(new Animated.Value(0)).current;
  const { width: windowWidth } = useWindowDimensions();

  return (
    <View style={HorizontalStyle.scrollContainer}>
      <ScrollView
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                x: scrollX
              }
            }
          }
        ])}

        scrollEventThrottle={1}
      >
        {images.map((image, imageIndex) => {
          return (
          <View style={{width: windowWidth, height: 250}}
            key={imageIndex}
          >
            <ImageBackground source={{uri: image}} style={HorizontalStyle.card}>
              <View style={{backgroundColor: "rgba(0,0,0,0.7)", paddingHorizontal: 24, paddingVertical: 8, borderRadius: 5}}>
                <Text style={{color: "white", fontSize: 24, fontWeight: "bold"}}>
                  {"Image - " + imageIndex + " 입니다."}
                </Text>
              </View>
            </ImageBackground>
          </View>
          );
        })}
      </ScrollView>

      {/**아래 점 움직이는거 */}
      <View style={{flexDirection: "row", alignItems: "center"}}>
        {images.map((image, imageIndex) => {
          const width = scrollX.interpolate({
            inputRange: [
              windowWidth * (imageIndex - 1),
              windowWidth * imageIndex,
              windowWidth * (imageIndex + 1)
            ],
            outputRange: [8 , 16 , 8],
            extrapolate: "clamp"
          });

          return (
            <Animated.View  
              key={imageIndex}
              style={[{height: 8, width: 8, borderRadius: 4, backgroundColor: "red", marginHorizontal: 4}, { width }]}
            />
          );
        })}

      </View>
    </View>
  );

}
