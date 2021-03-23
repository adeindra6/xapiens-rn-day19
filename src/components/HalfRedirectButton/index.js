import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const HalfRedirectButtonComponent = (props) => {
    const {action} = props;

    function actionSubmit() {
        action();
    }

    return(
        <View>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => actionSubmit()}>
                    <Text style={styles.label}>{props.label}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    btn: {
        width: '40%',
        height: 50,
        alignSelf: 'center',
        borderRadius: 50,
        backgroundColor: '#5db075',
        marginTop: '3%',
    },

    label: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        color: 'white',
    },
});

export default HalfRedirectButtonComponent;