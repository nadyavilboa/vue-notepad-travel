<template>
    <div class="v-list-notes">
        <div v-if="!NOTES.length" class="v-list-notes__title title">There are no notes...</div>
        <div v-else class="v-list-notes__list">
            <v-item-note
                v-for="note in FILTER"
                :key="note.id"
                :note_data="note"
            />
        </div>
    </div>
</template>

<script>
import vItemNote from './v-item-note.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    name: "v-list-notes",
    components: {
        vItemNote
    },
    props: {
        
    },
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters([
            'NOTES',
            'FILTER'
        ]),
    },
    methods: {
        ...mapActions([
            'GET_NOTES_FROM_API',
        ]),
    },
    mounted() {
        this.GET_NOTES_FROM_API()
        .then((response) => {
            if (response.data) {
                console.log('Data arrived!');
            }
        })
    }
}
</script>

<style scoped lang="scss">
    .v-list-notes {
        padding-top: 280px;

        &__title {
            text-align: center;
        }

        &__list {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 50px;
        }

        @media (min-width: 768px) {
            padding-top: 160px;
        }
    }
</style>