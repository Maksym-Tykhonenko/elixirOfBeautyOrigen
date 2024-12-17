import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Image, Animated, View, Text} from 'react-native';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MusicProvider } from './src/constants/music';
import MusicPlayer from './src/components/MusicPlayer';

import HomeScreen from './src/screens/HomeScreen';
import ArticleScreen from './src/screens/ArticleScreen';
import AdvicesScreen from './src/screens/AdvicesScreen';
import PlanScreen from './src/screens/PlanScreen';
import TrackerScreen from './src/screens/TrackerScreen';
import TaskScreen from './src/screens/TaskScreen';
import GameScreen from './src/screens/GameScreen';
/////////////////
import ElixirOfBeautyOrigenProdactScreen from './src/screens/ElixirOfBeautyOrigenProdactScreen';

enableScreens();

const Stack = createStackNavigator();

const App = () => {

    ///////// Route
    const Route = ({ isFatch }) => {
        if (isFatch) {
            return (
                <Stack.Navigator>
                    <Stack.Screen
                        initialParams={{
                            //addPartToLinkOnce,
                            //responseToPushPermition, //в вебВью якщо тру то відправити івент push_subscribe
                            //oneSignalId, //додати до фінальної лінки
                            //idfa: idfa,
                            //sab1: sab1,
                            //pid: pid,
                            //uid: appsUid,
                            //customerUserId: customerUserId,
                            //idfv: idfv,
                            //adAtribution: adServicesAtribution,
                        }}
                        name="ElixirOfBeautyOrigenProdactScreen"
                        component={ElixirOfBeautyOrigenProdactScreen}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            );
        }
        return (
            <MusicProvider>
                <MusicPlayer />
                <Stack.Navigator initialRouteName="HomeScreen">
                    <Stack.Screen
                        name="HomeScreen"
                        component={HomeScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="ArticleScreen"
                        component={ArticleScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="AdvicesScreen"
                        component={AdvicesScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="PlanScreen"
                        component={PlanScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="TrackerScreen"
                        component={TrackerScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="TaskScreen"
                        component={TaskScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="GameScreen"
                        component={GameScreen}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
                
            </MusicProvider>
        );
    };

    ///////// Louder
    const [louderIsEnded, setLouderIsEnded] = useState(false);
    const appearingAnim = useRef(new Animated.Value(0)).current;
    const appearingSecondAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(appearingAnim, {
            toValue: 1,
            duration: 3500,
            useNativeDriver: true,
        }).start();
    }, []);

    useEffect(() => {
        setTimeout(() => {
            Animated.timing(appearingSecondAnim, {
                toValue: 1,
                duration: 7500,
                useNativeDriver: true,
            }).start();
            //setLouderIsEnded(true);
        }, 2000);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setLouderIsEnded(true);
        }, 8000);
    }, []);
   
  
    return (
        <NavigationContainer>
        
            {!louderIsEnded ? (
                <View
                    style={{
                        position: 'relative',
                        flex: 1,
                        //backgroundColor: 'rgba(0,0,0)',
                    }}>
                    <Animated.Image
                        source={require('./src/assets/back/loader1.jpg')}
                        style={{
                            //...props.style,
                            opacity: appearingAnim,
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                        }}
                    />
                    <Animated.Image
                        source={require('./src/assets/back/loader2.jpg')}
                        style={{
                            //...props.style,
                            opacity: appearingSecondAnim,
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                        }}
                    />
                </View>
            ) : (
                <Route isFatch={true}/>
            )}
                
        </NavigationContainer>
    );
};

export default App;
