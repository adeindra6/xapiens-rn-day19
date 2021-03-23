import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {TitleComponent, ListComponent, HalfRedirectButtonComponent} from '@components';
import {GraphQLProvider} from '@config/apollo';

const TaskScreen = (props) => {
    //console.log({props});
    const {navigation} = props;

    useEffect(() => {
        navigation.openDrawer();
    }, []);

    function addTask() {
        navigation.navigate('CreateTask');
    }

    return(
        <GraphQLProvider>
            <View style={styles.bg}>
                <TitleComponent title="Todo Apps" />
                <ListComponent />
                <HalfRedirectButtonComponent label="Add Task" action={() => addTask()} />
                <HalfRedirectButtonComponent label="Update Task" />
                <HalfRedirectButtonComponent label="Delete Task" />
            </View>
        </GraphQLProvider>
    );
};

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: 'indigo',
    },
});

export default TaskScreen;