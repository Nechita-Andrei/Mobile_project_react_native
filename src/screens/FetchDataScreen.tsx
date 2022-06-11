import React, {useState} from "react";
import {StackScreenProps} from "@react-navigation/stack";
import {FlatList, StyleSheet, Text, View} from "react-native";
import Animated, {FlipInEasyY} from "react-native-reanimated";
import styled from "styled-components/native";
import CustomButton from "../components/CustomButton";
import {StatusBar} from "expo-status-bar";

const Title = styled.Text`
  font-weight: bold;

`;

const Container=styled.View`
  padding: 8px;
  height: 100%;
  width: 100%;
  align-items: center;
  
`;

const Space=styled.View`
  width: 100%;
  height: 8px;
`
const FetchDataScreen: React.FC<StackScreenProps<any>> = ({navigation}) => {

    const [dataObject, setDataObject] = useState<any>('');
    function getData() {
        fetch('https://gist.githubusercontent.com/Nechita-Andrei/b5fe89866cecb8c63eeac8edd8a5075e/raw/e8e88a18c9330cb49d38be3ae032fb9ba73da0c4/zboruri.json').then((response) => response.json())
            .then((data) => {
                setDataObject(data.zboruri)
            }).catch(error => {
            console.log(error)
        })
    }

    return (
        <Container>
            <StatusBar/>
            <FlatList
                data={dataObject}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                    <Animated.View entering={FlipInEasyY}
                                   style={styles.container}>
                        <Title>{item.localitatePlecare+" -> "+item.destinatie}</Title>
                        <Text>{"Zborul va avea loc la data de: "+item.dataZbor}</Text>
                    </Animated.View>
                )}
            />

            <CustomButton label={"Show data"} width={200} onPress={getData}/>

        </Container>

    )

}
const styles = StyleSheet.create({
    container: {
        width: 250,
        height: 100,
        borderStyle: "solid",
        borderColor: "black",
        borderRadius:4,
        padding: 12,
        justifyContent: "center",
        alignItems: "center",
        borderWidth:2
    }

});

export default FetchDataScreen;