import AsyncStorage from '@react-native-community/async-storage';

let initialState = false;
AsyncStorage.getItem('tema').then((res) => {
    initialState = res[0] === 'D' ? true : false;
});

export const themeReducer = (state = initialState, action) => {
    if (action.type == 'change_theme') {
        AsyncStorage.setItem('tema', action.payload === true ? 'D' : 'L');
        return action.payload;
    }
    return state;
};
