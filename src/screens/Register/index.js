import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {TitleComponent, PlainInputComponent, NormalButtonComponent} from '@components';
import {AuthConsumer} from '@contexts/auth';

const RegisterScreen = (props) => {
    //console.log({props});
    const {navigation} = props;
    const [fullname, setFullname] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const {setLogin} = AuthConsumer();

    useEffect(() => {
        navigation.openDrawer();
    }, []);

    function fullnameHandler(text) {
        console.log(`Register Screen Fullname Hanlder : ${text}`);
        setFullname(text);
    }

    function usernameHandler(text) {
        console.log(`Register Screen Username Handler : ${text}`);
        setUsername(text);
    }

    function passwordHandler(text) {
        console.log(`Register Screen Password Handler : ${text}`);
        setPassword(text);
    }

    function register(username, password) {
        console.log(`username: ${username}`);
        console.log(`password: ${password}`);
        setLogin();
        navigation.navigate('Task');
    }

    return(
        <View style={styles.bg}>
            <TitleComponent title="Register" />
            <PlainInputComponent
                value={fullname}
                placeholder="Fullname"
                password={false}
                onChangeText={(text) => {
                    fullnameHandler(text);
                }}
            />
            <PlainInputComponent
                value={username}
                placeholder="Username"
                password={false}
                onChangeText={(text) => {
                    usernameHandler(text);
                }}
            />
            <PlainInputComponent
                value={password}
                placeholder="Password"
                password={true}
                onChangeText={(text) => {
                    passwordHandler(text);
                }}
            />
            <NormalButtonComponent
                label="Register"
                username={username}
                password={password}
                action={(username, password) => register(username, password)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: 'indigo',
    },
});

export default RegisterScreen;