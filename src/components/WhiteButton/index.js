import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const WhiteButtonComponent = (props) => {
    const {action} = props;

    function actionSubmit() {
        action();
    }

    return(
        <>
            <TouchableOpacity
                style={props.style}
                onPress={() => actionSubmit()}>
                    <Text style={styles.label}>{props.label}</Text>
            </TouchableOpacity>                
        </>
    );
};

const styles = StyleSheet.create({
    label: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',        
    },
});

export default WhiteButtonComponent;