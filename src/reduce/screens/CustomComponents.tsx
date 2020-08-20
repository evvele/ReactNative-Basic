import React from "react";
import { Text, View, Image } from "react-native";

// Props? properties 의 줄임말. props 사용 시 React Component 를 사용자 정의할수있다.

export interface CarInfo {
  catName: string
}

// 하위 구성요소 Child Componnet.
const Cat: React.FC<CarInfo> = (props: any) => {
  return (
    <View>
      <Text>안녕 나는 { props.catName } 라고 한다냥</Text>
    </View>
  );
}

// 상위 구성요소 Parent Component.
const Cafe: React.FC = () => {
  return (
    <View>
      <Text>고양이 카페에 어서 오세요</Text>
      <Cat catName="뽀미"    />
      <Cat catName="냥냥이"  />
      <Cat catName="복돌이"  />
    </View>
  );
}

export default Cafe;