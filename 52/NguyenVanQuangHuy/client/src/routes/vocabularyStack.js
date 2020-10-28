import React from 'react';
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
}

const Vocabulary = createStackNavigator(screens, {
});

export default Vocabulary;