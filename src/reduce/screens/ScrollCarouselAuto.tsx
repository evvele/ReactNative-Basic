import React, { useState, useEffect, useRef, } from "react";
import { 
  View, 
  Text, 
  Image, 
  ImageBackground, 
  Dimensions, 
  useWindowDimensions, 
  ScrollView, 
  StyleSheet,
} from "react-native";

const ScrollCarouselAuto: React.FC = () => {

  const DEVICE_WIDTH = useWindowDimensions().width;
  const images = [
    {img: require("../../resources/11.jpg")},
    {img: require("../../resources/22.jpg")},
    {img: require("../../resources/33.jpg")},
    {img: require("../../resources/44.jpg")},
    {img: require("../../resources/55.jpg")},
  ];

  const [selectIndex, setIndex] = useState(0);
  const scrollRef = useRef<any>(null);

  const setSelectIndex: any = (event: any) => {
    // width of viewSize
    const viewSize = event.nativeEvent.layoutMeasurement.width;

    // 스크롤 뷰에서 현재 위치를 가져옴
    const contentOffset = event.nativeEvent.contentOffset.x;

    const currentIndex = Math.floor(contentOffset / viewSize);
    setIndex(currentIndex);
  }

  useEffect(() => {
    const timer = setInterval(() => {

      if(selectIndex === images.length - 1) {
        setIndex(0);
        console.log("현재 인덱스" + selectIndex);
      } else {
        setIndex(selectIndex + 1);
        console.log("현재 인덱스" + selectIndex);
      }
     
    }, 2000);

    return () => clearInterval(timer);

  },[selectIndex]);

  useEffect(() => {
    scrollRef.current.scrollTo({
      animated: true,
      y: 0,
      x: DEVICE_WIDTH * selectIndex,
    });
  });

  return (
    <View style={{height: "100%", width: "100%"}}>
    <ScrollView horizontal pagingEnabled 
      showsHorizontalScrollIndicator={false}
      onMomentumScrollEnd={setSelectIndex}
      ref={scrollRef}
    >
      {images.map((image: any, index: number) => {
        return (
          <Image
            key={index}
            source={image.img}
            style={{height: "100%", width: DEVICE_WIDTH}}
          />
        )
      })}
    </ScrollView>

    {/** 스크롤 점 */}
    <View style={myStyle.circleDiv}>
      {images.map((image: any, index: number) => {
        return (
          <View 
            key={index}
            style={{...myStyle.whiteCircle, 
              backgroundColor: index === selectIndex ? "tomato" : "#fff",
              width: index === selectIndex ? 12 : 8,
              height: index === selectIndex ? 12 : 8,
              borderRadius: index === selectIndex ? 6 : 4,
              margin : index === selectIndex ? 3 : 5,
            }}
          />
        )
      })}
    </View>
  </View>
  );
}

interface eve {
  images: any,
  // fire: () => void  // 함수 프롭스 넘길때 이렇게 함
}

// Style
const myStyle = StyleSheet.create({
  whiteCircle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 5,
    backgroundColor: "#fff",

  },
  circleDiv: {
    position: "absolute",
    bottom: 15,
    height: 10,
    width: "100%",
    display: "flex",    // 이거 뭐냐
    flexDirection: "row",
    justifyContent: "center",
    

  },

})




export default ScrollCarouselAuto;