import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';

import Test from '../components/Test';
const styles = StyleSheet.create({
    overViewSide: { flex: 1, justifyContent: 'space-around', fontSize: 16 },
    overViewTitle: { ...globalStyles.title },
    overViewText: { ...globalStyles.text, color: '#18A0FB' }
});

import dummy from '../const/dummy';

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
    }
}