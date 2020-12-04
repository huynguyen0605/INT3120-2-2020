import React from 'react';
import Result from '../screens/result';
import ScreenHeader from '../components/Header/ScreenHeader';
import { createStackNavigator } from 'react-navigation-stack';
import vocabulary from '../screens/vocabulary';

const screens = {
    Vocabulary: {
        screen: vocabulary,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <ScreenHeader title='Vocabulary' navigation={navigation} />
            }
        },
    },
    Result: {
        screen: Result,
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