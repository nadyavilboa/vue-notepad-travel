import { v4 as uuidv4 } from 'uuid';

export default {
    SET_NOTES_TO_STATE: (state, notes) => {
        state.notes = notes;

        state.notes.forEach(note => {
            note.id = uuidv4();
        });

        state.filterNotes = state.notes.slice();
        state.historyNotes = state. notes.slice();
    },
    FILTER_NOTES: (state, option) => {
        state.searchVal = '';
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
    SEARCH_CHANGE: (state, value) => {
        state.searchVal = value;
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
    },
    DELETE_NOTE: (state, id) => {
        // обновление store после удаления
        // ищем индекс нужного элемента и вырезаем из массива, обновляем копии массива
        
        const indexDeleteNote = state.notes.filter((item) => item.id === id);
        state.notes.splice(indexDeleteNote, 1);
        state.filterNotes = state.notes.slice();
        state.historyNotes = state. notes.slice();
    },
    ADD_DATA_IN_STORE: (state, dataObject) => {
        state.newData =  dataObject;
    },
    ADD_FILE_IN_STORE: (state, fileObject) => {
        state.newFiles.push(fileObject);
    },
    CLEAR_FORM_DATA: (state) => {
        state.newData = {};
        state.newFiles = [];
    }
}