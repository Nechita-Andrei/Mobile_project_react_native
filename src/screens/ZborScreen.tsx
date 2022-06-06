import React, {useState} from "react";
import {StackScreenProps} from "@react-navigation/stack";
import ZborContext, {IZbor} from "../context/ZborContext";
import styled from "styled-components/native";
import {StatusBar} from "expo-status-bar";
import ZborInput from "../components/ZborInput";
import {FlatList} from "react-native";
import Zbor from "../components/Zbor";
const Container=styled.View`
  padding: 8px;
  height: 100%;
  width: 100%;
`;

const Space=styled.View`
  width: 100%;
  height: 8px;
`

const ZborScreen: React.FC<StackScreenProps<any>> = ({navigation}) => {
    const [zboruri, setZboruri]=useState<IZbor[]>([]);
    const addZbor=(newItem: IZbor)=>{
        setZboruri([...zboruri,newItem]);
    }

    console.log(zboruri);
    return (
        <Container>
            <StatusBar/>
            <ZborContext.Provider value={{
                addZbor
            }}>
                <ZborInput/>
                <Space/>

                <FlatList
                    ItemSeparatorComponent={Space}
                    keyExtractor={(_, index:number)=>index.toString()}
                    data={zboruri} renderItem={({item,index})=>(
                    <Zbor zbor={item} index={index} />
                )}/>

            </ZborContext.Provider>

        </Container>

    )
}


export default ZborScreen;