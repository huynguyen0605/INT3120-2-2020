import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Reading from '../screens/reading';

const screens = {
    Reading: {
        screen: Reading,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <ScreenHeader title='Reading' navigation={navigation} />
            }
        },
    },
}

const ReadingStack = createStackNavigator(screens, {
});

export default ReadingStack;