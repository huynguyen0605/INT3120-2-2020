import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react';

import Test from '../components/Test';
import { globalStyles } from '../styles/global';
import testService from '../services/testService';

const styles = StyleSheet.create({
    overViewSide: { flex: 1, justifyContent: 'space-around', fontSize: 16 },
    overViewTitle: { ...globalStyles.title },
    overViewText: { ...globalStyles.text, color: '#18A0FB' }
});



const OverViewTitle = function ({ text }) {
    return (
        <Text style={styles.overViewTitle}>{text}</Text>
    )
};
const OverViewText = function ({ text }) {
    return (
        <Text style={styles.overViewText}>{text}</Text>
    )
};

export default class Home extends Component {
    state = {
        tests: []
    }
    componentDidMount() {
        testService.getRecommendTest().then(data => {
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
                <View style={globalStyles.overview}>
                    <View style={{ ...styles.overViewSide, paddingLeft: 64 }}>
                        <OverViewTitle
                            text='Test Completed'
                        />
                        <OverViewTitle
                            text='Point earned'
                        />
                        <OverViewTitle
                            text='Level'
                        />
                    </View>
                    <View style={styles.overViewSide}>
                        <OverViewText
                            text='100'
                        />
                        <OverViewText
                            text='100'
                        />
                        <OverViewText
                            text='100'
                        />
                    </View>
                </View>
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
    }
}