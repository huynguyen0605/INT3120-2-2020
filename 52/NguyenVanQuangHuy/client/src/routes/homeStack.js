import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
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
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <ScreenHeader title='Review Details' noIcon={true} navigation={navigation} />
            }
        },
    },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
});

export default HomeStack;