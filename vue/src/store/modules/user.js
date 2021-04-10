import api from '@/api/api'
import router from '../../router';

export default {
    namespaced: true,
    state: {
        user: null
    },

    mutations: {
        SET_USER(state, user) {
            state.user = user;
        },
        REMOVE_USER_DATA(state) {
            state.user = null;
        }
    },

    actions: {
        async login({commit}, user) {
            await api.csrf();
            const login = await api.login(user);
            window.sessionStorage.setItem('token', login.data.data.token);
            const profile = await api.profile();
            commit('SET_USER', profile.data);
            let current = window.location.hash;
            current = current.substring(1);
            if(current == '/login') {
                window.location.reload();
            }
            router.push(current);
        },
        async profile({commit}) {
            const profile = await api.profile();
            commit('SET_USER', profile.data);
        },
        async logout({commit}) {
            const logout = await api.logout();
            await window.sessionStorage.removeItem('token');
            commit('REMOVE_USER_DATA');
            router.push('/login');
        }
    },

}