import React from 'react';
import { enableScreens } from 'react-native-screens';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
    useTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import Home from './src/screens/Home';
import Explore from './src/screens/Explore';
import Suscribe from './src/screens/Suscribe';
import { themeReducer } from './src/reducers/themeReducer';
import { Provider, useSelector } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import PaginaTeste from './src/screens/PaginaTeste';

const customDarkTheme = {
    ...DarkTheme,
    flex: 1,
    colors: {
        ...DarkTheme.colors,
        headerColor: '#404040',
        iconColor: 'white',
        tabIcon: 'white',
    },
};

const customDefaultTheme = {
    ...DefaultTheme,
    flex: 1,
    colors: {
        ...DefaultTheme.colors,
        headerColor: 'white',
        iconColor: 'black',
        tabIcon: 'red',
    },
};

const rooReducer = combineReducers({
    myDarMode: themeReducer, //false
});
const store = createStore(rooReducer);
enableScreens(true);
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const isLogedIn = false;

const RootHome = () => {
    const { colors } = useTheme();
    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => {
                    let iconName;

                    if (route.name === 'home') {
                        iconName = 'home';
                    } else if (route.name === 'explore') {
                        iconName = 'explore';
                    } else if (route.name === 'suscribe') {
                        iconName = 'subscriptions';
                    } else if (route.name === 'paginateste') {
                        iconName = 'add';
                    }

                    // You can return any component that you like here!
                    return (
                        <MaterialIcons
                            name={iconName}
                            size={32}
                            color={color}
                        />
                    );
                },
            })}
            tabBarOptions={{
                activeTintColor: colors.tabIcon,
                inactiveTintColor: 'gray',
            }}
        >
            {isLogedIn ? (
                <>
                    <Tabs.Screen name="home" component={Home} />
                    <Tabs.Screen name="explore" component={Explore} />
                    <Tabs.Screen name="suscribe" component={Suscribe} />
                    <Tabs.Screen name="paginateste" component={PaginaTeste} />
                </>
            ) : (
                <Tabs.Screen name="paginateste" component={PaginaTeste} />
            )}
        </Tabs.Navigator>
    );
};

export default App = () => {
    return (
        <Provider store={store}>
            <Navigation />
        </Provider>
    );
};

export function Navigation() {
    let currentTheme = useSelector((state) => {
        return state.myDarMode;
    });
    return (
        <NavigationContainer
            theme={currentTheme ? customDarkTheme : customDefaultTheme}
        >
            <StatusBar />
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="rootHome" component={RootHome} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
