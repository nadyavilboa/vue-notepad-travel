export default {
    SET_NOTES_TO_STATE: (state, notes) => {
        state.notes = notes;
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
    }
}