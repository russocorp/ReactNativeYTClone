import React from 'react';
import { Text, View, Animated } from 'react-native';
import Header from '../components/Header';
import { useTheme } from '@react-navigation/native';
export default function PaginaTeste({ navigation }) {
    const { colors } = useTheme();
    const mycolor = colors.iconColor;
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <View
                style={{
                    // marginTop:Constant.statusBarHeight,
                    position: 'absolute',

                    top: 45,
                    left: 0,
                    right: 0,
                    backgroundColor: colors.headerColor,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    //elevation: 4,
                }}
            >
                <Text style={{ color: mycolor }}>Página de teste</Text>
            </View>
        </View>
    );
}
