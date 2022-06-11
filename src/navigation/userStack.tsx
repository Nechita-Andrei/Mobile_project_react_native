import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import EditScreen from "../screens/EditScreen";
import ZborScreen from "../screens/ZborScreen";
import FetchDataScreen from "../screens/FetchDataScreen";
import * as Linking from "expo-linking";
import {EventType} from "expo-linking";


const Stack = createStackNavigator();

const prefix= Linking.createURL('/');

export default function UserStack() {
    const [data, setData] = useState<any>(null);
    function handleDeepLink(event: EventType){
        let data=Linking.parse(event.url);
        setData(data);
    }
    useEffect(()=>{

        Linking.addEventListener("url",handleDeepLink);

        return () => {
            Linking.removeEventListener("url", handleDeepLink);
        };
    }, []);

    const linking={
        prefixes: [prefix],
        config: {
            screens: {
                Home: "home",
                Edit: "edit",
                Zboruri: "zboruri",
            }
        }
    }
    return (
        <NavigationContainer linking={linking}>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Edit" component={EditScreen} />
                <Stack.Screen name="Zboruri" component={ZborScreen}/>
                <Stack.Screen name="FetchData" component={FetchDataScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}