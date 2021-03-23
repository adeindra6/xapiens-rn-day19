import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {TitleComponent, PlainInputComponent, NormalButtonComponent} from '@components';
import {AuthConsumer} from '@contexts/auth';

const LoginScreen = (props) => {
    //console.log({props});
    const {navigation} = props;
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const {setLogin} = AuthConsumer();

    useEffect(() => {
        navigation.openDrawer();
    }, []);

    function usernameHandler(text) {
        console.log(`Login Screen Username Handler : ${text}`);
        setUsername(text);
    }

    function passwordHandler(text) {
        console.log(`Login Screen Password Handler : ${text}`);
        setPassword(text);
    }

    function login(fullname, username, password) {
        console.log(`fullname: ${fullname}`);
        console.log(`username: ${username}`);
        console.log(`password: ${password}`);
        setLogin();
        navigation.navigate('Task');
    }

    return(
        <View style={styles.bg}>
            <TitleComponent title="Login" />
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
                label="Login" 
                username={username}
                password={password}
                action={(username, password) => login(username, password) } 
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

export default LoginScreen;