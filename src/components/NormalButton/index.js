import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const NormalButtonComponent = (props) => {
    const {username, password, action} = props;

    function actionSubmit() {
        action(username, password);
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
        width: '90%',
        height: 50,
        alignSelf: 'center',
        borderRadius: 50,
        backgroundColor: '#5db075',
        marginTop: '30%',
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

export default NormalButtonComponent;