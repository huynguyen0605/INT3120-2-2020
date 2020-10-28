import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Listening from '../screens/listening';

const screens = {
    Listening: {
        screen: Listening,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <ScreenHeader title='Home' navigation={navigation} />
            }
        },
    },
}

const AboutStack = createStackNavigator(screens, {
});

export default AboutStack;