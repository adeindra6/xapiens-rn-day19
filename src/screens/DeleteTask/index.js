import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Alert} from 'react-native';
import {TitleComponent, PlainInputComponent} from '@components';
import {GraphQLProvider} from '@config/apollo';
import TASK from '@config/graphql/Mutation/task';
import {useMutation} from '@apollo/client';

const DeleteTaskScreen = (props) => {
    //console.log({props});
    const {navigation} = props;
    const [id, setId] = useState(null);
    const [task, setTask] = useState(null);
    const [userId, setUserId] = useState(null);
    const [DeleteTask, {data, loading, error}] = useMutation(TASK.delete);

    useEffect(() => {
        navigation.openDrawer();
        console.log({data, loading, error});
    }, [data, loading, error]);

    function idHandler(text) {
        console.log(`Delete Task id Handler : ${text}`);
        setId(text);
    }

    function taskHandler(text) {
        console.log(`Delete Task task Handler : ${text}`);
        setTask(text);
    }

    function userIdHandler(text) {
        console.log(`Delete Task user id Handler : ${text}`);
        setUserId(text);
    }

    function deletetask(id) {
        DeleteTask({
            variables: {
                id: id,
            },
        });
        Alert.alert("Info", "Data berhasil dihapus");
    }

    return(
        <GraphQLProvider>
            <View style={styles.bg}>
                <TitleComponent title="Delete Task" />
                <PlainInputComponent
                    value={id}
                    placeholder="ID"
                    password={false}
                    onChangeText={(text) => {
                        idHandler(text);
                    }}
                />
                <PlainInputComponent
                    value={task}
                    placeholder="Task"
                    password={false}
                    onChangeText={(text) => {
                        taskHandler(text);
                    }}
                />
                <PlainInputComponent
                    value={userId}
                    placeholder="User ID"
                    password={false}
                    onChangeText={(text) => {
                        userIdHandler(text);
                    }}
                />
                <TouchableOpacity
                    style={styles.btn}
                    onPress={(id) => deletetask(id)}>
                        <Text style={styles.label}>Delete Task</Text>
                </TouchableOpacity>
            </View>
        </GraphQLProvider>
    );
};

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: 'indigo',
    },

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

export default DeleteTaskScreen;