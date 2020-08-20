import React, { useState } from "react";
import { View, Text, Image, ImageBackground, Dimensions, useWindowDimensions, ScrollView, } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface eve {
  images: any,
  // fire: () => void  // 함수 프롭스 넘길때 이렇게 함
}

const ScrollCarousel: React.FC = () => {
  const DEVICE_WIDTH = useWindowDimensions().width;
  const Images = [
    {uri: require("../../resources/11.jpg")},
    {uri: require("../../resources/22.jpg")},
    {uri: require("../../resources/33.jpg")},
    {uri: require("../../resources/44.jpg")},
    {uri: require("../../resources/55.jpg")},

    // {img: "test image"},
    // {img: "test image2"},
  ];

  return (
    <View style={{justifyContent: "center", alignItems: "center", backgroundColor: "darkgreen"}}>
      {/* <Image source={Images[0].img} /> */}
      {/* <BackgroundCarousel images={Images} name={"linda"} /> */}
      
      <JHComponent name={"evesama"} age={100} />
      {/* <BackgroundCarouselC name="hello world" age={0} /> */}
    </View>
  );
}

// 함수형 컴포넌트에 props 를 받아노는 방법, 매개변수로 추가
const BackgroundCarousel: React.FC<any> = (props: any) => {
  const DEVICE_WIDTH = useWindowDimensions().width;
  const [selectIndex, setIndex] = useState<number>(0);
  const scrollRef = React.createRef();

  const {images, name} = props;

  return (
    <View style={{height: "100%", width: "100%"}}>
      <ScrollView horizontal pagingEnabled>
        {images.map((image: any, index: number) => 
          <Image
            key={index}
            source={image.uri}
            style={{height: "100%", width: DEVICE_WIDTH}}
          />
        )}
      </ScrollView>
    </View>
  );
}

class BackgroundCarouselC extends React.Component<JHProps, any> {
  constructor(props: JHProps) {
    super(props);
    this.state = {
      name: "바꿔죠요"
    }
  }

  public render() {
    return (
    <TouchableOpacity onPress={() => this.setState({ name: "바껴쪙" })}>
      <Text style={{color: "#fff", fontSize: 50}}>{this.props.name} 바꿀변수 {this.state.name}</Text>
    </TouchableOpacity>
    );
  }
}

interface JHProps {
  name: string;
  age: number;
}

const JHComponent: React.FC<JHProps> = (props: JHProps) => {
  // let name: any = props; // === {name: "evesama", age: 100}
  // name = props.name;
  const { name } = props; // === props.name;


  const [text, changeText] = useState<string>("초기값");

  return (
    <>
      <Text style={{fontSize: 14, color: "#fff"}}>{name} {props.age}</Text>
    
      <TouchableOpacity onPress={() => changeText("바꿔쪄용!!")}>
        <Text style={{fontSize: 30, color: "#fff"}}>{text} {props.age}</Text>
      </TouchableOpacity>
    </>
  )
}

export default ScrollCarousel;