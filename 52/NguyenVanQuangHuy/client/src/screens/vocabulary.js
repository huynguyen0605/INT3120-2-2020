import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';

import Test from '../components/Test';

import dummy from '../const/dummy';

export default class Vocabulary extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={globalStyles.container}>
                <FlatList
                    style={{ flex: 1 }}
                    data={dummy.tests}
                    renderItem={({ item, index }) => (
                        <Test
                            key={index}
                            order={index}
                            title={item.title}
                            completed={item.completed}
                            correct={item.correct}
                            total={item.total}
                            onPress={() => navigation.navigate('Quizz', item)}
                        />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    };
};