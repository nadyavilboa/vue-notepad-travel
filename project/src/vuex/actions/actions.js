import axios from 'axios';

export default {
    async GET_NOTES_FROM_API({commit}) {
        try {
            const response = await axios.get('http://notepad/get_data.php');
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
    },
    ADD_DATA_IN_STORE({commit}, dataObject) {
        commit('ADD_DATA_IN_STORE', dataObject)
    },
    ADD_FILE_IN_STORE({commit}, fileObject) {
        commit('ADD_FILE_IN_STORE', fileObject)
    },
    CLEAR_FORM_DATA({commit}) {
        commit('CLEAR_FORM_DATA')
    }
}