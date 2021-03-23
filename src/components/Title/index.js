import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TitleComponent = (props) => {
    return(
        <View>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        marginTop: 5,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
});

export default TitleComponent;