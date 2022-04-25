import {createStore} from 'vuex'

export default createStore({
    state: {
        auth: false,
        user: null
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user;
            state.auth = user != null;
        }
    },
    actions: {
        setAuthUserAction({commit}, user) {
            commit('SET_USER', user);
        }
    },
    getters: {},
    modules: {}
})
