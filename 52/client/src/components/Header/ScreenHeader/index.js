import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import { globalStyles } from '../../../styles/global';
import { TouchableOpacity } from 'react-native-gesture-handler';

class screenHeader extends Component {
    openMenu = () => {
        const { navigation } = this.props;
        navigation.openDrawer();
    };
    render() {
        const { title, noIcon } = this.props;
        return (
            <View style={styles.layout}>
                <View style={{ position: 'absolute', zIndex: 2 }}>
                    {
                        !noIcon &&
                        <TouchableOpacity
                            onPress={this.openMenu}
                        >
                            <Image
                                style={{ width: 24, height: 24 }}
                                source={require('../../../assets/images/menu.png')}
                            />
                        </TouchableOpacity>
                    }
                </View>
                <View style={styles.overlay}>
                    <Text style={globalStyles.titleHeader}>{title}</Text>
                </View>
            </View>
        )
    }
};

export default screenHeader;