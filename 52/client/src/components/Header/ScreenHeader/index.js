import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import Login from '../../../routes/loginStack';
import { globalStyles } from '../../../styles/global';

class screenHeader extends Component {
    openMenu = () => {
        const { navigation } = this.props;
        navigation.openDrawer();
    };
    openLogin = () => {
        const { navigation } = this.props;
        navigation.navigate('Login');
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
            
                <TouchableOpacity onPress={ this.openLogin }
                >
                    <Image
                        style={{ width: 24, height: 24}}
                        source={require('../../../assets/images/login.png')}
                    />
                </TouchableOpacity>
            </View>
        )
    }
};

export default screenHeader;