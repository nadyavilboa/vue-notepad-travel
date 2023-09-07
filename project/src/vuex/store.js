import axios from 'axios';
import { createStore } from 'vuex'

const store = createStore({
    state: {
        // переменные, объекты, массивы, коллекции и т.д.
        notes: [],
        filterNotes: [],
        historyNotes: [],
    },
    mutations: {
        // для изменения состояний в state, образуют очередь, нельзя одновременно выполнить две мутации
        SET_NOTES_TO_STATE: (state, notes) => {
            state.notes = notes;
            state.filterNotes = state.notes.slice();
            state.historyNotes = state. notes.slice();
        },
        FILTER_NOTES: (state, option) => {
            switch(option) {
                case 'Все континенты': 
                    state.filterNotes = state.notes.slice();
                    state.historyNotes = state.filterNotes.slice();
                    break;
                default:
                    state.filterNotes = state.notes.filter((item) => item.continent === option);
                    state.historyNotes = state.filterNotes.slice();
                    break;
            }
        },
        SEARCH_VALUE: (state, searchVal) => {
            state.filterNotes = state.historyNotes.slice();
            if (searchVal) {
                const result = state.filterNotes.filter(obj => {
                    for (let key in obj) {
                        if (obj[key].toString().includes(searchVal)) {
                        return true;
                        }
                    }
                    return false;
                    }
                );
    
                state.filterNotes = result;
            }
        }
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
        FILTER_NOTES({commit}, option) {
            commit('FILTER_NOTES', option)
        },
        SEARCH_VALUE({commit}, searchVal) {
            commit('SEARCH_VALUE', searchVal)
        },
    },
    getters: {
        // получение данных из state
        NOTES(state) {
            return state.notes;
        },
        FILTER(state) {
            return state.filterNotes
        },
    },
});

export default store;