// sync
export const ADD_ERROR = 'ADD_ERROR'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

export default {
    state:{
        errors:[]
    },
    mutations:{
        [ADD_ERROR] (state, payload) {
            state.errors.push(payload);
        },
        [CLEAR_ERRORS] (state, payload) {
            state.errors = [];
        }
    },
    actions:{
    },
    getters:{

    }
}