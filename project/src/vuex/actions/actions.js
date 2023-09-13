import axios from 'axios';

export default {
    async GET_NOTES_FROM_API({commit}) {
        try {
            const response = await axios.get('http://localhost:3000/notes');
            commit('SET_NOTES_TO_STATE', response.data);
            return response;
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    FILTER_NOTES({commit}, option) {
        commit('FILTER_NOTES', option)
    },
    SEARCH_CHANGE({commit}, value) {
        commit('SEARCH_CHANGE', value)
    },
    SEARCH_VALUE({commit}, searchVal) {
        commit('SEARCH_VALUE', searchVal)
    },
    async DELETE_NOTE({commit}, id) {
        try {
            const response = await axios.delete(`http://localhost:3000/notes/${id}`);
            commit('DELETE_NOTE', id);
            return response;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
}