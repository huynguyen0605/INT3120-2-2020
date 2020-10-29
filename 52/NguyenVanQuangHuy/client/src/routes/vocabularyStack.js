import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import vocabulary from '../screens/vocabulary';

import ScreenHeader from '../components/Header/ScreenHeader';
import Quizz from '../screens/quizz';

const screens = {
    Vocabulary: {
        screen: vocabulary,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <ScreenHeader title='Vocabulary' navigation={navigation} />
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

const Vocabulary = createStackNavigator(screens, {
});

export default Vocabulary;