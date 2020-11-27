import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';

import Test from '../components/Test';
import testService from '../services/testService';

export default class Listening extends Component {
    state = {
        tests: []
    };
    componentDidMount() {
        testService.getTest('listening').then(data => {
            this.setState({
                tests: data
            });
        }).catch(error => {
            console.log('huynvq::===========>error', error);
        });
    };
    render() {
        const { navigation } = this.props;
        return (
            <View style={globalStyles.container}>
                <FlatList
                    style={{ flex: 1 }}
                    data={this.state.tests}
                    renderItem={({ item, index }) => (
                        <Test
                            key={index}
                            order={index}
                            title={item.title}
                            completed={10}
                            correct={4}
                            total={10}
                            onPress={() => navigation.navigate('Quizz', item)}
                        />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    };
};