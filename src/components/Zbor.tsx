import styled from "styled-components/native";
import React from "react";
import {IZbor, ZBOR_STATUS} from "../context/ZborContext";
import {Text} from "react-native";

const Container = styled.View`
  width: 150px;
  height: 100px;
  border: 1px solid black;
  border-radius: 4px;
  padding: 12px;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.Text`
  font-weight: bold;

`;

const labelMap: {[key in ZBOR_STATUS]:string}= {
    [ZBOR_STATUS.CANCELED]: 'CANCELED',
    [ZBOR_STATUS.ON_TIME]: 'ON TIME',
    [ZBOR_STATUS.DELAYED]: 'DELAYED',
    [ZBOR_STATUS.POSTPONED]: 'POSTPONED'
}

const Zbor: React.FC<{zbor: IZbor; index:number}> = ({zbor, index})=>{
    const {status, title}=zbor;
    return (
        <Container>
        <Title>{title}</Title>
        <Text>{labelMap[status]}</Text>
        </Container>
    )

};
export default Zbor;