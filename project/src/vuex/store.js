import axios from 'axios';
import { createStore } from 'vuex'

const store = createStore({
    state: {
        // переменные, объекты, массивы, коллекции и т.д.
        notes: [],
    },
    mutations: {
        // для изменения состояний в state, образуют очередь, нельзя одновременно выполнить две мутации
        SET_NOTES_TO_STATE: (state, notes) => {
            state.notes = notes;
        },
    },
    actions: {
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
    },
    getters: {
        // получение данных из state
        NOTES(state) {
            return state.notes;
        },
    },
});

export default store;