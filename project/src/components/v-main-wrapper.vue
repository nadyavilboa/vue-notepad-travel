<template>
    <div class="v-main-wrapper">
        <div class="v-main-wrapper__header header">
            <v-top-header />
            <div class="v-main-wrapper__filter-block header__part">
                <div class="v-main-wrapper__select">
                    <v-select
                        :options="options"
                        @select="optionSelect"
                        :selected="selected"
                    />
                </div>
                <div class="v-main-wrapper__search">
                    <v-input-search />
                </div>
            </div>
        </div>
        <v-list-notes />
        <v-footer />
    </div>
</template>

<script>
import vTopHeader from './v-top-header.vue';
import vListNotes from './v-list-notes.vue';
import vSelect from './v-select.vue';
import vInputSearch from './v-input-search.vue';
import vFooter from './v-footer.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    name: "v-main-wrapper",
    components: {
        vTopHeader,
        vListNotes,
        vSelect,
        vInputSearch,
        vFooter
    },
    props: {
        
    },
    data() {
        return {
            options: [
                {name: 'Все континеты', value: 'Все континенты'},
                {name: 'Евразия', value: 'Евразия'},
                {name: 'Африка', value: 'Африка'},
                {name: 'Северная Америка', value: 'Северная Америка'},
                {name: 'Южная Америка', value:'Южная Америка'},
                {name: 'Австралия', value: 'Австралия'},
                {name: 'Антарктида', value: 'Антарктида'},
            ],
            selected: 'Все континенты'
        }
    },
    computed: {
        ...mapGetters([
            'NOTES',
        ]),
    },
    methods: {
        ...mapActions([
            'FILTER_NOTES',
        ]),
        optionSelect(option) {
            this.selected = option.name
            this.FILTER_NOTES(option.value)
        }
    },
    mounted() {

    }
}
</script>

<style lang="scss">
    .v-main-wrapper__header {
        position: fixed;
        width: 100%;
    }
</style>