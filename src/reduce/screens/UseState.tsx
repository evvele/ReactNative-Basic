import React from "react";
import { Text, View, Button } from "react-native";

// useState?  Component's Data Storage.
// props 는 렌더링 방법에 관여하는 인수, State 는 변경되거나 상호작용에서 오는 Data를 처리할때 사용.

export interface MyProps {
  name: string,
  isHungry?: boolean,
}

const UseStateExample: React.FC<MyProps> = (props) => {
  const [isHungry, setHungry] = React.useState<Boolean>(true);
  
  return (
    <View style={{alignItems: "center"}}>
      <Text style={{fontSize: 18,}}>안녕 나는 {props.name} 이고, 난 지금 {isHungry ? "배고팡" : "와우 배불러!"}</Text>
      <Button 
        onPress={() => {setHungry(false)}}
        disabled={!isHungry}
        title={isHungry ? "내게 간식을 주세요" : "감사합니다!"}
      />
    </View>
  );
}

const StateUpdate: React.FC = () => {
  return (
    <View>
      <UseStateExample name="이부"/>
      <UseStateExample name="가부부"/>
      <UseStateExample name="파파파부"/>
    </View>
  )
}

export default StateUpdate;