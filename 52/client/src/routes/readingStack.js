import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Reading from '../screens/reading';

import ScreenHeader from '../components/Header/ScreenHeader';
import Quizz from '../screens/quizz';

const screens = {
    Reading: {
        screen: Reading,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <ScreenHeader title='Reading' navigation={navigation} />
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

const ReadingStack = createStackNavigator(screens, {
});

export default ReadingStack;