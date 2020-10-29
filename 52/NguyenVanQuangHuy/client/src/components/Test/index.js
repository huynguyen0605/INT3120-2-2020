import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import ProgressBar from '../ProgressBar';

import styles from './styles';

let colors = ['#18A0FB', '#70FA84', '#EDE674', '#ED7499', '#79C7E0', '#63E6A0', '#FF6E64'];
class Test extends Component {
    render() {
        const { title, onPress, completed, correct, total, order } = this.props;
        const completedPercent = completed / total,
            correctPercent = correct / total;
        const number = order % colors.length,
            backgroundColor = colors[number];
        return (
            <TouchableOpacity style={styles.layout} onPress={onPress}>
                <View style={{ ...styles.header, backgroundColor: backgroundColor }}>
                    <Text style={styles.headerText}>{title}</Text>
                </View>
                <View style={styles.resultContainer}>
                    <View style={{ ...styles.resultItem }} >
                        <ProgressBar
                            title='Completed'
                            percent={completedPercent}
                            backgroundColor={backgroundColor}
                        />
                    </View>
                    <View style={{ ...styles.resultItem }} >
                        <ProgressBar
                            title='Correct'
                            percent={correctPercent}
                            backgroundColor={backgroundColor}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
};

export default Test;