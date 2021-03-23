import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const LogoComponent = () => {
    return(
        <View>
            <Image style={styles.logo} source={require('@images/clipboard.png')} />
        </View>
    );
};

const styles = StyleSheet.create({
    logo: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginTop: '30%',
    },
});

export default LogoComponent;