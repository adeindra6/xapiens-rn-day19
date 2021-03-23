import React from 'react';
import {FlatList, TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {useQuery} from '@apollo/client';
import {QUERY_USERTASK} from '@config/graphql/Query/usertask';

const ListComponent = (props) => {
    const {loading, data, error} = useQuery(QUERY_USERTASK);
    console.log(`Data List Component: ${data}`);
    console.log(`Error List Component: ${error}`);

    return(
        <View>
            {loading && <Text>Sedang mengambil data...</Text>}
            {!loading && Object.keys(data).length > 0 && (
                <FlatList
                    data={data.user}
                    renderItem={({item}) => {
                        return(
                            <TouchableOpacity
                                style={styles.btn}>
                                <Text style={styles.label}>{item.usertask.task}: {item.name}</Text>
                            </TouchableOpacity>
                        );
                    }}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center'
    },

    label: {
        color: 'blue',
        textAlign: 'center',
        fontSize: 16,
    },
});

export default ListComponent;