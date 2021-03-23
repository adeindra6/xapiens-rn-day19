import {gql} from '@apollo/client';

const ADD_TASK = gql`
    mutation($id: Int, $task: String!, $userId: Int!) {
        insert_task_one(object: {id: $id, task: $task, userId: $userId}) {
            id
            task
            userId
        }
    }
`;

const UPDATE_TASK = gql`
    mutation($id: Int, $task: String!, $userId: Int!) {
        update_task(where: {id: {_eq: $id}}, _set: {id: $id, task: $task, userId: $userId}) {
            returning {
                id
                task
                userId
            }
        }
    }
`;

const DELETE_TASK = gql`
    mutation($id: Int) {
        delete_task(where: {id: {_eq: $id}}) {
            returning {
                id
                task
                userId
            }
        }
    }
`;

export default {
    add: ADD_TASK,
    update: UPDATE_TASK,
    delete: DELETE_TASK,
};