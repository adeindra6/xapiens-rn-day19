import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const PlainInputComponent = (props) => {
    const {onChangeText, value} = props;

    return(
        <View>
            <TextInput
                value={value}
                placeholder={props.placeholder}
                style={styles.textinput}
                secureTextEntry={props.password}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textinput: {
        marginTop: 20,        
        width: '90%',
        borderRadius: 10,
        borderWidth: 1,
        alignSelf: 'center',
        backgroundColor: 'white',
    },
});

export default PlainInputComponent;