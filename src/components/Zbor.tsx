import styled from "styled-components/native";
import React from "react";
import {IZbor, ZBOR_STATUS} from "../context/ZborContext";
import {StyleSheet, Text} from "react-native";
import Animated, {BounceInRight, FlipInEasyY} from "react-native-reanimated";

const Title = styled.Text`
  font-weight: bold;

`;

const labelMap: { [key in ZBOR_STATUS]: string } = {
    [ZBOR_STATUS.CANCELED]: 'CANCELED',
    [ZBOR_STATUS.ON_TIME]: 'ON TIME',
    [ZBOR_STATUS.DELAYED]: 'DELAYED',
    [ZBOR_STATUS.POSTPONED]: 'POSTPONED'
}

const Zbor: React.FC<{ zbor: IZbor; index: number }> = ({zbor, index}) => {
    const {status, title} = zbor;
    return (

        <Animated.View entering={FlipInEasyY}
                       style={styles.container}>
            <Title>{title}</Title>
            <Text>{labelMap[status]}</Text>
        </Animated.View>

    )

};

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 100,
        borderStyle: "solid",
        borderColor: "black",
        borderRadius:4,
        padding: 12,
        justifyContent: "center",
        alignItems: "center",
        borderWidth:5
    }

});
export default Zbor;