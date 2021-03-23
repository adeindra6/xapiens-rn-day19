import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native';
import {TitleComponent, PlainInputComponent} from '@components';
import {GraphQLProvider} from '@config/apollo';
import TASK from '@config/graphql/Mutation/task';
import {useMutation} from '@apollo/client';

const UpdateTaskScreen = (props) => {
    //console.log({props});
    const {navigation} = props;
    const [id, setId] = useState(null);
    const [task, setTask] = useState(null);
    const [userId, setUserId] = useState(null);
    const [UpdateTask, {data, loading, error}] = useMutation(TASK.update);

    useEffect(() => {
        navigation.openDrawer();
        console.log({data, loading, error});
    }, [data, loading, error]);

    function idHandler(text) {
        console.log(`Update Task id Handler : ${text}`);
        setId(text);
    }

    function taskHandler(text) {
        console.log(`Update Task task Handler : ${text}`);
        setTask(text);
    }

    function userIdHandler(text) {
        console.log(`Update Task user id Handler : ${text}`);
        setUserId(text);
    }

    function updatetask(id, task, userId) {
        UpdateTask({
            variables: {
                id: id,
                task: task,
                userId: userId,
            },
        });
        Alert.alert("Info", "Data berhasil diupdate");
    }

    return(
        <GraphQLProvider>
            <View style={styles.bg}>
                <TitleComponent title="Update Task" />
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
                    onPress={(id, task, userId) => updatetask(id, task, userId)}>
                        <Text style={styles.label}>Update Task</Text>
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

export default UpdateTaskScreen;