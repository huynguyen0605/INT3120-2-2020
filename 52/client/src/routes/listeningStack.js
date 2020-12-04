import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Listening from '../screens/listening';

import ScreenHeader from '../components/Header/ScreenHeader';
import Quizz from '../screens/quizz';

const screens = {
    Listening: {
        screen: Listening,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <ScreenHeader title='Nghe' navigation={navigation} />
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
}

const AboutStack = createStackNavigator(screens, {
});

export default AboutStack;