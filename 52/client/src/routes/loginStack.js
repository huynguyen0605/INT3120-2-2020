import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/login';

import ScreenHeader from '../components/Header/ScreenHeader';


const screens = {
    Login: {
        screen: Login,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <ScreenHeader title='Đăng nhập' navigation={navigation} />
            }
        },
    }
}

const AboutStack = createStackNavigator(screens, {
});

export default AboutStack;