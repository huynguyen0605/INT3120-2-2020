import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import Quizz from '../screens/quizz';
import ScreenHeader from '../components/Header/ScreenHeader';
const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <ScreenHeader title='Home' navigation={navigation} />
            }
        },
    },
    Quizz: {
        screen: Quizz,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <ScreenHeader title='' noIcon={true} navigation={navigation} />
            }
        },
    },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
});

export default HomeStack;