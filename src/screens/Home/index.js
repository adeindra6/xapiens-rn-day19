import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {TitleComponent, LogoComponent, WhiteButtonComponent} from '@components';

const HomeScreen = (props) => {
    //console.log({props});
    const {navigation} = props;

    useEffect(() => {
        navigation.openDrawer();
    }, []);

    return(
        <View style={styles.bg}>
            <TitleComponent title="Task List App" />
            <LogoComponent />
            <View style={styles.btngroup}>
                <WhiteButtonComponent label="Login" style={styles.btnlogin} action={() => navigation.navigate('Login')} />
                <WhiteButtonComponent label="Register" style={styles.btnregister} action={() => navigation.navigate('Register')} />
            </View>            
        </View>
    );
};

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: 'indigo',
    },

    btngroup: {
        borderWidth: 0,
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    btnlogin: {
        marginTop: '70%',
    },

    btnregister: {
        marginLeft: '20%',
        marginTop: '70%',
    },
});

export default HomeScreen;