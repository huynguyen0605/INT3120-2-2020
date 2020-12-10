import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
class ProgressBar extends Component {
    render() {
        const { percent, title, backgroundColor } = this.props;
        return (
            <View
                style={styles.layout}
            >
                <View style={styles.titleContainer}>
                    <Text style={{ textAlignVertical: 'center',color:'white' }}>
                        {title}
                    </Text>
                </View>
                <View style={{ height: '100%', width: percent * 100, backgroundColor: backgroundColor }}></View>
                <View style={{ flex: 1, backgroundColor: '#C4C4C4' }}></View>
            </View>
        )
    };
};

export default ProgressBar;