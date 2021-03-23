import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native';
import {TitleComponent, PlainInputComponent} from '@components';
import {GraphQLProvider} from '@config/apollo';
import TASK from '@config/graphql/Mutation/task';
import {useMutation} from '@apollo/client';

const CreateTaskScreen = (props) => {
    //console.log({props});
    const {navigation} = props;
    const [id, setId] = useState(null);
    const [task, setTask] = useState(null);
    const [userId, setUserId] = useState(null);
    const [AddTask, {data, loading, error}] = useMutation(TASK.add);

    useEffect(() => {
        navigation.openDrawer();
        console.log({data, loading, error});
    }, [data, loading, error]);

    function idHandler(text) {
        console.log(`Create Task id Handler : ${text}`);
        setId(text);
    }

    function taskHandler(text) {
        console.log(`Create Task task Handler : ${text}`);
        setTask(text);
    }

    function userIdHandler(text) {
        console.log(`Create Task user id Handler : ${text}`);
        setUserId(text);
    }

    function addtask(id, task, userId) {
        console.log(id, task, userId);
        
        try {
            AddTask({
                variables: {
                    id: id,
                    task: task,
                    userId: userId,
                },
            });
            Alert.alert("Info", "Data berhasil ditambahkan");
        }
        catch(error) {
            console.log(error);
            Alert.alert("Info", "Error");
        }
    }

    return(
        <GraphQLProvider>
            <View style={styles.bg}>
                <TitleComponent title="Add Task" />
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
                    onPress={() => addtask(id, task, userId) }> 
                        <Text style={styles.label}>Create Task</Text>
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

export default CreateTaskScreen;